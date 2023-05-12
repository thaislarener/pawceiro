import { Center, VStack, Image, Heading, HStack, Text } from "native-base";

import { FontAwesome } from '@expo/vector-icons';

import Img from '@assets/signInImage.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
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
        <Image
          mt={12}
          source={Img}
          alt="Gato e Cachorro"
        />
        <Input
          mt={4}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          mt={2}
          placeholder="Senha"
          secureTextEntry
        />

        <Button
          mt={2}
          title="ENTRAR"
        />

        <Text mt={8} fontFamily="body" fontSize="md">
          Ainda não possui cadastro? <Text fontSize="md" underline color="blue.200">Clique aqui</Text>
        </Text>
        <Text fontSize="md" underline color="blue.200">Esqueci minha senha</Text>
      </Center>
    </VStack>
  );
}