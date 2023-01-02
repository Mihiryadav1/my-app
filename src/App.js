
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Formjs from './components/Formsjs';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" />
      <div className="container">
      <Formjs/>
        {/* <TextForm heading="This is textarea" /> */}
      </div>
    </>
  );
}

export default App;
