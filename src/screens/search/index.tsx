import { 
  ScrollView,
  Box,
  Heading,
  KeyboardAvoidingView
} from 'native-base';

export const Search = ({ navigation }) => {
  return (
    <Box flex="1" >
      <KeyboardAvoidingView>
        <ScrollView>
          <Heading>Search</Heading>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}
