import { Component } from '@angular/core';
import { AccordionComponent } from '../../../components/accordion/accordion.component';
import { BenefitsComponent } from '../../../components/benefits/benefits.component';
import { HeroComponent } from '../../../components/hero/hero.component';
import { LibraryDiscoverComponent } from '../../../components/library-discover/library-discover.component';
import { ShortInformationComponent } from '../../../components/short-information/short-information.component';
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
    ShortInformationComponent,
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
    headline: 'Unfold Your Awareness Through Meditation.',
    description:
      'Meditation is the space where stillness and growth meet - a lifelong journey with no race, no finish line, only the quiet unfolding of awareness, moment by moment.',
    buttonLabel: 'Explore Meditations',
    buttonLink: './library',
    imagePath: 'public/yoga-poses/meditation.png',
    imagePathWebP: 'public/yoga-poses/meditation.webp',
  };

  shortIntro = {
    text: 'Meditation cultivates clarity and peace of mind - qualities that bring depth and meaning to everyday life. Whether you seek stillness, self-awareness, or a sense of balance, meditation is a practice that unfolds at your own pace, one breath at a time.',
  };

  shortInformation = {
    headline: 'Trust the Process, Every Moment Matters',
    text: "Meditation isn't about feeling calm all the time - it's about being present with whatever arises. Some days will feel peaceful, others restless, and that’s okay. Every meditation, even a difficult one, is valuable because you are showing up for yourself. Trust the process, meet your experience with kindness, and know that growth unfolds in its own time.",
  };

  libraryData = {
    title:
      'Discover a Library of Meditations for Stillness, Awareness & Growth',
    description: `Explore a diverse collection of meditation techniques, ranging from deeply grounding body scans to traditional practices rooted in mindfulness and self-awareness. Whether you're looking to relax, sharpen your focus, or cultivate inner peace, you'll find meditations to support your journey.`,
    buttonLabel: 'Explore Meditations',
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
        title: 'Encourages a Balanced Nervous System',
        description:
          "A balanced nervous system means being able to handle stress without feeling overwhelmed and to relax without feeling stuck in exhaustion. Meditation helps regulate the body's response to challenges, promoting a sense of calm and physical ease.",
      },

      {
        title: 'Reduced Stress & Emotional Balance',
        description:
          'Meditation can help regulate stress hormones and support emotional resilience, allowing you to navigate challenges with greater ease. By creating moments of stillness, it fosters a sense of inner calm and balance.',
      },

      {
        title: 'Better Sleep & Relaxation',
        description:
          'Meditation helps quiet racing thoughts and promotes deep relaxation, which may lead to improved sleep quality over time. It creates a soothing space for the body and mind to unwind and restore balance.',
      },

      {
        title: 'Increased Focus & Mental Clarity',
        description:
          'By training the mind to return to the present moment, meditation may enhance attention, memory, and cognitive function over time. Regular practice supports mental sharpness and the ability to stay present.',
      },

      {
        title: 'Emotional Regulation & Stability',
        description:
          'Meditation helps cultivate awareness of emotions, allowing you to pause, reflect, and respond more mindfully rather than reacting impulsively. With regular practice, you may experience greater emotional stability and a deeper sense of control over your reactions.',
      },

      {
        title: 'Deeper Self-Awareness',
        description:
          'Turning inward helps build a stronger connection with your thoughts, emotions, and inner world, fostering greater self-understanding. Over time, meditation encourages insight, self-acceptance, and inner growth.',
      },
    ],
  };

  accordionData = {
    title: 'Meditation: Your Questions Answered and More',

    items: [
      {
        title: 'What is Meditation and Why Do It?',
        content: [
          {
            text: 'Meditation is a simple yet profound practice of turning inward. At its heart, it is about gently <strong>focusing your attention</strong> - whether on the breath, a sound, a sensation, or simply the present moment. Some describe it as a way to bring harmony between the mind, body, and soul, while others see it as a practice of self-awareness and deep inner peace.',
          },
          {
            text: "For thousands of years, people have used meditation to calm the mind, expand their awareness, and connect with themselves more deeply. It's not about stopping thoughts or achieving perfection - it’s about learning to be present with whatever arises, with kindness and curiosity.",
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
            text: 'Rather than aiming for long sessions, focus on <strong>consistency over intensity</strong>. A few minutes of meditation every day can be far more powerful than one long session now and then.',
          },
        ],
      },

      {
        title: 'Finding a Comfortable Meditation Posture',
        content: [
          {
            text: 'There is no single “correct” meditation posture. What matters most is that you feel stable, comfortable, and at ease. Different traditions teach different ways to sit, stand, or even lie down while meditating. The key is to find what feels good in your body.',
          },
          {
            text: 'Here are some ways to settle into a posture that supports you:',
          },
          {
            list: [
              'Sit, stand, or lie down - whichever allows you to feel relaxed yet present.',
              'Let your spine find its natural alignment, gently lengthening without strain. Imagine your body softly expanding, like a tree growing toward the sky.',
              'Rest your hands wherever they feel comfortable, on your knees, in your lap, or gently folded.',
              'If sitting cross-legged is uncomfortable, feel free to use a cushion, or a chair. There is no right or wrong way to be in your body.',
              'Your eyes can be open or closed, whatever helps you feel more grounded. If open, keep your gaze soft and slightly downward.',
              'Adjust as needed. Comfort is more important than following any rules. Trust your body, it knows what feels right.',
            ],
          },
          {
            text: '<strong>This is your practice. You are allowed to take up space, shift as needed, and find what feels supportive for you.</strong>',
          },
        ],
      },

      {
        title: 'The Role of Breath in Meditation',
        content: [
          {
            text: 'The breath is often called the bridge between body and mind, gently connecting us to the present moment. In meditation, <strong>the breath can serve as an anchor</strong>, offering a steady, natural focus when the mind begins to wander.',
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
              '<strong>Find your personal motivation.</strong> People meditate for many reasons - relaxation, clarity, emotional balance, spiritual growth, or simply a sense of peace. There is no "right" reason. What draws you to meditation? Connecting with your personal intention can help you return to your practice when life gets busy.',
              '<strong>Start small and make it doable.</strong> Meditation doesn\'t have to be long, just a few minutes a day is enough to create a meaningful habit. The key is to make it accessible rather than overwhelming. A short, mindful pause is better than skipping meditation altogether because you feel you don\'t have "enough time." ',
              '<strong>Let go of expectations.</strong> It\'s normal to feel like your meditation "isn\'t working" or that your mind is too busy. Instead of aiming for a perfect experience, trust the process. Even if your practice feels restless or unclear, the effort itself is beneficial. Every moment of presence adds up over time.',
              '<strong>Anchor your practice to daily life.</strong> Attach meditation to something you already do, like after brushing your teeth, before bed, or while drinking your morning tea. Small rituals help make it a natural part of your day.',
              "<strong>Be kind to yourself.</strong> Meditation isn't about discipline or achievement, it's about meeting yourself where you are, with acceptance and curiosity. If you find yourself judging your practice, see if you can soften into kindness instead. Every time you return, you're reinforcing your commitment to your own well-being.",
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
            text: 'Meditation can take many forms, but most practices fall into one of two broad approaches:',
          },
          {
            list: [
              '<strong>Focused Attention Meditation</strong> invites you to rest your awareness on a specific anchor, such as the breath, a sound, a mantra, or even movement. This steady point of attention can bring a sense of stability, clarity, and deep presence.',
              '<strong>Open Awareness Meditation</strong> allows you to remain present with everything that arises, thoughts, sensations, sounds, without fixating on any one experience. Instead of narrowing focus, awareness expands, allowing everything to come and go naturally.',
            ],
          },
          {
            text: '<strong>Meditation is a deeply personal practice,</strong> and there is no right or wrong way. Some people find comfort in having a clear point of focus, while others feel at ease simply resting in open awareness. Both paths lead to mindfulness. Trust yourself, explore freely, and know that your experience, whatever it may be, is completely valid.',
          },
          {
            text: "If you'd like to experiment, here are some common focal points for meditation:",
          },
          {
            list: [
              '<strong>A bodily sensation,</strong> such as the breath, which serves as a natural and grounding anchor.',
              '<strong>An action,</strong> such as mindful walking, where awareness is placed on each step.',
              '<strong>An external object</strong>, like the gentle flicker of a candle flame.',
              '<strong>A thought or feeling,</strong> such as cultivating peace, joy, love, or compassion.',
              '<strong>A mantra or sound,</strong> whether a single word, a meaningful phrase, or a gentle chant.',
            ],
          },
          {
            text: 'Meditation is not about reaching a "higher level", it\'s about connecting with yourself in the way that feels most true.',
          },
        ],
      },

      {
        title:
          'Why Thoughts During Meditation Are Normal (And How to Handle Them)',
        content: [
          {
            text: "It's completely natural for your mind to wander during meditation - this happens to everyone, no matter how experienced they are.",
          },
          {
            text: 'You might find yourself thinking about the past, planning for the future, or simply lost in random thoughts. Instead of resisting them, try to observe them without judgment - as if you were watching clouds pass through the sky. When you notice a thought, softly bring your focus back to your breath, your body, or the sounds around you.',
          },
          {
            text: "<strong>Meditation isn't about forcing concentration but about returning,</strong> again and again, with kindness and curiosity. Some days your mind may feel calm, while other days it may be restless. Both are part of the practice. The more you meditate, the easier it becomes to stay present and at peace with whatever arises.",
          },
          {
            text: 'Think of meditation like yoga for the mind: it can have an edge, a place where you explore your thoughts and emotions, but it should never feel like a battle. If frustration arises, soften. If restlessness appears, allow it. This is a lifelong journey - there is no race, no finish line, just the unfolding of your own awareness, moment by moment.',
          },
        ],
      },

      {
        title: 'How Meditation Affects Your Brain',
        content: [
          {
            text: 'Meditation may support and influence the brain in ways that promote calm, emotional balance, and focus. Research suggests that regular practice can reshape neural pathways, helping the mind adapt to stress and enhancing mental clarity.',
          },
          {
            list: [
              '<strong>Supports Stress Regulation (May Reduce Amygdala Reactivity)</strong></br>The amygdala, the brain’s "alarm center" for fear and stress, is often overactive in moments of anxiety. Studies suggest that consistent meditation practice may reduce its reactivity, leading to a calmer stress response over time',
              '<strong>Encourages Emotional Balance (Engages the Prefrontal Cortex)</strong></br>The prefrontal cortex, the part of the brain responsible for rational thinking and emotional regulation, may become more active with regular meditation, helping with self-awareness and emotional stability.',
              '<strong>May Improve Focus and Memory (Linked to Gray Matter Density)</strong></br>Some research suggests that meditation may contribute to increases in gray matter in areas of the brain associated with attention, learning, and memory, potentially helping with cognitive function and concentration.',
              '<strong>Enhances Self-Awareness and Connection (Supports the Default Mode Network)</strong></br>The default mode network (DMN), responsible for self-reflection and mind-wandering, may become more balanced and less prone to overactivity, supporting greater presence and reducing overthinking.',
              '<strong>Meditation and Brain Waves</strong></br>Meditation is linked to changes in brain wave activity, which can influence mood, alertness, and relaxation: <ul><li><strong>Alpha waves</strong> (relaxed, wakeful state) tend to increase, promoting calmness.</li><li><strong>Theta waves</strong> (deep relaxation and creativity) may become more active in some meditation styles.</li><li><strong>Gamma waves</strong> (linked to deep focus and insight) have been observed in experienced meditators.</li></ul>',
            ],
          },
          {
            text: '<strong>These shifts in brain wave activity may help explain why meditation can create a sense of clarity, relaxation, and deep presence.</strong>',
          },
        ],
      },
      {
        title: 'How Meditation Supports the Nervous System',
        content: [
          {
            text: 'Meditation can help shift the nervous system from stress mode into a state of greater relaxation. This is because meditation encourages the body to activate its parasympathetic nervous system, the "rest and digest" response that promotes calm and recovery.',
          },
          {
            list: [
              '<strong>Encourages a Shift to "Rest and Digest" Mode</strong></br> Instead of staying in fight-or-flight mode, meditation may help activate the parasympathetic nervous system, which is responsible for slowing the heart rate, relaxing muscles, and restoring balance to the body.',
              '<strong>May Help Regulate Cortisol (Stress Hormone)</strong></br>Chronic stress can lead to high levels of cortisol, which can affect mood, digestion, and sleep. Some studies indicate that meditation may support a more balanced stress response, though effects vary from person to person.',
              '<strong>Supports Heart Rate and Breath Regulation</strong></br>Meditation, especially when paired with mindful breathing techniques, can help slow and regulate breathing patterns, which in turn supports heart rate variability, a key factor in stress resilience.',
              '<strong>How the Breath Influences the Nervous System</strong></br>Breathing is one of the few bodily functions that is both automatic and controllable, making it a powerful tool in meditation:</br><ul><li>Slow, deep breaths signal the body to relax.</li><li>Exhaling longer than inhaling can help shift the nervous system into a more parasympathetic (relaxed) state.</li><li>Awareness of the breath helps anchor attention, reducing racing thoughts and physiological tension.</li></ul>',
            ],
          },
        ],
      },
    ],
  };
}
