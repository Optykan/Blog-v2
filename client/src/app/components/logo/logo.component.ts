import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() invert: boolean;
}
