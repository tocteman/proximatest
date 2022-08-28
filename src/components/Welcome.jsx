import welcomeImg from '../assets/image_top.png'
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="inner-container">
        <div className="copy">
          <h2>Unlock nearshore resources & insurtech capabilities</h2>
          <h4>We deliver transformation</h4>
          <button>
            Discover How
          </button>
        </div>
        <div className="welcome-img">
          <img alt="" src={welcomeImg}/>
        </div>
      </div>
    </div>
  )
}

export default Welcome
