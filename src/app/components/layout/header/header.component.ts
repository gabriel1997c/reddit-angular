import { Component, OnInit } from '@angular/core';
import { faAngular, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faAngular = faAngular;
  faRedditAlien = faRedditAlien;

  constructor() {}

  ngOnInit(): void {}
}
