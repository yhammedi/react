import './App.css';
import './style.css'
import Isrc from './imagesrc.png'

function App() {
  return (
 
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Malek Jihed Ferjani</h1>
      <br />
      <img src={Isrc} />
      <br />
      <img src='/public.png'/>
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>

  );
}

export default App;
