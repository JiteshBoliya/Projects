import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'IDDO-CDUE-CVBE',
      description: 'The Infectious Diseases Data Observatory (IDDO) is a scientifically independent, multi-disciplinary coalition of the global infectious disease and emerging infections communities. It provides the methods, governance and infrastructure to translate data into evidence that improves outcomes for patients worldwide.',
      image: 'projects/IDDO.jpg',
      techStack: ['Angular', 'NGRX', 'RXJS'],
      githubLink: null,
      demoLink: 'https://www.iddo.org/'
    },
    {
      title: 'Parentassess',
      description: 'ParentAssess is a framework developed for assessing parents who have learning disabilities and other additional needs within childcare proceedings. It addresses both the emotional and practical aspects of parenting and seeks to identify both the strengths and concerns.',
      image: 'projects/PA.jpg',
      techStack: ['Angular', 'NGRX', 'RXJS'],
      githubLink: null,
      demoLink: 'https://www.parentassess.com/'
    },
    {
      title: 'IdentityRM',
      description: 'IdentityRM™ is a holistic solution that creates secure, decentralized, relationship-based IAM capabilities, simplifying how users of all kinds interact with your business.',
      image: 'projects/IDRM.jpg',
      techStack: ['Angular', 'NGRX', 'RXJS', 'Jasmine', 'OWASP checks'],
      githubLink: null,
      demoLink: 'https://www.evolvedidentity.com/'
    },
    {
      title: 'IYuga',
      description: 'Effortlessly share your Wheels via social media, email, & text. Upload them to your website and personalize your business!',
      image: 'projects/iYuga.jpg',
      techStack: ['React.js', 'D3.js'],
      githubLink: null,
      demoLink: 'https://www.iyuga.net/'
    },
    {
      title: 'Guidy',
      description: 'At Guidy, we believe in creating an inclusive digital world where everyone can navigate the web with confidence. Our web accessibility solution is designed to empower your digital presence, ensuring that your online experience is seamless and accessible for all. With Guidy, embrace inclusivity and make your website a welcoming space for everyone',
      image: 'projects/guidy.png',
      techStack: ['React.js', 'Next.js', 'MongoDB', 'Stripe', 'S3'],
      githubLink: null,
      demoLink: 'https://guidy-dashboard.vercel.app/'
    }
  ];
} 