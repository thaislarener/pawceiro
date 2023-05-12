import { Center, VStack, Image, Text, Icon } from "native-base";

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import Img from '@assets/signInImage.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { LogoPawceiro } from "@components/LogoPawceiro";

export function SignIn() {
  return (
    <VStack flex={1} p={8}>
      <Center>
        <LogoPawceiro/>
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
          InputRightElement={<Icon m="2" mr="6" size="6" color="white" as={<MaterialIcons name="email" />} />}
        />

        <Input
          mt={2}
          placeholder="Senha"
          secureTextEntry
          InputRightElement={<Icon m="2" mr="6" size="6" color="white" as={<Entypo name="lock" />} />}
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