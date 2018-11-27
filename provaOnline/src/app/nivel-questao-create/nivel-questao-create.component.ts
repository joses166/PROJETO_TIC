import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel-questao-create',
  templateUrl: './nivel-questao-create.component.html',
  styleUrls: ['./nivel-questao-create.component.css']
})
export class NivelQuestaoCreateComponent implements OnInit {

  nivelQuestao = {};

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  insereNivelQuestao(){
    this.http.post('http://localhost:3000/nivel', this.nivelQuestao).subscribe(resposta => {
          this.router.navigate(['/nivel-questao-create']);
    }, (erro) => {
      console.log(erro);
    });
  }

}
