import './App.css'
import png from './bg.png';
import {useEffect, useState} from "react";

import { init, fast_blur } from '@microprofile/imagers';
await init();

function App() {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    fetch(png).then(res => res.bytes()).then(bytes => {
      let result = fast_blur(bytes, 200);
      const blob = new Blob([result], {type: 'image/png'});
      setSrc(URL.createObjectURL( blob ));
    })
  }, []);
  
  return (
    <div className="bg-red-200 w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="font-bold text-4xl">
          Blur Image
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <img src={src} alt="" className={'w-fit'} />
        </div>
      </div>
    </div>
  )
}

export default App