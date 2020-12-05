import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-subreddit',
  templateUrl: './search-subreddit.component.html',
  styleUrls: ['./search-subreddit.component.css'],
})
export class SearchSubredditComponent implements OnInit {
  @Output() changeSubreddit: EventEmitter<any> = new EventEmitter();
  newSubreddit: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.changeSubreddit.emit(this.newSubreddit);
  }
}
