export const ProjectList = ({ projects }) => {
    return (
        <ul className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {projects.map((item, index) => (
                <li key={index} className="relative  p-2 w-full">
                    <img src={item.img} alt={item.category} className=" w-full h-auto object-cover" />
                </li>
            ))}
        </ul>
    )
}
