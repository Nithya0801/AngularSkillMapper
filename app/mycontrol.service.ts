import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {Employee} from './Employee';

//import {EMPLOYEES} from './employeelist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MycontrolService {

  private myurl = 'http://localhost:8086/RestControllerDemo/api/employee';
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

  deleteEmployee(employee : Employee) : Observable<Employee>{
    const url=this.myurl+'/'+employee.employeeid;
    return this.http.delete<Employee>(url,httpOptions);
  }

  updateEmployee(employee : Employee) : Observable<any>{
    return this.http.put(this.myurl,employee,httpOptions);
  }

  searchEmployee(employeeid : number): Observable<Employee>
  {
    const url=this.myurl+'/'+employeeid;
   
    return this.http.get<Employee>(url);
  }

}
