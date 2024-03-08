export const ProjectList = ({ projects }) => {
    return (
        <ul className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {/*<ul className="flex flex-wrap">*/}

            {projects.map((item, index) => (
                <li key={index} className="relative  p-2 w-full">
                {/*<li key={index} className="relative flex-none p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">*/}
                    <img src={item.img} alt={item.category} className=" w-full h-auto object-cover" />
                </li>
            ))}
        </ul>
    )
}
