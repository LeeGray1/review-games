export class Game {
}

export class GameCollection {
  results:
    {
      id: number;
      slug: string;
      name: string;
      released: string;
      background_image: string;
      rating: number;
      genres: string;
    }[];
}