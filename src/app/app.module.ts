import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubredditPostComponent } from './components/subreddit-post/subreddit-post.component';
import { ListComponent } from './components/list/list.component';
import { SearchSubredditComponent } from './components/search-subreddit/search-subreddit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubredditPostComponent,
    ListComponent,
    SearchSubredditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
