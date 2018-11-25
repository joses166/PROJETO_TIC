import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mensagemRodape = 'Você ainda não se identificou';

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.mensagemRodepaEmitter.subscribe(
      mostrar => this.mensagemRodape = mostrar
    );
    console.log(this.mensagemRodape);
  }
}
