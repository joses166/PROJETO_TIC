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

router.get('/:id', function (req, res, next) {
    canal.connect(function(erro, conexao, feito){
    if (erro){ 
        return console.error('erro ao conectar no banco', erro);
    }
    var sql = 'SELECT * FROM alternativas WHERE id_questao = ' + req.params.id;  
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
    var sql = 'INSERT INTO alternativas(id_questao, ds_alternativa, alternativa_resposta) VALUES (' + req.body._id_questao + ', \'' + req.body._ds_alternativa + '\', \'' + req.body._alternativa_resposta + '\')';
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
        var sql = "UPDATE alternativas" +
        " SET ds_alternativa = " + req.body._ds_alternativa +
        " WHERE id_alternativa = " + req.body._id_alternativa + " AND id_questao = " + req.body._id_questao;
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
    var sql = 'DELETE FROM alternativas WHERE id_questao = ' + req.params._id_questao;
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