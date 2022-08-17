import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name":"Jaafar", "age":30 },
      {"id": 2, "name":"Chris", "age":60 },
      {"id": 3, "name":"Brace", "age":44 },
      {"id": 4, "name":"Stephanie", "age":35 },
      {"id": 5, "name":"Rachel", "age":21 },
    ];
   }
}
