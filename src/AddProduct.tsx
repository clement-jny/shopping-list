import {
	Button,
	TextInput,
	View,
	StyleSheet,
	Alert,
	AlertButton,
	AlertOptions,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { useShoppingContext } from "../shopping-context";
import ModalView from "./Modal";

const MIN_PRODUCT_NAME_LENGTH = 2;

const ALERT_BUTTONS: AlertButton[] = [
	{ text: "OK", onPress: () => console.log("OK Pressed") },
	{ text: "Cancel", onPress: () => console.log("Cancel Pressed") },
];

const ALERT_OPTIONS: AlertOptions = {
	cancelable: true,
};

const AddProduct = () => {
	const { shopItems, setShopItems } = useShoppingContext();

	const ref = useRef<TextInput>(null);

	const [tempShopItem, setTempShopItem] = useState<string>("");
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const handleOnPress = () => {
		if (tempShopItem.length < MIN_PRODUCT_NAME_LENGTH) {
			// Alert.alert(
			// 	"Error",
			// 	"Product name is too short",
			// 	ALERT_BUTTONS,
			// 	ALERT_OPTIONS
			// );

			setIsModalVisible(true);

			return;
		}

		setShopItems([
			{ itemKey: Date.now().toString(), itemName: tempShopItem },
			...shopItems,
		]);

		ref.current?.clear();
		ref.current?.focus();
		setTempShopItem("");
	};

	return (
		<View style={styles.header}>
			<TextInput
				ref={ref}
				style={styles.headerInput}
				value={tempShopItem}
				onChangeText={setTempShopItem}
				placeholder="New product"
				autoCorrect={false}
				autoComplete="off"
			/>

			<Button
				title="Validate"
				onPress={handleOnPress}
				// disabled={tempShopItem.length < 3}
			/>

			<ModalView
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
		height: "10%",
	},
	headerInput: {
		width: "70%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
	},
});

export default AddProduct;
