import { ReactElement, memo } from 'react';

// Components
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

// Icons
import ForwardIcon from '@/components/icons/ForwardIcon';

interface IntroduceCardProps {
  title?: string;
  subTitle?: string;
  description?: string;
  referPath?: string;
  background?: string;
  lastElement?: ReactElement;
}

const IntroduceCard = (props: IntroduceCardProps) => {
  const { title, subTitle, description, referPath, background, lastElement } =
    props;

  return (
    <Card minH="290.5px" borderRadius="15px">
      <CardBody>
        <HStack h="full" justifyContent="space-between">
          <VStack
            // w={{
            //   md: '70%',
            //   xl: '335px',
            // }}
            flex="0 0 355px"
            h="inherit"
            justifyContent="space-between"
            alignItems="self-start"
          >
            <Box>
              <Heading
                as="h3"
                fontSize="12px"
                fontWeight="700"
                lineHeight="18px"
                color="gray.400"
              >
                {subTitle}
              </Heading>
              <Heading
                as="h2"
                fontSize="18px"
                fontWeight="700"
                lineHeight="25.2px"
                color="gray.700"
              >
                {title}
              </Heading>
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="19.6px"
                color="gray.400"
              >
                {description}
              </Text>
            </Box>

            <Link
              href={referPath ?? ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '10px 10px 0',
              }}
            >
              <Text
                fontSize="14px"
                fontWeight="700"
                lineHeight="19.6px"
                color="gray.700"
              >
                Read more{' '}
              </Text>
              <ForwardIcon />
            </Link>
          </VStack>

          <VStack
            alignItems="flex-end"
            justifyContent="center"
            w={{ base: '250px', md: '360px' }}
            h="inherit"
            display={{
              base: 'none',
              md: 'flex',
              xl: 'none',
              '2xl': 'flex',
            }}
          >
            {lastElement}
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default memo(IntroduceCard);
