import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './item-form-component.html',
  styleUrl: './item-form-component.css',
})
export class ItemFormComponent {
  items = [
    {
      name: 'Ноутбук',
      manufacturer: 'Lenovo',
      description: 'Ноутбук для роботи та навчання',
    },
  ];

  newItem = {
    name: '',
    manufacturer: '',
    description: '',
  };

  submitted = false

  addItem(form: any) {
    this.submitted = true

    if (form.invalid) {
      return
    }

    this.items = [...this.items, {...this.newItem}]

    form.resetForm()
    this.submitted = false
  }
}
