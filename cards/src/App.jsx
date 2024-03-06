import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.png';
import Bootstrap from './images/bootstrap.png';
import Web from './images/web.jpg';
import Frontend from './images/frontend.jpg';

function App() {
  return (
    <>
      <div className='App'>

      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
</section>

        <div className='container'>
          <section className='section'>

          </section>
          <div className='columns'>
            <div className='column'>
          <Course 
       image={Angular}
       title="Angular" 
       description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate 
       onsequuntur perspiciatis eius hic accusamus dolorum aspernatur amet vitae! 
       Hic quisquam voluptates sint distinctio iusto eligendi eos iste! Pariatur, similique."/>
            </div>

            <div className='column'>
          <Course 
       image={Bootstrap}
       title="Bootstrap 5" 
       description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate 
       onsequuntur perspiciatis eius hic accusamus dolorum aspernatur amet vitae! 
       Hic quisquam voluptates sint distinctio iusto eligendi eos iste! Pariatur, similique."/>
            </div>

            <div className='column'>
          <Course 
       image={Web}
       title="Web" 
       description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate 
       onsequuntur perspiciatis eius hic accusamus dolorum aspernatur amet vitae! 
       Hic quisquam voluptates sint distinctio iusto eligendi eos iste! Pariatur, similique."/>
            </div>

            <div className='column'>
          <Course 
       image={Frontend}
       title="FrontEnd" 
       description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate 
       onsequuntur perspiciatis eius hic accusamus dolorum aspernatur amet vitae! 
       Hic quisquam voluptates sint distinctio iusto eligendi eos iste! Pariatur, similique."/>
            </div>
          </div>

        </div>
     
      </div>
    
    </>
  )
}

export default App
