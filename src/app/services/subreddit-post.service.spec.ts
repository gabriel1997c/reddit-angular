import { TestBed } from '@angular/core/testing';

import { SubredditPostService } from './subreddit-post.service';

describe('SubredditPostService', () => {
  let service: SubredditPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubredditPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
