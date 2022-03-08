type IGameScreenshots = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { image: string; hidden: boolean }[] | null;
};

export default IGameScreenshots;
