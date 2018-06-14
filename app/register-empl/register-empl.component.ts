import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {Skill} from '../Skill';
import { MycontrolService } from '../mycontrol.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-register-empl',
  templateUrl: './register-empl.component.html',
  styleUrls: ['./register-empl.component.css']
})
export class RegisterEmplComponent implements OnInit {

  employee : Employee[];

  emp : Employee;

  sk : Skill;

  sks : Skill[];
  constructor(private mycontrol : MycontrolService) { }

  ngOnInit() {
  }


  add(employeeid : number,employeename : string,dob : string,gender : string,address : string,phoneno : string,doj : string,desgn : string,qualification : string,skillid : number,skill : string,voucher : string)
  {
    this.emp = new Employee();
    this.sk = new Skill();
    this.emp.employeeid=employeeid;
    this.emp.employeename=employeename;
    this.emp.dob=dob;
    this.emp.gender=gender;
    this.emp.address=address;
    this.emp.phoneno=phoneno;
    this.emp.doj=doj;
    this.emp.desgn=desgn;
    this.emp.qualification=qualification;
    this.mycontrol.addEmployee(this.emp).subscribe(empl => this.employee.push(this.emp));
    this.sk.skillid=skillid;
    this.sk.skill=skill;
    this.sk.employee=this.emp;
  
    this.sk.voucher=voucher;
    this.mycontrol.addSkill(this.sk).subscribe(skil =>  this.sks.push(this.sk));
  }
  //addEmployeeComponent(employee : Employee) : void{
  //this.mycontrol.addEmployee(employee).subscribe(emp => this.employee.push(emp));
 // }

  

}
