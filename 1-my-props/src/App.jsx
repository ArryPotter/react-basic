function CoreConcept({title, description}){
  return (
    <li id='book-item' key = {title}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  const bookList = [
    {title: 'Physics', description: 'learn about physics and science'},
    {title: 'Math', description: 'learn about calculation'},
    {title: 'Art', description: 'learn about art'}
  ]

  return (
    <div>
      <header>
        <h1>My Book</h1>
        <p>
          This is my Collection
        </p>
      </header>
      <main>
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
