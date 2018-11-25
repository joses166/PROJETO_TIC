import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesCreateComponent } from './questoes-create.component';

describe('QuestoesCreateComponent', () => {
  let component: QuestoesCreateComponent;
  let fixture: ComponentFixture<QuestoesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
