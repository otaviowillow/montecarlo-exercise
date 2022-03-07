interface IBestsellingGame {
  Name: string;
  Platform: string;
  Year_of_Release: string;
  Genre: string;
  Publisher: string;
  NA_Sales: number;
  EU_Sales: number;
  JP_Sales: number;
  Other_Sales: number;
  Global_Sales: number;
  Critic_Score: number | null;
  Critic_Count: number | null;
  User_Score: string | null;
  User_Count: number | null;
  Developer: string;
  Rating: string;
}

export default IBestsellingGame
