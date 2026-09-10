import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../../services/course"
import { CommonModule } from '@angular/common';
// import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-course-detail-component',
  imports: [CommonModule],
  templateUrl: './course-detail-component.html',
  styleUrl: './course-detail-component.css',
})
export class CourseDetailComponent {
  courseId!: number;
  course: any

  constructor(private route: ActivatedRoute, private courses: Course) {
    this.route.params.subscribe(params => this.courseId = Number(params['id']))

    this.course = this.courses.getCourses().find(
      item => item.id === this.courseId
    )
  }
}
