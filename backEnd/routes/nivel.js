var express = require('express');
var router = express.Router();

var pg = require('pg');

var config = {
	user: "postgres",
	database: "GENERATE_QUIZ",
	password: "postgres",
	port: 5432,
	max: 10,
	idleTimeoutMills: 30000,
}

var canal = new pg.Pool(config);

router.get('/', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
        if (erro){
            return console.error('erro ao conectar no banco', erro);
        }
        var sql = 'select * from tb_Nivel_Questao order by Num_Nivel';
        conexao.query(sql, function(erro, resultado){
            feito();
            if (erro){
                return console.error('Erro na consulta da tabela', erro);
            }
            res.json(resultado.rows);
        });
    });
})

router.get('/:_num_nivel, function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
    if (erro){
        return console.error('erro ao conectar no banco', erro);
    }
    var sql = 'select * from tb_Nivel_Questao where Num_Nivel = ' + req.params._num_nivel;
    conexao.query(sql, function(erro, resultado){
        feito();
        if (erro){
        return console.error('Erro na consulta da tabela', erro);
        }
        res.json(resultado.rows[0]);
    });
    });
})


router.post('/', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
    if (erro){
        return console.error('erro ao conectar no banco', erro);
    }
    var sql = 'insert into tb_Nivel_Questao (Nivel) values (\'' + req.body._nivel + '\')';

    conexao.query(sql, function(erro, resultado){
        feito();
        if (erro){
        return console.error('Erro na inserção dos dados', erro);
        }
        res.json(resultado.rows);
    });
    });
})

router.put('/:id', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
        if (erro){
            return console.error('erro ao conectar no banco', erro);
        }
        var sql = "update tb_Nivel_Questao set Nivel = '" + req.body._nivel + 
                "' where Num_Nivel = " + req.body._num_Nivel;
     
        conexao.query(sql, function(erro, resultado){
            feito();
            if (erro){
                return console.error('Erro na atualização dos dados', erro);
            }
            res.json(resultado.rows);
        });
    });
})


router.delete('/:id', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
        if (erro){
            return console.error('erro ao conectar no banco', erro);
        }
    var sql = 'delete from tb_Nivel_Questao where Num_Nivel = ' + req.params._num_nivel;
        conexao.query(sql, function(erro, resultado){
            feito();
            if (erro){
                return console.error('Erro na remoção dos dados', erro);
            }
            res.json(resultado.rows);
        });
    });
})

module.exports = router;