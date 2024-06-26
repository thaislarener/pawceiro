import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { Home } from "@screens/Home";
import { Messages } from "@screens/Messages";

type TestRoutes = {
    signIn: undefined;
    signUp: undefined;
    home: undefined;
    messages: undefined;
}

export type TestNavigatorRoutesProps = NativeStackNavigationProp<TestRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<TestRoutes>();

export function TestRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen
            name="signIn"
            component={SignIn}
        />
        <Screen
            name="signUp"
            component={SignUp}
        />
        <Screen
            name="home"
            component={Home}
        />
        <Screen
            name="messages"
            component={Messages}
        />
    </Navigator>
  );
}