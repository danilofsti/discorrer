import React from 'react';
import { 
  Box, 
  Center,
  HStack, 
  Button,
  Heading,
  AspectRatio,
  Text
} from 'native-base';
import { ImageBackground } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export function Splash ({ navigation }) {
  return (
    <Box height='full'>
      <AspectRatio ratio={{
          base: 6 / 11
        }}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1518214598173-1666bc921d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80'}}
        resizeMode="cover"
      >
        <Center height='full'>
          <Box width='full' p={5}>
            <Heading textAlign='center' fontWeight="thin" fontSize="5xl">
              dis<Text italic fontWeight="light">correr</Text>
            </Heading>
          </Box>
        </Center>
      </ImageBackground>
    </AspectRatio>
      <Box width='full' p={3}>
        <HStack>
          <Button
            colorScheme="blueGray"
            width='1/2'
            onPress={() => navigation.navigate('Register')}
          >
            REGISTER
          </Button>
          <Button
            width='1/2'
            variant='outline'
            colorScheme="blueGray"
            ml={1}
            onPress={() => navigation.navigate('SignIn')}
          >
            LOG IN
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}