import { Center, VStack, HStack, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Entypo } from '@expo/vector-icons';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { LogoPawceiro } from '@components/LogoPawceiro';
import { TestNavigatorRoutesProps } from '@routes/test.routes';

type FormDataProps = {
  name: string;
  address: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  address: yup.string().required("Informe o endereço."),
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  password: yup.string().required("Informe a senha.").min(6, "A senha deve ter pelo menos 6 dígitos."),
  password_confirm: yup.string().required("Confirme a senha.").oneOf([yup.ref('password')], "As senhas devem ser iguais.")
});

export function SignUp() {
  const navigation = useNavigation<TestNavigatorRoutesProps>();
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleSignUp(){
    navigation.navigate('home');
  }

  return (
    <VStack flex={1} p={8}>
      <Center>
        <LogoPawceiro/>

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

        <Controller
          control={control}
          name="name"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={8}
              placeholder="Nome completo"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={3}
              placeholder="Endereço"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.address?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={3}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
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
              mt={3}
              placeholder="Senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirm"
          render={({ field: {onChange, value}}) => (
            <Input
              mt={3}
              placeholder="Confirmar senha"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <Button
          mt={8}
          w={40}
          title="CADASTRE-SE"
          onPress={handleSubmit(handleSignUp)}
        />

      </Center>
    </VStack>
  );
}