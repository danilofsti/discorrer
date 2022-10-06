import { Box, Input, Button } from "native-base"
import { useState } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export const SearchBar = ({text, setText}) => {
  return (
    <Box alignItems="center">
      <Input w="90%" 
        m={4} 
        fontSize="xl"
        variant="underlined"
        InputRightElement={
            <FontAwesome name="search" size={20} color="#377971"/> } 
        placeholder="" 
        value={text}
        onChangeText={setText}
        />
    </Box>
  )
  
}