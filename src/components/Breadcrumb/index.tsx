import { memo } from 'react';

// Components
import { HStack, Text, VStack } from '@chakra-ui/react';
import BreadcrumbMenu from '@/components/Breadcrumb/BreadcrumbMenu';

// Constants
import { COLORS } from '@/constants';

const Breadcrumb = () => {
  return (
    <HStack
      justifyContent={{
        base: 'flex-end',
        md: 'space-between',
      }}
    >
      <VStack
        alignItems="flex-start"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <HStack>
          <Text
            fontSize="12px"
            lineHeight="18px"
            fontWeight="600"
            textTransform="capitalize"
            color="gray.400"
          >
            pages
          </Text>
          <Text
            fontSize="12px"
            lineHeight="18px"
            fontWeight="600"
            color={COLORS.BASE}
          >
            /
          </Text>
          <Text
            fontSize="12px"
            lineHeight="18px"
            fontWeight="600"
            textTransform="capitalize"
            color={COLORS.BASE}
          >
            dashboard
          </Text>
        </HStack>
        <Text
          fontSize="14px"
          lineHeight="19.4px"
          fontWeight="700"
          textTransform="capitalize"
          color={COLORS.BASE}
        >
          dashboard
        </Text>
      </VStack>

      <BreadcrumbMenu />
    </HStack>
  );
};

export default memo(Breadcrumb);
