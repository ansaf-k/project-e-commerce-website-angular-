import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
images: any;
}
