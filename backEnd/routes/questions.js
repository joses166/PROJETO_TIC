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
        var sql = 'SELECT * FROM questoes order by id_questoes';
        conexao.query(sql, function(erro, resultado){
        feito(); 
        if (erro){
            return console.error('Erro na consulta da tabela', erro);
        }
        res.json(resultado.rows); 
        });
    });
})

router.get('/:id', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
    if (erro){ 
        return console.error('erro ao conectar no banco', erro);
    }
    var sql = 'select * from questoes where id_questoes = ' + req.params.id;
    console.log(sql);
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
    var sql = 'INSERT INTO questoes(enunciado, curso, data_cadastramento, num_nivel) VALUES (\'' + req.body._enunciado + '\', \'' + req.body._curso + '\', NOW(), ' + req.body._nivel + ')';
    
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
        var sql = "UPDATE questoes" +
        " SET enunciado = '" + req.body._enunciado + "', curso = '" + req.body._curso + "', num_nivel = " + req.body._num_nivel +
        " WHERE id_questoes = " + req.body._id_questoes;
    
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
    var sql = 'delete from questoes where id_questoes = ' + req.params._id_questoes;
    console.log(sql);
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