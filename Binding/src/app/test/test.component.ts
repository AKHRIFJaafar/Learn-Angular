import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  public name = "Jaafar";
  public siteUrl = window.location.href;
  public myId = "testId";  
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial= true;
  
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial

  }
  public greeting = "";
  public twoWayProperty ="";
 
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.name; 
  }
  onclick(){ 
    console.log ("welcome Jaafar");
    this.greeting = 'WELCOME JAAFAR';
  }
  logMessage(value){ 
    console.log(value);

  }
}
