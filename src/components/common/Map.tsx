import Script from 'next/script';
import { useEffect } from 'react';

export default function Map() {
  useEffect(() => {}, []);
  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`}
      />
      <div id="map" className="w-[500px] h-[400px] bg-grey-40"></div>
    </>
  );
}
