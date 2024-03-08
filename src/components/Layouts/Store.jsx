import { CardsView } from "./CardsView.jsx";
import { ListView } from "./ListView.jsx";

import products from "./products.js";

export const Store = ({ icon }) => {
    const SelectedView = icon === "view_list" ? ListView : CardsView
    return (
        <div>
                <SelectedView products={products} />
        </div>
    )
}
