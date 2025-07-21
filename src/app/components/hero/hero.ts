import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- Módulos de Angular Material ---
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


interface Slide {
  url: string;
  alt: string;
  description: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {

  slides: Slide[] = [
    {
      url: 'https://images.unsplash.com/photo-1581091224003-01e7c14a5b9b?q=80&w=2070&auto=format&fit=crop',
      alt: 'Personal de enfermería atendiendo a un paciente en casa',
      description: 'Nuestro equipo de enfermería brinda cuidados expertos y humanos en la comodidad de tu hogar.'
    },
    {
      url: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop',
      alt: 'Médico realizando una consulta domiciliaria a una familia',
      description: 'Atención médica integral para toda la familia, sin necesidad de desplazamientos.'
    },
    {
      url: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop',
      alt: 'Terapeuta realizando ejercicios de rehabilitación a un adulto mayor',
      description: 'Programas de terapia física personalizados para una recuperación efectiva.'
    }
  ];

  currentIndex = 0;

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    this.currentIndex = isLastSlide ? 0 : this.currentIndex + 1;
  }
}