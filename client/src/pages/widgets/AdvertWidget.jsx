import { Typography, useTheme, Link } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='http://localhost:3001/assets/info4.jpg'
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main}>MacBook Pro 16</Typography>
        <Link color={medium} href='https://www.apple.com/' target='_blank'>
          www.apple.com
        </Link>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Introducing the next generation of Apple silicon for pros: The
        lightning-fast M2 Pro and the extraordinary M2 Max — the most powerful
        and efficient chip ever in a pro laptop.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
