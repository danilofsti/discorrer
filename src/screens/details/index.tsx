import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  FlatList,
  Button,
} from 'native-base';
import React from 'react';
import { MonoSelect } from '../../components/monoSelect';
import { MultiSelect } from '../../components/multiSelect';
import { TAG_LIST } from '../../enum/tags';
import { useSelector } from 'react-redux'
import { apiCreateRun, apiUpdateRun } from '../../services/apiService';



export const Details = ({ route, navigation}) => {
  const run = useSelector( state => state.runReducer)
  const mood = route.params.mood;

  const renderLists = ({item}) => {
    if(item.isMulti){
      return (
        <MultiSelect title={item.title} list={item.list} size={item.listSize} mood={mood} type={item.type} name={item.name} />
      )
    } else {
      return (
        <MonoSelect title={item.title} list={item.list} size={item.listSize}  mood={mood} type={item.type} name={item.name} />
      )
    }
  }
  const handleSubmit = async () => {
    delete run.id
    let newrun;
    if(run._id){
      newrun = await apiUpdateRun(JSON.stringify(run))
    } else {
      newrun = await apiCreateRun(JSON.stringify(run))
    }
    navigation.navigate('TabBar')
  }
  const buttonSubmit = () => {  
    return (
      <Button 
        mt="2" 
        colorScheme="blueGray"
        background={mood.color}
        onPress={handleSubmit}
      >
        SUBMIT
      </Button>
    )
  }
  return (
    <KeyboardAvoidingView>
      <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3} height="95%">
        <Heading fontWeight="light">
          Como foi ...
        </Heading>
        <FlatList
          data={TAG_LIST}
          keyExtractor={item => item.title}
          numColumns={1} 
          renderItem={renderLists}
          ListFooterComponent={buttonSubmit} />
      </Box>
    </KeyboardAvoidingView>
  );
}