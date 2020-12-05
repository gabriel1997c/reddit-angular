import { Component, OnInit, Input } from '@angular/core';
import { SubredditPost } from '../../models/SubredditPost';

@Component({
  selector: 'app-subreddit-post',
  templateUrl: './subreddit-post.component.html',
  styleUrls: ['./subreddit-post.component.css'],
})
export class SubredditPostComponent implements OnInit {
  @Input() post: SubredditPost;
  constructor() {}

  ngOnInit(): void {}

  //set dynamic classes
  setClasses() {
    let classes = {
      post: true,
    };

    return classes;
  }
}
