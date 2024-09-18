import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const KakaoMap = ({ fetchMount }) => {
    const {
        data: mount,
        isLoading,
        isError
    } = useQuery({
        queryKey: ["items"],
        queryFn: fetchMount
    });

    useEffect(() => {
        if (isLoading || isError || !mount) return;

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

    if (isLoading) {
        return <div>로딩중...</div>;
    }

    if (isError) {
        return <div>다시 시도해주세요...</div>;
    }

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
