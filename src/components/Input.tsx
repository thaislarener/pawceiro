import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
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

      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}