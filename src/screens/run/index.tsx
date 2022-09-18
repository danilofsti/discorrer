import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  HStack,
  Spacer,
  Text,
  Badge,
  IconButton
} from 'native-base';
import React from 'react';
import { Moods } from '../../enum/moods';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const {great, good, meh, bad, mad} = Moods
const moodList = [great, good, meh, bad, mad] 

export const Run = ({ navigation }) => {
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
                        onPress={() => navigation.navigate('Details', {mood:item})}
                      />)
            })
          }
        </HStack>
        <Spacer/>
      </Box>
    </KeyboardAvoidingView>
  );
}