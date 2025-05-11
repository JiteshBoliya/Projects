import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Full-stack Developer',
      company: 'WebOsmotic Private Limited',
      duration: 'Oct 2023 - Sep 2024',
      responsibilities: [
        'Developed a Contact Management Application using Angular 16, with responsive UI styling via Bootstrap and state management through NGXS.',
        'Designed and implemented dynamic, high-performance data visualisation charts using D3.js, tailored to client requirements across Angular, React.js, and Vanilla.js platforms.',
        'Built and maintained scalable backend systems from scratch using Next.js, aligning with specific client needs and ensuring system reliability.',
        'Integrated and managed third-party services, including Stripe for payments, SendGrid for email communication, and AWS S3 for cloud storage solutions.',
        'Delivered end-to-end solutions, combining strong front-end development expertise with robust backend architecture and advanced data visualisation capabilities'
      ],
      img:'company/webosmotic.jpg',
      techStack: ['Angular', 'D3.js', 'MongoDB', 'AWS S3', 'Next.js', 'React', 'Stripe', 'cypress']
    },
    {
      title: ' Front-End Developer',
      company: 'La Net Team Software Solutions Pvt. LTD.',
      duration: 'Jul 2022 - Sep 2023',
      responsibilities: [
        'Developed and deployed client-based projects from scratch using Angular 2+.',
        'I used state management tools like NGXS and NgRx.',
        'Experience in various styling tools, including CSS, SCSS, Bootstrap, and Angular Material (MUI).',
        'Collaborated on bug fixes, new feature implementations, and optimising existing applications.',
        'Managed E2E testing, version upgrades, and performed OWASP security checks.'
      ],
      img:'company/la_net.jpg',
      techStack: ['Angular','NGRX', 'NGXS', 'Jasmine', 'SCSS']
    },
    {
      title: 'Internship',
      company: 'La Net Team Software Solutions Pvt. LTD.',
      duration: 'Jan 2022 - Jun 2022',
      responsibilities: [
        'Completed an internship focused on MEAN stack development.',
        'Developed two major final-year projects: a Google Classroom clone and an Udemy clone.',
        'Applied full-stack development skills to design and implement real-world applications.',
        ' Gained hands-on experience in building scalable and dynamic web platforms.'
      ],
      img:'company/la_net.jpg',
      techStack: ['Angular', 'Express.js', 'MongoDb', 'Node.js', 'Git', 'javascript']
    }
  ];
} 