import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  FlatList
} from 'native-base';
import React from 'react';
import { MonoSelect } from '../../components/monoSelect';
import { MultiSelect } from '../../components/multiSelect';
import { TAG_LIST } from '../../enum/tags';
import { useSelector, useDispatch } from 'react-redux'



export const Details = ({ route, navigation}) => {
  const mood = route.params.mood;

  const renderLists = ({item}) => {
    if(item.isMulti){
      return (
        <MultiSelect title={item.title} items={item.list} size={item.listSize} mood={mood} />
      )
    } else {
      return (
        <MonoSelect title={item.title} list={item.list} size={item.listSize}  mood={mood} type={item.type} name={item.name} />
      )
    }
  }
  return (
    <KeyboardAvoidingView>
      <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3} height="95%">
        <Heading fontWeight="light">
          O que você tem feito?
        </Heading>
        <FlatList
          data={TAG_LIST}
          keyExtractor={item => item.title}
          numColumns={1} 
          renderItem={renderLists}
        />
      </Box>
    </KeyboardAvoidingView>
  );
}