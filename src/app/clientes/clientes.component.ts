import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  imports: [CommonModule, RouterModule]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  
  
  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
        //console.log(this.clientes);
      });
  }
}
