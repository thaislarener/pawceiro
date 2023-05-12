import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      mb={4}
      h={14}
      px={4}
      rounded="3xl"
      bg="purple.300"
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="white"
      _focus={{
        borderWidth: 1,
        bg: "purple.100",
        placeholderTextColor: "purple.700",
        borderColor: "purple.700"
      }}
      {...rest}
    />
    
  );
}