import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselItems = [
    {
      image: 'assets/images/pronto.jpg',
      title: 'Project 1',
      technologies: [
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg'
      ]
    },
    {
      image: 'assets/images/pronto.jpg',
      title: 'Project 2',
      technologies: [
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg'
      ]
    },
    {
      image: 'assets/images/pronto.jpg',
      title: 'Project 3',
      technologies: [
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg',
        'assets/icons/signo.jpg'
      ]
    }
    
  ];
}
