import { 
  Box,
  KeyboardAvoidingView,
  FlatList
} from 'native-base';
import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { Run } from '../../components/run';
import { SearchBar } from '../../components/searchBar';
import { editRun } from '../../redux/actions';
import { apiGetFilteredRuns } from '../../services/apiService';

export const Search = ({ navigation }) => {

  const [text, setText ] = useState('')
  const [searchRun, setSearchRun ] = useState([])
  const dispatch = useDispatch();

  const handleSearch = (text) => {
    if(text.length>3){
      apiGetFilteredRuns(text).then((runs) => {
        setSearchRun(runs)
      })
    } else if (text.length < 1){
      setSearchRun([])
    }
  }

  useEffect(() => {
    handleSearch(text)
  },[text])
    
  const handleClickEdit= (item) => {
    dispatch(editRun(item))
    navigation.navigate('Run')
  }
  
  const renderRun = ({item}) => {
    return (
      <Pressable onPress={() => handleClickEdit(item)} >
        <Run run={item} showDetail={true}/>
      </Pressable>
    )
  }

  return (
    <Box flex="1" >
      <KeyboardAvoidingView>
        <FlatList
          ListHeaderComponent={<SearchBar text={text} setText={setText}/>}
          data={searchRun}
          keyExtractor={item => item._id}
          numColumns={1} 
          renderItem={renderRun}
          size="full"
        />
      </KeyboardAvoidingView>
    </Box>
  );
}
