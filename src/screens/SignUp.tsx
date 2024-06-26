import { Center, VStack, HStack, Text } from "native-base";

import { Entypo } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { LogoPawceiro } from "@components/LogoPawceiro";

type FormDataProps = {
  name: string;
  address: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>();

  function handleSignUp(){

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
          rules={{
            required: "Informe o nome."
          }}
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
          rules={{
            required: "Informe o endereço."
          }}
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
          rules={{
            required: "Informe o e-mail.",
            pattern:{
              value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          }}
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