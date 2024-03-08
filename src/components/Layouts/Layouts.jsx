import { useState } from "react";
import { IconSwitch } from './IconSwitch';
import { Store } from "./Store.jsx";


export const Layouts = () => {
    const [icon, setSwitch] = useState('view_list')
    const handleSwitch = () => {
        console.log("change state here");
        // Ваша логика переключения состояния
        setSwitch((icon === 'view_module') ? 'view_list' : 'view_module')
    };

    return (
        <div className="flex flex-col">
            <IconSwitch icon={icon} onSwitch={handleSwitch} />
            <Store icon={icon} />


        </div>
    )
}
