export interface IReview {
    game: String,
    rating: Number,
    date: String,
    review: String,
    reviewer: String,

}

export class Review implements IReview {
    game: String;
    rating: Number;
    date: String;
    review: String;
    reviewer: String;

    constructor(game: string, rating: number, date: string, review: string, reviewer: string) {
        this.game = game;
        this.rating = rating;
        this.date = date;
        this.review = review;
        this.reviewer = reviewer;

    }
}
