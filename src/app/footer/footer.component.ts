import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  //Variables that hold the value
  studentName = "Munsif Siddiqui";
  studentId = 991680159;
}
