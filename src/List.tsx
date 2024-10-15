import ProductItem from "./ProductItem";
import { useShoppingContext } from "../shopping-context";
import { FlatList, StyleSheet } from "react-native";

const List = () => {
	const { shopItems } = useShoppingContext();

	return (
		<FlatList
			style={styles.list}
			data={shopItems}
			keyExtractor={(item) => item.itemKey}
			renderItem={({ item }) => (
				<ProductItem
					key={item.itemKey}
					itemKey={item.itemKey}
					itemName={item.itemName}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		width: "100%",
		height: "80%",
	},
});

export default List;
