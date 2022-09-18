import { 
  ScrollView,
  Box,
  Heading,
  KeyboardAvoidingView
} from 'native-base';

export const Charts = ({ navigation }) => {
  return (
    <Box flex="1" >
      <KeyboardAvoidingView>
        <ScrollView>
          <Heading>Gráficos</Heading>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}
