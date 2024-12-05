import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { TrainingCardComponent } from '../../../components/training-card/training-card.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [TrainingCardComponent, IntroSubpagesComponent],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent implements OnInit {
  title: string = 'Find your Yin-Style Yoga Routine, enjoy the practice';
  text: string =
    "Explore a variety of Yin-Style Yoga Poses. Hold each pose for as long as feels comfortable, which could be several minutes. Remember to take short breaks between poses to tune into your body. Avoid pushing yourself into discomfort - listen to your body's signals. If a pose is performed on both sides, a note will indicate this.";

  routineSlug: string | null = null;
  routineData: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Routine Overview');

    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    // Fetch routine data from JSON
    this.http.get<any[]>('/data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );
    });
  }
}
