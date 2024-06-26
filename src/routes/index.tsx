import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { TestRoutes } from "./test.routes";
export function Routes(){
    return(
        <NavigationContainer>
            <TestRoutes/>
        </NavigationContainer>
    );
}