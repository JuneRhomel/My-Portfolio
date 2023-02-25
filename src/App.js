
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from "./components/Project"
import ListProject from './components/ListProject';
import Contact from "./components/Contact"
import Footer from './components/Footer';
import Sticky from './components/Sticky';
import Add from './components/Add';
import Allproject from './components/Allproject';
import Tools from './components/Tools';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useEffect, useState } from 'react';

function App() {
  const [admin, setAdmin] = useState([{Admin : false}])
  const [google,setGoogle] = useState(true)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container about-skills">
        <About />
      </div>
      <Project />
      <Allproject />
      <Tools />
      <ListProject />
      <Contact />
      <Footer />
      <Sticky />
      {admin[0].Admin? 
      <Add />
      : ""}
      {

      }
      {google?
            <LoginSocialGoogle
            client_id={"532599066258-4v88ut58jabha2hgjjpl0gvpsctlk6lb.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
    
              const user = new FormData()
              user.append("Gmail", data.email)
              user.append("name", data.name)
              user.append("access_token", data.access_token)
    
              fetch('http://localhost:3000/Auth.php', {
                method: 'POST',
                body: user
              })
              .then(response => response.json())
              .then(data => {
                setAdmin(data) 
                setGoogle(false)
              })
              .catch(error => {
                console.error(error);
              });
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton className='btn-google' />
          </LoginSocialGoogle>
    :
    ""
    }


    </div>
  );
}

export default App;
