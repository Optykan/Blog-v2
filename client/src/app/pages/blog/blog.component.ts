import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { PostPreview } from './../../blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	postService: PostService;
	posts: Array<PostPreview>;

  constructor(posts: PostService) {
  	this.postService = posts;
  }

  ngOnInit() {
  	
  }

}
