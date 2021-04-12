import { Component, OnInit } from '@angular/core';
import { IReview } from '../../interfaces/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviewsData: IReview[];
  message: string;
  showReviewForm: boolean = false;
  currentReview: IReview;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {


    this.reviewService.getreview().subscribe({
      next: (value: IReview[]) => this.reviewsData = value,
      complete: () => console.log('review service finished'),
      error: (mess) => this.message = mess
    })

  }

  clicked(review: IReview): void {
    this.currentReview = review;
  }
  openAddReview(): void {
    this.currentReview = null;
    this.showReviewForm = true;
  }
  openEditReview(): void {
    this.showReviewForm = true;
  }
  reviewFormClose(review: IReview): void {
    this.showReviewForm = null;
    console.table(review);
    if (review == null) {
      this.currentReview = null;
    }
    else if (this.currentReview == null) {
      this.addNewReview(review);
    }
    else {
      this.updateReview(this.currentReview.id, review)
    }
  }

  updateReview(id: string, review: IReview) {
    this.reviewService.updateReview(id, review)
      .subscribe({
        next: review => this.message = "review has been updated",
        error: (err) => this.message = err
      });

    this.reviewService.getreview().subscribe({
      next: (value: IReview[]) => this.reviewsData = value,
      complete: () => console.log('review service finished'),
      error: (mess) => this.message = mess
    })

  }
  deleteReview(id: string, review: IReview) {
    this.reviewService.deleteReview(id, review)
      .subscribe({
        next: review => this.message = "review has been deleted",
        error: (err) => this.message = err
      });

  }

  addNewReview(newReview: IReview): void {
    this.reviewService.addReview({ review: '', ...newReview })
      .subscribe({
        next: review => {
          console.log(JSON.stringify(review));
          this.message = "new review added";
        },
        error: (err) => this.message = err
      });
    3
  }


  isSelected(review: IReview): boolean {
    if (!review || !this.currentReview) {
      return false;
    }
    else {
      return review.id === this.currentReview.id;
    }
  }

}