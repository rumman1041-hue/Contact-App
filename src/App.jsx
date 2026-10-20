import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/navigation/ContactHeader/ContactHeader";
import Navigation  from "./components/navigation/nav";

function App(){
  return(
    <div>
      <Navigation/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  );
}

export default App;