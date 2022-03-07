interface IBestseller {
  Name: string;
  Platform: string;
  Year_of_Release: string;
  Genre: string;
  Publisher: string | null;
  NA_Sales: number | null;
  EU_Sales: number | null;
  JP_Sales: number | null;
  Other_Sales: number | null;
  Global_Sales: number;
  Critic_Score: number | null;
  Critic_Count: number | null;
  User_Score: string | null;
  User_Count: number | null;
  Developer: string | null;
  Rating: string | null;
}

export default IBestseller
