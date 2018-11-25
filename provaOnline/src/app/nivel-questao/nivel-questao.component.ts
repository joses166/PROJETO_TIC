import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel-questao',
  templateUrl: './nivel-questao.component.html',
  styleUrls: ['./nivel-questao.component.css']
})
export class NivelQuestaoComponent implements OnInit {

  nivelQuestao : any

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getAllNivelQuestao();
  }

  getAllNivelQuestao() {
    this.http.get('http://localhost:3000/nivel).subscribe(dados => {
    this.nivelQuestao = dados;
    })
  }
  removeNivelQuestao(id){
    this.http.delete('http://localhost:3000/nivel/'+id)
      .subscribe(resposta => {
        this.ngOnInit();
      })
  }

  redirecionaAtualizar(id){
    this.router.navigate(['/nivel-questao-edita', id]);
  }

}
