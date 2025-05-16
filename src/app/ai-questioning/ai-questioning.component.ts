import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-ai-questioning',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-questioning.component.html',
  styleUrls: ['../app.component.scss', './ai-questioning.component.scss'],
})
export class AiQuestioningComponent {
  userInput: string = '';
  responseText: string = '';
  isLoading: boolean = false;
  private readonly questionsUrl = environment.questionsUrl;
  
  constructor(private readonly http: HttpClient) {}

  onEnter() {
    if (!this.userInput.trim()) return;

    this.isLoading = true;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'text/html'
    });

    const body = {
      question: this.userInput
    };

    this.http.post(`${this.questionsUrl}/question`, body, { headers, responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.responseText = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error:', err);
          this.responseText = 'Something went wrong.';
          this.isLoading = false;
        }
      });
  }
}
