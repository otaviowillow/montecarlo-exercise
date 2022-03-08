/**
 * This component doesn't access the main state, it instead uses internal state logic
 * I thought you might like to see an example of that, maybe?
 */

import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useGameService } from '../../hooks';

const GamePhotos = (): JSX.Element | null => {
  const [isFetching, setIsFetching] = useState(false);
  const [images, setImages] = useState<string[] | null>();
  const { id } = useParams();
  const { fetchGameScreenshots } = useGameService();

  useMemo(() => {
    const fetchImages = async () => {
      setIsFetching(true);
      const imgs = await fetchGameScreenshots({ id });
      setImages(imgs);
      setIsFetching(false);
    };
    if (!images && !isFetching) fetchImages();
  }, [fetchGameScreenshots, id, images, setIsFetching, isFetching]);

  if (!images) return null;

  return (
    <Box padding={2}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img}>
            <img
              src={`${img}?w=248&fit=crop&auto=format`}
              srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              alt="hideous game scene"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GamePhotos;
