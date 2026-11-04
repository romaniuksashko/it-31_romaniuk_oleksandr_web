import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { AboutComponent } from './pages/about-component/about-component';
import { CoursesComponent } from './pages/courses-component/courses-component';
import { CourseDetailComponent } from './pages/course-detail-component/course-detail-component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "about",
    component: AboutComponent
  }, {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "course/:id",
    component: CourseDetailComponent
  }
];