import { useEffect } from "react";

const KakaoMap = ({ mount }) => {
    useEffect(() => {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            if (!mapContainer) return;

            const mapOption = {
                center: new kakao.maps.LatLng(37.566535, 126.9779692),
                level: 9
            };

            const map = new kakao.maps.Map(mapContainer, mapOption);

            mount.forEach((item) => {
                const markerPosition = new kakao.maps.LatLng(item.Latitude, item.Longitude);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        });
    }, [mount]);

    return (
        <div
            id="map"
            style={{
                width: "600px",
                height: "750px"
            }}
        ></div>
    );
};

export default KakaoMap;
