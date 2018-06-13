import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {Skill} from '../Skill';
import {MycontrolService} from '../mycontrol.service';
//import {EMPLOYEES} from '../employeelist';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

 
  emps : Employee[];

  emp : Employee;

  sk : Skill;
  //emps = EMPLOYEES;
  constructor(private mycontrol : MycontrolService) {
   // this.emp=new Employee();
   }

  getAllEmployeeComponent() : void{
    this.mycontrol.getAllEmployee().subscribe(emps => this.emps = emps);
  }
  ngOnInit() {
    this.getAllEmployeeComponent();
  }

  onSelectEmployee(e : Employee):void{
    this.emp = e;
    this.mycontrol.getSkillById(this.emp.employeeid).subscribe(sk => this.sk = sk);
  }

  updateEmployeeComponent(employee : Employee,sk : Skill) : void{
    this.mycontrol.updateEmployee(employee).subscribe();
    this.mycontrol.updateSkill(sk).subscribe();
  }

  deleteEmployeeComponent(employee : Employee) : void{
    this.mycontrol.deleteEmployee(employee).subscribe();
  }
}
