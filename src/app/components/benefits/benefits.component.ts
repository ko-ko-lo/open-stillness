import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  @Input() title: string = 'The Benefits of Yin-Style Yoga';

  @Input() benefits = [
    {
      title: 'Relaxation & Inner peace',
      description:
        'Yin-Style Yoga encourages deep relaxation, helping you find inner peace by holding poses for longer periods of time.',
    },
    {
      title: 'Stress Relief & Mental Calm',
      description:
        'Holding postures helps calm the mind and reduce stress, leading to a profound sense of relaxation and mental balance.',
    },
    {
      title: 'Increased Flexibility',
      description:
        'Long-held stretches in Yin-Style Yoga gradually increase flexibility by working into the deep tissues of the body.',
    },
    {
      title: 'Enhanced Mindfulness',
      description:
        'Yin-Style Yoga enhances mindfulness by encouraging you to stay present and connected to your body’s sensations.',
    },
    {
      title: 'Improved Posture',
      description:
        'Practicing Yin-Style Yoga can improve posture by lengthening and releasing tension in the muscles around the spine.',
    },
    {
      title: 'Deeper Breathing',
      description:
        'Yin-Style Yoga encourages deeper breathing, which promotes relaxation and greater awareness of your breath.',
    },
    {
      title: 'Deeper Connection',
      description:
        'Through Yin-Style Yoga, you cultivate a deeper connection to yourself, both mentally and physically.',
    },
  ];
}
