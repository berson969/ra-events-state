export const Toolbar = ({ filters, activeFilter, onSelectFilter }) => {

    const className = "flex-1 font-semibold py-0 px-4 border-2 border-gray-500 rounded whitespace-nowrap"

    return (
        <nav className="mb-8 p-4">
            <div className="flex flex-wrap gap-2 lg:flex-nowrap ml-0 max-w-md">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`${className}  ${filter === activeFilter
                                            ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'}`}
                    onClick={() => onSelectFilter(filter)}
                    >
                    {filter}
                </button>
            ))}
            </div>
        </nav>
    )
}
