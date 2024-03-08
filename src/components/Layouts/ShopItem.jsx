export const ShopItem = ({ card }) => {
    const { name, price, color, img } = card;
    return (
        <div className="m-1 flex mx-4 p-4  justify-between items-center bg-gray-100 min-h-14 max-h-20">
            <div className="w-20 object-cover">
                <img src={img} alt={name}/>
            </div>
            <div className="uppercase p-2 text-center flex-shrink-0">{name}</div>
            <div className="text-xs p-2 italic">{color}</div>
            <div className="font-cuprum  font-bold text-xl text-red-500 p-2 ">${price}</div>
            <div className="flex-shrink-0 p-2">
                <button className="uppercase font-cuprum font-bold bg-white-500 text-nowrap rounded-full border-red-500 text-red-500 px-3 hover:bg-red-500 hover:text-neutral-100 border-2">Add to cart</button>
            </div>
        </div>
    )
}
