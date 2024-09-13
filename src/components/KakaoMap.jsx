import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
    // useKakaoLoaderOrigin({
    //     /**
    //      * ※주의※ appkey의 경우 본인의 appkey를 사용하셔야 합니다.
    //      * 해당 키는 docs를 위해 발급된 키 이므로, 임의로 사용하셔서는 안됩니다.
    //      *
    //      * @참고 https://apis.map.kakao.com/web/guide/
    //      */
    //     appkey: "e2b039aa5f89c943061602c561dc7a59",
    //     libraries: ["clusterer", "drawing", "services"]
    // });

    return (
        <Map
            id="map"
            center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
            style={{ width: "800px", height: "600px" }} // 지도 크기
            level={3} // 지도 확대 레벨
        ></Map>
    );
};

export default KakaoMap;
