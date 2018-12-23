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
  		snippet: "Future site of great content",
      image: "http://picsum.photos/1000",
  		link: "link"
  	}
  }

  get paddedNumber(){
    return String(this.number).padStart(2, '0');
  }

  ngOnInit() {
  }

}
