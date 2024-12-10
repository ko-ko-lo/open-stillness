import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
import { ExploreRoutinesComponent } from '../../../components/explore-routines/explore-routines.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../../components/short-intro/short-intro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ShortIntroComponent,
    LibraryDiscoverComponent,
    ExploreRoutinesComponent,
    BenefitsComponent,
    AccordionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class BreathingHomeComponent {
  heroData = {
    subheadline: 'Explore Breathing Techniques',
    headline: 'Breathing is like texting your Nervous System to Relax',
    description:
      'Discover different Breathing Routines to support your well-being, improve your focus, and bring a sense of calm to your day.',
    buttonLabel: 'Explore Routines',
    buttonLink: '/breathing/routines-overview',
    imagePath: 'public/breathing-poses/full-yogic-breath.png',
    imagePathWebP: 'public/breathing-poses/full-yogic-breath.webp',
  };

  shortIntro = {
    text: 'Breathing techniques guide your awareness to your breath, helping you cultivate healthier breathing habits. This simple practice can alleviate stress, and benefit both your body and mind.',
  };

  libraryData = {
    title:
      'Discover a Library of Modern, Traditional and Movement-Based Breathing Techniques',
    description: `Explore a diverse collection of breathing techniques to support your well-being, from modern practices backed by science to traditional methods rooted in ancient wisdom, and movement-based exercises for added energy.`,
    buttonLabel: 'Explore Techniques',
    buttonLink: '/breathing/library',
    images: [
      { src: 'public/breathing-poses/humming-bee-breath.png', alt: '' },
      {
        src: 'public/breathing-poses/alternate-nostril-breathing.png',
        alt: '',
      },
      { src: 'public/breathing-poses/abdominal-breathing.png', alt: '' },
    ],
  };

  routinesData = {
    title: 'Deepen Your Practice with Breathing Routines',
    description:
      'Discover Breathing Routines thoughtfully designed to match your skill level, mood, and energy through their intensity. Whether you’re looking to calm, find balance, or energize your day, these Routines help you connect with your breath and deepen your practice.',
    buttonLabel: 'Explore Routines',
    buttonLink: '/breathing/routines-overview',
    imagePath: 'public/routines/preview-humming.png',
    imagePathWebP: 'public/routines/preview-humming.webp',
  };

  benefitsData = {
    title: 'The Benefits of Breathing Practice',
    benefits: [
      {
        title: 'Relaxation & Inner peace',
        description:
          'Breathing techniques calm the mind and body, creating a pathway to deep relaxation and inner peace.',
      },
      {
        title: 'Stress Relief & Mental Calm',
        description:
          'Slow, mindful breathing helps regulate stress hormones, soothing the nervous system and fostering mental clarity.',
      },
      {
        title: 'Enhanced Mindfulness',
        description:
          'Focusing on your breath anchors your awareness to the present moment, cultivating mindfulness and presence.',
      },
      {
        title: 'Increased Focus & Clarity',
        description:
          'Structured breathing patterns sharpen your focus and mental clarity, making it easier to stay present and productive.',
      },
      {
        title: 'Connection to Yourself',
        description:
          'Intentional breathing fosters self-awareness, deepening your connection to your thoughts, emotions, and body.',
      },
      {
        title: 'Better Sleep Quality',
        description:
          'Relaxing breathwork soothes your mind and body, making it easier to transition into restful, rejuvenating sleep.',
      },
      {
        title: 'Slower Breathing for a Calmer Nervous System',
        description:
          'Reducing the speed of your breath activates the parasympathetic nervous system, helping your body unwind and relax.',
      },
      {
        title: 'Deeper, More Efficient Breathing',
        description:
          'Breathing practices strengthen your diaphragm and expand your lung capacity, encouraging fuller, healthier breaths.',
      },
      {
        title: 'Improved Lung Elasticity & Capacity',
        description:
          'Deep breathing keeps your lung tissues flexible and strong, enhancing respiratory health and efficiency.',
      },
    ],
  };

  accordionData = {
    title: 'Breathing Techniques: Your Questions Answered and More',

    items: [
      {
        title: 'Headline 1',
        content: 'Content 1',
      },
      {
        title: 'Headline 2',
        content: 'Content 2',
      },
      {
        title: 'Headline 3',
        content: 'Content 3',
      },
      {
        title: 'Headline 4',
        content: 'Content 4',
      },
      {
        title: 'Headline 5',
        content: 'Content 5',
      },
      {
        title: 'Headline 6',
        content: 'Content 6',
      },
      {
        title: 'Headline 7',
        content: 'Content 7',
      },
      {
        title: 'Headline 8',
        content: 'Content 8',
      },
    ],
  };
}
