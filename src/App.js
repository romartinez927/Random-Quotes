import './App.css';
import { useEffect, useState } from 'react';
import Quote from './componentes/Quote/Quote';
import RandomBtn from './componentes/RandomBtn/RandomBtn';
import Footer from './componentes/Footer/footer';
import QuoteInfo from './componentes/QuoteInfo/QuoteInfo';
import Loader from './componentes/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState("")
  const [quotes, setQuotes] = useState("")

  useEffect(() => {
    if (isLoading) {
    fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
      .catch(error => console.error(error))
    }
  }, [isLoading])

  const obtenerFrases = () => {
    fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${data.data[0].quoteAuthor}&limit=50`)
    .then(response => response.json())
    .then(data => {  
      setQuotes(data.data)
    })
    .catch(error => console.error(error))
  }

  const getQuote = () => {
    setIsLoading(true)
    setQuotes("")
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
            {
              quotes !== "" && (
                <div className="text-start">
                  <p className='author'>{data.data[0].quoteAuthor}</p>
                </div>
                )
            }
            {
              quotes !== "" ? ( 
                quotes.map((quote) => {
                  return(
                    <Quote key={quote._id}>
                      {quote.quoteText}
                    </Quote>
                  )}
                )) 
                :
                <>
                  <Quote>
                    {data.data[0].quoteText}
                  </Quote>
                  <QuoteInfo 
                    author={data.data[0].quoteAuthor} 
                    genre={data.data[0].quoteGenre}
                    onClick={() => obtenerFrases()} 
                  />
                </> 
            } 
        </main>
        <Footer />
    </div>
  );
}

export default App;
