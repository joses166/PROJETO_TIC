import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nivel-questao-edita',
  templateUrl: './nivel-questao-edita.component.html',
  styleUrls: ['./nivel-questao-edita.component.css']
})
export class NivelQuestaoEditaComponent implements OnInit {

  nivelQuestao = {};
  id = 0;

  constructor(private rote: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getNivelQuestao();
  }

  getNivelQuestao() {
    this.id = this.rote.snapshot.params['id'];
        this.http.get('http://localhost:3000/nivel/'+this.id)
          .subscribe(dados => {
            this.nivelQuestao = dados;
          })
    }

    atualizaNivelQuestao(){
      this.http.put('http://localhost:3000/nivel/'+ this.id, this.nivelQuestao)  .subscribe(resposta => {
        this.router.navigate(['/nivel-questao-edita']);
      }, (erro) => {
      console.log(erro);
      })
    }


}
