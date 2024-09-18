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

            const infowindow = new kakao.maps.InfoWindow({
                removable: true
            });

            mount.forEach((item) => {
                const markerPosition = new kakao.maps.LatLng(item.Latitude, item.Longitude);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);

                kakao.maps.event.addListener(marker, "click", () => {
                    const content = `
                        <div class="p-4 w-64 rounded-lg shadow-lg">
                            <img src="${item.mntnattchimageseq}" class="w-full h-32 rounded-md mb-2""/>
                            <h4>${item.mntnnm}</h4>
                            <p>${item.mntninfopoflc}</p>
                        </div>
                    `;
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                });
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
