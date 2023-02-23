import "./quote.css"

export default function Quote(props) {
    return (
        <div className="quote-container">
            <p className="quote-text">
                {props.children}
            </p>
        </div>
    )
}