import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../Employee';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class UpdatecompComponent implements OnInit {

  @Input() emp : Employee;
  constructor() { }

  ngOnInit() {
  }

}
