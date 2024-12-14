import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { BreathingRoutinesCardComponent } from '../../components/breathing-routines-card/breathing-routines-card.component';
import { HeroHomeComponent } from '../../components/hero-home/hero-home.component';
import { PathwaysCardComponent } from '../../components/pathways-card/pathways-card.component';
import { ShortIntroComponent } from '../../components/short-intro/short-intro.component';
import { TrainingCardComponent } from '../../components/training-card/training-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccordionComponent,
    ShortIntroComponent,
    HeroHomeComponent,
    PathwaysCardComponent,
    CommonModule,
    BreathingRoutinesCardComponent,
    TrainingCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  shortIntro = {
    text: 'Cultivate stillness and strength with ease. Explore Yin-Style Yoga and Breathing Techniques through introductions, libraries, and routines designed to guide your journey.',
  };

  singleRoutine = {
    name: 'Calm and Focus: A Gentle Breathing Journey',
    time: '20',
    intensity: 'Easy',
    description:
      "Through simple, soothing techniques like Coherent Breathing and Humming Bee Breath, you'll gently balance your energy and quiet your mind.",
    image: '/public/routines/preview-nostril.png',
    imageWebp: '/public/routines/preview-nostril.webp',
    slug: 'breathing-calm-focus',
  };

  singleRoutineYoga = {
    name: 'Yin-Style Yoga for a Healthy Back',
    time: '40',
    targetAreas: 'Back and Spine',
    description:
      'This Yin-Style Yoga Routine is all about strengthening and relaxing your back. You start with a short Meditation, followed by a series of poses such as Butterfly, Deer and Sphinx.',
    introText:
      'Do something good for your back. This Yin-Style Yoga Routine is all about strengthening and relaxing your back. You start with a short Meditation to prepare you for the routine, followed by a series of gentle and focused poses such as Butterfly, Deer and Sphinx. Each exercise has been chosen to soothe your back.',
    image: '/public/routines/preview-sphinx.png',
    slug: 'healthy-back',
  };

  accordionData = {
    title: 'Your Questions Answered and More',

    items: [
      {
        title: 'How do I get started with the application?',
        content: [
          {
            text: 'Begin with a routine, a simple pose, or a technique from one of the libraries - or explore a topic that feels right for you.',
          },
          {
            text: 'The application is thoughtfully divided into two sections: Breathing Techniques and Yin-Style Yoga. Each section is designed to gently guide you through your journey:',
          },
          {
            list: [
              'Introduction Pages: Learn the basics and understand how each practice can support your well-being.',
              'Libraries: Discover a wealth of resources, from techniques and poses to variants and tips.',
              'Routine Overviews: Browse a collection of routines tailored to different needs.',
              'Individual Routine Pages: Step into guided practices that walk you through every movement or breath with care and clarity.',
            ],
          },
          {
            text: "Take your time, explore what resonates, and remember - there's no right or wrong way to start - only what feels comfortable.",
          },
        ],
      },
      {
        title: "What if I don't have much time?",
        content: [
          {
            text: 'Even with just a few minutes a day, you can make a meaningful difference in your well-being. Start small - try one breathing technique or 2–3 gentle poses. As little as 5–10 minutes can help you feel more connected and at ease.',
          },
          {
            text: "The most important thing is consistency. Focus on coming back to your practice, even if only for a couple of minutes. This is your time to care for yourself, and it's not about how long you spend - it's about the quality of the moments you give to yourself.",
          },
          {
            text: "Remember: it's not a race. It's a journey, and every step you take is valuable.",
          },
        ],
      },
      {
        title: 'Can I combine Yin-Style Yoga and Breathing Techniques?',
        content: [
          {
            text: 'Absolutely, combining Yin-Style Yoga and Breathing Techniques can beautifully enhance your practice, creating a deeper sense of balance and connection.',
          },
          {
            text: 'For example, you might start your practice with a breathing technique instead of meditation to prepare your mind and body for the poses ahead. Or, you could incorporate Yin-Style Yoga poses between breathing techniques - allowing your body to rest and reset while preparing for the next breathwork session.',
          },
          {
            text: "Feel free to explore and discover what works best for you. This is your practice, and it's all about finding the rhythm that nurtures your well-being.",
          },
        ],
      },
      {
        title: 'How Can I Stay Motivated?',
        content: [
          {
            text: 'Focus on how these practices make you feel rather than on the outcome. Celebrate small wins, like feeling more relaxed or grounded, and remind yourself that this is time dedicated to your self-care.',
          },
          {
            text: 'Finding a routine that you enjoy and look forward to is key. If practicing for 30 minutes feels like too much, try starting with just 10 minutes - every small effort counts. Most importantly, listen to your needs and do what feels comfortable for you. There’s no need to force anything; this is your practice, and it should feel nourishing, not stressful.',
          },
          {
            text: "If Yin-Style Yoga or Breathing Techniques don't resonate with you, that's okay! Explore other practices or approaches that feel right for you. The most important thing is finding something that brings you joy and makes you want to come back.",
          },
        ],
      },
      {
        title: "What's More Important: the Journey or the Goal?",
        content: [
          {
            text: "In practices like Yin-Style Yoga and Breathing Techniques, the journey matters so much more than the goal. These practices are not about achieving perfection or ticking off milestones - they're about connecting with yourself in the present moment.",
          },
          {
            text: 'Focus on how you feel during the practice, not just the results you hope to see. Notice the little things: the way your body softens in a pose, the calming rhythm of your breath, or the peace that comes from simply taking a pause. These small moments are where the magic happens.',
          },
          {
            text: "By letting go of expectations and embracing the experience itself, you'll find that the practice becomes more meaningful, enjoyable, and sustainable. Remember, this is your time to care for yourself - be gentle, take it slow, and trust the process.",
          },
        ],
      },
      {
        title: 'How Often Should I Practice?',
        content: [
          {
            text: "There's no set rule - it's about what works best for you and your schedule. Some people practice daily, while others find a few times a week is just right. Start small, listen to your needs, and gradually build a routine that supports your well-being.",
          },
        ],
      },
    ],
  };
}
