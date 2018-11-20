import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post, PostPreview } from './../../blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	postService: PostService;
	posts: Array<PostPreview> = [];
  Object: Object = Object;

  constructor(posts: PostService) {
  	this.postService = posts;
    this.posts.push({
      title: 'tests',
      snippet: 'snip',
      link: 'link'
    })
    this.posts.push({
      title: 'tests',
      snippet: 'snip',
      link: 'link'
    })
  }

  private sliceToPreview(post: Post): PostPreview{
    return {
      title: post.title,
      snippet: post.snippet,
      link: post.id
    }
  }

  async ngOnInit() {
  	/*(await this.postService._get('/posts')).subscribe((data:any)=>{
      let responseMap = data.response;
      console.log(responseMap)
      Object.entries(responseMap).forEach((entry:Array<any>)=>{
        let post : Post = entry[1];
        console.log(post);
        this.posts.push(this.sliceToPreview(post));
      });
      console.log(this.posts)
    });*/
  }
}
