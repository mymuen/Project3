import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
