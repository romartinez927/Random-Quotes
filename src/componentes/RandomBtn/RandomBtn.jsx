import "./randomBtn.css"

export default function RandomBtn(props) {
    return( 
        <div className="random-btn" onClick={props.onClick}>
            <p className='random-btn-text'>
                random
            </p>
            <span class="material-icons material-symbols-outlined">
                sync
            </span>
        </div>
    )
}