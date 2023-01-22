import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Counter from './components/Counter';
// import Modal from './components/Modal';
// import Button from 'react-bootstrap/Button';
// import Posts from './components/Posts';
import UseEffects from './components/UseEffect/useEffects';


// import States from './components/States';

// const res = "false";

function App() {
  // const brands = ["Suzuki", "Toyota", "Civic"];
  // const arr = ['A', 'B', 'C', 'D'];
  // const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App-header">
        {/* <Counter/> */}
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      {/* <Posts/> */}
      <UseEffects/>
    </div>
  );
}

export default App;
