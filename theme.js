import { DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF5722',
    accent: '#FFC107',
  },
};

export default customTheme;