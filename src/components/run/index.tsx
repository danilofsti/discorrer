import { 
  HStack,
  Box,
  VStack,
  Text,
  FlatList,
  TextArea
} from 'native-base';
import React from 'react';
import { MOODS } from '../../enum/moods';
import { TAGS } from '../../enum/tags';
import { formatTimeFromSeconds, formatDate, formatPace, formatTimeFromDate, formatTagsToList} from '../../helpers/conversion'

import Ionicons from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Run = ({run, showDetail = false}) => {
  const {name, start_date_local, distance, elapsed_time, mood, type, where, jornal} = run


  const time = formatTimeFromSeconds(elapsed_time);
  const day = formatDate(new Date(start_date_local));
  const hour = formatTimeFromDate(start_date_local);
  const tags = formatTagsToList(run);
  const pace = formatPace(elapsed_time, distance);
  const quilometers = distance/1000;

  const renderTags = ({item}) => {
    const tag = TAGS[item]
    return (
      <Text fontSize="2xs" color="coolGray.400" mr={3}> 
        <FontAwesome name={tag.icon} size={10} color={MOODS[mood].color}/> {tag.name}
      </Text>
    );
  }

  return (
  <Box bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3}>
    <HStack justifyContent="space-between">
      <Box justifyContent="space-between" maxW="200" >
        <VStack space="1">
          <Text fontSize="xs" color="coolGray.500">
            {day} @ {hour}
          </Text>
          <Text color={MOODS[mood].color} fontWeight="bold" fontSize="xl">
            <FontAwesome name={TAGS[type].icon} size={20} color={MOODS[mood].color}/> {name}
          </Text>
            <Text fontWeight="bold" fontSize="lg" >
              <FontAwesome name={TAGS[where].icon} size={16}/> {quilometers} Km
            </Text>
          <HStack justifyContent="space-between" space={6}>
            <Text color="black" fontSize="sm">
              <Text color="coolGray.400">Tempo</Text> {time}
            </Text>
            <Text color="black" fontSize="sm">
              <Text color="coolGray.400">Ritmo</Text>  {pace}
            </Text>
          </HStack>
          {showDetail? 
            <Text fontSize="sm" maxW="200" color="coolGray.400">{jornal}</Text>:''
          }
          <FlatList data={tags}
            keyExtractor={item => item}
            numColumns={3} 
            renderItem={renderTags}
          />
        </VStack>
      </Box>
      <Ionicons name={MOODS[mood].icon} size={70} color={MOODS[mood].color}/>
    </HStack>
  </Box>
 )
}
  