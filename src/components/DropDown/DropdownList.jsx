export const DropdownList = ({ selected, onSelect }) => {
    const dropdownItems = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"]

    return (
    <div className={selected ? "dropdown-wrapper open" : "dropdown-wrapper"}>

        <div className="dropdown">
            <ul >
                {dropdownItems.map((item, index) => (
                    <li className={selected === item ? "active" : ""} key={index}>
                        <a href="#"
                            onClick={() => onSelect(item)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}
