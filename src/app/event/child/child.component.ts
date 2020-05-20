import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title: string;
  @Output() inc = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  btnClick(n:number) {
    this.inc.emit(n);
  }

}
