import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])


  useEffect(async() => {
    let books = await fetchBooks();
    if(books){
      setLoading(false)
      setBooks(books)
    }
  }, [])

  const fetchBooks = async () => {
    let response = await axios.get('http://localhost:5000/api/books/viewall/1/10');
    return response.data;
    
  }
  return (
    <div className="container">
     <h2 className="text-center">List Books</h2>
     {
       loading ? 
       <h3>Loading...</h3> : 
       <div className="row">
         {
           books.map(item => {
             return <Booklist book={item}/>
           })
         }
         </div>
     }
      
      </div>  
    
  );
}

const Booklist = (book) => {
  let item = book.book;
  return(
    <div className="col-lg-4">
            <img src={item.thumbnailUrl}/>
            <h3>{item.title}</h3>
            <h4>{item[0]}</h4>
            <p>ISBN: {item.isbn} <span>{item.status}</span></p>
            <p><i>{item[0]}</i></p>
            <p>pages :{item.pageCount}</p>
            <p>{item.longDescription}</p>
        </div>
      
  )
}

export default App;
