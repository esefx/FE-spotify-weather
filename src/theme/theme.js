import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    mode: 'light', // Start with light mode
    // Customize other theme options such as primary, secondary colors, etc.
  },
});

export { theme, ThemeProvider };
