import { LinearProgress, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import { useBestsellersState } from '../../context';

const GameDetailsCardContent = () => {
  const { byPlatform } = useBestsellersState();

  if (!byPlatform) return <LinearProgress />;

  if (byPlatform.length === 1)
    return (
      <Typography gutterBottom variant="body1">
        {byPlatform[0].Platform} exclusive
      </Typography>
    );

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={byPlatform}>
        <Bar dataKey="Global_Sales" fill={indigo[400]} label />
        <XAxis type="category" dataKey="Platform" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GameDetailsCardContent;
