import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubredditComponent } from './search-subreddit.component';

describe('SearchSubredditComponent', () => {
  let component: SearchSubredditComponent;
  let fixture: ComponentFixture<SearchSubredditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSubredditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
