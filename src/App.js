
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="AboutUs" />
    <div className="container">
    <TextForm heading="This is textarea"/>
    
    </div>
    </>
  );
}

export default App;
