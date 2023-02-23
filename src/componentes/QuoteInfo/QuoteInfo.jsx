import "./quoteInfo.css"
import { useState } from "react"

export default function QuoteInfo(props) {
    const [quotes, setQuotes] = useState("")

    const getQuotes = () => {
        fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
            .then(response => response.json())
            .then(data => setQuotes(data.data[0].quoteText)
            .catch(error => console.error(error))
            )
        }

    console.log(quotes)

    return (
        <div className='container-author' onClick={() => getQuotes()}>
            <div className='author-genre'>
                <p className='author'>{props.author}</p>
                <p className='genre'>{props.genre}</p>
            </div>
            <div>
                <span class="material-icons material-symbols-outlined flechita">
                    arrow_forward
                </span>
            </div>
        </div>
    )
}