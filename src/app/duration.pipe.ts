import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {

  transform(gameStartTimestamp: number, gameEndTimestamp: number): string {
    if (!gameStartTimestamp || !gameEndTimestamp) return '';

    const start = moment(gameStartTimestamp);
    const end = moment(gameEndTimestamp);

    const durationInMinutes = end.diff(start, 'minutes');
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
      return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
  }
}
