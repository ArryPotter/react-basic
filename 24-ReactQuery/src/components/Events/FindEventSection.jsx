import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  // it use isLoading rather than is pending because isLoading will always false when enable is false
  const {isLoading, Error, data} = useQuery({
    queryKey:['events', {search: searchTerm}],
    queryFn: ({signal}) => fetchEvents({signal, searchTerm}),
    enabled: searchTerm !== ''
  })
  

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value)
  }
  let content = <p>Please enter a search term and to find events.</p>;

  if(data) {
    content = (
      <ul className='event-list'>
        {
          data.map((event) => <li key={event.id}>
            <EventItem event={event}/>
          </li>)
        }

      </ul>
    )
  }



  if(isLoading){
    content = <LoadingIndicator />
  }

  if(Error){
    content = <ErrorBlock title = 'An error occured' message={Error.info?.message || 'Failed to fetch events'} />
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
