import { useEffect } from "react";

const KakaoMapSpeedMeet = ({ lat, lng }) => {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            if (!mapContainer) return;

            const mapOption = {
                center: new kakao.maps.LatLng(lat, lng),
                level: 5
            };

            const map = new kakao.maps.Map(mapContainer, mapOption);

            // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
            const infowindow = new kakao.maps.InfoWindow({
                removable: true
            });

            const markerPosition = new kakao.maps.LatLng(lat, lng);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        });
    };

    return <div id="map" style={{ width: "400px", height: "400px" }}></div>;
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
