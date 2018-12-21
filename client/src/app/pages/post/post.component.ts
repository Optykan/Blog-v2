import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from '../../blog.interface';
import { PostService } from '../../services/post.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'page-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	loading: boolean = true;
	post: Post;

  constructor(private postService: PostService, private mdService: MarkdownService, private sanitization: DomSanitizer) { 
  	this.post = {
  		title: '...',
  		subtitle: '',
  		content: '_',
  		date: Date.now(),
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

  	let response = (await this.postService.getPosts() as any);
    console.log(response);
    let posts = response.response;
    this.loading = false;
    if(!posts){
      this.post = {
        title: ':(',
        subtitle: '',
        content: response.message,
        date: Date.now(),
        id: '',
        image: 'https://picsum.photos/1000/1080',
        snippet: ''
      }
      return;
    }
  	for(let postId in posts){
  		this.post = this.conformPost(posts[postId]);
  		break;
  	}
  	// this.post = posts[Object.keys(posts)[0]];
  }

}
