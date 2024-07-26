


export default function Project({onAddProjectClick, projectList}){

    console.log(`projectList 4 ${JSON.stringify(projectList)}`) 
    return (
        <>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <button onClick={onAddProjectClick} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">+ Add Project</button>
            
            <ul className="mt-8">
                {
                    projectList.map(proj => <li key={proj.title}><button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{proj.title}</button></li>)
                }             
            </ul>
        
        </>       

    )
}