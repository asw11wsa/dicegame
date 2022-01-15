import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock : rockImg,
  paper : paperImg,
  scissor : scissorImg
}


function HandIcon({value}){
  const src = IMAGES[value];
  return (
    <div>
      <img src={src} alt={value}/>
    </div>
  );
}

export default HandIcon;