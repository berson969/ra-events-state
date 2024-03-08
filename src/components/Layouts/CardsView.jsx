import { ShopCard } from "./ShopCard.jsx";

export const CardsView = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {
                products.map((card, index) =>
                    <ShopCard key={index} card={card} />
                )}
        </div>
    )
}
