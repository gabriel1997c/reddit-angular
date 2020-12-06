import { Component, OnInit, Input } from '@angular/core';
import { SubredditPost } from '../../models/SubredditPost';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subreddit-post',
  templateUrl: './subreddit-post.component.html',
  styleUrls: ['./subreddit-post.component.css'],
})
export class SubredditPostComponent implements OnInit {
  @Input() post: SubredditPost;
  contentIsShown: boolean = false;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

  constructor() {}

  ngOnInit(): void {}

  //set dynamic classes
  setClasses() {
    let classes = {
      post: true,
    };

    return classes;
  }

  toggleShow() {
    this.contentIsShown = !this.contentIsShown;
  }
}
