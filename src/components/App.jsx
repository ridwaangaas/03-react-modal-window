import _ from 'lodash';

const modals = [
  { id: 1,
  title: 'Modal 1',
  title1: 'Welcome',
  text: 'Welcome to modal 01. Enjoy the interactive experience and explore the rest of the models we have in this page for you. Feel free to navigate through the content and make the most of your time. Happy exploring!!!'
},

  { id: 2,
  title: 'Modal 2',
  title1: 'Terms and Conditions',
  text: 'Are you sure you want to proceed? Please take a moment to review the terms and conditions before continuing. Your consent is appreciated. Thank you!'

},
  { id: 3,
  title: 'Modal 3',
  title1: 'Congratulations!',
  text: 'Exciting news awaits! Step into our world of innovation and creativity. Get ready to be inspired by the latest trends and updates. Do not miss out on the amazing opportunities that await you. Lets embark on this journey together!'

},
  { id: 4, 
  title: 'Modal 4',
  title1: 'Attention!!!',
  text: 'Attention, valued user! We are here to assist you every step of the way. If you have any questions, concerns, or need support, do not hesitate to reach out to our friendly customer service team. Your satisfaction is our top priority. We are just a click away!'

},
  { id: 5, 
  title: 'Modal 5',
  title1: 'End',
  text: 'Congratulations! You have unlocked exclusive access to premium content. Prepare yourself for an extraordinary experience filled with captivating stories, breathtaking visuals, and valuable insights. Dive in and indulge in the finest selection we have curated just for you. Enjoy the journey'

},
]

const App = ({store, setStore}) => {
    return (
          <div id="app">
    <h1>Modal</h1>
    <div className="main">
    {modals.map((modal, index) => {
return <button 
          key={`modal-${index}`}
          onClick={() => {
            const newStore = _.cloneDeep(store);
            _.set(newStore, `modalProperty.showModal`, true);
             _.set(newStore, `modalProperty.title`, modal.title); 
             _.set(newStore, `modalProperty.title1`, modal.title1);
             _.set(newStore, `modalText`, modal.text);
             setStore(newStore);
          }}
          >
Modal {modal.id}
          </button>
        })
      }
    </div>
  </div>
    )
}

export default App;
