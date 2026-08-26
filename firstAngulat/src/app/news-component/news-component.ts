import { Component } from '@angular/core';
import { NewsCardComponent } from '../news-card-component/news-card-component';

@Component({
  selector: 'app-news-component',
  imports: [NewsCardComponent],
  templateUrl: './news-component.html',
  styleUrl: './news-component.scss',
})
export class NewsComponent {
  onButtonClicked() {
    console.log("Відкрито новину");
    
  }
}
