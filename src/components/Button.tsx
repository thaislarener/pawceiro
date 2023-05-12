import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}
export function Button({title, ...rest}: Props){
    return(
        <ButtonNativeBase
            bg="purple.700"
            w={28}
            h={12}
            rounded="3xl"
            _pressed={{
                bg: "purple.300"}}
            {...rest}
        >
            <Text 
                color="white" 
                fontFamily="heading" 
                fontSize="lg"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    );
}