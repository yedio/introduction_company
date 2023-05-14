import { useEffect } from 'react';
import { cls } from '../../libs/client/utils';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  providedStyle?: string; //tw
}

export default function Map({ providedStyle }: MapProps) {
  const address = '서울 종로구 세종로 1-68';

  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(0, 0), // 지도의 중심좌표 (경도 & 위도)
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 지도 & 스카이뷰 옵션
        const mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );

        // 줌 옵션
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 주소로 좌표 검색 및 마커 표시
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            map.setCenter(coords);

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
            marker.setMap(map);
          }
        });
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div
      id="map"
      className={cls('w-full h-[400px] bg-grey-40', providedStyle ?? '')}
    />
  );
}
