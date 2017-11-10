import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  people = [{
    "id": 1,
    "first_name": "Manon",
    "last_name": "D'Angeli",
    "gender": "Female"
  }, {
    "id": 2,
    "first_name": "Denice",
    "last_name": "Hearty",
    "gender": "Female"
  }, {
    "id": 3,
    "first_name": "Goldarina",
    "last_name": "Fridlington",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Allie",
    "last_name": "Hilary",
    "gender": "Male"
  }, {
    "id": 5,
    "first_name": "Reuben",
    "last_name": "De Maine",
    "gender": "Male"
  }];

}
