import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SubredditPost } from '../../models/SubredditPost';
import { SubredditPostService } from '../../services/subreddit-post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() subreddit: string;

  posts: SubredditPost[];

  constructor(private subredditPostService: SubredditPostService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.subredditPostService.getPosts(this.subreddit).subscribe((response) => {
      this.posts = this.subredditPostService.mapResponse(response);
    });
  }

  //set dynamic classes
  setClasses() {
    let classes = {
      list: true,
    };

    return classes;
  }
}
