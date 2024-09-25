import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  activeIndex: number | null = null;
  items = [
    {
      title: 'What is Yin-Style Yoga?',
      content:
        'Yin-Style Yoga is a slow, meditative practice rooted in traditional Hatha Yoga and inspired by Taoism. By holding poses for extended periods, it gently engages deep connective tissues and muscles, promoting relaxation, flexibility, and calmness while stimulating the body’s energy flow. Taoism introduces the concept of yin and yang, representing complementary opposites. Incorporating Yin-Style Yoga into an often hectic, yang-dominated lifestyle can help create balance, harmonizing rest and activity, relaxation and energy.',
    },
    {
      title: 'Basic Principles of Yin-Style Yoga',
      content:
        'Yin-Style Yoga is based on key principles that distinguish it from other styles of yoga. This practice focuses on releasing tension in the body through prolonged rest in gentle, passive postures. A core principle is staying present and accepting the body’s individual limitations, allowing for a deeper experience without forcing or rushing. The practice cultivates patience, encouraging you to embrace the present moment. Yin-Style Yoga also emphasizes the importance of individuality, as each body is unique, and the experience of each pose will vary from person to person. These principles foster inner peace, mindfulness, and a deeper connection to oneself.',
    },
    {
      title: 'Breathing in Yin-Style Yoga',
      content:
        'In Yin-Style Yoga, breathing plays a crucial role in deepening the connection between body and mind. Conscious, slow breathing helps promote relaxation and calm the mind. Breath is often used to guide movement into a pose. Inhaling creates space and allows the body to open and stretch, while exhaling encourages you to relax and release tension within the pose. Once in the pose, the focus is on maintaining a steady, deep breath to support stillness and mindfulness. It’s important to practice what feels best for you. Explore different breathing techniques to find the one that helps you relax most deeply.',
    },
    {
      title: 'Holding the Poses for a Long Time',
      content:
        'The essence of Yin-Style Yoga lies in the gentle, long-held stretches, where postures are typically held for several minutes. Unlike other yoga styles, Yin-Style Yoga is not about pushing to your physical limits of strength or flexibility. Instead, the goal is to find a comfortable stretch that feels challenging but never overwhelming. When holding a pose, aim to reach a point of gentle tension, where the stretch is felt but without pain or strain. Since everyone’s body is different, this point will vary from person to person. Holding the pose for an extended time allows the body to gradually open up, accessing deeper layers of connective tissue without actively engaging or straining the muscles.',
    },
    {
      title: 'Benefits of Yin-Style Yoga',
      content:
        'Yin-Style Yoga focuses on deep relaxation, inner peace, and increasing flexibility. Holding postures for longer periods helps calm the mind and reduce stress, leading to a profound sense of relaxation and inner balance. Yin-Style Yoga also enhances mindfulness, improves posture, and encourages deeper breathing, all of which contribute to a greater sense of overall well-being. Through the practice of Yin-Style Yoga, you can consciously relax, regenerate, and cultivate a deeper connection with yourself.',
    },
    {
      title: 'Who is the Website For?',
      content:
        'This website is designed for people of all ages with a basic knowledge of yoga. While the poses are not described in full detail, they provide clear guidance on entering and exiting the posture, highlight the target areas, and offer variations. Hand-painted illustrations complement the descriptions to enhance understanding.',
    },
    {
      title: 'Do I Need Props for Yin-Style Yoga?',
      content:
        'Props are not necessary but can enhance your Yin-Style Yoga practice by providing support and comfort. Common props include blocks, bolsters, and blankets, which can help you settle deeper into poses and avoid strain. You can also use household items like pillows or towels if you don’t have yoga props.',
    },
    {
      title: 'Safety Tips for Practicing Yin-Style Yoga',
      content:
        'People with knee problems should be careful, especially with poses that involve deep knee bends. If you have back problems, avoid going too deep into the pose and respect your body’s limits. Remember, it’s always important to adapt the practice to your current physical condition and abilities. When practicing Yin-Style Yoga, it’s important to take a few basic precautions to ensure your safety and comfort. Inverted postures (although rare in Yin-Style Yoga) can temporarily increase blood pressure, so people with high blood pressure should avoid these poses. Always pay close attention to your body’s signals, if you experience tingling, stinging, or any other discomfort, gently exit the pose.',
    },
  ];

  togglePanel(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
