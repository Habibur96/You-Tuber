
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componant/About/About';
import Footer from './Componant/Footer/Footer';
import Header from './Componant/Header/Header';
import Home from './Componant/Home/Home';
import Blog from './Componant/Blog/Blog';
import Login from './Componant/Login/Login';
import SignUp from './Componant/SignUp/SignUp';
import Topics from './Componant/Topics/Topics';
import NotFound from './Componant/NotFound/NotFound';
import RequireAuth from './Componant/RequireAuth/RequireAuth';
import TopicDetails from './Componant/TopicDetails/TopicDetails';


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/topics' element={<Topics></Topics>}></Route>


        <Route path='/topicDetails/:topicName' element={

          <RequireAuth>
            <TopicDetails></TopicDetails>
          </RequireAuth>}>

        </Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;


{/* <Route path='/checkOut' element={
  <RequireAuth>

    <CheckOut></CheckOut>
  </RequireAuth>

}></Route> */}