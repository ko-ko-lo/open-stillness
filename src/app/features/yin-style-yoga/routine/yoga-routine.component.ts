import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { MeditationCardComponent } from '../../../components/meditation-card/meditation-card.component';
import { RoutineEndComponent } from '../../../components/routine-end/routine-end.component';
import { YogaCardComponent } from '../../../components/yoga-card/yoga-card.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-yoga-routine',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    YogaCardComponent,
    MeditationCardComponent,
    RoutineEndComponent,
  ],
  templateUrl: './yoga-routine.component.html',
  styleUrl: './yoga-routine.component.scss',
})
export class YogaRoutinesComponent implements OnInit {
  selectedMeditation: any = null;
  routineSlug: string | null = null;
  routineData: any = null;
  yogaPoses: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );

      if (this.routineData) {
        this.loadYogaPoses(this.routineData.poses);
        this.loadMeditation(this.routineData.meditation);

        this.titleService.setFullTitle(
          `Yin-Style Yoga Routine: ${this.routineData.name}`
        );
      } else {
        this.titleService.setFullTitle(
          'Yin-Style Yoga Routine: A Guided Practice'
        );
      }
    });
  }

  loadYogaPoses(poses: string[]): void {
    this.http.get<any[]>('data/yoga-poses.json').subscribe((allPoses) => {
      this.yogaPoses = allPoses
        .filter((pose) => poses.includes(pose.name))
        .sort((a, b) => poses.indexOf(a.name) - poses.indexOf(b.name));
    });
  }

  loadMeditation(meditationName: string): void {
    if (!meditationName) {
      this.selectedMeditation = null; // No meditation for this routine
      return;
    }

    this.http.get<any[]>('data/meditations.json').subscribe((meditations) => {
      this.selectedMeditation = meditations.find(
        (m) => m.meditationName === meditationName
      );
    });
  }
}
