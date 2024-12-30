import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-progression-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './progression-bar.component.html',
  styleUrl: './progression-bar.component.scss',
  animations: [
    trigger('progressAnimation', [
      state('void', style({ width: '0%' })),
      state('*', style({ width: '{{ progressWidth }}' }), { params: { progressWidth: '0%' } }),
      transition(':enter', [
        animate('1.5s ease-in-out', style({ width: '{{ progressWidth }}' }))
      ])
    ])
  ]
})
export class ProgressionBarComponent {
  @Input() carryScore: number = 0;

  getProgressWidth(score: number): string {
    return `${(score / 10) * 100}%`;
  }

  getValueByScore(score: number) {
    if (score >= 9) return 'high';
    if (score >= 7.5) return 'good';
    if (score >= 6) return 'normal';
    if (score >= 4.5) return 'low';
    return 'verylow';

  }

}
