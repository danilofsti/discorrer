import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  HStack,
  Spacer,
  IconButton,
  FlatList,
  Badge
} from 'native-base';
import React from 'react';
import { MOODS, moodList } from '../../enum/moods';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useSelector, useDispatch } from 'react-redux'
import { setRunMood } from '../../redux/actions';
import { Pressable } from 'react-native';


export const Run = ({ navigation }) => {
  const {mood} = useSelector( state => state.runReducer)
  const dispatch = useDispatch();

  const handleClickMood = (value) => {
    dispatch(setRunMood(value.name))
    navigation.navigate('Details', {mood:value})
  }

  const renderMood = ({item}) => {
    const colorBg = mood.indexOf(MOODS[item].name) > -1 ? MOODS[item].color: "#ffffff"
    const colorIcon = mood.indexOf(MOODS[item].name) > -1 ? "#fdfdfd" : MOODS[item].color

    return (
      <Pressable onPress={() => handleClickMood(MOODS[item])} >
        <Badge rounded="full" bg={colorBg}>
          <Fontisto name={MOODS[item].icon} size={43} color={colorIcon}/>
        </Badge>
      </Pressable>
    )
  }

  return (
    <KeyboardAvoidingView>
      <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3} height="95%">
        <Heading fontWeight="light">
          Como você se sentiu em sua nesta corrida?
        </Heading>
        <Spacer/>
        <HStack justifyContent="space-between" >
          <FlatList data={moodList} 
            keyExtractor={item => item.name}
            numColumns={5} 
            renderItem={renderMood}
          />
        </HStack>
        <Spacer/>
      </Box>
    </KeyboardAvoidingView>
  );
}