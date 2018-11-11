import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }
  
  @Input() link: string;
  @Input() text: string;
}
