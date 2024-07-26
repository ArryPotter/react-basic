function App() {
 
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
              <div><p>Title </p><input name='title'></input></div>     
              <div><p>Description </p><input name='description'></input> </div>         
              <div><p>Quantity </p><input name='quantity'></input></div>
            </div>            
            <div><button>Submit</button>
            </div>                     
        </section>
        <section id='book-collection'>
         {/* please put the book list in here */}
        </section>
      </main>
    </div>
  );
}

export default App;
