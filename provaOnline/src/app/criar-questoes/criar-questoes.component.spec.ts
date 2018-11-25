import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarQuestoesComponent } from './criar-questoes.component';

describe('CriarQuestoesComponent', () => {
  let component: CriarQuestoesComponent;
  let fixture: ComponentFixture<CriarQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
