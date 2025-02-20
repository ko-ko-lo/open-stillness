import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
import { ExploreRoutinesComponent } from '../../../components/explore-routines/explore-routines.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../../components/library-discover/library-discover.component';
import { ShortIntroComponent } from '../../../components/short-intro/short-intro.component';
import { ROUTES } from '../../../constants/routes';

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
    headline: 'Breathing is like texting your Nervous System to Relax.',
    description:
      'Discover different Breathing Routines to support your well-being, improve your focus, and bring a sense of calm to your day.',
    buttonLabel: 'Explore Routines',
    buttonLink: `/${ROUTES.BREATHWORK.ROUTINES_OVERVIEW}`,
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
    buttonLink: `/${ROUTES.BREATHWORK.LIBRARY}`,
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
    buttonLink: `/${ROUTES.BREATHWORK.ROUTINES_OVERVIEW}`,
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
      /*{
        title: 'Increased Focus & Clarity',
        description:
          'Structured breathing patterns sharpen your focus and mental clarity, making it easier to stay present and productive.',
      },*/
      {
        title: 'Connection to Yourself',
        description:
          'Intentional breathing fosters self-awareness, deepening your connection to your thoughts, emotions, and body.',
      },
      /*{
        title: 'Better Sleep Quality',
        description:
          'Relaxing breathwork soothes your mind and body, making it easier to transition into restful, rejuvenating sleep.',
      },*/
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
        content: [
          {
            text: 'Pause for a moment and tune into your breath. Notice how your breathing changes in different situations or emotional states. Ask yourself:',
          },
          {
            list: [
              'Am I breathing shallowly?',
              'Is my breathing erratic?',
              'Do I get out of breath easily?',
              'Do I hold my breath under stress?',
              'Am I breathing faster than feels natural?',
            ],
          },
          {
            text: 'These patterns can reveal stress, tension, or habits like shallow or irregular breathing. Recognizing them is the first step toward healthier, more intentional breathing.',
          },
        ],
      },
      {
        title: 'Why Choose Nasal Breathing?',
        content: [
          {
            text: 'Breathing through your nose offers numerous benefits for your body and mind. Unlike mouth breathing, nasal breathing naturally slows down your breath, as air passes through two smaller openings rather than one larger one. This slower, steadier rhythm helps your body relax and promotes efficient oxygen exchange. ',
          },
          {
            text: 'Nasal breathing also acts as a natural filter, cleaning the air by trapping dust, allergens, and other particles. Additionally, it warms and humidifies the air, making it gentler on your lungs. ',
          },
          {
            text: 'While nasal breathing is generally preferred, there are exceptions—some breathing techniques encourage mouth breathing for specific purposes, such as releasing tension or energizing the body. ',
          },
        ],
      },
      {
        title: 'Exploring Different Breathing Styles',
        content: [
          {
            text: 'Breathing takes many forms, each with its unique effects on the body and mind. Diaphragmatic breathing, or "belly breathing," engages the diaphragm to encourage deep, relaxed breaths that fully oxygenate the body. In contrast, shallow chest breathing can sometimes signal stress or tension, offering an opportunity to consciously reconnect with a more supportive breath.',
          },
          {
            text: 'Eupnea, or normal breathing, is the steady, effortless rhythm your body naturally adopts at rest, maintaining balance without conscious effort. Hyperpnea, on the other hand, refers to deeper or faster breathing, often occurring during physical exertion or as a response to heightened oxygen needs.',
          },
          {
            text: 'Understanding these styles helps you identify your current breathing patterns and explore ways to optimize your breath for relaxation, energy, or mindfulness.',
          },
        ],
      },
      {
        title: 'Unlocking the Power of Breathing Ratios',
        content: [
          {
            text: 'Breathing ratios are a cornerstone of many breathing techniques, offering a way to regulate and balance your breath. A ratio simply represents the timing for each phase of the breath: inhale, hold, exhale, and sometimes pause after the exhale.',
          },
          {
            list: [
              'A 1:1 ratio (e.g., inhale for 4 seconds, exhale for 4 seconds) promotes calm and balance.',
              'A 1:2 ratio (e.g., inhale for 4 seconds, exhale for 8 seconds) supports deep relaxation.',
              'Ratios with breath holds, such as 4:7:8 (inhale 4, hold 7, exhale 8), help to calm the mind and body.',
            ],
          },
          {
            text: 'Adjusting the ratios lets you tailor the practice to your needs, whether it’s energizing the body, calming the mind, or improving focus. Remember, breathwork is most effective when it aligns with what feels good and sustainable for you in the moment.',
          },
        ],
      },
      {
        title: "Pranayama vs. Breathwork: What's the Difference?",
        content: [
          {
            text: 'Pranayama is rooted in ancient yogic traditions and is often seen as the art of controlling the breath. The word itself means "extension of life force" in Sanskrit, and practices typically include structured breathing patterns designed to calm the mind, energize the body, or deepen spiritual awareness. Pranayama is closely tied to yoga philosophy, emphasizing mindfulness, balance, and harmony.',
          },
          {
            text: 'Breathwork, on the other hand, is a more modern, broader term encompassing a variety of techniques that involve conscious breathing. While some forms of breathwork are inspired by yogic practices, others integrate contemporary approaches like therapeutic or somatic breathing for emotional healing, stress relief, or personal growth. Breathwork often focuses on self-discovery and emotional release.',
          },
          {
            text: 'Both practices offer incredible benefits but may resonate differently depending on your goals. If you’re drawn to a traditional, meditative approach, Pranayama might be your path. If you’re seeking a flexible, therapeutic method for relaxation or exploration, Breathwork could be a perfect fit.',
          },
        ],
      },
      {
        title: 'Breathing and Your Nervous System',
        content: [
          {
            text: 'One of the most remarkable effects of intentional breathing is its ability to influence your nervous system. By regulating your breath, you can shift from the body’s stress response (sympathetic nervous system) to the relaxation response (parasympathetic nervous system).',
          },
          {
            text: 'When stress or anxiety takes hold, the sympathetic nervous system is activated. This often shows up as short, rapid, and shallow breathing. However, when you consciously slow your breath, extend the exhalation, and find a steady rhythm, it sends a powerful signal to your body: You are safe.',
          },
          {
            text: 'This simple yet profound act activates the parasympathetic nervous system, which helps calm your mind, relax your body, and restore a sense of peace and clarity. With each slow, steady breath, you’re not just breathing—you’re communicating safety, balance, and well-being to your entire nervous system.',
          },
        ],
      },
      {
        title: 'Relaxing with a Couple of Deep Breaths',
        content: [
          {
            text: 'How many times have you heard someone say, "Just take a couple of deep breaths and relax"? This simple advice is so popular because it really works. Breathing is like sending a message to your nervous system, telling it to let go of tension and invite calm.',
          },
          {
            text: "Here's an easy way to experience this:",
          },
          {
            list: [
              'Sit Comfortably: Find a quiet spot where you can sit or lie down comfortably.',
              'Inhale Slowly: Take a deep breath in through your nose, letting your belly rise. Visualize breathing in a soothing light, filling you with calm.',
              'Pause Briefly: Hold the breath gently for a moment, as if savoring the calmness.',
              'Exhale Fully: Slowly release the breath, imagining any tension flowing out of your body like a soft breeze.',
              'Repeat: Take 3–5 breaths like this, focusing on the sensation of the air and the lightness it brings.',
            ],
          },
          {
            text: 'As you practice, you might picture waves gently lapping at the shore, matching your breath, carrying your tension away.',
          },
        ],
      },
      {
        title: 'Emotions and Your Breath',
        content: [
          {
            text: 'Your breath is a bridge between your mind and body, offering a simple way to find balance during emotional intensity. Deep breathing not only soothes your body but also brings emotional relief, helping you feel steady, calm, and at ease.',
          },
          {
            text: 'When anxiety takes hold, your breath becomes quick and shallow, signaling your body to stay on high alert. By contrast, slow, deep breathing sends a message of safety to your brain, easing stress and inviting relaxation. This gentle rhythm can even help you process emotions, bringing clarity and calm to moments of overwhelm.',
          },
        ],
      },
      {
        title: 'Practicing Safe Breathing Techniques',
        content: [
          {
            text: 'Breathing exercises should always feel comfortable and natural. Keep these safety tips in mind:',
          },
          {
            list: [
              'Consult a physician if you have any health issues.',
              'Practice in a clean space with fresh air.',
              'Avoid straining or forcing your breath; stay relaxed.',
              'Wear loose, comfortable clothing to support movement.',
              'Start with shorter sessions and listen to your body. Stop if you feel dizzy or lightheaded.',
              'Practice on an empty or light stomach for comfort.',
            ],
          },
          {
            text: 'By prioritizing safety, you can fully enjoy the calming and restorative benefits of breathing techniques.',
          },
        ],
      },
    ],
  };
}
