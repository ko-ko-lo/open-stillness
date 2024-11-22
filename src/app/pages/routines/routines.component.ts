import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeditationCardComponent } from '../../components/meditation-card/meditation-card.component';
import { TrainingCardComponent } from '../../components/training-card/training-card.component';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [TrainingCardComponent, MeditationCardComponent],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.scss',
})
export class RoutinesComponent implements OnInit {
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
