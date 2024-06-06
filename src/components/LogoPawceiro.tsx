import { Center, HStack, Heading } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

export function LogoPawceiro(){
  return(
    <Center>
        <HStack mt={12} alignItems="center">
          <Heading
            mr={2}
            fontSize="6xl"
            color="purple.700"
            fontFamily="heading"
          >
            Pawceir
          </Heading>
          <FontAwesome name="paw" size={48} color="#7E57C2" />
        </HStack>
    </Center>
  );
}