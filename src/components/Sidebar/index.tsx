import { memo } from 'react';
import Link from 'next/link';

// Components
import {
  Box,
  Square,
  Text,
  Image,
  Center,
  Card,
  CardBody,
  Button,
} from '@chakra-ui/react';
import AdminNavbar from '@/components/Sidebar/AdminNavbar';

// Images
import Logo from '@/assets/images/logo.jpg';
import CardImage from '@/assets/images/background-need-help.jpg';

// Icons
import HelpIcon from '@/components/icons/HelpIcon';

// Constants
import { COLORS } from '@/constants';

const Sidebar = () => {
  return (
    <Box
      width="246.5px"
      px="20px"
      boxSizing="border-box"
      display={{
        base: 'none',
        sm: 'none',
        lg: 'block',
      }}
    >
      <Center
        py="20px"
        position="relative"
        _after={{
          position: 'absolute',
          content: '""',
          bottom: '0',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, #F7FAFC, #E0E1E2 50%, #F7FAFC)',
        }}
        bg="transparent"
      >
        <Link href="/">
          <Image
            src={Logo.src}
            width="198px"
            height="23px"
            alt="Logo dashboard"
            aria-label="Go to the home screen"
          />
        </Link>
      </Center>

      <AdminNavbar />

      <Card
        w="full"
        mt="49"
        boxShadow="sm"
        borderRadius="15px"
        boxSizing="border-box"
        background={`url(${CardImage.src}) no-repeat center`}
        backgroundSize="cover"
      >
        <CardBody borderRadius="inherit" boxSizing="border-box">
          <Square
            size="35px"
            borderRadius={10}
            backgroundColor={COLORS.DEFAULT}
            boxShadow="base"
          >
            <HelpIcon />
          </Square>
          <Box mt="20px" color={COLORS.DEFAULT}>
            <Text
              color="inherit"
              fontSize="14px"
              lineHeight="19.6px"
              fontWeight="700"
            >
              Need help?
            </Text>
            <Text
              color="inherit"
              fontSize="12px"
              lineHeight="18px"
              fontWeight="400"
            >
              Please check our docs
            </Text>
          </Box>
          <Button
            w="full"
            h="35px"
            fontSize="10px"
            lineHeight="15px"
            fontWeight="700"
            borderRadius="xl"
            mt="10px"
            backgroundColor={COLORS.DEFAULT}
          >
            DOCUMENTATION
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};

export default memo(Sidebar);
