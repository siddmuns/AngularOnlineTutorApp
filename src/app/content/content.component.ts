import { Component } from '@angular/core';
import {Problem} from "./problem";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    NgStyle
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  problems: Problem[] = [];
  answerSubmitted: boolean = false;

  constructor() {
    this.generateProblems();
  }

  generateProblems(): void {
    this.problems = [];
    for (let i = 0; i < 4; i++) {
      this.problems.push(new Problem());
    }
    this.answerSubmitted = false; // Reset the answerSubmitted flag
  }

  checkAnswers(): void {
    this.answerSubmitted = true; // Set the flag to true to show answer statuses
  }
}
