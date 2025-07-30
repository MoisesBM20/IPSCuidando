import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './pqrs.html',
  styleUrl: './pqrs.scss'
})
export class Pqrs {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };
  
  submitted = false;
  isSubmitting = false;
  showSuccessModal = false;
  showErrorModal = false;

  onSubmit() {
    this.submitted = true;
    
    // Validar campos obligatorios
    if (!this.formData.nombre || !this.formData.email || !this.formData.mensaje) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Simular envío del formulario
    setTimeout(() => {
      this.isSubmitting = false;
      
      // Simular éxito (puedes cambiar esto por tu lógica real)
      const success = Math.random() > 0.3; // 70% de éxito para demo
      
      if (success) {
        this.showSuccessModal = true;
        this.resetForm();
      } else {
        this.showErrorModal = true;
      }
    }, 2000);
  }

  closeModal() {
    this.showSuccessModal = false;
    this.showErrorModal = false;
  }

  resetForm() {
    this.formData = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    };
    this.submitted = false;
  }
}
