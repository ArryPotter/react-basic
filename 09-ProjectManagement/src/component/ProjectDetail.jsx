

export default function ProjectDetail({onChange, onSubmit}){
    
    return (
        <>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Cancel</button>
            <button onClick={onSubmit} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
                <input onChange={(event)=>{onChange(event, 'title')}}  className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
                <input onChange={(event)=>{onChange(event, 'description')}} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
                <input onChange={(event)=>{onChange(event, 'dueDate')}}  className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </p> 
        </>
    )
}