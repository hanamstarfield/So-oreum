import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoMap = ({ mount }) => {
<<<<<<< HEAD
    const navigate = useNavigate();
=======
>>>>>>> e386e35785db59c06447662dd721fcd7bde2abb5
    useEffect(() => {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            if (!mapContainer) return;

            const mapOption = {
                center: new kakao.maps.LatLng(37.566535, 126.9779692),
                level: 9
            };

            const map = new kakao.maps.Map(mapContainer, mapOption);

<<<<<<< HEAD
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
            const infowindow = new kakao.maps.InfoWindow({
                removable: true
            });

=======
>>>>>>> e386e35785db59c06447662dd721fcd7bde2abb5
            mount.forEach((item) => {
                const markerPosition = new kakao.maps.LatLng(item.Latitude, item.Longitude);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
<<<<<<< HEAD

                kakao.maps.event.addListener(marker, "click", () => {
                    const content = `
                        <div class="p-4 w-64 rounded-lg shadow-lg">
                            <img src="${item.mntnattchimageseq}" class="w-full h-32 rounded-md mb-2""/>
                            <div class="flex justify-between items-center mt-[5px] px-[10px]">
                                <p>
                                    <strong>${item.mntnnm}</strong>
                                </p>
                                <p class="text-[12px]"> 정상 ${item.mntninfohght}m</p>
                            </div>
                            <p class="text-[12px]  px-[10px]">${item.mntninfopoflc}</p>
                        </div>
                    `;
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                });
=======
>>>>>>> e386e35785db59c06447662dd721fcd7bde2abb5
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
