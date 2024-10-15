import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import AddProduct from "./src/AddProduct";
import ProductItem from "./src/ProductItem";

type ShopItemProps = {
	key: string;
	name: string;
};
const List = ({ shopItems }: { shopItems: ShopItemProps[] }) => {
	return (
		<FlatList
			style={styles.list}
			data={shopItems}
			keyExtractor={(item) => item.key}
			renderItem={({ item }) => (
				<ProductItem key={item.key} itemKey={item.key} itemName={item.name} />
			)}
		/>
	);
};

export default function App() {
	const [shopItems, setShopItems] = useState<ShopItemProps[]>([
		{ key: "1", name: "Banana" },
		{ key: "2", name: "Apple" },
		{ key: "3", name: "Orange" },
	]);
	const [shopItem, setShopItem] = useState<string>("");

	useEffect(() => {
		if (shopItem.length === 0) return;

		const key = (shopItems.length + 1).toString();

		setShopItems((prevShopItems) => [
			{ key, name: shopItem },
			...prevShopItems,
		]);
	}, [shopItem]);

	return (
		<SafeAreaView style={styles.container}>
			<AddProduct setShopItem={setShopItem} />
			<List shopItems={shopItems} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
	},

	list: {
		width: "100%",
		height: "80%",
	},
});
