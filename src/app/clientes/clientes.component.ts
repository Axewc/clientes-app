import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  imports: [CommonModule]
})
export class ClientesComponent {

  clientes: Cliente[]=[];
  
  constructor() {}

  ngOnInit() {
    this.clientes = CLIENTES

  }
}
