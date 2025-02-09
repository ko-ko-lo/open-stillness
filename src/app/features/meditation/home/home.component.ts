import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
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
    BenefitsComponent,
    AccordionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class MeditationHomeComponent {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setFullTitle('Home Meditation');
  }

  heroData = {
    subheadline: 'Explore Meditation Techniques',
    headline: 'Unfold your own awareness by Meditation.',
    description: 'Preparing',
    buttonLabel: 'Preparing',
    buttonLink: 'Preparing',
    imagePath: 'public/yoga-poses/meditation.png',
    imagePathWebP: 'public/yoga-poses/meditation.webp',
  };

  shortIntro = {
    text: 'Meditation is a lifelong journey - there is no race, no finish line, just the unfolding of your own awareness, moment by moment.',
  };

  libraryData = {
    title: 'Preparing',
    description: `Preparing`,
    buttonLabel: 'Preparing',
    buttonLink: '/meditation/library',
    images: [
      { src: 'public/yoga-poses/meditation.png', alt: '' },
      { src: 'public/yoga-poses/meditation.png', alt: '' },
      { src: 'public/yoga-poses/meditation.png', alt: '' },
    ],
  };

  benefitsData = {
    title: 'The Benefits of Meditation Practice',
    benefits: [
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
      {
        title: 'Preparing',
        description: 'Preparing',
      },
    ],
  };

  accordionData = {
    title: 'Meditation Techniques: Your Questions Answered and More',

    items: [
      {
        title: 'What is Meditation and Why Do It?',
        content: [
          {
            text: 'Meditation is a simple yet profound practice of turning inward. At its heart, it is about gently focusing your attention - whether on the breath, a sound, a sensation, or simply the present moment. Some describe it as a way to bring harmony between the mind, body, and soul, while others see it as a practice of self-awareness and deep inner peace.',
          },
          {
            text: 'For thousands of years, people have used meditation to calm the mind, expand their awareness, and connect with themselves more deeply. It’s not about stopping thoughts or achieving perfection - it’s about learning to be present with whatever arises, with kindness and curiosity.',
          },
          {
            text: 'Through regular meditation, you may begin to feel more at ease in daily life, more aware of your thoughts and emotions, and more connected to yourself and the world around you. Some people find that it helps them release tension, unlock creativity, or simply find a moment of stillness in a busy day.',
          },
          {
            text: 'There is no single "right way" to meditate - just an opportunity to explore, breathe, and be.',
          },
        ],
      },

      {
        title: 'Finding the Right Meditation Duration',
        content: [
          {
            text: 'When starting a meditation practice, begin with short, manageable sessions - perhaps 5 to 20 minutes at a time. Over time, you may find that your practice naturally extends. If that happens, simply enjoy the moment. But there is no need to force it - meditation should feel like a space of ease, not a struggle with time.',
          },
          {
            text: 'Rather than aiming for long sessions right away, focus on consistency over intensity. A few minutes of meditation every day can be far more powerful than one long session now and then.',
          },
        ],
      },

      {
        title: 'Finding a Comfortable Meditation Posture',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'The Role of Breath in Meditation',
        content: [
          {
            text: 'The breath is often called the bridge between body and mind, gently connecting us to the present moment. In meditation, the breath can serve as an anchor, offering a steady, natural focus when the mind begins to wander.',
          },
          {
            text: 'Unlike thoughts and emotions, which constantly shift and change, the breath is always here, flowing in and out, moment by moment. By bringing awareness to the breath, we give the mind a place to rest, creating a sense of stability and ease.',
          },
          {
            text: 'In many traditions, mindful breathing is a central meditation practice. Instead of trying to control the breath, we simply observe it as it is, noticing its rhythm, its depth, and the way it feels in the body. Some find comfort in focusing on the rise and fall of the belly, while others notice the sensation of air passing through the nose. There is no right or wrong way, just an invitation to explore.',
          },
          {
            text: 'If your thoughts begin to drift, you can always return to the breath. This simple act of returning is meditation itself.',
          },
          {
            text: 'Breathing happens on its own, asking nothing of us. And in meditation, it can be a quiet support, reminding us that we are here, we are present, and we are enough.',
          },
        ],
      },

      {
        title: 'Common Challenges in Meditation and How to Overcome Them',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title: 'How to Stay Consistent: Building a Meditation Habit',
        content: [
          {
            text: "Like any meaningful practice, meditation takes time to become a natural part of your life. You don't grow a tree overnight - consistency matters more than perfection. If you miss a day (or several), simply begin again with kindness.",
          },
          {
            text: 'Here are some gentle ways to stay consistent:',
          },
          {
            list: [
              'Find your personal motivation. People meditate for many reasons - relaxation, clarity, emotional balance, spiritual growth, or simply a sense of peace. There is no "right" reason. What draws you to meditation? Connecting with your personal intention can help you return to your practice when life gets busy.',
              'Start small and make it doable. Meditation doesn\'t have to be long, just a few minutes a day is enough to create a meaningful habit. The key is to make it accessible rather than overwhelming. A short, mindful pause is better than skipping meditation altogether because you feel you don\'t have "enough time." ',
              'Let go of expectations. It\'s normal to feel like your meditation "isn\'t working" or that your mind is too busy. Instead of aiming for a perfect experience, trust the process. Even if your practice feels restless or unclear, the effort itself is beneficial. Every moment of presence adds up over time.',
              'Anchor your practice to daily life. Attach meditation to something you already do, like after brushing your teeth, before bed, or while drinking your morning tea. Small rituals help make it a natural part of your day.',
              "Be kind to yourself. Meditation isn't about discipline or achievement, it's about meeting yourself where you are, with acceptance and curiosity. If you find yourself judging your practice, see if you can soften into kindness instead. Every time you return, you're reinforcing your commitment to your own well-being.",
            ],
          },
          {
            text: 'Remember: No matter how many times you start over, you are still on the path.',
          },
        ],
      },

      {
        title: 'Focused Attention vs. Open Awareness: Two Paths to Mindfulness',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },

      {
        title:
          'Why Thoughts During Meditation Are Normal (And How to Handle Them)',
        content: [
          {
            text: "It's completely natural for your mind to wander during meditation - this happens to everyone, no matter how experienced they are. Meditation isn’t about stopping thoughts, it's about noticing when your mind drifts and gently returning to the present.",
          },
          {
            text: 'You might find yourself thinking about the past, planning for the future, or simply lost in random thoughts. Instead of resisting them, try to observe them without judgment - as if you were watching clouds pass through the sky. When you notice a thought, softly bring your focus back to your breath, your body, or the sounds around you.',
          },
          {
            text: "Meditation isn't about forcing concentration but about returning, again and again, with kindness and curiosity. Some days your mind may feel calm, while other days it may be restless. Both are part of the practice. The more you meditate, the easier it becomes to stay present and at peace with whatever arises.",
          },
          {
            text: 'Think of meditation like yoga for the mind: it can have an edge, a place where you explore your thoughts and emotions, but it should never feel like a battle. If frustration arises, soften. If restlessness appears, allow it. This is a lifelong journey - there is no race, no finish line, just the unfolding of your own awareness, moment by moment.',
          },
        ],
      },

      {
        title: 'How Meditation Affects Your Brain and Nervous System',
        content: [
          {
            text: 'Preparing',
          },
        ],
      },
    ],
  };
}
