import { memo } from 'react';

// Components
import { Grid, Img } from '@chakra-ui/react';
import IntroduceCard from '../Card/IntroduceCard';

// Images
import ChakraImage from '@/assets/images/charkra.jpg';

const Introduce = () => {
  return (
    <Grid
      gap="20px"
      templateColumns={{
        md: '1fr',
        xl: '1fr 1fr',
      }}
    >
      <IntroduceCard
        title="Purity UI Dashboard"
        subTitle="Built by developers"
        description="From colors, cards, typography to complex elements,
        you will find the full documentation."
        lastElement={
          <Img
            src={`${ChakraImage.src}`}
            srcSet={`${ChakraImage.src}`}
            borderRadius="12px"
            w="full"
            h="full"
            objectFit="cover"
          />
        }
      />

      <IntroduceCard
        title="Purity UI Dashboard"
        subTitle="Built by developers"
        description="From colors, cards, typography to complex elements,
        you will find the full documentation."
      />
    </Grid>
  );
};

export default memo(Introduce);
