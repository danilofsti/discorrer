import { extendTheme, NativeBaseProvider, StatusBar} from 'native-base';
import { Routes } from './src/components/routes';

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      great: {
        900: '#3EB489'
    },
    good: {
        900:'#00BCE3'
    },
    meh: {
        900:'#808080'
    },
    bad: {
        900:'#FFAE42'
    },
    mad: {
      900:'#FF6347'
    },
    }
  });
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle='dark-content'/>
      <Routes/>
    </NativeBaseProvider>
  );
}
