import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questoes-create',
  templateUrl: './questoes-create.component.html',
  styleUrls: ['./questoes-create.component.css']
})
export class QuestoesCreateComponent implements OnInit {

  questao = {};
  _alternativas = [];

  constructor(private http:HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  insereQuestao(){
    this.http.post('http://localhost:3000/questions', this.questao)
      .subscribe(resposta => {
          this.router.navigate(['/questao-create']);
      }, (erro) => {
        console.log(erro);
    });

    this._alternativas.forEach(function (value) {
        this.http.post('http://localhost:3000/alternativas', this.questao)
        .subscribe(resposta => {
            this.router.navigate(['/alternativa-create']);
        }, (erro) => {
            console.log(erro);
        });
    });

  }

}
