import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private readonly http: HttpClient) {}

  getListByPostId(postId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
