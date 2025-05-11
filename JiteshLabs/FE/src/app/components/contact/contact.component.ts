import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission
      console.log('Form submitted:', form.value);
      form.reset();
    }
  }
} 