import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebaropen = true;

  constructor() { }

  ngOnInit(): void { }

  sidebartoggler(){
    this.sidebaropen = !this.sidebaropen
  }

}
