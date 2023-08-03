import { Box, List, ListItem, Square, Text } from '@chakra-ui/react';
import { ReactNode, memo, useCallback } from 'react';

// Icons
import CardIcon from '@/components/icons/CardIcon';
import ChartIcon from '@/components/icons/ChartIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import RepairIcon from '@/components/icons/RepairIcon';
import UserIcon from '@/components/icons/UserIcon';
import FileIcon from '@/components/icons/FileIcon';
import SharpIcon from '@/components/icons/SharpIcon';

// Types
import { ISidebar } from '@/interfaces';
import Link from 'next/link';
import { COLORS } from '@/constants';

// Sidebar options
export const sidebars: ISidebar[] = [
  {
    items: [
      {
        defaultIcon: <HomeIcon color={COLORS.TEAL_300} />,
        activeIcon: <HomeIcon />,
        text: 'Dashboard',
        path: '/',
      },
      {
        defaultIcon: <ChartIcon />,
        activeIcon: <ChartIcon color={COLORS.DEFAULT} />,
        text: 'Tables',
      },
      {
        defaultIcon: <CardIcon />,
        activeIcon: <CardIcon color={COLORS.DEFAULT} />,
        text: 'Billing',
      },
      {
        defaultIcon: <RepairIcon />,
        activeIcon: <RepairIcon color={COLORS.DEFAULT} />,
        text: 'RTL',
      },
    ],
  },

  {
    title: 'accounts pages',
    items: [
      {
        defaultIcon: <UserIcon color={COLORS.TEAL_300} />,
        activeIcon: <UserIcon color={COLORS.DEFAULT} />,
        text: 'Profile',
      },
      {
        defaultIcon: <FileIcon />,
        activeIcon: <FileIcon color={COLORS.DEFAULT} />,
        text: 'Sign In',
      },
      {
        defaultIcon: <SharpIcon />,
        activeIcon: <SharpIcon color={COLORS.DEFAULT} />,
        text: 'Sign Up',
      },
    ],
  },
];

const SidebarOption = ({
  icon: Icon,
  isActive = false,
  text,
}: {
  icon?: ReactNode;
  text?: string;
  isActive?: boolean;
}) => {
  return (
    <ListItem
      _hover={{
        background: isActive ? 'white' : 'gray.200',
        transition: '0.3s linear',
      }}
      borderRadius="15px"
    >
      <Link
        href={`/${text?.replaceAll(' ', '-').toLowerCase()}`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: isActive ? 'white' : 'transparent',
          gap: '10px',
          padding: '15px',
          borderRadius: 'inherit',
          boxShadow: isActive ? `0 2px 10px ${COLORS.GRAY_100}` : 'none',
        }}
      >
        <Square
          size="30px"
          borderRadius={10}
          backgroundColor={isActive ? COLORS.TEAL_300 : COLORS.DEFAULT}
          boxShadow="base"
        >
          {Icon}
        </Square>
        <Text
          color="gray.700"
          fontSize="12px"
          fontWeight="700"
          lineHeight="18px"
        >
          {text}
        </Text>
      </Link>
    </ListItem>
  );
};

const AdminNavbar = memo(() => {
  const currentPath = '/';

  const renderSidebarOption = useCallback(
    (items: ISidebar['items']) => {
      return (
        <List alignItems="flex-start" gap={0}>
          {items.map((item, indexItem) => {
            const { text, defaultIcon, activeIcon, path } = item;
            const isActive = currentPath === path;

            return (
              <SidebarOption
                key={indexItem}
                icon={isActive ? activeIcon : defaultIcon}
                text={text}
                isActive={isActive}
              />
            );
          })}
        </List>
      );
    },
    [currentPath]
  );

  return (
    <Box py="20px">
      {sidebars.map((sidebar, index) => {
        const { title, items = [] } = sidebar;

        return (
          <Box key={index} width="full">
            {title && (
              <Text
                width="full"
                fontWeight="extrabold"
                textTransform="uppercase"
                fontSize="12px"
                p="20px"
              >
                {title}
              </Text>
            )}

            {renderSidebarOption(items)}
          </Box>
        );
      })}
    </Box>
  );
});

export default AdminNavbar;
