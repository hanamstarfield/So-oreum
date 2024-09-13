import { useEffect } from "react";

const KakaoMap = () => {
    useEffect(() => {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById("map"), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(37.566535, 126.9779692), // 지도의 중심좌표
                    level: 9 // 지도의 확대 레벨
                };

            // 지도를 표시할 div와  지도 옵션으로  지도를 생성
            const map = new kakao.maps.Map(mapContainer, mapOption);
        });
    }, []);

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
