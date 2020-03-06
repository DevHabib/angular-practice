import { CoursesService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <div (click)="onDivClick()">
      <button (click)="onSave($event)">Add me</button>
    </div>
  `
})
export class CoursesComponent {
  onDivClick() {
    console.log("div was clicked");
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("btn was clicked", $event);
  }
}
