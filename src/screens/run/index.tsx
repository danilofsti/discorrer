import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  HStack,
  Spacer,
  IconButton
} from 'native-base';
import React from 'react';
import { Moods } from '../../enum/moods';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector, useDispatch } from 'react-redux'
import { setRunMood } from '../../redux/actions';

const {great, good, meh, bad, mad} = Moods
const moodList = [great, good, meh, bad, mad] 


export const Run = ({ navigation }) => {
  const {mood} = useSelector( state => state.runReducer)
  const dispatch = useDispatch();

  const handleClickMood = (value) => {
    dispatch(setRunMood(value.id))
    navigation.navigate('Details', {mood:value})
  }

  return (
    <KeyboardAvoidingView>
      <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3} height="95%">
        <Heading fontWeight="light">
          Como você se sentiu em sua nesta corrida?
        </Heading>
        <Spacer/>
        <HStack space={2} justifyContent="space-between" >
          {
            moodList.map(item => {
              return (<IconButton 
                        key={item.id}
                        size={50} 
                        variant="ghost" 
                        _icon={{
                          as: Fontisto,
                          name: item.icon,
                          size:"5xl",
                          color:item.color
                        }}
                        onPress={() => handleClickMood(item)}
                      />)
            })
          }
        </HStack>
        <Spacer/>
      </Box>
    </KeyboardAvoidingView>
  );
}