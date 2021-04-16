import { Component, OnInit } from '@angular/core';
import { IReview, Review } from 'src/app/interfaces/review';
import { ReviewApiService } from 'src/app/services/review-api.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  providers: [ReviewApiService]
})
export class ReviewFormComponent implements OnInit {
  reviewsData: IReview[];
  show: boolean;
  constructor(private _reviewApiService: ReviewApiService) { }

  ngOnInit(): void {
  }

  addTheReview(game: string, rating: number, date: string, review: string, reviewer: string): boolean {
    let tempReview: IReview;
    tempReview = new Review(game, rating, date, review, reviewer);
    this._reviewApiService.addReviewData(tempReview);
    return false;
  }
}
