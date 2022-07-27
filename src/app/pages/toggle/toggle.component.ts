import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSingleButtonToggle(val:any){
     console.log(val.source.checked)
  }
}
