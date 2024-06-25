import { Box, HStack, Image, Text, VStack } from "native-base";

type Props = {
  photo: string;
  name: string;
  age: string;
  distance: string;
  description: string;
}
export function CarouselCard({photo, name, age, distance, description}: Props) {
  return (
    <VStack mt={6}>
      <Image 
        source={{ uri: photo}} 
        alt="Foto do animal"
        size={350}
      />
      <HStack mt={4} justifyContent="space-between" p={2}>
        <HStack >
          <Text fontFamily="heading" fontSize="2xl" color="purple.700">
            {name},
          </Text>
          <Text fontFamily="heading" fontSize="2xl" color="purple.700">
            {age}
          </Text>
        </HStack>
        <Box >
          <Text fontFamily="heading" fontSize="2xl" color="purple.700">
            {distance}
          </Text>
        </Box>
      </HStack>
      <Text fontSize="md" mt={1}>
        {description}
      </Text>
    </VStack>
  );
}