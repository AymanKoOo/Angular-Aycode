import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }


  login(){
    this.router.navigateByUrl('/login');

  }
}
