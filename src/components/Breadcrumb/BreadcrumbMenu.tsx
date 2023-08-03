import { memo } from 'react';

// Components
import { Button, HStack, IconButton } from '@chakra-ui/react';
import { InputBase } from '@/components';

// Icons
import SearchIcon from '@/components/icons/SearchIcon';
import UserIcon from '@/components/icons/UserIcon';
import SettingIcon from '@/components/icons/SettingIcon';
import BellIcon from '@/components/icons/BellIcon';

const BreadcrumbMenu = () => {
  return (
    <HStack>
      <InputBase leftIcon={<SearchIcon />} w="199px" h="39.5px" />

      <Button
        leftIcon={<UserIcon />}
        backgroundColor="transparent"
        variant="solid"
        fontSize="12px"
        lineHeight="18px"
        fontWeight="700"
        color="gray.500"
        minW="fit-content"
        size="xs"
        _hover={{
          backgroundColor: 'transparent',
        }}
      >
        Email
      </Button>

      <IconButton
        icon={<SettingIcon />}
        aria-label="Search database"
        backgroundColor="transparent"
        size="xs"
        _hover={{
          backgroundColor: 'transparent',
        }}
      />

      <IconButton
        icon={<BellIcon />}
        aria-label="Search database"
        backgroundColor="transparent"
        size="xs"
        _hover={{
          backgroundColor: 'transparent',
        }}
      />
    </HStack>
  );
};

export default memo(BreadcrumbMenu);
