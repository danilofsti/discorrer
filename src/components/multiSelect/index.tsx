import { 
    Box,
    Heading,
    Text,
    Badge,
    FlatList,
    Stack
  } from 'native-base';
  import React, { useEffect } from 'react';
  import FontAwesome from 'react-native-vector-icons/FontAwesome5';
  import { Pressable } from 'react-native';
  import { useSelector, useDispatch } from 'react-redux'
  import { setRunItem } from '../../redux/actions';
  import { TAGS } from '../../enum/tags';
  
  export const MultiSelect = ({ mood, list, title, size, type, name }) => {
    const run = useSelector( state => state.runReducer)
    const dispatch = useDispatch();

    const handleClickMood = (value) => {
      dispatch(setRunItem(value, type))
    }

    const renderRunType = ({item}) => {
      const tag = TAGS[item]
      const colorBadge = run[name].indexOf(tag.id) > -1 ? mood.color: "#fdfdfd"
      const colorText = run[name].indexOf(tag.id) > -1 ? "#fdfdfd" : mood.color
      return (
        <Pressable onPress={() => handleClickMood(tag.id)} >
        <Badge rounded="12" bg={colorBadge} alignSelf="center" m={2} >
          <Text color={colorText} style={{  flexShrink: 1, flexWrap: "wrap" }} >
            <FontAwesome name={tag.icon} size={15} color={colorText}/>  {tag.name}
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
              keyExtractor={i => i}
              numColumns={size} 
              renderItem={renderRunType}
              extraData={run[name]}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }