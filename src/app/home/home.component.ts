import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  //Works:
  constructor(){}

  //Doesn't work:
  //constructor(public router: Router) {}
}
