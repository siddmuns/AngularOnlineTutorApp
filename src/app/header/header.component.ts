import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  quizTitle = 'Assignment 3';

  currentDate() {
    return new Date().toLocaleDateString();
  }

  quote = "Tough Times Don't Last, Tough People Do";
}
