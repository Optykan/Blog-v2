import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})

export class SocialComponent implements OnInit {

	links: Array<Link>
  constructor() {
  	this.links = [{title: 'hi', url: 'me'}, {title: 'two', url: 'ye'}]
  }

  ngOnInit() {
  }

}

interface Link {
  title: string;
  url: string;
}