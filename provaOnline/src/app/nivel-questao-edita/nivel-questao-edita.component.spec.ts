import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelQuestaoEditaComponent } from './nivel-questao-edita.component';

describe('NivelQuestaoEditaComponent', () => {
  let component: NivelQuestaoEditaComponent;
  let fixture: ComponentFixture<NivelQuestaoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelQuestaoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelQuestaoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
