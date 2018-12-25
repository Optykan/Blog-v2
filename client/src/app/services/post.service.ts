import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../blog.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const baseUrl: string = "http://localhost:3000/api";

interface Response {
	response: Map<string, Object>;
	status: string;
	message: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
	async _get(url: string, params?: Object){
		return (await this.http.get(baseUrl+url)).pipe(catchError(val=>of({
			//handle observer errors
			body: null,
			status: 500,
			message: "Failed to load."
		})));
	}

  constructor(private http : HttpClient) { }

  async getPosts(): Promise<Response> { 
		return (await this._get('/posts')).toPromise() as Promise<Response>;
  }

  async getProjects(): Promise<Response> {
  	return (await this._get('/projects')).toPromise() as Promise<Response>;
  }

  async getPost(id: number): Promise<Response>{
  	return (await this._get(`/posts/${id}`)).toPromise() as Promise<Response>;
  }
}
