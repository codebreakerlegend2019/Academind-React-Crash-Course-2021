function Modal(props){
    return (
        <div className='modal'>
            <h1 onClick={props.onClick}>X</h1>
            <p>Are you sure??</p>
            <button className='btn btn--alt' onClick={props.onClick}>Cancel</button>
            <button className='btn' onClick={props.onConfirm}>Delete</button>
        </div>
    )
}

export default Modal