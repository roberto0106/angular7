import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "roberto",
    "talita",
    "leo",
    "debora"
  ]

  cities = [
    {name:"São Paulo", uf:"SP"},
    {name:"Belo Horizonte", uf:"BH"},
    {name:"Florianopolis", uf:"FL"},
    {name:"Rio de Janeiro", uf:"RJ"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
