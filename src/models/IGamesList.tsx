import IGame from "./IGame";

type IGamesList = {
	count: number,
	next: string | null,
  previous: string | null,
  results: IGame[] | null
};

export default IGamesList
