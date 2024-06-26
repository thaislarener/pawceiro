import { Center, VStack, Image, Text, Icon, Modal } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import { TestNavigatorRoutesProps } from "@routes/test.routes";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Img from '@assets/signInImage.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { LogoPawceiro } from "@components/LogoPawceiro";

export function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation<TestNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  function handleLogin(){
    navigation.navigate('home');
  }
  return (
    <VStack flex={1} p={8}>
      <Center>
        <LogoPawceiro />
        <Image
          mt={12}
          source={Img}
          alt="Gato e Cachorro"
        />
        <Input
          mt={4}
          placeholder="E-mail"
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
          onPress={handleLogin}
        />

        <Text mt={8} fontFamily="body" fontSize="md">
          Ainda não possui cadastro? 
            <Text onPress={handleNewAccount} fontSize="md" underline color="blue.200">
              Clique aqui
            </Text>
        </Text>
        <Text onPress={() => setShowModal(true)} fontSize="md" underline color="blue.200">Esqueci minha senha</Text>
      </Center>

      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        _backdrop={{ bg: "purple.700"}}
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Center>
            <Text mt={4} color="purple.700"fontFamily="heading" fontSize="xl">
              Recuperar senha
            </Text>
            <Modal.Body alignItems="center">
            <Input
              mt={4}
              w={265}
              placeholder="E-mail de recuperação de senha"
              keyboardType="email-address"
              autoCapitalize="none" 
            />
            </Modal.Body>
            <Button
              w={100}
              mb={4}
              title="ENVIAR"
              onPress={() => {setShowModal(false);}}
            />
          </Center>
        </Modal.Content>
      </Modal>

    </VStack>
  );
}