import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

const MESSAGES = {
	BLOG_ACTIVE: {
		left: "Blog",
		right: "Explore Projects",
		leftText: "The bumbling ravings of a madman",
		rightText: "Spaghetti code everywhere"
	},
	PROJECTS_ACTIVE: {
		left: "Projects",
		right: "Explore Blog",
		leftText: "This is some of the stuff that I've worked on or am working on, from just ideas to finished products.",
		rightText: "The bumbling ravings of a madman"
	},
};

@Component({
  selector: 'blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})
export class BlogHeaderComponent implements OnInit {
	blogIsActive: boolean = false;
	message: Object = MESSAGES.PROJECTS_ACTIVE;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  changeActive: EventEmitter<string> = new EventEmitter<string>();

  switch(){
		return;
		// no blog for now :(
  	this.blogIsActive = !this.blogIsActive;
  	if(this.blogIsActive){
  		this.message = MESSAGES.BLOG_ACTIVE;
      this.changeActive.emit("blog");
  	} else {
  		this.message = MESSAGES.PROJECTS_ACTIVE;
      this.changeActive.emit("projects");
  	}
  }

  // @HostListener('mouseclick')
}
