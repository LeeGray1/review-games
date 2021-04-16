import { Component, Input, OnInit } from '@angular/core';
import { IReview } from 'src/app/interfaces/review';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  @Input() reviewData: IReview;
  constructor() { }

  ngOnInit() {
  }
}