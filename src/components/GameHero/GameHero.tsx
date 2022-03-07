import { sanitize } from 'dompurify';
import { useMemo } from "react"
import { useParams } from "react-router-dom";
import { Avatar, Card, CardMedia, Container, Typography } from "@mui/material";
import { blue } from '@mui/material/colors';

import { useGameState } from "../../context/Game"
import { useGameService } from "../../hooks";
import { Box } from '@mui/system';

const title = { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" };
const metaBox = { display: "flex", flexFlow: "column", alignItems: "center" };
const metaAvatar = { bgcolor: blue[300], width: 75, height: 75 };

// const GameHero = (): JSX.Element => {
//   const { id: gameId } = useParams();
//   const { fetchGame, isFetching } = useGameService();
//   const { name, metacritic, developers, description, background_image } = useGameState();

//   useMemo(() => {
//     if(!isFetching && !name) fetchGame({ id: gameId })
//   }, [gameId, fetchGame, isFetching, name])
  
//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="440"
//         image={background_image}
//         alt="Game cover"
//       />
//       <Container sx={title}>
//         <Typography variant="h2" marginRight={2}>{name}</Typography>
//         <Box sx={metaBox}>
//           <Avatar sx={metaAvatar}>{metacritic}</Avatar>
//           <Typography variant="h6">Metacritic</Typography>
//         </Box>
//       </Container>
//       <Container>
//         {developers?.map(({ name }, i) => <Typography key={i} variant="h4">{name}</Typography>)}
//         <p dangerouslySetInnerHTML={{ __html: sanitize(description || "") }} />
//       </Container>
//     </Card>
//   )
// }
const GameHero = (): JSX.Element => {
  return <p>test</p>
}

export default GameHero