import { Component } from '@angular/core';

@Component({
  selector: 'app-rezume',
  templateUrl: './rezume.component.html',
  styleUrls: ['./rezume.component.scss']
})
export class RezumeComponent {
  about = {
    name: 'Жовнірович Іван Ігорович',
    phoneNumber: '0991926097',
    email: 'vania022000@gmail.com',
    city: 'Ivano-Frankivsk',
    background: 'Пряцював у багатьох сферах',
    skills: 'HTML CSS JS nodeJS TS ANGULAR',
    photo: 'https://placehold.co/600x400'
  }
}
