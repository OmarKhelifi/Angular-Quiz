import { Component, OnInit } from '@angular/core';
import { faGithub,faLinkedin,faFacebook,faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  git=faGithub
  linkedin=faLinkedin
  facebook=faFacebook
  whatsapp=faWhatsapp

  constructor() { }

  ngOnInit(): void {
  }

}
