import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-news-card-component',
  imports: [],
  templateUrl: './news-card-component.html',
  styleUrl: './news-card-component.scss',
})
export class NewsCardComponent {
  @Input() title!: string;
  @Input() author!: string;
  @Output() button = new EventEmitter<void>();

  buttonClicked() {
    this.button.emit();
  }
}
