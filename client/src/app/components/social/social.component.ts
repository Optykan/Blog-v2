import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})

class Link{
	title: string;
	url: string;
}

export class SocialComponent implements OnInit {
	links: Array<Link>
  constructor() {
  	this.links = []
  }

  ngOnInit() {
  }

}
