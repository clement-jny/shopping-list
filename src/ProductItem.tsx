import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useShoppingContext } from "../shopping-context";
// import * as Haptics from "expo-haptics";
import { ShopItem } from "./models";

const ProductItem = ({ itemKey, itemName }: ShopItem) => {
	const [isPressed, setIsPressed] = useState(false);

	const { removeShopItem } = useShoppingContext();

	const handleOnPress = () => {
		console.log(`ProductItem ${itemKey} - ${itemName} pressed`);
		// Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		// removeShopItem(item.itemKey);

		removeShopItem(itemKey);

		console.log("Long press finished");
	};

	return (
		<Pressable
			key={itemKey}
			onLongPress={handleOnPress}
			delayLongPress={1500}
			style={({ pressed }) => (pressed ? styles.pressed : styles.listItem)}
		>
			<Text style={{ color: "white" }}>{itemName}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	listItem: {
		height: 40,
		backgroundColor: "red",
		padding: 10,
		margin: 10,
	},
	pressed: {
		height: 40,
		backgroundColor: "blue",
		padding: 10,
		margin: 10,
	},
});

export default ProductItem;
