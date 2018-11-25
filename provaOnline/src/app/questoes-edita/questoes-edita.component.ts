import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questoes-edita',
  templateUrl: './questoes-edita.component.html',
  styleUrls: ['./questoes-edita.component.css']
})
export class QuestoesEditaComponent implements OnInit {

  _alternativas : any
  questao : any

  constructor(private rote: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.pesquisaQuestao();
  }

  pesquisaQuestao() {
    this.id = this.rote.snapshot.params['id'];
    this.http.get('http://localhost:3000/question/'+this.id)
      .subscribe(dados => {
        this.questao = dados;
    })

    this._alternativas.forEach(function (value) {
        this.id = this.rote.snapshot.params['id'];
        this.http.get('http://localhost:3000/alternativas/'+this.id)
        .subscribe(dados => {
            this.alternativa = dados;
        })
    });
  }

  editaQuestao(){
    this.http.put('http://localhost:3000/question/'+ this.id, this.questao)
      .subscribe(resposta => {
          this.router.navigate(['/questao-edita']);
      }, (erro) => {
        console.log(erro);
    })

    this._alternativas.forEach(function (value) {
        this.http.put('http://localhost:3000/alternativas/'+ this.id, this.alternativa)
        .subscribe(resposta => {
            this.router.navigate(['/alternativa-edita']);
        }, (erro) => {
            console.log(erro);
        })
    });
  }



}
