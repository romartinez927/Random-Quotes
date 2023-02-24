import "./quoteInfo.css"

export default function QuoteInfo(props) {
    return (
        <div className='container-author' onClick={props.onClick}>
            <div className='author-genre'>
                <p className='author'>{props.author}</p>
                <p className='genre'>{props.genre}</p>
            </div>
            <div>
                <span className="material-icons material-symbols-outlined flechita">
                    arrow_forward
                </span>
            </div>
        </div>
    )
}