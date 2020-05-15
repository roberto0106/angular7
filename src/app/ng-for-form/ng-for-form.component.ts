import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  age: number = 0;
  city: string = "";

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Belo Horizont", state: "BH" },
    { name: "Florianópolis", state: "SC" },
    { name: "Rio de Janeiro", state: "RJ" },
  ];

  clients = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        phone: this.phone,
        age: this.age,
        city: this.city
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "",
      this.address = "",
      this.phone = "",
      this.age = 0,
      this.city = ""
  }

  delete(i: number) {
    this.clients.splice(i, 1);
  }
}
