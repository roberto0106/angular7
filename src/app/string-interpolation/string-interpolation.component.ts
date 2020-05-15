import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {



  persondata = {
    firstname: 'Roberto',
    lastname: 'da Silva Flor',
    age: 36
  };

  constructor() { }

  ngOnInit(): void {
  }

}
