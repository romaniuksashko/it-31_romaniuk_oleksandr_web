import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterLink } from "@angular/router";
import {Course} from "../../services/course"

@Component({
  selector: 'app-courses-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './courses-component.html',
  styleUrl: './courses-component.css',
})
export class CoursesComponent {

  constructor(private course: Course) { }
  
  returnCourse() {
    return this.course.getCourses()
  }
}
