import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  exclusive:boolean= true;
   
  constructor() { }
   
  ngOnInit(): void {

  }
  goBackLink:boolean = true;

  headernav:boolean = true;

  headerLoginBlock:boolean = true

  loggedInUser:boolean = false;
}
