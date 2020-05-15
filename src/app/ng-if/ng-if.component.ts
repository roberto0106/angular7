import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  checkName: boolean = false;
  checkPhone: boolean = false;
  checkAddress: boolean = false;
  checkAge: boolean = false


  constructor() {
    console.log("NgIfComponent");
  }

  ngOnInit(): void {
  }


}
