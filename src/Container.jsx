import App from './components/App';
import Modal from './components/Modal';
import './Container.scss';
import './button.scss';
import './Modal.scss';
import { useState } from 'react';

function Container() {

    const [store, setStore] = useState({
      modalProperty: {
      showModal: false,
      title: 'Modal',
      title1: 'Modal1',

      },
      modalText: 'important note'
      
    })
  

  return (
    <>    
    <App 
    store={store}
    setStore={setStore}
    />
    <Modal 
    store={store}
    setStore={setStore}
    />



</>
  );
}

export default Container;
