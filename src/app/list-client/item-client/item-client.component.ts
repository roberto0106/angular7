import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/input-binding/client/client.model';
import { Clients } from '../list-client.model';



@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: Clients;
  @Output() updateClient = new EventEmitter<Clients>();
  @Output() removeClient = new EventEmitter<any>();


  enableedit = false;
  name: string;
  age = 0;


  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.enableedit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  save(){
    this.enableedit = false;
    this.updateClient.emit(
      {name: this.name, age: this.age}
      );
  }

  remove(){
    this.removeClient.emit();
  }

}
