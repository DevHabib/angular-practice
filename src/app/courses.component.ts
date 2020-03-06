import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
  <button class="btn btn-success">Add me</button>
  `
})
export class CoursesComponent {
  colSpan = "List of Courses";
  imgUrl = "http://lorempixel.com/400/200";
}
