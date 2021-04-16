import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";

import { IReview } from "../interfaces/review";

@Injectable()

export class ReviewApiService {
    reviewsDataCollection: AngularFirestoreCollection<IReview>;

    reviewsData: Observable<IReview[]>;

    allReviewsData: IReview[];

    errorMessage: string;

    constructor(private _http: HttpClient, private _afs: AngularFirestore) {
        this.reviewsDataCollection = _afs.collection<IReview>("reviews_data");
    }

    getReviewData(): Observable<IReview[]> {
        this.reviewsData = this.reviewsDataCollection.valueChanges();
        this.reviewsData.subscribe(data => console.log("getReviewsData:" + JSON.stringify(data)));
        return this.reviewsData;
    }

    addReviewData(review: IReview): void {
        this.reviewsDataCollection.add(JSON.parse(JSON.stringify(review)));
    }

    private handleError(err: HttpErrorResponse) {
        console.log('ReviewApiService: ' + err.message);
        return Observable.throw(err.message);
    }
}