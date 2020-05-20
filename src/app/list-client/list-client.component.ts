import { Clients } from './list-client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  name: string;
  age: number;
  clients: Clients[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      { name: this.name, age: this.age }
    );
    this.name = '';
    this.age = 0;
  }

  deleteClient(i: number) {
    this.clients.splice(i, 1);
  }

  updateClient(c: Clients, i: string | number) {
    this.clients[i].name = c.name;
    this.clients[i].age = c.age;

  }

}
