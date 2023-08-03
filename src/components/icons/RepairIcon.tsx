// Constants
import { COLORS } from '@/constants';

// Types
import { IIcon } from './icon.type';

interface RepairIconProps extends IIcon {}

const RepairIcon = ({ color = COLORS.TEAL_300 }: RepairIconProps) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7563 3.03142C13.7226 2.96577 13.6738 2.90902 13.6139 2.8658C13.5541 2.82257 13.4849 2.79409 13.412 2.78267C13.3391 2.77124 13.2645 2.77721 13.1943 2.80007C13.1241 2.82293 13.0603 2.86205 13.0081 2.91423L11.2081 4.7154C11.1197 4.80248 11.0006 4.85129 10.8766 4.85129C10.7525 4.85129 10.6334 4.80248 10.5451 4.7154L9.76696 3.93611C9.72342 3.89258 9.68889 3.8409 9.66532 3.78402C9.64176 3.72714 9.62963 3.66618 9.62963 3.60461C9.62963 3.54305 9.64176 3.48208 9.66532 3.4252C9.68889 3.36833 9.72342 3.31665 9.76696 3.27312L11.5593 1.48044C11.6131 1.42672 11.6529 1.36074 11.6755 1.28818C11.6981 1.21563 11.7027 1.13868 11.6889 1.06395C11.6751 0.98923 11.6434 0.918977 11.5964 0.859244C11.5494 0.799512 11.4887 0.752092 11.4193 0.721067C10.0655 0.115794 8.37566 0.431614 7.31013 1.48923C6.40486 2.38806 6.13503 3.79255 6.57038 5.34265C6.59386 5.42531 6.59399 5.51286 6.57077 5.59559C6.54756 5.67832 6.50189 5.75302 6.43884 5.8114L1.5615 10.266C1.37149 10.4366 1.21823 10.6441 1.11107 10.8759C1.0039 11.1077 0.945078 11.3588 0.938185 11.6141C0.931292 11.8694 0.976475 12.1234 1.07098 12.3606C1.16548 12.5978 1.30732 12.8133 1.48784 12.9939C1.66836 13.1745 1.88379 13.3164 2.12097 13.4111C2.35816 13.5057 2.61213 13.551 2.86739 13.5442C3.12266 13.5374 3.37387 13.4787 3.6057 13.3716C3.83753 13.2646 4.04511 13.1114 4.21579 12.9215L8.71814 8.03327C8.77568 7.97103 8.84911 7.92567 8.93052 7.90208C9.01194 7.87849 9.09824 7.87755 9.18015 7.89938C9.62146 8.0203 10.0767 8.08304 10.5342 8.08601C11.5128 8.08601 12.3715 7.76931 12.9908 7.15905C14.1378 6.02907 14.3127 4.11247 13.7563 3.03142ZM2.91472 12.6007C2.72177 12.6217 2.52704 12.5824 2.35741 12.488C2.18777 12.3937 2.05159 12.2491 1.96767 12.0741C1.88374 11.899 1.8562 11.7023 1.88886 11.511C1.92151 11.3196 2.01274 11.1432 2.14996 11.0059C2.28719 10.8686 2.46363 10.7773 2.65495 10.7446C2.84627 10.7119 3.04302 10.7394 3.21807 10.8232C3.39311 10.9071 3.53781 11.0432 3.63219 11.2128C3.72657 11.3824 3.76599 11.5771 3.74499 11.7701C3.7219 11.9824 3.62701 12.1804 3.47602 12.3315C3.32504 12.4825 3.12702 12.5775 2.91472 12.6007Z"
        fill={color}
      />
    </svg>
  );
};

export default RepairIcon;
