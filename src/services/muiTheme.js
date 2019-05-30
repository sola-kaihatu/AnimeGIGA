import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

export default muiTheme;
