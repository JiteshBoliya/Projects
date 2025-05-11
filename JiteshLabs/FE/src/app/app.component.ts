import { Component } from '@angular/core';
import { AppModule } from './app.module';

interface Tech {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  
  // All available technologies
  allTech: Tech[] = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    // { name: 'Python', icon: 'fab fa-python' },
    // { name: 'PHP', icon: 'fab fa-php' },
    // { name: 'Java', icon: 'fab fa-java' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    // { name: 'Docker', icon: 'fab fa-docker' },
    // { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'MongoDB', icon: 'fas fa-database mongodb' },
    { name: 'MySQL', icon: 'fas fa-database mysql' },
    { name: 'D3.js', icon: 'fas fa-chart-line' },
    { name: 'Cypress', icon: 'fas fa-vial' },
    { name: 'Express', icon: 'fas fa-server' },
    { name: 'Stripe', icon: 'fab fa-stripe' },
    { name: 'S3', icon: 'fab fa-aws' },
    { name: 'Next.js', icon: 'fab fa-react' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Angular Material', icon: 'fas fa-palette' },
    { name: 'MEAN Stack', icon: 'fas fa-layer-group' },
    { name: 'MERN Stack', icon: 'fas fa-layer-group' },
    { name: 'REST API', icon: 'fas fa-plug' },
    { name: 'NgRx', icon: 'fas fa-database' },
    { name: 'NGXS', icon: 'fas fa-database' },
    { name: 'RxJS', icon: 'fas fa-stream' }
  ];
  
  // Currently displayed technologies (initially top 10)
  displayedTech: Tech[] = [];
  
  // Flag to show "Show All" button
  hasMoreTech = false;
  
  constructor() {
    // Initialize with top 10 tech
    this.displayedTech = this.allTech.slice(0, 10);
    this.hasMoreTech = this.allTech.length > this.displayedTech.length;
  }
  
  // Method to show all technologies
  showAllTech() {
    this.displayedTech = [...this.allTech];
    this.hasMoreTech = false;
  }
  onSubmit(form: any) {
    if (form.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', form.value);
      
      // Reset the form
      form.reset();
      
      // Show success message (you can implement this)
      alert('Message sent successfully!');
    }
  }
}