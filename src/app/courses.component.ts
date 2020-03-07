import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase }}<br />
    {{ course.rating | number: "2.1-1" }}<br />
    {{ course.students | number }}<br />
    {{ course.price | currency: "AUD":true:"3.2-2" }}<br />
    {{ course.releaseDate | date: "mediumDate" }}<br />
  `
})
export class CoursesComponent {
  course = {
    title: "This is a course",
    rating: 4.9556,
    students: 45623,
    price: 195.36,
    releaseDate: new Date(2016, 3, 1)
  };
}
