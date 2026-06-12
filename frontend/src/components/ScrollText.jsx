
import ScrollVelocity from '../components/ScrollVelocity';

const ScrollText = () => {
  return (
    <div>
  
<ScrollVelocity
  texts={['General Chat', 'Gaming Room']} 
  velocity={100}
  className="custom-scroll-text "
  numCopies={6}
  damping={50}
  stiffness={400}
/>


    </div>
  )
}

export default ScrollText