import React,{  useState, useEffect} from "react"
export default function App(){

  const [display, setDisplay] = useState('adf');

  const indivClips = [
    { 
      keyTrigger: "Q",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1"
      },
    { 
      keyTrigger: "W",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2"
      },
    { 
      keyTrigger: "E",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3"
      },
    { 
      keyTrigger: "A",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4"
      },
    { 
      keyTrigger: "S",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap"
      },
    { 
      keyTrigger: "D",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open-HH"
      },
    { 
      keyTrigger: "Z",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick-n'-Hat"
      },
    { 
      keyTrigger: "X",
      url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick"
      },
    { 
      keyTrigger: "C",
      url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed-HH"
      },
    
  ];

  
  
  const playAudio = (description) => {
    setDisplay(description)
    var audio = '';
    indivClips.filter(clip => {
      if(clip.description === description) audio = document.getElementById(clip.keyTrigger);
    })
    audio.currentTime = 0;
    audio.play()
  };

  useEffect(()=>{
    document.addEventListener("keydown",handleKeyDown)

    return () =>{
      document.removeEventListener("keydown",handleKeyDown)
    }
  },[])

  const handleKeyDown = (e) =>{
    indivClips.filter(clip => {
      if(e.key.toUpperCase() === clip.keyTrigger) playAudio(clip.description)
    });
  }

  return(
    <>
      <div id="drum-machine" >
        <div id="pad-bank">
          {indivClips.map((clip) => 
            <div 
              className="drum-pad"
              id={clip.description}
              onClick={ () => playAudio(clip.description)}
              // onKeyDown={playAudio()}
              >
              <audio
               className="clip"
               src={clip.url}
               id={clip.keyTrigger}
               type="audio/mpeg"
               />
              {clip.keyTrigger}
            </div>
          )}
        </div>
        <div id="controls-container">
          <div id="display">{display}</div>
        </div>
      </div>
    </>
  )
}