'use client'

import {brighten} from '@microprofile/imagers';
import {useEffect, useState} from "react";
import png from "@/images/example.png";
import {Spinner} from "@/components/Spinner";

export function Brighten() {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    fetch(png.src).then(r => r.bytes()).then(bytes => {
      let result = brighten(bytes, 100);
      const blob = new Blob([result], {type: 'image/png'});
      setSrc(URL.createObjectURL(blob));
    })
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            Before
            <img src={png.src} alt="" className={'w-60 !m-0'}/>
          </div>
          <div>
            After
            {src ? <img src={src} alt="" className={'w-60 !m-0'}/> : <Spinner/>}
          </div>
        </div>
      </div>
    </div>
  )
}