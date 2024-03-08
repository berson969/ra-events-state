export const ShopCard = ({ card }) => {
    const { name, price, color, img } = card;
    return (
        <div className="w-72 mx-2 my-4 relative ">
            <div className="object-cover">
                <img src={img} alt={name}/>
            </div>
            <div className="absolute top-0 my-4 flex flex-col w-full">
                <div className="uppercase text-center">{name}</div>
                <div className="text-center italic text-xs ">{color}</div>
            </div>

            <div className="absolute bottom-0 w-full flex px-4 pt-4 pb-2 justify-between">
                <div className="font-cuprum  font-bold text-xl text-red-500 flex-1">
                    ${price}
                </div>
                <div>
                    <button className="uppercase font-cuprum font-bold flex-1 bg-white-500 rounded-full border-red-500 text-red-500 px-3 hover:bg-red-500 hover:text-neutral-100 border-2">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
