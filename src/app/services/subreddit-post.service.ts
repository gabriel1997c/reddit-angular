import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditPost } from '../models/SubredditPost';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubredditPostService {
  baseUrl: string = 'https://www.reddit.com/r/';
  topPosts: string = 'top.json';
  limitPosts: string = 'limit=10';

  constructor(private http: HttpClient) {}

  getFullUrl(subreddit: string): string {
    return `${this.baseUrl}${subreddit}/${this.topPosts}?raw_json=1&${this.limitPosts}`;
  }

  getPosts(subreddit: string): Observable<SubredditPost[]> {
    return this.http.get<SubredditPost[]>(this.getFullUrl(subreddit));
  }

  mapResponse(response) {
    let data = response.data;
    let posts: SubredditPost[] = [];
    let children = data.children;
    for (let i = 0; i < children.length; i++) {
      let post: SubredditPost = new SubredditPost();
      post.title = children[i].data.title;
      post.author = children[i].data.author;
      post.upvotes = children[i].data.ups;
      post.downvotes = children[i].data.downs;
      post.selftext = children[i].data.selftext;
      posts.push(post);
    }
    return posts;
  }
}
