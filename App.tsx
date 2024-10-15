import { ShoppingProvider } from "./shopping-context";
import { StyleSheet, SafeAreaView } from "react-native";
import AddProduct from "./src/AddProduct";
import List from "./src/List";

export default function App() {
	// const removeShopItem = (key: string) => {
	// 	setShopItems((prevShopItems) =>
	// 		prevShopItems.filter((shopItem) => shopItem.key !== key)
	// 	);
	// };

	return (
		<ShoppingProvider>
			<SafeAreaView style={styles.container}>
				<AddProduct />
				<List />
			</SafeAreaView>
		</ShoppingProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
	},
});
