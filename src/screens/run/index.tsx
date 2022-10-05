import { 
  Box,
  Heading,
  KeyboardAvoidingView,
  HStack,
  Spacer,
  Text,
  Icon,
  FormControl
  ,Input,
  FlatList,
  Badge,
  VStack,
  TextArea,
  ScrollView
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { MOODS, moodList } from '../../enum/moods';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'
import { setRun } from '../../redux/actions';
import { Pressable } from 'react-native';
import { formatDate, formatDateFromString, formatPace, formatTimeFromDate, formatTimeFromSeconds, getMeters, getQuilometers, getSeconds } from '../../helpers/conversion';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';


export const Run = ({ navigation }) => {
  const run = useSelector( state => state.runReducer)
  const {mood, elapsed_time, distance, start_date_local} = run
  const dispatch = useDispatch();
 
  const [name, setName] = useState(run.name);
  const [jornal, setJornal] = useState(run.jornal);
  const [quilometers, setQuilometers] = useState(distance?(getQuilometers(distance)).toString():'');
  const [day, setDay] = useState(`${formatDate(new Date(start_date_local))} ${formatTimeFromDate(new Date(start_date_local))}`);
  const [time, setTime] = useState(elapsed_time?formatTimeFromSeconds(new Date(elapsed_time)):'');
  const [pace, setPace] = useState(formatPace(elapsed_time, distance));
  const [date, setDate] = useState(new Date());
  const [newDistance, setNewDistance] = useState(0)


  const handleClickMood = (value) => {
    const run = {
      name : name,
      distance : getMeters(parseFloat(quilometers)),
      elapsed_time : getSeconds(time),
      start_date_local : formatDateFromString(day),
      mood: value.name,
      jornal:jornal
    }
    dispatch(setRun(run))
    navigation.navigate('Details', {mood:value})
  }

  useEffect(() => {
    const seconds = getSeconds(time);
    const distances = getMeters(parseFloat(quilometers))
    setPace(formatPace(seconds, distances))
  }, [quilometers, time])

  const renderMood = ({item}) => {
    const colorBg = mood.indexOf(MOODS[item].name) > -1 ? MOODS[item].color: "#ffffff"
    const colorIcon = mood.indexOf(MOODS[item].name) > -1 ? "#fdfdfd" : MOODS[item].color

    return (
      <Pressable onPress={() => handleClickMood(MOODS[item])} >
        <Badge rounded="20" bg={colorBg}>
          <VStack textAlign="center">
            <Fontisto name={MOODS[item].icon} size={43} color={colorIcon}/>
            <Heading textAlign="center" size="sm" fontWeight="light" color={colorIcon}>{MOODS[item].name}</Heading>
          </VStack>
        </Badge>
      </Pressable>
    )
  }

  return (
    <KeyboardAvoidingView h={{
      lg: "auto"
    }}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <VStack bg="white" shadow={4} py="4" px="5" borderRadius="5" rounded="md" m={3} height="95%" space={1}>
        <Heading fontWeight="light">
          Como você se sentiu em sua nesta corrida?
        </Heading>
        <ScrollView  keyboardDismissMode="interactive">
        <FormControl >
            <Input textAlign="right"
              keyboardDismissMode = "interactive"
              fontWeight="light"
              mt={5}
              size="xs"
              variant="unstiled" 
              InputRightElement={<Icon as={<FontAwesome  name="calendar" />} size={3} color="muted.400" />} 
              placeholder="01/01/2022 06:23" 
              value={day}
              onChangeText={setDay}
            />
          </FormControl>
        <FormControl>
          <Input
            size="2xl"
            fontWeight="light"
            variant="underlined"
            mt={5}
            InputLeftElement={<Icon as={<FontAwesome name="heading" />} size={5} mr="2" color="muted.400" />} 
            placeholder="De um título à corrida" 
            value={name}
            onChangeText={setName}
          />
        </FormControl>
        <TextArea 
          variant="underlined" 
          h={40} 
          placeholder="Use esse espaço para discorrer sobre as coisas que aconteceram antes, durante e depois de sua corrida que influenciaram o modo como você a percebe"  
          value={jornal}
          onChangeText={setJornal}
        />
        <FormControl >
          <Input
            size="2xl"
            fontWeight="light"
            mt={5}
            variant="underlined" 
            InputLeftElement={<Icon as={<FontAwesome name="route" />} size={5} mr="5" color="muted.400" />} 
            placeholder="10,00 " 
            InputRightElement={<Text color="muted.400" fontSize="2xl" mr="12">Quilometros</Text>}
            value={quilometers}
            onChangeText={setQuilometers}
          />
        </FormControl>
        <HStack>
          <FormControl
              w="1/2">
            <Input
              mt={5}
              mr={2}
              fontWeight="light"
              variant="underlined" 
              InputLeftElement={<Icon as={<FontAwesome name="stopwatch" />} size={5} mr="2" color="muted.400" />} 
              placeholder="00:00:00" 
              InputRightElement={<Text color="muted.400" fontWeight="light" >tempo</Text>}
              value={time}
              onChangeText={setTime}
            />
          </FormControl>
          <FormControl 
              w="1/2" >
            <Input
              ml={2}
              mt={5} 
              fontWeight="light"
              variant="undefined" 
              InputLeftElement={<Icon as={<FontAwesome name="running" />} size={5} mr="2" ml="2"  color="muted.400" />} 
              placeholder="00'00''" 
              InputRightElement={<Text color="muted.400" fontWeight="light">min/Km</Text>}
              isDisabled
              value={pace}
            />
          </FormControl>
        </HStack>
        </ScrollView>
        <Spacer/>
        <VStack space={3} mt="2">
          <Spacer/>
          <HStack justifyContent="space-between" >
            <FlatList data={moodList} 
              keyExtractor={item => item.name}
              numColumns={5} 
              renderItem={renderMood}
            />
          </HStack>
        </VStack>
        <Spacer/>
      </VStack>
    </KeyboardAvoidingView>
  );
}