import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClientesComponent } from './cadastro-clientes.component';

describe('CadastroClientesComponent', () => {
  let component: CadastroClientesComponent;
  let fixture: ComponentFixture<CadastroClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
