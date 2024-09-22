import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dlatl.css";
import move from "../assets/VectorIcon.png";

const KakaoMap = ({ mount, setLatlng, selectedLocation }) => {
    const navigate = useNavigate();

    const debounce = (callback, delay) => {
        let timer;
        return () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(callback, delay);
        };
    };

    useEffect(() => {
        kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            if (!mapContainer) return;

            const mapOption = {
                center: new kakao.maps.LatLng(37.566535, 126.9779692),
                level: 9
            };

            const map = new kakao.maps.Map(mapContainer, mapOption);
            map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
            const infowindow = new kakao.maps.InfoWindow({
                removable: true
            });

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
            });
            kakao.maps.event.addListener(
                map,
                "bounds_changed",
                debounce(() => {
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
                }, 300)
            );
            if (selectedLocation) {
                const moveLatLng = new kakao.maps.LatLng(selectedLocation.latitude, selectedLocation.longitude);
                map.setCenter(moveLatLng);
                map.setLevel(5);
            }
        });
    }, [mount, selectedLocation]);

    return (
        <div
            id="map"
            style={{
                width: "800px",
                height: "800px",
                borderRadius: "20px"
            }}
        >
            <div
                style={{
                    zIndex: 1000,
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease"
                }}
                onClick={() => {
                    navigate("/speed-meet-write");
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                <img src={move} alt="" style={{ width: "60px", height: "60px" }} />
            </div>
        </div>
    );
};

export default KakaoMap;
