import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  dadosUsuario: {};

  public mostrarMenuEmitter = new EventEmitter<boolean>();
  public mostrarMensagemErroLoginEmitter = new EventEmitter<boolean>();
  public liberaItensMenuEmitter = new EventEmitter<boolean>();
  public mensagemRodepaEmitter = new EventEmitter<String>();

  constructor(private router: Router,
    private http: HttpClient) { }

  fazerLogin(usuario: Usuario) {

    //VERIFICACAO CASO PESSOA OPTE POR LOGIN COMO ALUNO
    if ( usuario.identificador === '1' && usuario.nome !== undefined && usuario.senha !== undefined ) {
      this.http.get('http://dev2.unifacef.com.br:8000/api/matriculadoGrad/' + usuario.nome).subscribe(dados => {
        this.dadosUsuario = dados;
      });
      //verifica se o usuario existe
      if ( Object.keys(this.dadosUsuario).length !== 0 ) {
        //criptografa senha inserida para verificar se é a mesmo da api
        if (Md5.hashStr(usuario.senha) === this.dadosUsuario[0]['hash_senha']) {
          this.liberaItensMenuEmitter.emit(false);
          this.redirecionandoPagina( usuario.identificador );
        } else {
          this.erroLogin();
        }
      } else {
        this.erroLogin();
      }
    //VERIFICACAO CASO PESSOA OPTE POR LOGIN COMO PROFESSOR
    } else if ( usuario.identificador === '2' && usuario.nome !== undefined && usuario.senha !== undefined ) {
      if ( usuario.nome === 'teste' && usuario.senha === '123456' ) {
        this.liberaItensMenuEmitter.emit(true);
        this.redirecionandoPagina( usuario.identificador );
      } else {
        this.erroLogin();
      }
    //ERRO NO LOGIN
    } else {
      this.erroLogin();
    }
  }

 redirecionandoPagina( id ) {
  this.usuarioAutenticado = true;
  this.mostrarMenuEmitter.emit(true);
  this.router.navigate(['/']);
  this.mostrarMensagemErroLoginEmitter.emit(true);
  if ( id === '1' ) {
    this.mensagemRodepaEmitter.emit('Você acessou como ' + this.dadosUsuario[0]['nome_completo_aluno']);
  } else if ( id === '2' ) {
    this.mensagemRodepaEmitter.emit('Você acessou como Administrador');
  }

 }

 erroLogin() {
  this.usuarioAutenticado = false;
  this.mostrarMenuEmitter.emit(false);
  this.mostrarMensagemErroLoginEmitter.emit(true);
  this.mensagemRodepaEmitter.emit('Você ainda não se identificou.');
 }

 usuarioEstaAutenticado() {
  return this.usuarioAutenticado;
 }

 retornaDadosUsuario() {
  return this.dadosUsuario;
 }
}
