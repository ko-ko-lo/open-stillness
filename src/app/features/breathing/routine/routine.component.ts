import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { BreathingCardComponent } from '../../../components/breathing-card/breathing-card.component';
import { MeditationCardComponent } from '../../../components/meditation-card/meditation-card.component';
import { RoutineEndComponent } from '../../../components/routine-end/routine-end.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BreathingCardComponent,
    CommonModule,
    RoutineEndComponent,
    MeditationCardComponent,
  ],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.scss',
})
export class BreathingRoutineComponent implements OnInit {
  routineSlug: string | null = null;
  routineData: any = null;
  breathingTechniques: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Routine');

    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    this.http.get<any[]>('data/breathing-routines.json').subscribe((data) => {
      this.routineData = data.find((routine) => {
        return routine.slug === this.routineSlug;
      });

      if (this.routineData) {
        this.loadbreathingTechniques(this.routineData.breathings);
      }
    });
  }

  loadbreathingTechniques(breathings: any[]): void {
    this.http.get<any[]>('data/breathing.json').subscribe((allBreathings) => {
      // Filter and augment only existing breathing techniques
      this.breathingTechniques = breathings
        .map((breathing) => {
          const fullDetails = allBreathings.find(
            (b) => b.name === breathing.name
          );
          return fullDetails ? { ...breathing, ...fullDetails } : null; // Merge if found
        })
        .filter((b) => b !== null); // Exclude null entries
    });
  }
}
