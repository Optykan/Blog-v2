import { Component, OnInit, Input } from '@angular/core';
import { PostPreview } from '../../../blog.interface';

@Component({
  selector: 'blog-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})

export class PostPreviewComponent implements OnInit {
	@Input() post: PostPreview;
  @Input() reverse: boolean = false;
  @Input() number: number;
  
  constructor() {
  	this.post = {
  		title: "test",
  		snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula, est at lacinia ultrices, ante eros volutpat odio, ut mollis turpis ligula nec mi.",
  		link: "link"
  	}
  }

  get paddedNumber(){
    return String(this.number).padStart(2, '0');
  }

  ngOnInit() {
  }

}
