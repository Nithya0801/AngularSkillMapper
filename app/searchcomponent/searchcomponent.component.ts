import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import { Observable, Subject } from 'rxjs'; 
import {MycontrolService} from '../mycontrol.service';
@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {

  //private searchTerms = new Subject<string>();

  emps : Employee;
  constructor(private mycontrol : MycontrolService) { }

  ngOnInit() {
  }

  search(eid: number): void {
    this.mycontrol.searchEmployee(eid).subscribe();
     }



}
