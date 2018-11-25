import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesEditaComponent } from './questoes-edita.component';

describe('QuestoesEditaComponent', () => {
  let component: QuestoesEditaComponent;
  let fixture: ComponentFixture<QuestoesEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
