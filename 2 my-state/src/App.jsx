import { useState } from "react";


function CoreConcept({title, description}){
  return (
    <li id='book-item' key = {title}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  const [bookList, setBookList] = useState([]);
  const [item, setItem] = useState({
    title: '',
    description: '',
    quantity: ''
  });


  const addBook = () => {    
    setBookList((prev) => [...prev, item]);
  }

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;   

    setItem((prev) => ({
        ...prev, 
        [field]: value
      })
    )
  }

  return (
    <div>
      <header>
        <h1>My Book</h1>
        <p>
          This is my Collection
        </p>
      </header>
      <main>
        <section id='input-data'> 
            <div id='myInput'>
              <div><p>Title </p><input name='title' onChange={(event) => handleChange(event)}></input></div>     
              <div><p>Description </p><input name='description' onChange={(event) => handleChange(event)}></input> </div>         
              <div><p>Quantity </p><input name='quantity' onChange={(event) => handleChange(event)}></input></div>
            </div>            
            <div><button onClick={()=>{addBook()}}>Submit</button>
            </div>                     
        </section>
        <section id='book-collection'>
          <ul>
            {bookList.map(book => <CoreConcept title={book.title} description={book.description} />)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
