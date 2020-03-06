import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    // <img src="{{ imgUrl }}" />
    <img [src]="imgUrl" />
  `
})
export class CoursesComponent {
  title = "List of Courses";
  imgUrl = "http://lorempixel.com/400/200";
}
