import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
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
  }

  updateEmployeeComponent(employee : Employee) : void{
    this.mycontrol.updateEmployee(employee).subscribe();
  }

  deleteEmployeeComponent(employee : Employee) : void{
    this.mycontrol.deleteEmployee(employee).subscribe();
  }
}
