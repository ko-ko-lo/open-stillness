import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class TrainingCardComponent implements OnInit {
  routines: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
      this.routines = data;
    });
  }
}
