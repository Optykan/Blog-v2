import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../blog.interface';

const baseUrl: string = "http://localhost:3000/api";

interface Response {
	body: Map<string, Object>;
	status: string;
	message: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
	async _get(url: string, params?: Object){
		return await this.http.get(baseUrl+url);
	}

  constructor(private http : HttpClient) { }

  async getPosts(): Promise<Response> {
  	return (await this._get('/posts')).toPromise() as Promise<Response>;
  }
}
