import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-criar-questoes',
  templateUrl: './criar-questoes.component.html',
  styleUrls: ['./criar-questoes.component.css']
})
export class CriarQuestoesComponent implements OnInit {

  questao = {}
  
  constructor(private http:HttpClient,
    private route: Router) { }

  ngOnInit() {
  }

  insereQuestao(){
    /*
    this.http.post('http://localhost:3000/student', this.questao)
      .subscribe(resposta => {
          this.route.navigate(['/questao']);
          console.log("Inserido com sucesso");
      }, (erro) => {
        console.log(erro);
      });*/
      console.log(this.questao);
  }

}
