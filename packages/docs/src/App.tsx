import './App.css'
import png from './bg.png';
import {useEffect, useState} from "react";

import { init, crop } from '@microprofile/imagers';
await init();

function App() {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    fetch(png).then(res => res.bytes()).then(bytes => {
      let result = crop(bytes, 1000, 1000, 100, 100);
      const blob = new Blob([result], {type: 'image/png'});
      setSrc(URL.createObjectURL( blob ));
    })
  }, []);
  
  return (
    <>
      <img src={src} alt="" className={'w-56 h-56'} />
    </>
  )
}

export default App