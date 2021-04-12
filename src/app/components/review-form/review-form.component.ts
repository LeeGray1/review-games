import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IReview } from 'src/app/interfaces/review';


@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input() reviews: IReview;

  @Output() reviewFormClose = new EventEmitter<IReview>();

  isNewReviewForm: boolean = false;
  reviewForm: FormGroup;
  message: string = '';



  get reviewer() {
    return this.reviewForm.get('reviewer')
  }
  get date() {
    return this.reviewForm.get('date')
  }
  get review() {
    return this.reviewForm.get('review')
  }
  get rating() {
    return this.reviewForm.get('rating')
  }
  get game() {
    return this.reviewForm.get('game')
  }


  constructor() { }

  ngOnInit(): void {

    console.table(this.reviews);
    if (this.reviews == null) {
      this.reviews = { reviewer: '', date: new Date, review: '', rating: 0, game: '', id: '' };
      this.isNewReviewForm = true;
    }
    this.reviewForm = new FormGroup({
      reviewer: new FormControl(this.reviews.reviewer, [Validators.required]),
      date: new FormControl(this.reviews.date, [Validators.required]),
      review: new FormControl(this.reviews.review, [Validators.required]),
      score: new FormControl(this.reviews.rating, [Validators.required]),
      game: new FormControl(this.reviews.game, [Validators.required])
    });

  }

  onSubmit() {
    this.reviewFormClose.emit(this.reviewForm.value)
  }

  closeForm() {
    this.reviewFormClose.emit(null)
  }

}
