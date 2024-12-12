import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
import { ExploreRoutinesComponent } from '../../../components/explore-routines/explore-routines.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../../components/short-intro/short-intro.component';
import { TitleService } from '../../../services/title.service';

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
        title: 'Observe Your Current Breathing Patterns',
        content: ['Content 1'],
      },
      {
        title: 'Why Choose Nasal Breathing?',
        content: [
          'Breathing through your nose offers numerous benefits for your body and mind. Unlike mouth breathing, nasal breathing naturally slows down your breath, as air passes through two smaller openings rather than one larger one. This slower, steadier rhythm helps your body relax and promotes efficient oxygen exchange. ',
          'Nasal breathing also acts as a natural filter, cleaning the air by trapping dust, allergens, and other particles. Additionally, it warms and humidifies the air, making it gentler on your lungs. ',
          'While nasal breathing is generally preferred, there are exceptions—some breathing techniques encourage mouth breathing for specific purposes, such as releasing tension or energizing the body. ',
        ],
      },
      {
        title: 'Exploring Different Breathing Styles',
        content: [
          'Breathing takes many forms, each with its unique effects on the body and mind. Diaphragmatic breathing, or "belly breathing," engages the diaphragm to encourage deep, relaxed breaths that fully oxygenate the body. In contrast, shallow chest breathing can sometimes signal stress or tension, offering an opportunity to consciously reconnect with a more supportive breath.',
          'Eupnea, or normal breathing, is the steady, effortless rhythm your body naturally adopts at rest, maintaining balance without conscious effort. Hyperpnea, on the other hand, refers to deeper or faster breathing, often occurring during physical exertion or as a response to heightened oxygen needs.',
          'Understanding these styles helps you identify your current breathing patterns and explore ways to optimize your breath for relaxation, energy, or mindfulness.',
        ],
      },
      {
        title: 'Unlocking the Power of Breathing Ratios',
        content: ['Content 1'],
      },
      {
        title: "Pranayama vs. Breathwork: What's the Difference?",
        content: [
          'Pranayama is rooted in ancient yogic traditions and is often seen as the art of controlling the breath. The word itself means "extension of life force" in Sanskrit, and practices typically include structured breathing patterns designed to calm the mind, energize the body, or deepen spiritual awareness. Pranayama is closely tied to yoga philosophy, emphasizing mindfulness, balance, and harmony.',
          'Breathwork, on the other hand, is a more modern, broader term encompassing a variety of techniques that involve conscious breathing. While some forms of breathwork are inspired by yogic practices, others integrate contemporary approaches like therapeutic or somatic breathing for emotional healing, stress relief, or personal growth. Breathwork often focuses on self-discovery and emotional release.',
          'Both practices offer incredible benefits but may resonate differently depending on your goals. If you’re drawn to a traditional, meditative approach, Pranayama might be your path. If you’re seeking a flexible, therapeutic method for relaxation or exploration, Breathwork could be a perfect fit.',
        ],
      },
      {
        title: 'Breathing and Your Nervous System',
        content: [
          'One of the most remarkable effects of intentional breathing is its ability to influence your nervous system. By regulating your breath, you can shift from the body’s stress response (sympathetic nervous system) to the relaxation response (parasympathetic nervous system).',
          'When stress or anxiety takes hold, the sympathetic nervous system is activated. This often shows up as short, rapid, and shallow breathing. However, when you consciously slow your breath, extend the exhalation, and find a steady rhythm, it sends a powerful signal to your body: You are safe.',
          'This simple yet profound act activates the parasympathetic nervous system, which helps calm your mind, relax your body, and restore a sense of peace and clarity. With each slow, steady breath, you’re not just breathing—you’re communicating safety, balance, and well-being to your entire nervous system.',
        ],
      },
      {
        title: 'Relaxing with a Couple of Deep Breaths',
        content: ['Content 1'],
      },
      {
        title: 'Emotions and Your Breath',
        content: [
          'Your breath is a bridge between your mind and body, offering a simple way to find balance during emotional intensity. Deep breathing not only soothes your body but also brings emotional relief, helping you feel steady, calm, and at ease.',
          'When anxiety takes hold, your breath becomes quick and shallow, signaling your body to stay on high alert. By contrast, slow, deep breathing sends a message of safety to your brain, easing stress and inviting relaxation. This gentle rhythm can even help you process emotions, bringing clarity and calm to moments of overwhelm.',
        ],
      },
      {
        title: 'Practicing Safe Breathing Techniques',
        content: ['Content 1'],
      },
    ],
  };

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setFullTitle('Home Breathing');
  }
}
