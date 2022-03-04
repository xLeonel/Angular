import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtmComponent } from './cadastro-atm.component';

describe('CadastroAtmComponent', () => {
  let component: CadastroAtmComponent;
  let fixture: ComponentFixture<CadastroAtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
