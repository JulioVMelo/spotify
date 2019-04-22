import React from 'react';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import VolumeIcon from '../../assets/images//volume.svg';
import Slider from 'rc-slider';
import ShurffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"  alt="album"/>
      
      <div>
        <span>times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button> <img src={ShurffleIcon} alt="shurffle"/> </button>
        <button> <img src={BackwardIcon} alt="backward"/> </button>
        <button> <img src={PlayIcon} alt="play"/> </button>
        <button> <img src={ForwardIcon} alt="forward"/> </button>
        <button> <img src={RepeatIcon} alt="repeat"/> </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle = {{ background: '#404040', borderRaidus: 10 }}
            trackStyle = {{ background: '#1ed760' }}
            handleStyle = {{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume"/>
      <Slider
        railStyle= {{ background: '#404040', borderRadius: 10 }}
        trackStyle = {{ background: '#fff', }}
        handleStyle = {{ display: 'none' }}
        value= {80}
      />
    </Volume>
  </Container>
);

export default Player;
