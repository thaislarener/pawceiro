import { Avatar, Box, Center, FlatList, HStack, Text, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { LogoPawceiro } from "@components/LogoPawceiro";


const data = [{
  id: "1",
  fullName: "Mario",
  recentText: "Olá, tudo bem?",
  avatarUrl: "https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg"
}, {
  id: "2",
  fullName: "Lucas",
  recentText: "Pode me passar seu contato?",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2zOSTtm5b0uRhUWwh7I708XUdROQARG9Lg&usqp=CAU"
}, {
  id: "3",
  fullName: "Zeus",
  recentText: "Oii",
  avatarUrl: "data:image/jpeg;base64,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"
}, {
  id: "4",
  fullName: "Theo",
  recentText: "Quando posso buscar meu novo parceiro?",
  avatarUrl: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
}, {
  id: "5",
  fullName: "Kiara",
  recentText: "Ansioso para conhece-lo",
  avatarUrl: "https://i0.statig.com.br/bancodeimagens/bx/ry/fv/bxryfvt3vi76x0obfhixvrj8x.jpg"
}];

export function Messages() {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <VStack flex={1} p={8}>
      <LogoPawceiro />
      <Entypo onPress={handleGoBack} name="reply" size={40} color="#7E57C2" />

      <Center>
        <Text color="purple.700" fontSize={24}>
          MATCHS
        </Text>
      </Center>

      <FlatList 
        data={data} 
        renderItem={({ item }) => 
          <Box 
            borderBottomWidth="1.5" 
            borderColor="purple.700"  
            pl={["0", "4"]} 
            pr={["0", "5"]} 
            py="2">
              <HStack space={[2, 3]} >
                <Avatar size="54px" source={{ uri: item.avatarUrl }} />
                <VStack>
                  <Text color="black" fontSize="lg" bold>
                    {item.fullName}
                  </Text>
                  <Text color="black" fontSize="md">
                    {item.recentText}
                  </Text>
                </VStack>
              </HStack>
          </Box>
        }
        keyExtractor={item => item.id}
      />
    </VStack>
  );
}
