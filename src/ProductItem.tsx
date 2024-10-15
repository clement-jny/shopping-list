import React from "react";
import { Text, StyleSheet } from "react-native";

type ShopItemProps = {
	itemKey: string;
	itemName: string;
};
const ProductItem = ({ itemKey, itemName }: ShopItemProps) => {
	console.log(itemKey, itemName);

	return (
		<Text key={itemKey} style={styles.listItem}>
			{itemName}
		</Text>
	);
};

const styles = StyleSheet.create({
	listItem: {
		height: 40,
		backgroundColor: "red",
		color: "white",
		padding: 10,
		margin: 10,
	},
});

export default ProductItem;
