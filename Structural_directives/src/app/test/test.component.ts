import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = false;
  public a_color = "blue";
  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
