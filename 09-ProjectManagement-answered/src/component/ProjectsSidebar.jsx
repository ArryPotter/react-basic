import Button from './Button'

export default function ProjectsSidebar({onStartAdProject, onSelectProject, projects, selectedProjectId}){

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" >
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div><Button onClick={onStartAdProject} >+ Add Project</Button></div>
            <ul className='mt-8'>
                
                { projects.map((project) => 
                    {
                        let cssClases = 'w-full text-left px-2 py-1 rounded-sm my-1 text-slate-400 hover:text-stone-200 hover:bg-stone-800'
                        if (projects.id === selectedProjectId) {
                            cssClases += ' bg-stone-800 text-stone-200'
                        } else {
                            cssClases += ' text-stone-400'
                        }

                        return (
                            <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)} className={cssClases}>
                                {project.title}
                            </button></li>
                        )

                    }
                )}
            </ul>
        </aside>    
    );
}