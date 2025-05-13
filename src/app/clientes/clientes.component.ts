import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  imports: [CommonModule]
})
export class ClientesComponent {

  clientes: Cliente[]=[
    { id: 1, nombre: 'Andres', apellido: 'Guzman', email: 'profesor@gmail.com', createAt: '2025-01-01' },
    { id: 2, nombre: 'Luis', apellido: 'Guzman', email: 'luis@gmail.com', createAt: '2025-02-21' },
    { id: 3, nombre: 'Petra', apellido: 'Guzman', email: 'profesora@gmail.com', createAt: '2025-01-01' },
    { id: 4, nombre: 'Luisa', apellido: 'Guzman', email: 'luisa@gmail.com', createAt: '2025-02-21' },
  
  ];
  constructor() {}

  ngOnInit() {

  }
}
