import { useEffect } from "react";

<<<<<<< HEAD
const KakaoMap = ({ mount }) => {
=======
const KakaoMap = ({ mount, setLatlng }) => {
    const navigate = useNavigate();
>>>>>>> c77ab9b41d88b345e5028465057c49350055267f
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
=======
            // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
            const infowindow = new kakao.maps.InfoWindow({
                removable: true
            });

>>>>>>> c77ab9b41d88b345e5028465057c49350055267f
            mount.forEach((item) => {
                const markerPosition = new kakao.maps.LatLng(item.latitude, item.longitude);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);

                kakao.maps.event.addListener(marker, "click", () => {
                    const content = `
                        <div class="p-4 w-64 rounded-lg shadow-lg">
                            <img src="${item.mntnattchimageseq}" class="w-full h-32 object-cover rounded-md mb-2""/>
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

                kakao.maps.event.addListener(map, "bounds_changed", () => {
                    const bounds = map.getBounds();
                    const swLatlng = bounds.getSouthWest();
                    const nwLatlng = bounds.getNorthEast();
                    setLatlng({
                        swLatlng: {
                            La: swLatlng.La,
                            Ma: swLatlng.Ma
                        },
                        nwLatlng: {
                            La: nwLatlng.La,
                            Ma: nwLatlng.Ma
                        }
                    });
                });
            });
        });
    }, [mount]);

    return (
        <div
            id="map"
            style={{
                width: "800px",
                height: "800px"
            }}
        ></div>
    );
};

export default KakaoMap;
