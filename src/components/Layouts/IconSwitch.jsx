export const IconSwitch = ({ icon, onSwitch }) => {
    return (
        <div className="icon-switch relative cursor-pointer m-8" onClick={onSwitch}>
            <span className="absolute top-0 right-0">
                <i className="material-icons">{icon}</i>

            </span>
        </div>
    );
};
