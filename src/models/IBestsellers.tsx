import IBestsellingGame from "./IBestsellingGame";
import INameAndValue from "./INameAndValue";

type IBestSellers = {
	platform: string | null;
	byPlatforms: INameAndValue[] | null;
	byGames: INameAndValue[] | null;
};

export default IBestSellers
