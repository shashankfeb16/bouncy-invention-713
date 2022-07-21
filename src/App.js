   import Footer from "./components/footer/Footer";
// import LoginPage from "./Pages/LoginPage";
import MainRoute from "./Pages/MainRoute";
import Players from "./Pages/Players";
import Videos from "./Pages/Videos";
function App() {
  return <div>
       <Players/>   
       <MainRoute></MainRoute>
      <Footer></Footer>
      {/* <LoginPage/> */}
  </div>;
}

export default App;
