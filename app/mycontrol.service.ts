import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {Employee} from './Employee';
import {Skill} from './Skill';

//import {EMPLOYEES} from './employeelist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MycontrolService {

  private myurl = 'http://localhost:8086/RestControllerDemo/api/employee';
  private myskillurl= 'http://localhost:8086/RestControllerDemo/api/employee/skill';
  constructor(private http : HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.myurl);
  }

  addEmployee(employee : Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.myurl,employee,httpOptions);
  }

  getEmployee( employeeid : number) : Observable<Employee>{
    const url=this.myurl+"/"+employeeid;
    return this.http.get<Employee>(url);
  }

 getSkillById(employeeid : number ) : Observable<Skill>{
  const url=this.myskillurl+"/id/"+employeeid;
  return this.http.get<Skill>(url);
 }

 getSkill(skill : string) : Observable<Skill>{
   const url=this.myskillurl+"/"+skill;
   return this.http.get<Skill>(url);
 }
  deleteEmployee(employee : Employee) : Observable<Employee>{
    const url=this.myurl+'/'+employee.employeeid;
    return this.http.delete<Employee>(url,httpOptions);
  }

  updateEmployee(employee : Employee) : Observable<any>{
    return this.http.put(this.myurl,employee,httpOptions);
  }

  updateSkill(skill : Skill) : Observable<any>{
    return this.http.put(this.myskillurl,skill,httpOptions);
  }

  searchEmployee(employeeid : number): Observable<Employee>
  {
    const url=this.myurl+'/'+employeeid;
   
    return this.http.get<Employee>(url);
  }

}
