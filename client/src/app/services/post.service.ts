import { Injectable } from '@angular/core';

const baseUrl: string = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})

export class PostService {
	async _get(url: string, params: Object){

	}

  constructor() { }

  async getPosts(){

  }
}
