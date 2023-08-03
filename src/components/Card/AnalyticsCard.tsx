import { ReactElement, memo } from 'react';

// Components
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Square,
  Text,
  VStack,
} from '@chakra-ui/react';

interface AnalyticsCardProps {
  title?: string;
  value?: string;
  subValue?: string;
  isIncrease?: boolean;
  icon?: ReactElement;
}

const AnalyticsCard = (props: AnalyticsCardProps) => {
  const { title, value, subValue, icon, isIncrease = true } = props;

  return (
    <Card borderRadius="xl" boxShadow="sm">
      <CardBody>
        <HStack justifyContent="space-between">
          <VStack gap="0" alignItems="flex-start">
            <Heading
              as="h2"
              fontSize="12px"
              lineHeight="18px"
              fontWeight="700"
              color="gray.400"
            >
              {title}
            </Heading>

            <HStack gap="5px" alignItems="baseline">
              <Text
                fontSize="18px"
                lineHeight="25.2px"
                fontWeight="700"
                color="gray.700"
              >
                {value}
              </Text>

              <Text
                fontSize="14px"
                lineHeight="19.4px"
                fontWeight="700"
                color={isIncrease ? 'green.400' : 'red.500'}
              >
                {subValue}
              </Text>
            </HStack>
          </VStack>

          {icon && (
            <Square size="45px" backgroundColor="teal.300" borderRadius="12px">
              {icon}
            </Square>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default memo(AnalyticsCard);
