import React, { useState } from "react";
import {
	Button,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import BgImage from "../image/photo-bg.jpg";
import { Ionicons } from "@expo/vector-icons";

export const RegistrationScreen = () => {
	const [focusedInput, setFocusedInput] = useState(null);
	return (
		<ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
			<View style={styles.container}>
				<KeyboardAvoidingView
					behavior={Platform.OS == "ios" ? "padding" : "height"}
				>
					<View style={styles.form}>
						<View style={styles.imageWrapper}>
							<Image style={styles.avatarImage} />
							<Ionicons
								name="add-circle-outline"
								size={25}
								color="#FF6C00"
								style={styles.addButton}
							/>
						</View>
						<Text style={styles.screenTitle}>Реєстрація</Text>
						<TextInput
							placeholder="Логін"
							placeholderTextColor="#BDBDBD"
							style={styles.input}
							required
						/>
						<TextInput
							placeholder="Адреса електронної пошти"
							placeholderTextColor="#BDBDBD"
							style={styles.input}
							keyboardType="email-address"
							required
						/>
						<View>
							<TextInput
								placeholder="Пароль"
								placeholderTextColor="#BDBDBD"
								style={styles.passwordInput}
								required
							/>
							<Text style={styles.showPasswordButtonText}>Показати</Text>
						</View>
						<TouchableOpacity style={styles.primaryBtn}>
							<Text style={styles.textBtn}>Зареєстуватися</Text>
						</TouchableOpacity>

						<Text style={styles.registerLink}>Вже є акаунт? Увійти</Text>
					</View>
				</KeyboardAvoidingView>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	form: {
		position: "relative",
		backgroundColor: "#fff",
		alignItems: "center",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingTop: 92,
		paddingBottom: 78,
		paddingLeft: 16,
		paddingRight: 16,
	},
	imageWrapper: {
		position: "absolute",
		transform: [{ translateY: -60 }],
		top: 0,
	},
	avatarImage: {
		width: 120,
		height: 120,
		borderRadius: 16,
		backgroundColor: "#f6f6f6",
	},
	addButton: {
		position: "absolute",
		right: 0,
		top: "60%",
		transform: [{ translateX: 12.5 }],
	},
	screenTitle: {
		fontSize: 30,
		fontWeight: 500,
		lineHeight: 35,
		marginBottom: 32,
		fontFamily: "roboto-500",
		color: "#212121",
	},
	input: {
		width: 343,
		height: 50,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
		backgroundColor: "#f6f6f6",
		marginBottom: 16,
		padding: 16,
		fontFamily: "roboto-400",
	},
	inputActive: {
		backgroundColor: "#ffffff",
		borderColor: "#FF6C00",
		color: "#212121",
	},
	passwordInput: {
		position: "relative",
		marginBottom: 43,

		width: 343,
		height: 50,
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
		backgroundColor: "#f6f6f6",
		marginBottom: 16,
		padding: 16,
		fontFamily: "roboto-400",
	},
	showPasswordButtonText: {
		position: "absolute",
		top: 16,
		right: 16,

		fontSize: 16,
		color: "#1B4371",
		fontFamily: "roboto-400",
	},
	primaryBtn: {
		width: 343,

		paddingTop: 16,
		paddingBottom: 16,
		borderRadius: 100,
		backgroundColor: "#FF6C00",
		textAlign: "center",
		marginBottom: 16,
	},
	textBtn: {
		color: "#fff",
		fontSize: 16,
		fontFamily: "roboto-400",
		textAlign: "center",
	},
	registerLink: {
		fontSize: 16,
		fontFamily: "roboto-400",
		color: "#1B4371",
	},
});
