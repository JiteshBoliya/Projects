import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { value: '3+', label: 'Years of Experience' },
    { value: '5+', label: 'Projects Completed' },
    { value: '3+', label: 'Happy Clients' }
  ];

  skills = {
    frontend: ['Angular', 'React', 'TypeScript', 'HTML5/CSS3', 'Responsive Design'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
    devops: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing']
  };
} 