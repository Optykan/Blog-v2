import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../../blog.interface';
import { PostService } from '../../services/post.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	content: string;
	post: Post;

  constructor(private postService: PostService, private mdService: MarkdownService) { 
  	this.post = {
  		title: '',
  		subtitle: '',
  		content: '..',
  		date: '',
  		id: '',
  		image: '',
  		snippet: ''
  	}
  }

  private markdownRenderHeading(text:string, level:number): string{
  		return `<h${level} class="is-size-${level}">${text}</h${level}>`
  }

  async ngOnInit() {
  	this.mdService.renderer.heading = this.markdownRenderHeading;

  	let posts = (await this.postService.getPosts() as any).response;
  	for(let postId in posts){
  		this.post = posts[postId];
  		break;
  	}
  	// this.post = posts[Object.keys(posts)[0]];
  }

}
