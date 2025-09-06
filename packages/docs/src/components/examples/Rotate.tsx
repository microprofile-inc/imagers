'use client'

import {rotate90, rotate180, rotate270} from '@microprofile/imagers';
import {useEffect, useState} from "react";
import png from "@/images/example.png";
import {Spinner} from "@/components/Spinner";

export function Rotate() {
  const [src90, setSrc90] = useState<string>();
  const [src180, setSrc180] = useState<string>();
  const [src270, setSrc270] = useState<string>();
  
  useEffect(() => {
    fetch(png.src).then(r => r.bytes()).then(bytes => {
      let result = rotate90(bytes);
      const blob = new Blob([result], {type: 'image/png'});
      setSrc90(URL.createObjectURL( blob ));

      let result2 = rotate180(bytes);
      const blob2 = new Blob([result2], {type: 'image/png'});
      setSrc180(URL.createObjectURL( blob2 ));

      let result3 = rotate270(bytes);
      const blob3 = new Blob([result3], {type: 'image/png'});
      setSrc270(URL.createObjectURL( blob3 ));
    })
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-4 gap-x-6">
          <div>
            Before
            <img src={png.src} alt="" className={'w-60 !m-0'} />
          </div>
          <div>
            rotated 90 degrees
            {src90 ? <img src={src90} alt="" className={'w-60 !m-0'} /> : <Spinner />}
          </div>
          <div>
            rotated 180 degrees
            {src180 ? <img src={src180} alt="" className={'w-60 !m-0'} /> : <Spinner />}
          </div>
          <div>
            rotated 270 degrees
            {src270 ? <img src={src270} alt="" className={'w-60 !m-0'} /> : <Spinner />}
          </div>
        </div>
      </div>
    </div>
  )
}