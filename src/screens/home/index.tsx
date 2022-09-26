import { 
  Box,
  KeyboardAvoidingView,
  FlatList,
  Icon,
  Fab
} from 'native-base';
import React from 'react';
import { Run } from '../../components/run';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Pressable } from 'react-native';

const items =  [{
  id:1,
  title:'Long Run', 
  day:'Today', 
  hour:'9PM', 
  distance:'5,09', 
  pace:`6'09"`, 
  time:'00:30:20',
  mood:'great',
  type: {
   icon: "map",
   name: "long"
  },
  tags: [
  ]
},
 {
  id:2,
  title:'Just a Run', 
  day:'02/09/2022', 
  hour:'9PM', 
  distance:'3,00', 
  pace:`6'00"`, 
  time:'00:15:00',
  mood:'mad',
  type: {
   icon: "running",
   name: "regeneration"
  },
  tags: [
    { id: "00", icon: "spa", name:"Chuva" },
  ]
},
{
  id:3,
 title:'Run in a trail', 
 day:'02/09/2022', 
 hour:'9PM', 
 distance:'3,00', 
 pace:`6'00"`, 
 time:'00:15:00',
 mood:'good',
 type: {
  icon: "hiking",
  name: "trail"
 },
 tags: [
   { id: "00", icon: "heartbeat", name:"Chuva" },
   { id: "01", icon: "running", name:"Em Grupo" },
   { id: "00", icon: "hiking", name:"Chuva" },
   { id: "01", icon: "user-friends", name:"Em Grupo" },
   { id: "00", icon: "bicycle", name:"Chuva" },
   { id: "01", icon: "heart-broken", name:"Em Grupo" }
 ]
},
{
  id:4,
 title:'Méh Race', 
 day:'02/09/2022', 
 hour:'9PM', 
 distance:'3,00', 
 pace:`6'00"`, 
 time:'00:15:00',
 mood:'meh',
 type: {
  icon: "flag-checkered",
  name: "race"
 },
 tags: [
   { id: "00", icon: "wine-glass-alt", name:"Chuva" },
   { id: "01", icon: "stopwatch", name:"Em Grupo" },
 ]
},
{
  id:5,
 title:'Méh Speed Run', 
 day:'02/09/2022', 
 hour:'9PM', 
 distance:'3,00', 
 pace:`6'00"`, 
 time:'00:15:00', 
 mood: 'bad',
 type: {
  icon: "stopwatch",
  name: "speed"
 },
 tags: [
   { id: "00", icon: "flag-checkered", name:"Chuva" },
   { id: "01", icon: "tint", name:"Em Grupo" },
   { id: "00", icon: "apple-alt", name:"Chuva" }
 ]
}]

export const Home = ({ navigation }) => {
  const handleClickCardRun = (item) => {

  }
  
  const renderRun = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate('Run')} >
        <Run run={item}/>
      </Pressable>
    )
  }
  return (
    <Box flex="1" >
      <KeyboardAvoidingView>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          numColumns={1} 
          renderItem={renderRun}
        />
        <Fab renderInPortal={false} shadow={2} size="sm" bg="#377971" icon={<Icon color="white" as={FontAwesome} name="plus" size="sm" />}  onPress={() => navigation.navigate('Run')}/>
      </KeyboardAvoidingView>
    </Box>
  );
}
