import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Course {
  private courses = [
    {
      id: 1,
      title: 'HTML та CSS',
      teacher: 'Олександр',
      duration: 20
    },
    {
      id: 2,
      title: 'JavaScript',
      teacher: 'Марія',
      duration: 30
    },
    {
      id: 3,
      title: 'Angular',
      teacher: 'Іван',
      duration: 25
    }
  ]

  getCourses() {
    return this.courses
  }
}
