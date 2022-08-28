import Check from '../icons/Check.jsx'

const FeatureCard = ({text}) => {
  return (
    <div className="feature-card">
      <Check/>
      <h5>{text}</h5>
    </div>
  )
}

export default FeatureCard
