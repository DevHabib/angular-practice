import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <button [style.backgroundColor]="isActive ? 'blue': 'black'" >Add me</button>
  `
})
export class CoursesComponent {
  isActive = true;
}
