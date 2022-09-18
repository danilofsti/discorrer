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
  
  export const MultiSelect = ({ mood, items, title, size }) => {
    const [select, setSelect] = React.useState<string[]>([]);
    const handleSelect = (value) => {
      setSelect((prevState) => {
        const index = prevState.indexOf(value)
        if(index> -1){
          prevState.splice(index, 1)
        }else {
          prevState.push(value)
        }
        return [...prevState]
      })
    }

    const renderRunType = ({item}) => {
      const colorBadge = select.indexOf(item.id) > -1 ? mood.color: "#fdfdfd"
      const colorText = select.indexOf(item.id) > -1 ? "#fdfdfd" : mood.color
      return (
        <Pressable onPress={() => handleSelect(item.id)} >
        <Badge rounded="12" bg={colorBadge} alignSelf="center" m={2} >
          <Text color={colorText} style={{  flexShrink: 1, flexWrap: "wrap" }} >
            <FontAwesome name={item.icon} size={15} color={colorText}/>  {item.name}
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
              data={items}
              keyExtractor={item => item.id}
              numColumns={size} 
              renderItem={renderRunType}
              extraData={select}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }