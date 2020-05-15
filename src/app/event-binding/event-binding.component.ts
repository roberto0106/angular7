import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'teste';
  i = 0;
  spinnerMode = 'Determinate';
  btnEnable = true;
  selectEnable = true;
  optionSelected = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log('click');
  }

  inc() {
    this.i++;
    this.buttonName = 'Fui clicado ' + this.i + ' vezes';
  }


  disable() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

  cbChange(event){
    this.selectEnable = event.checked;
  }

  selectionChange(event){
    console.log(event);
    this.optionSelected = event.value;
  }

}
