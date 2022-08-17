import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
