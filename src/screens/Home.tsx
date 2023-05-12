import { Center, VStack, HStack } from "native-base";
import Carousel from 'react-native-snap-carousel';

import { MaterialIcons , Ionicons } from '@expo/vector-icons';
import { LogoPawceiro } from "@components/LogoPawceiro";

export function Home() {
  return (
    <VStack flex={1} p={8}>
      <Center>
        <LogoPawceiro />

        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
          mt={3}
        >
          <MaterialIcons name="messenger" size={40} color="#7E57C2" />
          <Ionicons name="location-sharp" size={40} color="#7E57C2" />
        </HStack>
      </Center>
    </VStack>
  );
}