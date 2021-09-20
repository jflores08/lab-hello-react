import logo from './images/ironhack-logo-xs.png';
import menuIcon from './images/menu-top-xs.png';
import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';
import './App.css';




function App() {
  return (
    <div className="container">
      <header >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="/">
            <img src={menuIcon} alt="menuIcon" id="menuIcon"/>
          </a>  
        </div> 
        <div>
          <h1>Say Hello to <br />ReactJS </h1>
          <p className="header-p">
            You will learn to use<br/> the most popular frontend library,<br/> and become a super Ninja developer.
          </p>
          <button>
            Awesome!
          </button>
        </div>
      </header>
      <section className="section">
        <div className="sections">
            <div className="section-icon"><img src={img1} alt="Icon1" /></div>
            <h2 className="section-h2">Declarative</h2>
            <p className="section-p">
              React makes it <br/> painless to create<br/>interactive UIs
            </p>
         </div>
         <div className="sections">
            <div className="section-icon"><img src={img2} alt="Icon2" /></div>
            <h2 className="section-h2">Components</h2>
            <p className="section-p">
              Build encapsulated<br/>components that<br/>manage their state.
            </p>
         </div>
         <div className="sections">
            <div className="section-icon"><img src={img3} alt="Icon3" /></div>
            <h2 className="section-h2">Single-Way</h2>
            <p className="section-p">
              A set of immutable<br/>values are passed to<br/> the component's.
            </p>
         </div>
         <div className="sections">
            <div className="section-icon"><img src={img4} alt="Icon4" /></div>
            <h2 className="section-h2">JSX</h2>
            <p className="section-p">
              Statically-typed,<br/>designed to run on<br/>modern browsers.
            </p>
         </div>

      </section>
    </div>
  );
}



// import './App.css';
// import { MyButton } from './MyButton';
// import Profile from './Profile';



// function App() {
//   const user = {
//     name: 'Alice',
//     email: 'alice@gmail.com',
//     picture: 'https://bit.ly/2zVs57p'
//   }
//   return (
//     <Profile data={user} />
//   );
// }


{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}
export default App;
