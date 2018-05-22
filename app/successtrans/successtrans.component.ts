import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {MycontrolService} from '../mycontrol.service';

@Component({
  selector: 'app-successtrans',
  templateUrl: './successtrans.component.html',
  styleUrls: ['./successtrans.component.css']
})
export class SuccesstransComponent implements OnInit {

  employee : Employee;
  constructor(private mycontrol : MycontrolService) { }

  ngOnInit() {
  }

}
