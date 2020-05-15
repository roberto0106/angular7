import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-biding',
  templateUrl: './property-biding.component.html',
  styleUrls: ['./property-biding.component.css']
})
export class PropertyBidingComponent implements OnInit {

  colors = ['primary', 'accent', 'warn', ''];
  idx = 0;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.colors.length;
    }, 1000);
  }

}
