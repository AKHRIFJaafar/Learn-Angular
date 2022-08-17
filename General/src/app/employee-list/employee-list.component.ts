import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id": 1, "name":"Jaafar", "age":30 },
    {"id": 2, "name":"Chris", "age":60 },
    {"id": 3, "name":"Brace", "age":44 },
    {"id": 4, "name":"Stephanie", "age":35 },
    {"id": 5, "name":"Rachel", "age":21 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
