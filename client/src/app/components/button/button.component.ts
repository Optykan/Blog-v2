import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router, private location: Location) {

  }

  ngOnInit() {
  }

  click(){
    // this.router.navigate([this.link]);
    this.location.replaceState(this.link);
  }
  
  @Input() link: string;
  @Input() text: string;
  @Input() rounded: boolean;
  @Input() thwhite: boolean;
  @Input() thblack: boolean;
}
