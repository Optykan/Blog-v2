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
	posts: Map<String, PostPreview>;
  Object: Object = Object;

  constructor(posts: PostService) {
  	this.postService = posts;
  }

  async ngOnInit() {
  	(await this.postService._get('/posts')).subscribe((data:any)=>{
      this.posts = data.response;
      console.log(this.posts)
    });
  }
}
