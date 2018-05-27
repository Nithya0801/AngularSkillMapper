import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import { Observable, Subject } from 'rxjs'; 
import {MycontrolService} from '../mycontrol.service';
import {Skill} from '../Skill';
@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {

  //private searchTerms = new Subject<string>();

  emps : Employee;

  sk : Skill;
  constructor(private mycontrol : MycontrolService) { }

  ngOnInit() {
  }

  searchEmployee(skill : string) : void{
    this.mycontrol.getSkill(skill).subscribe(sk => this.sk = sk);
    //this.getEmp(this.sk.employee);
    //sthis.msycontrol.getEmployee(this.sk.employee.employeeid).subscribe(emps => this.emps = emps);
  }

getEmp(em : Employee) : void{
  this.mycontrol.getEmployee(em.employeeid).subscribe(emps => this.emps = emps);
}


}
