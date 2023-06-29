import "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./src/screen/RegistrationScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { PostsScreen } from "./src/screen/PostsScreen";

// const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	} else {
		return (
			<RegistrationScreen />
			// <NavigationContainer>
			// 	<Stack.Navigator>
			// 		<Stack.Screen name="Registration" component={RegistrationScreen} />
			// 		<Stack.Screen name="Login" component={LoginScreen} />
			// 		<Stack.Screen name="Posts" component={PostsScreen} />
			// 	</Stack.Navigator>
			// </NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({});
