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
      title: "Hack the North",
      snippet: "I'm a proud Backend Developer at Hack the North. As Canada's biggest hackathon, Hack the North brings together over 1,000 students from all over the world to participate in a 36-hour long event of innovation and ideation. I'm currently working on the backend service that powers the hacker experience during the event.",
      image: "/assets/images/htn.jpg",
      link: "https://hackthenorth.com",
      technologies: ['Python', 'SQL', 'Docker', 'Tornado']
    });
    this.posts.push({
      title: "Spotify on Focals",
      snippet: "From my work term at North, I developed the Cloud components for powering a Spotify integration from Focals, North's flagship smartglasses. Users can directly control their Spotify playlist from the Loop, including play, pause, volume up/down, skip, and more!",
      image: "/assets/images/spotify.jpg",
      link: "https://support.bynorth.com/hc/en-us/articles/360026426992-Control-music-with-Spotify",
      technologies: ['Node.js', 'Docker', 'Kubernetes']
    });
    this.posts.push({
      title: "Avante Landscaping",
      snippet: "This project was one of the first websites that I built (almost entirely myself) for a client. In conjunction with the wonderful folk at nvision.co, we gathered technical and design requirements to make this website really come to life. It's built on the Wordpress.org core, and is fully responsive on any device.",
      image: "/assets/images/avante.jpg",
      link: "https://avantelandscaping.com",
      technologies: ['JavaScript', 'HTML/SASS', 'PHP', 'Wordpress']
    });
    this.posts.push({
      title: "Unionville Skating Club",
      snippet: "USC was a team effort during my coop at nvision.co. The scope of this project was so large that it could not be done solely by one person. I worked on transforming Photoshop designs into full-featured responsive webpages, and implemented mobile views where necessary.",
      image: "/assets/images/usc.jpg",
      link: "https://unionvilleskatingclub.com",
      technologies: ['JavaScript', 'HTML/SASS', 'PHP', 'Wordpress']
    });
    this.posts.push({
      title: "Beat",
      snippet: "Awarded PennApps XVII Top 10 Hack, as well as winning Best UI Hack! Beat is a Pitch Perfect riff-off style game where players can mix and match songs to the beat and lyrics to win points! I worked on automating and aggregating song lyrics with timestamps to calculate points on switching songs.",
      image: "/assets/images/beat.jpg",
      code: "https://github.com/kpsuperplane/pennapps-beat",
      technologies: ['Ionic Framework', 'Typescript', 'Node.js']
    });
    this.posts.push({
      title: "TeachAssist Scraper",
      snippet: "I created a scraper to reskin the TeachAssist website, a site where district students can retrieve their grades online. Built with PHP, the scraper attempts to read all grades from the official website and presents it in a visually appealing manner, as well as providing some more features such as grade caching.",
      image: "/assets/images/teachassist.jpg",
      link: "https://yrdsbteachassist.herokuapp.com",
      code: "https://github.com/Optykan/teachassist",
      technologies: ['HTML/SASS', 'PHP', 'Heroku']
    });
    this.posts.push({
      title: "Discord Bot",
      snippet: "Built on top of the wonderful discord.js library, it supports playing single songs and playlists as well as permission management. Custom plugins are also supported, if you would like to do such a thing. ",
      image: "http://picsum.photos/1000",
      code: "https://github.com/Optykan/tzuyu",
      technologies: ['Node.js', 'Heroku']
    });
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

  	// let postPromise = (await this.postService.getPosts() as any);
    // let projectPromise = (await this.postService.getProjects() as any);
    // let responses;
    // try{
    //   responses = await Promise.all([postPromise, projectPromise]);
    // } catch (e){
    //   console.error(e);
    // }

    // for(let post in responses[0].response){
    //   // console.log(post.content);
    //   this.posts.push(this.sliceToPreview(responses[0].response[post]));  
    // }
    // this.projects = responses[1].response.map(project=>this.sliceToPreview(project));
  }
}
