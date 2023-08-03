import { type ThemeOverride } from '@chakra-ui/react';

// Constants
import { COLORS, SPACINGS, FONTS } from '@/constants';

// TODO: Update to later
const colors = {};

export const fonts = {
  heading: FONTS.PRIMARY_FONT,
  body: FONTS.PRIMARY_FONT,
  mono: FONTS.PRIMARY_FONT,
};

export const themeOverride: ThemeOverride = {
  default: {
    colors,
    fonts,
    components: {
      Text: {
        baseStyle: {
          color: COLORS.BASE,
        },
      },

      Container: {
        baseStyle: {
          maxW: SPACINGS.CONTAINER_WIDTH,
        },
      },
    },
  },
};
