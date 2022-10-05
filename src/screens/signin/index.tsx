import React from 'react';
import { 
  Box, 
  Heading, 
  Center,
  Input,
  FormControl,
  VStack, 
  Button,
  Link, 
  KeyboardAvoidingView,
  Icon,
  Pressable
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';

export const SigIn = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  return (
    <KeyboardAvoidingView h={{
      base: "400px",
      lg: "auto"
    }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Sign In
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Bem-vindo, faça o login para continuar!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
              <Input
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
                placeholder="seu@email.com" 
                variant="underlined"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input 
                type={show ? "text" : "password"} 
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} 
                InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />} 
                placeholder="********" 
                variant="underlined"
              />

            </FormControl>
            <Button 
              mt="2" 
              colorScheme="blueGray"
              onPress={() => navigation.navigate('TabBar')}
            >
              SIGN IN
            </Button>
          </VStack>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  )
};