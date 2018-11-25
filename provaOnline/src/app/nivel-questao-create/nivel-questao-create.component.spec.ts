import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelQuestaoCreateComponent } from './nivel-questao-create.component';

describe('NivelQuestaoCreateComponent', () => {
  let component: NivelQuestaoCreateComponent;
  let fixture: ComponentFixture<NivelQuestaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelQuestaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelQuestaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
