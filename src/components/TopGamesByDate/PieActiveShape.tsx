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

const PieActiveShape = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, midAngle, fill, name }: IProps): JSX.Element => {
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={"white"}
    />
  )
  // const RADIAN = Math.PI / 180;
  // const RESPONSIVE_SIZE = 100;
  
  // const sin = Math.sin(-RADIAN * midAngle);
  // const cos = Math.cos(-RADIAN * midAngle);
  // const sx = cx + (outerRadius - cx) * cos;
  // const sy = cy + (outerRadius - RESPONSIVE_SIZE) * sin;

  // const mx = cx + (outerRadius + 30) * cos;
  // const ey = cy + (outerRadius + 30) * sin;
  // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  // const textAnchor = cos >= 0 ? 'start' : 'end';

  // return (
  //   <g>
  //     <text x={ex + (cos >= 0 ? 1 : -1)} y={ey} textAnchor={textAnchor} fill={fill}>{name}</text>
      // <Sector
      //   cx={sx}
      //   cy={sy}
      //   innerRadius={innerRadius}
      //   outerRadius={outerRadius}
      //   startAngle={startAngle}
      //   endAngle={endAngle}
      //   fill={"white"}
      // />
  //   </g>
  // );
};

export default PieActiveShape
