import { AuthGuard } from './guards/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthService } from './login/auth.service';
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { HomeComponent } from './home/home.component';
import { NivelQuestaoComponent } from './nivel-questao/nivel-questao.component';
import { NivelQuestaoCreateComponent } from './nivel-questao-create/nivel-questao-create.component';
import { NivelQuestaoEditaComponent } from './nivel-questao-edita/nivel-questao-edita.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { QuestoesCreateComponent } from './questoes-create/questoes-create.component';
import { QuestoesEditaComponent } from './questoes-edita/questoes-edita.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HeaderComponent,
      FooterComponent,
      RecuperaSenhaComponent,
      HomeComponent,
      NivelQuestaoComponent,
      NivelQuestaoCreateComponent,
      NivelQuestaoEditaComponent,
      QuestoesComponent,
      QuestoesCreateComponent,
      QuestoesEditaComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES)
   ],
   providers: [
      AuthService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
