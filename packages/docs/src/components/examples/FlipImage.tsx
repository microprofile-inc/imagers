'use client'

import {init, flip_vertical, flip_horizontal} from '@microprofile/imagers';
import {useEffect, useState} from "react";
import png from "@/images/example.png";
import {Spinner} from "@/components/Spinner";

export function FlipImage() {
  const [srcV, setSrcV] = useState<string>();
  const [srcH, setSrcH] = useState<string>();
  
  useEffect(() => {
    fetch(png.src).then(r => r.bytes()).then(bytes => {
      init().then(() => {
        let result = flip_vertical(bytes);
        const blob = new Blob([result], {type: 'image/png'});
        setSrcV(URL.createObjectURL( blob ));

        let result2 = flip_horizontal(bytes);
        const blob2 = new Blob([result2], {type: 'image/png'});
        setSrcH(URL.createObjectURL( blob2 ));
      });
    })
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-3 gap-x-6">
          <div>
            Before
            <img src={png.src} alt="" className={'w-60 !m-0'} />
          </div>
          <div>
            Flip Vertical
            {srcV ? <img src={srcV} alt="" className={'w-60 !m-0'} /> : <Spinner />}
          </div>
          <div>
            Flip Horizontal
            {srcH ? <img src={srcH} alt="" className={'w-60 !m-0'} /> : <Spinner />}
          </div>
        </div>
      </div>
    </div>
  )
}