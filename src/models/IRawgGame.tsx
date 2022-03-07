type IGame = {
  id: number | null,
  slug: string,
  name: string | null,
  released: string,
  tba: boolean,
  background_image: string,
  rating: number,
  rating_top: number,
  ratings: {},
  ratings_count: number,
  reviews_text_count: string,
  added: number,
  added_by_status: {},
  metacritic: number,
  playtime: number,
  suggestions_count: number,
  updated: Date | null,
  esrb_rating: {
    id: number,
    slug: string,
    name: string
  },
  platforms: [],
  description?: string | null;
  description_raw?: string | null;
  developers?: { name: string }[];
};

export default IGame
