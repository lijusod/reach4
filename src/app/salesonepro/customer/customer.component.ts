import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/index';
@Component({
  selector: 'app-customer',
  template: '<router-outlet></router-outlet>'
})
export class CustomerComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    
  }

}
