import './Header.css'
import Rocket from "./rocket.svg"

export default function Header() {
  return (
    <div className='header'>
      <img src={Rocket} alt="rocket" />
      <h1>to<span>do</span></h1>
    </div>
  );
}