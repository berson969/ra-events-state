import { ShopItem } from "./ShopItem.jsx";

export const ListView = ({ products }) => {
    return (
        <div>
            {
                products.map((card, index) =>
                    <ShopItem key={index} card={card} />
                )}
        </div>
    )
}
