import Project from './component/Project'
import { useState } from "react"
import ProjectDetail from './component/ProjectDetail';


function App() {
  const [projectList, setProjectList] = useState([{title:"a",description:"b",dueDate:"c"}]);
  const [projectDetail, setProjectDetail] = useState({
    title:"",
    description: "",
    dueDate: ""
  });

  function handleProjectDetailChanges(event, propertyName){
    setProjectDetail(prevState=>{
        const currentState = {...prevState}            
        currentState[propertyName] = event.target.value
        return currentState
    })    
  }

  function handleSubmitProjectDetail(){
    console.log(`projectList 1 ${JSON.stringify(projectList)}`)
    // setProjectList([
    //   ...projectList,
    //   {...projectDetail}
    // ]
    // );

  setProjectList(prevState => 
        [
          ...prevState,
          {...projectDetail}
        ]
      );

    console.log(`projectList 2 ${JSON.stringify(projectList)}`)    
  }


  function handleAddProjectClick(){
      const tempList = [...projectList];
      tempList.push('aaaa');
      setProjectList(tempList);
  }

  console.log(`projectList 3 ${JSON.stringify(projectList)}`) 

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <div className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <Project onAddProjectClick={handleAddProjectClick} projectList={projectList}/>
        </div>
        <div>
          <ProjectDetail onChange={handleProjectDetailChanges} onSubmit={handleSubmitProjectDetail}/>
        </div>
      
      </main>     
    </>
  );
}

export default App;
