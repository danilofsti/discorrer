import { 
    Box,
    Heading,
    FlatList,
    Stack
  } from 'native-base';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setRunItem } from '../../redux/actions';
import { TAGS } from '../../enum/tags';
import { Tag } from '../tag';

  
export const MonoSelect = ({ mood, list, title, size, type, name }) => {
  const run = useSelector( state => state.runReducer)
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setRunItem(value, type))
  }

  const renderRunType = ({item}) => {
    const tag = TAGS[item]
    const isSelected = run[name] === tag.id;
    const collorBadge = isSelected ? mood.color: "#fdfdfd"
    const collorText = isSelected? "#fdfdfd" : mood.color    
    return (
      <Tag tag={TAGS[item]} collorBadge={collorBadge} collorText={collorText} handleClick={handleClick}/>
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
          />
        </Stack>
      </Stack>
    </Box>
  );
  }