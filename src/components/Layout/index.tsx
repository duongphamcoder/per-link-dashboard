import { ReactNode, memo } from 'react';

// Components
import { Box, Center, Container, Text } from '@chakra-ui/react';
import { Sidebar, Breadcrumb, Analytics, Introduce } from '@/components';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Container
        minH="100vh"
        pb="20px"
        display={{ base: 'none', md: 'flex' }}
      >
        <Sidebar />

        <Box p="15px 20px" flex="1">
          <Breadcrumb />

          <Analytics />

          <Introduce />

          {children}
        </Box>
      </Container>

      <Center h="100vh" display={{ base: 'flex', md: 'none' }}>
        <Text
          fontSize="20px"
          fontWeight="700"
          lineHeight="25.5px"
          color="gray.700"
          textAlign="center"
        >
          Sorry! Currently not supported on mobile.
        </Text>
      </Center>
    </>
  );
};

export default memo(Layout);
