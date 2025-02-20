import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselItem } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 5000;

  currentIndex: number = 0;
  private autoplayInterval: any;

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    if(this.autoplayInterval){
      clearInterval(this.autoplayInterval)
    }
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, this.interval);
  }

  next(){
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  selectSlide(index: number) {
    this.currentIndex = index;
  }

}
