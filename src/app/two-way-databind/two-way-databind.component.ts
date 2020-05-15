import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databind',
  templateUrl: './two-way-databind.component.html',
  styleUrls: ['./two-way-databind.component.css']
})
export class TwoWayDatabindComponent implements OnInit {

  name1:string = "Fild 1";
  name2:string = "Fild 2";

  object = {
    name: "Roberto",
    lastname: "Flor",
    adress: "Rua Costa de Lavos",
    age: "34",
  }

  constructor() { }

  ngOnInit(): void {
  }

  teste(event){
    // console.log(event);
  }

}
