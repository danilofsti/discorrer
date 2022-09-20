import { 
    Box,
    Heading,
    Text,
    Badge,
    FlatList,
    Stack
  } from 'native-base';
  import React from 'react';
  import FontAwesome from 'react-native-vector-icons/FontAwesome5';
  import { Pressable } from 'react-native';
  import { useSelector, useDispatch } from 'react-redux'
  import { setRunItem } from '../../redux/actions';
  
  export const MonoSelect = ({ mood, list, title, size, type, name }) => {
    const run = useSelector( state => state.runReducer)
    const dispatch = useDispatch();

    const handleClickMood = (value) => {
      dispatch(setRunItem(value, type))
    }

    const renderRunType = ({item}) => {
      const isSelected = run[name] === item.id;
      return (
        <Pressable onPress={() => handleClickMood(item.id)} >
        <Badge rounded="12" bg={isSelected ? mood.color: "#fdfdfd"} alignSelf="center" m={2} >
          <Text color={isSelected ? "#fdfdfd" : mood.color} style={{  flexShrink: 1, flexWrap: "wrap" }} >
            <FontAwesome name={item.icon} size={15} color={isSelected ? "#fdfdfd" : mood.color}/>  {item.name}
          </Text>
        </Badge>
        </Pressable>
      )
    }
    return (
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" mt={4}
        _web={{
          shadow: 2,
          borderWidth: 0
        }}
      >
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <FlatList
              data={list}
              keyExtractor={i => i.id}
              numColumns={size} 
              renderItem={renderRunType}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }