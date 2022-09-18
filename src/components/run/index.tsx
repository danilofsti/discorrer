import { 
  HStack,
  Box,
  VStack,
  Text,
  FlatList
} from 'native-base';
import React from 'react';
import { Moods } from '../../enum/moods';

import Ionicons from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Run = ({run}) => {
  const {title, day, hour, distance, pace, time, mood, tags, type} = run

  const renderTags = ({item}) => {
    return (
      <Text fontSize="2xs" color="coolGray.500" mr={3} key={item.id}> <FontAwesome key={item.id} name={item.icon} size={10} color={Moods[mood].color}/> {item.name}</Text>
    );
  }

  return (
  <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3}>
    <HStack justifyContent="space-between">
      <Box justifyContent="space-between">
        <VStack space="1">
          <Text fontSize="xs" color="coolGray.500">
            {day} @ {hour}
          </Text>
          <Text color={Moods[mood].color} fontWeight="bold" fontSize="xl">
            <FontAwesome name={type.icon} size={20} color={Moods[mood].color}/> {title}
          </Text>
          <HStack justifyContent="space-between" space={6}>
            <Text color="black" fontSize="sm" >
                {distance} km
            </Text>
            <Text color="black" fontSize="sm">
                {time}
            </Text>
            <Text color="black" fontSize="sm">
                {pace}
            </Text>
          </HStack>
          <FlatList data={tags}
            keyExtractor={item => item.icon}
            numColumns={3} 
            renderItem={renderTags}
          />
        </VStack>
      </Box>
      <Ionicons name={Moods[mood].icon} size={70} color={Moods[mood].color}/>
    </HStack>
  </Box>
 )
}
  