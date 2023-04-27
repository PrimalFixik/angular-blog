import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private readonly http: HttpClient) {}

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getAllByUserId(userId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getPart(start: number, limit: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
  }

  getById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getPartByUserId(userId: number, start: number, limit: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}&userId=${userId}`);
  }
}
