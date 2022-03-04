import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtmsComponent } from './lista-atms.component';

describe('ListaAtmsComponent', () => {
  let component: ListaAtmsComponent;
  let fixture: ComponentFixture<ListaAtmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAtmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
