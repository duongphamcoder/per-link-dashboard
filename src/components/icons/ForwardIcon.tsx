// Constants
import { COLORS } from '@/constants';

// Types
import { IIcon } from './icon.type';

interface ForwardIconProps extends IIcon {}

const ForwardIcon = ({ color = COLORS.GRAY_700 }: ForwardIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.28101 2.625L9.656 6L6.28101 9.375"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.18725 6.00024H2.34351"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ForwardIcon;
