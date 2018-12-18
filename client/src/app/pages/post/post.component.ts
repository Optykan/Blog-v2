import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private postService: PostService, private mdService: MarkdownService, private sanitization: DomSanitizer) { 
  	this.post = {
  		title: '...',
  		subtitle: '',
  		content: 'Loading...',
  		date: 0,
  		id: '',
  		image: 'https://picsum.photos/1000/1080',
  		snippet: ''
  	}
  }

  private markdownRenderHeading(text:string, level:number): string {
		// add required bluma css classes
		return `<h${level} class="is-size-${level}">${text}</h${level}>`
  }

  bypassSanitization(url){
  	return this.sanitization.bypassSecurityTrustStyle(`url(${url})`);
  }

  private conformPost(post: Post): Post{
  	// post.date = parseInt(post.date as any);
  	post.date = post.date * 1000 * 60;
  	return post;
  }

  async ngOnInit() {
  	this.mdService.renderer.heading = this.markdownRenderHeading;

  	let posts = (await this.postService.getPosts() as any).response;
  	for(let postId in posts){
  		this.post = this.conformPost(posts[postId]);
  		break;
  	}
  	// this.post = posts[Object.keys(posts)[0]];
  }

}
