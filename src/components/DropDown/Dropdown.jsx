import { useState } from "react";
import { DropdownList } from "./DropdownList.jsx";
export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelect] = useState("Profile Information");


    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (selected) => {
        setSelect(selected);
        setIsOpen(false);
    };

    return (
        <div className="body-container">
            <div className="btn-container">
                <button className="btn"
                        onClick={handleButtonClick}
                >
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                    {isOpen && (
                        <DropdownList selected={selected} onSelect={handleSelectItem} />
                    )}
                </button>
            </div>
        </div>
    )
}
