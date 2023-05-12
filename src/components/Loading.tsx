import { Spinner, Center } from "native-base";

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner color="purple.700"/>
    </Center>
  );
}
