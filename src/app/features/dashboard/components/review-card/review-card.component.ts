import { Component, input } from '@angular/core';
import { Review } from '../../../../core/models/review';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-review-card',
  imports: [NgClass],
  templateUrl: './review-card.component.html'
})
export class ReviewCardComponent {

  review = input<Review>()

getArrayStars() {
  return [1,2,3,4,5]
}

}
