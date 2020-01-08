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
  public vysledek;

  plus(){
    if(this.num1 == NaN && this.num2 == NaN) {
      this.vysledek = "Nemáte zadaná čísla.";
    } else {
      this.vysledek = this.num1+this.num2;
    }
  }

  minus(){
    if(this.num1 == NaN && this.num2 == NaN) {
      this.vysledek = "Nemáte zadaná čísla.";
    } else {
      this.vysledek = this.num1-this.num2;
    }
  }

  krat(){
    if(this.num1 == NaN && this.num2 == NaN) {
      this.vysledek = "Nemáte zadaná čísla.";
    } else {
      this.vysledek = this.num1*this.num2;
    }
  }

  deleno(){
    if(this.num1 == 0 || this.num2 == 0) {
      this.vysledek = "Příklad nemá řešení, protože nulou se nedá dělit!";
    } else if(this.num1 == NaN && this.num2 == NaN) {
      this.vysledek = "Nemáte zadaná čísla.";
    } else {
      this.vysledek = this.num1/this.num2;
    }
  }

  del(){
    this.num1 = 0;
    this.num2 = 0;
    this.vysledek = 0;
  }
}
