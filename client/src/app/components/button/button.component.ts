import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}
  isExternal: boolean = false;

  ngOnInit() {
    this.isExternal = this.link.startsWith("http");
  }

  click(){
    // this.router.navigate([this.link]);
    this.location.replaceState(this.link);
  }
  
  @Input() link: string;
  @Input() text: string;
  @Input() isInverted: boolean;
  @Input() isOutlined: boolean;
  @Input() isRounded: boolean;
  @Input() theme: string = "";
}
