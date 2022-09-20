import { extendTheme, NativeBaseProvider, StatusBar} from 'native-base';
import { Routes } from './src/components/routes';
import { Provider } from 'react-redux'
import  store  from './src/redux/store'

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
    <Provider store={store} >
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle='dark-content'/>
      <Routes/>
    </NativeBaseProvider>
    </Provider>
  );
}
