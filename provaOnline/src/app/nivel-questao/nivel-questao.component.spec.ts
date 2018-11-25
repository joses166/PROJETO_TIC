import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelQuestaoComponent } from './nivel-questao.component';

describe('NivelQuestaoComponent', () => {
  let component: NivelQuestaoComponent;
  let fixture: ComponentFixture<NivelQuestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelQuestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelQuestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
