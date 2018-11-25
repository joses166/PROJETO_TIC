import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  _alternativas : any
  questao : any

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.pesquisaQuestao();
  }

  pesquisaQuestao() {
    this.http.get('http://localhost:3000/question/')
      .subscribe(dados => {
        this.questao = dados;
    })
  }

  redirecionaQuestao(id){
    this.router.navigate(['/questoes-edita', id]);
  }


  removeQuestao(id){
    this.http.delete('http://localhost:3000/question/'+id)
      .subscribe(resposta => {
        this.ngOnInit();
        console.log("Remoção com sucesso");
    })

    this._alternativas.forEach(function (value) {
        this.http.delete('http://localhost:3000/alternativas/'+idquestao)
        .subscribe(resposta => {
          this.ngOnInit();
          console.log("Remoção com sucesso");
        })
    });
  }

}
