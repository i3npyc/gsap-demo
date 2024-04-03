import './App.css'
import BasicTween from "./components/BasicTween/BasicTween.tsx";
import TimelineTween from "./components/TimelineTween/TimelineTween.tsx";
import PositionTimeline from "./components/PositionTimeline/PositionTimeline.tsx";
import Stagger from "./components/Stagger/Stagger.tsx";
import ScrollTrigger from "./components/ScrollTrigger/ScrollTrigger.tsx";

function App() {
  return (
    <div className="appWrapper">
      <BasicTween />
      <TimelineTween />
      <PositionTimeline />
      <Stagger />
      <ScrollTrigger />
    </div>
  )
}

export default App
