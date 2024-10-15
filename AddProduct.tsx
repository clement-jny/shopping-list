import { Button, TextInput, View, StyleSheet, Alert } from "react-native";
import { useRef, useState } from "react";

type AddProductProps = {
	setShopItem: (shopItem: string) => void;
};
const AddProduct = ({ setShopItem }: AddProductProps) => {
	const ref = useRef<TextInput>(null);
	const [tempShopItem, setTempShopItem] = useState<string>("");

	const handleOnPress = () => {
		if (tempShopItem.length === 0) {
			Alert.alert("Error", "Product name is empty");
			return;
		}

		setShopItem(tempShopItem);
		ref.current?.clear();
		ref.current?.focus();
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

			<Button title="Validate" onPress={handleOnPress} />
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
