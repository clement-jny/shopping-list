import React, { createContext, useContext, useState } from "react";
import { ShopItem } from "./src/models";

type ShoppingContextType = {
	shopItems: ShopItem[];
	setShopItems: (shopItems: ShopItem[]) => void;
	removeShopItem: (key: string) => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(
	undefined
);

const useShoppingContext = () => {
	const context = useContext(ShoppingContext);
	if (!context) {
		throw new Error(
			"useShoppingContext must be used within a ShoppingProvider"
		);
	}

	return context;
};

type ShoppingProviderProps = {
	children: React.ReactNode;
};

const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
	const [shopItems, setShopItems] = useState<ShopItem[]>([
		{ itemKey: "1", itemName: "Item 1" },
		{ itemKey: "2", itemName: "Item 2" },
		{ itemKey: "3", itemName: "Item 3" },
	]);

	const removeShopItem = (key: string) => {
		setShopItems((prevItems) =>
			prevItems.filter((item) => item.itemKey !== key)
		);
	};

	return (
		<ShoppingContext.Provider
			value={{
				shopItems,
				setShopItems,
				removeShopItem,
			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};

export { ShoppingProvider, useShoppingContext };
