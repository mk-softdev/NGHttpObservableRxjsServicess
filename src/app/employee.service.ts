import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iEmployee } from 'src/assets/data/iEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url: string = "/src/assets/data/employee.json";


  constructor(private _http:HttpClient) { }
  getEmployee():Observable<iEmployee[]>{
    return this._http.get<iEmployee[]>(this._url);
  }
}
