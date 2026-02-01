import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  images: string[] = [
    'assets/donation/5db30432b104b.jpeg',
    'assets/donation/donate.webp',
    'assets/donation/hunger-in-asia.jpg',
    'assets/donation/OIP (1).webp',
    'assets/donation/OIP.webp',
    'assets/donation/shipping0822-helpnow-photo-1.jpg'
  ];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 500);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  get currentImage(): string {
    return this.images[this.currentIndex];
  }
}
