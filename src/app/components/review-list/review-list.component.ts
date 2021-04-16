import { Component, OnInit } from '@angular/core';
import { ReviewApiService } from '../../services/review-api.service';
import { IReview, Review } from '../../interfaces/review';

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.css'],
    providers: [ReviewApiService]
})
export class ReviewListComponent implements OnInit {
    reviewsData: IReview[];
    show: boolean;

    constructor(private _reviewApiService: ReviewApiService) { }

    ngOnInit() {
        this._reviewApiService.getReviewData().subscribe(reviewsData => { this.reviewsData = reviewsData });
    }

    addTheReview(game: string, rating: number, date: string, review: string, reviewer: string): boolean {
        let tempReview: IReview;
        tempReview = new Review(game, rating, date, review, reviewer);
        this._reviewApiService.addReviewData(tempReview);
        return false;
    }
}