import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;

  constructor() {}

  ngOnInit(): void {}
}
