import "./assets/css/app.css";
import Sidebar from "./components/sidebar";
import ContentWrapper from "./components/contentWrapper"


function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
