import { Sector } from 'recharts';
interface IProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  midAngle: number;
  fill: string;
  name: string;
}

const PieActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  midAngle,
  fill,
  name
}: IProps): JSX.Element => {
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={'white'}
    />
  );
};

export default PieActiveShape;
