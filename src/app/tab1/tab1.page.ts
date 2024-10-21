import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  texto: any;

  constructor() { }

  ngOnInit() {
  }
  
  crearQR() {
    const imageUrl = 'assets/frame.png';
    
    const qrContainer = document.getElementById('qr-container');
    
    if (qrContainer) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Código QR';
        
        qrContainer.innerHTML = '';
        
        qrContainer.appendChild(img);
    }
    
  }

  borrarQR() {
    const qrContainer = document.getElementById('qr-container');
    
    if (qrContainer) {
        qrContainer.innerHTML = '';
    }
  }
  
}
