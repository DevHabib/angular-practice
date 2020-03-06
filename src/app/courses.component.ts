import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <img [src]="imgUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CoursesComponent {
  colSpan = "List of Courses";
  imgUrl = "http://lorempixel.com/400/200";
}
