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
  //Problem Array which holds the set of problems to be displayed
  problems: Problem[] = [];

  //Boolean which sees if the user is ready for answer to be displayed
  showAnswerStatus: boolean = false;

  //COnsteurctor which inizializes the page with problems
  constructor() {
    this.generateProblems();
  }

  //Generate problems variable which actually creates the problems to be displayed
  generateProblems(): void {
    this.problems = [];
    for (let i = 0; i < 4; i++) {
      this.problems.push(new Problem());
    }
    this.showAnswerStatus = false; // Resets the answerSubmitted boolean flag
  }

  //Check answer event which makes it so the answers are displayed
  checkAnswers(): void {
    this.showAnswerStatus = true; // Set the flag to true to show answer statuses
  }
}
