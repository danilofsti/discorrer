import React from 'react';
import { 
  Box, 
  Heading, 
  Center,
  Input,
  FormControl,
  VStack, 
  Button,
  KeyboardAvoidingView,
  Icon,
  Pressable,
  ScrollView
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Platform } from 'react-native';


export const Register = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  return(
    <KeyboardAvoidingView h={{
      base: "400px",
      lg: "auto"
    }}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Registre-se
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Bem-vindo! Cadastre-se para continuar!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl.Label>Email ID</FormControl.Label>
            <FormControl>
              <Input
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
                placeholder="seu@email.com" 
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
              />
            </FormControl>
            <FormControl>
            <FormControl.Label>Confirmar Senha</FormControl.Label>
              <Input 
                type={showConfirm ? "text" : "password"} 
                InputRightElement={<Pressable onPress={() => setShowConfirm(!showConfirm)}>
                  <Icon as={<MaterialIcons name={showConfirm ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} 
                InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />} 
                placeholder="********" 
              />
            </FormControl>
            <Button 
              mt="2" 
              colorScheme="blueGray"
              onPress={() => navigation.navigate('TabBar')}
            >
              REGISTER
            </Button>
          </VStack>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  )
};