import IBestseller from './IBestseller';
import INameAndValue from './INameAndValue';

type IBestSellers = {
  platform: string | null;
  byPlatforms: INameAndValue[] | null;
  byPlatform: IBestseller[] | null;
  byDate: INameAndValue[] | null;
};

export default IBestSellers;
