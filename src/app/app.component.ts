import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reddit-angular';

  subreddit: string;

  constructor() {}

  ngOnInit(): void {}

  changeSubreddit(newSubreddit) {
    this.subreddit = newSubreddit;
  }
}
