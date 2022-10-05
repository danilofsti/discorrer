import { Badge, Text } from "native-base"
import { Pressable } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
export const Tag = ({tag, collorBadge, collorText, handleClick}) => {
  console.log(tag)
  return (
    <Pressable onPress={() => handleClick(tag.id)} >
    <Badge rounded="12" bg={collorBadge} alignSelf="center" m={2} >
      <Text color={collorText} style={{  flexShrink: 1, flexWrap: "wrap" }} >
        <FontAwesome name={tag.icon} size={15} color={collorText}/>  {tag.name}
      </Text>
    </Badge>
    </Pressable>
  )
  
}