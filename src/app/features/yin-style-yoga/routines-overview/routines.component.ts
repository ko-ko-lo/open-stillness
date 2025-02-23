import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { TrainingCardComponent } from '../../../components/training-card/training-card.component';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [TrainingCardComponent, IntroSubpagesComponent],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent implements OnInit {
  title: string =
    'Move with Ease: Yin-Style Yoga Routines to Support Your Body';
  text: string =
    "Explore these carefully curated Yin-Style Yoga routines, moving at the suggested pace or in your own time. Between poses, take a moment to pause, breathe, and reconnect with your body. Notice any sensations that arise, and honor your body's signals - comfort and safety come first. Some poses are practiced on both sides, and you'll find gentle reminders when this is the case.";

  routineSlug: string | null = null;
  routineData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    // Fetch routine data from JSON
    this.http.get<any[]>('/data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );
    });
  }
}
