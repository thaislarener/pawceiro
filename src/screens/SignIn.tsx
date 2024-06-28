import { Center, VStack, Image, Text, Icon, Modal } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { TestNavigatorRoutesProps } from "@routes/test.routes";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Img from '@assets/signInImage.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { LogoPawceiro } from "@components/LogoPawceiro";

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  password: yup.string().required("Informe a senha.")
});
export function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation<TestNavigatorRoutesProps>();

  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  function handleLogin(){
    navigation.navigate('home');
  }

  function handleForgotPassword(){
    setShowModal(false);
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

        <Controller
          control={control}
          name="email"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={4}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              InputRightElement={<Icon m="2" mr="6" size="6" color="white" as={<MaterialIcons name="email" />} />}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={2}
              placeholder="Senha"
              secureTextEntry
              InputRightElement={<Icon m="2" mr="6" size="6" color="white" as={<Entypo name="lock" />} />}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Button
          mt={2}
          title="ENTRAR"
          onPress={handleSubmit(handleLogin)}
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
            <Controller
              control={control}
              name="email"
              render={({ field: {onChange, value}}) => (
                <Input
                  mt={4}
                  w={265}
                  placeholder="E-mail de recuperação de senha"
                  keyboardType="email-address"
                  autoCapitalize="none" 
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            </Modal.Body>
            <Button
              w={100}
              mb={4}
              title="ENVIAR"
              onPress={handleSubmit(handleForgotPassword)}
            />
          </Center>
        </Modal.Content>
      </Modal>

    </VStack>
  );
}