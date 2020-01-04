import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  public num1 :number;
  public num2 :number;
  public vysledek :number = 0;

  plus(){
    this.vysledek = this.num1+this.num2;
  }

  minus(){
    this.vysledek = this.num1-this.num2;
  }

  krat(){
    this.vysledek = this.num1*this.num2;
  }

  deleno(){
    this.vysledek = this.num1/this.num2;
  }

  ngOnInIt(){

  }
}
