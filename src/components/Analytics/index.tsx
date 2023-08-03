import { memo } from 'react';

// Components
import { Grid } from '@chakra-ui/react';
import { AnalyticsCard } from '@/components';

// Icons
import WalletIcon from '../icons/WalletIcon';
import GlobeIcon from '../icons/GlobeIcon';
import DocumentIcon from '../icons/DocumentIcon';
import CartIcon from '../icons/CartIcon';

const Analytics = () => {
  return (
    <Grid
      py="15px"
      mt="15px"
      gap="25px"
      templateColumns={{
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
    >
      <AnalyticsCard
        title="Today’s Money"
        value="$53,000"
        subValue="+55%"
        icon={<WalletIcon />}
      />

      <AnalyticsCard
        title="Today’s Users"
        value="2,300"
        subValue="+5%"
        icon={<GlobeIcon />}
      />

      <AnalyticsCard
        title="New Clients"
        value="+3,052"
        subValue="-14%"
        isIncrease={false}
        icon={<DocumentIcon />}
      />

      <AnalyticsCard
        title="Total Sales"
        value="$173,000"
        subValue="+8%"
        icon={<CartIcon />}
      />
    </Grid>
  );
};

export default memo(Analytics);
