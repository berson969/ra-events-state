import { useState } from 'react'
import { Toolbar } from "./Toolbar.jsx";
import { ProjectList } from "./ProjectList.jsx";
import data from "./data.js";


export const Portfolio = () => {

    const [selectedFilter, setSelectedFilter] = useState('All');

    const projects = selectedFilter === 'All'
        ? data
        : data.filter(item => item.category === selectedFilter);

    const handleSelectFilter = (filter) => {
        setSelectedFilter(filter);
    }


    return (
        <div className="container mx-auto p-8">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                activeFilter={selectedFilter}
                onSelectFilter={handleSelectFilter}
            />
            <ProjectList projects={projects} />
        </div>
    )
}
