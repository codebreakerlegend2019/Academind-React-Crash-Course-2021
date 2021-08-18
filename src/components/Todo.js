import { useState } from 'react';
import BackDrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [ modalIsopen, setModelIsOpen ] = useState(false);

    function deleteHandler(){
        setModelIsOpen(true);
    }

    function closeModal(){
        setModelIsOpen(false);
    }

    function confirmDelete(){
        alert('Successfully Deleted '+props.text);
        setModelIsOpen(false);
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
              <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsopen && <Modal onClick={closeModal} onConfirm={confirmDelete}/>}
            {modalIsopen && <BackDrop onClick={closeModal}/>}
        </div>
      );
}


export default Todo;