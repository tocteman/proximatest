import featuresImg from '../assets/image_low.png'
import FeatureCard from './FeatureCard'
const Features = () => {

  const texts = [
    "Eos aspernatur rem",
    "Facilis nique ipsa",
    "Volum amet voluptas",
    "Rerum omnis sint",
    "Alias possimus",
    "Repellendus mollitia"
  ]


  return (
    <div className="inner-container">
      <div className="features-img">
        <img alt="" src={featuresImg}/>
      </div>
      <div className="features">
        {texts.map((x, i) => (
          <FeatureCard text={x} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default Features
