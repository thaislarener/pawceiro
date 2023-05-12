import { Center, VStack, Box, Heading, HStack, Text } from "native-base";

import { FontAwesome, Entypo } from '@expo/vector-icons';

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <VStack flex={1} p={8}>
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

        <HStack 
            mt={10}
            bg="blue.100"
            h={14}
            p={4}
            rounded="3xl"
            alignItems="center"
        >
            <Text color="white" fontSize="md" mr={2}>
                Cadastre-se com
            </Text>
            <Entypo name="facebook" size={24} color="white" />
        </HStack>
        <Input
          mt={8}
          placeholder="Nome completo"
        />

        <Input
          mt={3}
          placeholder="Endereço"
        />

        <Input
          mt={3}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          mt={3}
          placeholder="Senha"
          secureTextEntry
        />

        <Input
          mt={3}
          placeholder="Confirmar senha"
          secureTextEntry
        />

        <Button
          mt={8}
          w={40}
          title="CADASTRE-SE"
        />

      </Center>
    </VStack>
  );
}