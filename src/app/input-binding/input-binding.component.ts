import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

@Input()  name:string;
@Input('othername') lastname:string;
@Input() age:number;


clients: Client[];

  constructor() {
    this.clients=[
      {id:1, name:"Roberto", age:25},
      {id:2, name:"Talita", age:30},
      {id:3, name:"Tadeu", age:35},
      {id:4, name:"Leonardo", age:45}
    ];
   }

  ngOnInit(): void {
  }

}
