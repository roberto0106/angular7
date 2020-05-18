import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {


users = [
  {name:"Roberto", role:"admin" , salary:"1500", lastlogin: new Date("01/20/2020")},
  {name:"Talita", role:"admin" , salary:"1500", lastlogin: new Date("01/20/2020")},
  {name:"Leo", role:"user" , salary:"1500", lastlogin: new Date("01/20/2020")},
]

  constructor() { }

  ngOnInit(): void {
  }

}
