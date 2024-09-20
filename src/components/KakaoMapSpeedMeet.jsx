import { useEffect } from "react";

const KakaoMapSpeedMeet = ({ lat, lng, ...style }) => {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        // 리액트 카카오 맵 SDK 라이브러리
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            if (!mapContainer) return;

            const mapOption = {
                center: new window.kakao.maps.LatLng(lat, lng),
                level: 5
            };

            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
            const infowindow = new window.kakao.maps.InfoWindow({
                removable: true
            });

            const markerPosition = new window.kakao.maps.LatLng(lat, lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        });
    };

    // return <div id="map" className={`w-[${width}] h-[${height}]`}></div>;
    return <div id="map" style={{ ...style }}></div>;
    // <Map // 지도를 표시할 Container
    //     center={{
    //         // 지도의 중심좌표
    //         lat: 33.450701,
    //         lng: 126.570667
    //     }}
    //     style={{
    //         // 지도의 크기
    //         width: "100%",
    //         height: "450px"
    //     }}
    //     marker={{
    //         lat: 33.450701,
    //         lng: 126.570667
    //     }}
    //     level={3} // 지도의 확대 레벨
    // />
};

export default KakaoMapSpeedMeet;
