import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Quote from './componentes/Quote/Quote';
import RandomBtn from './componentes/RandomBtn/RandomBtn';
import Footer from './componentes/Footer/footer';
import QuoteInfo from './componentes/QuoteInfo/QuoteInfo';
import Loader from './componentes/Loader/Loader';

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
    fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.data[0].quoteText)
        setAuthor(data.data[0].quoteAuthor)
        setGenre(data.data[0].quoteGenre)
        setIsLoading(false)})
      .catch(error => console.error(error))
    }
  }, [isLoading])

  const getQuote = () => {
    setIsLoading(true)
  }

  if (isLoading) { 
    return <Loader />
  }

  return (
    <div className="App">
        <header>
          <RandomBtn onClick={() => getQuote()}/>
        </header>
        <main>
          <Quote>
            {quote}
          </Quote>
          <QuoteInfo author={author} genre={genre}/>
        </main>
        <Footer />
    </div>
  );
}

export default App;
