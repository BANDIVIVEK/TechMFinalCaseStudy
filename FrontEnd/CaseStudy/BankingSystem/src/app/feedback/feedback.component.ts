import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService) { }
  

  submitFeedback(): void {
    this.feedbackService.submitFeedback(this.feedback).subscribe(response => {
      console.log('Feedback submitted:', response);
      alert('Feedback Submitted Successfully');
      this.feedback = new Feedback(); // Reset the form
    });
  }

}
