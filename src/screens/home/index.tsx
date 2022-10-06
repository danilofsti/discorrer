import { 
  Box,
  KeyboardAvoidingView,
  FlatList,
  Icon,
  Fab
} from 'native-base';
import React, { useEffect } from 'react';
import { Run } from '../../components/run';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Pressable, RefreshControl } from 'react-native';
import { apiGetAllRuns } from '../../services/apiService';
import { getAllRuns, editRun, newRun } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const initialRunState = {
  name : "",
  distance : 0,
  elapsed_time : 0,
  start_date_local : new Date(),
  is_imported: false,
  calories : 0.0,
  mood: '',
  type: '',
  where: '',
  pre: [],
  during: [],
  post: [],
  jornal:''
}


export const Home = ({ navigation }) => {
  // Back End
  const [refreshing, setRefreshing] = React.useState(false);
  const [run,runs, reload] = useSelector( state => [state.runReducer,state.allRunReducer, state.reloadReducer] )
  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => {
      handleLoadRun()
      setRefreshing(false)
    });
    
  }, []);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const handleClickNew = () => {
    dispatch(newRun(initialRunState))
    navigation.navigate('Run')
  }

  const handleLoadRun = () => {
    apiGetAllRuns().then((apiAllRuns) => {
      dispatch(getAllRuns(apiAllRuns))
    })
  }

  useEffect(() => {
    console.log('inicial')
    handleLoadRun()
  }, [reload]);
  
  const handleClickEdit= (item) => {
    dispatch(editRun(item))
    navigation.navigate('Run')
  }
  
  const renderRun = ({item}) => {
    return (
      <Pressable onPress={() => handleClickEdit(item)} >
        <Run run={item}/>
      </Pressable>
    )
  }
  
  return (
    <Box flex="1" >
      <KeyboardAvoidingView>
        <FlatList
          data={runs}
          keyExtractor={item => item._id}
          numColumns={1} 
          renderItem={renderRun}
          size="full"
          refreshControl = {
            <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
            />
          }
        />
        <Fab renderInPortal={false} shadow={2} size="sm" bg="#377971" icon={<Icon color="white" as={FontAwesome} name="plus" size="sm" />}  onPress={() => handleClickNew()}/>
      </KeyboardAvoidingView>
    </Box>
  );
}
