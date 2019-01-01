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
  projects: Array<PostPreview> = [];
	posts: Array<PostPreview> = [];
  active: Array<PostPreview> = [];

  constructor(posts: PostService) {
  	this.postService = posts;
    this.posts.push({
      title: "test",
      snippet: "snippet",
      image: "http://picsum.photos/1000",
      link: "/test"
    })
    this.posts.push({
      title: "test",
      snippet: "snippet",
      image: "http://picsum.photos/1000",
      link: "/test"
    })
    this.active = this.posts;
  }

  private sliceToPreview(post: Post): PostPreview{
    return {
      title: post.title,
      snippet: post.snippet,
      image: post.image,
      link: post.id
    }
  }

  switch(current: string){
    if(current === "projects"){
      this.active = this.projects;
    } else {
      this.active = this.posts;
    }
  }

  async ngOnInit() {

  	let postPromise = (await this.postService.getPosts() as any);
    let projectPromise = (await this.postService.getProjects() as any);
    let responses;
    try{
      responses = await Promise.all([postPromise, projectPromise]);
    } catch (e){
      console.error(e);
    }
    console.log(responses[0].response);
    for(let post in responses[0].response){
      // console.log(post.content);
      this.posts.push(this.sliceToPreview(responses[0].response[post]));  
    }
    this.projects = responses[1].response.map(project=>this.sliceToPreview(project));
  }
}
