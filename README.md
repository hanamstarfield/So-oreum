# So-oreum

등산 커뮤니티

## 프로젝트 주제

"소오름"은 서울 지역을 기반으로 한 등산 커뮤니티 플랫폼입니다. 사용자는 서울 내 산의 위치를 확인하고, 해당 산에 대한 상세 정보 및 벙개 모임 게시물을 볼 수 있으며, 직접 벙개를 모집하거나 참여할 수 있습니다.

### 선정 배경

현대 사회에서는 건강과 여가를 위한 활동으로 등산이 인기를 끌고 있으며, 특히 도시 생활에 지친 사람들이 자연 속에서 여유를 찾고자 합니다. 그러나 많은 사람들이 단체로 등산을 하길 원하지만 모임을 찾거나 만드는 과정이 번거롭습니다. 이를 해결하기 위해 등산을 즐기는 사람들이 쉽게 모임을 만들고, 참여할 수 있는 플랫폼이 필요하다는 점에서 이 프로젝트를 기획하게 되었습니다.

### 기획 의도

"소오름" 플랫폼은 사용자들이 서울의 다양한 산을 탐험하면서 건강과 여가를 동시에 즐길 수 있는 환경을 제공합니다. 또한, 등산을 혼자 하기보다는 다른 사람들과 함께하는 즐거움을 느끼고, 새로운 사람들과의 만남을 통해 커뮤니티를 형성할 수 있는 장을 마련합니다. 간편한 벙개 모집 기능과 참가 신청 시스템을 통해 등산을 사랑하는 사람들이 더욱 쉽게 모이고 소통할 수 있는 공간을 만드는 것이 이 플랫폼의 주요 의도입니다.

## 배포 링크

https://so-oreum-kfrmwhu6y-hanamstarfields-projects.vercel.app

## 📚 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 📅 프로젝트 기간

2024. 09.11 ~ 09.23

## 멤버

<table>
   <tr>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/za0012" width="100px" width="100px" /></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/LeeJY97" width="100px" /></td>
    <td align="center"><img src="" width="100px" /></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/hansub1n" width="100px" /></td>
  </tr>
  <tr>
    <td align="center"><b><a href="">팀장 : 유현지</a></b></td>
    <td align="center"><b><a href="https://github.com/LeeJY97">팀원 : 이준열</a></b></td>
    <td align="center"><b><a href="https://github.com/hanamstarfield">팀원 : 송진우</a></b></td>
    <td align="center"><b><a href="https://github.com/hansub1n">팀원 : 한수빈</a></b></td>
  </tr>
</table>

## 🛠️ 기능

-   [x] 페이지 분리 (Home, Login, Signup, MtDetail, Mypage, SpeedMeet(Detail, Write, Edit, List))
    -   [x] 페이지 라우팅
-   [x] `Home`
    -   [x] 산 목록 표시(지도 기반 / 고도에 따른 산 목록 필터링)
    -   [x] 카카오 맵(줌인, 마커)
-   [x] `Login/Signup`
    -   [x] 로그인 및 회원가입
-   [x] `MtDetail`
    -   [x] 산 정보 표시
    -   [x] 관련 벙개 목록 표시
-   [x] `SpeedMeet`

    -   [x] `SpeedMeetWrite`
        -   [x] 게시글 작성
    -   [x] `SpeedMeetList`
        -   [x] 작성된 게시글 목록 조회
        -   [x] page정보를 url에서 가져옴
        -   [x] 페이지네이션 구현
    -   [x] `SpeedMeetDetail`
        -   [x] 게시글 상세 정보 조회
        -   [x] 산 위치, 지도 확인 가능
        -   [x] 모임 신청 가능 (인원에 따른 마감)
        -   [x] 게시글 수정, 삭제 가능

-   [x] `Mypage`

## 👓 담당 기능

### 현지

-   마이페이지 담당
    -   내가 쓴 게시글 조회, 내가 신청한 게시글 조회

### 준열

-   벙개 게시글 담당
    -   목록 조회, 상세 조회, 글 작성/수정/삭제

### 진우

-   카카오 맵 : 카카오 맵 API를 이용해 지도 구현(마커 표시)
-   리스트 필터링 : 산 높이에 따른 필터링
-   검색어에 따른 지도 줌인 기능 구현

### 수빈

#### 1. 산 상세 페이지<br/>

-   **산 정보 표시** : 사용자가 선택한 특정 산에 대한 상세 정보 페이지에 표시<br/>
-   **고도 시각화** : 해당 산의 고도 시각적으로 표현<br/>
-   **조건부 렌더링 (상세정보 & 벙개 목록)** :<br/>
    -   상세정보 버튼 : 클릭 시 선택된 산에 대한 상세 정보 표시<br/>
    -   벙개목록 버튼 : 클릭 시 선택된 산과 관련된 벙개 목록 표시<br/>

#### 2. 메인 페이지 산 목록 표시<br/>

-   **전체 산 목록 표시** : 메인 페이지에서 전체 산 목록을 불러와 표시<br/>
-   **지도 기반 산 목록 필터링** : 지도가 이동되거나 확대/축소될 때, 해당 위치에 맞는 산 목록을 자동으로 업데이트하여 렌더링<br/>

## 📚 트러블 슈팅

1. 한수빈<br>
   [문제]

-   산 상세 페이지에서 새로 고침을 하니 "Cannot read properties of undefined" 오류 발생.<br>
    [해결]
-   중단점을 찍어보니 산 데이터가 들어오기도 전에 (로딩 중일 때) find 메서드를 호출해서 발생한
    문제 -> 로딩이 끝나고 산 데이터가 들어왔을 때 selectedMntn을 찾도록 코드 위치 변경
    <br>
    [문제]
-   지도 이동 및 확대/축소 시 해당 영역의 장소 목록이 빈번하게 리렌더링되면서 불필요한 함수 호
    출이 발생하고, 성능 저하 우려됨.<br>
    [해결]
-   마지막 이벤트 이후 일정 시간 동안 추가 이벤트가 발생하지 않을 때만 함수를 실행할 수 있도록 디바운싱 기법 적용
    <br><br>

2. 이준열<br>
   [문제]

-   게시글 목록이 있는 페이지에서 다른 페이지로 이동할 때, 화면이 깜빡거리는 현상이 발생.<br>
    [해결]
-   이 문제를 해결하기 위해 `prefetchQuery`를 활용했습니다. 원래는 `useQuery`를 사용하여 페이지 이동 시점에 데이터를 불러오는
    방식이었지만, `prefetchQuery`를 통해 페이지 이동 전에 미리 데이터를 캐싱하는 방법으로 접근했습니다.
    페이지 이동 버튼에 `onMouseOver` 이벤트를 적용하여 사용자가 마우스를 올렸을 때 미리 데이터를 캐싱하도록 구현했습니다.
    이 방법 덕분에 페이지 전환 시 사용자 경험이 개선되었고, 불필요한 깜빡임 현상이 사라졌습니다.
    비록 사소한 문제처럼 보일 수 있지만, 이러한 디테일이 사용자에게 긍정적인 경험을 제공하는 데 큰 역할을 한다고 생각합니다. 결국,
    이러한 작은 개선이 전체적인 완성도를 높이고, 사용자 만족도를 증가시키는 데 기여할 수 있습니다.
    <br> 3. 송진우<br>
    [문제]
    연관 검색어로 검색으로 지도가 줌인 되는 기능을 구현할 때 줌인이 된 상태에서 다른 검색어를 입력했을 때 데이터가 없어 검색되지 않았습니다.<br>
    [해결]<br>
    줌인이 됐을 때 필터링 되는 데이터를 가져와 사용하여 문제가 일어난것이였습니다. 그래서 코드를 다시 확인하고 필터링 되지 않는 전체 데이터를 가져와 줌인 기능을 연결시켜 문제를 해결했습니다.
    <br>
    [문제]
    카카오 지도에서 여러개의 마커를 클릭하면 정보가 사라지지 않고 그대로 화면에 클릭된 마커들의 정보를 보여주고있었습니다.
    [해결]<br>
    infowindow.setContent(); 메서드를 사용해 이전에 열린 정보창의 내용이 새로운 내용으로 덮어질 수 있도록하여 해결<br>
    <br> 3. 유현지<br>
    [문제]
    내가 신청한 글 문제 발생. 데이터를 출력하는데 걸러진 데이터가 같이 들어와서 페이지네이션의 데이터 번호가 출력해야하는 것보다 늘어나는 문제들이 발생, 데이터를 처음 불러올 때 필터링을 해야했다.
    즉 Attendance를 불러와 그 안에 있는 유저아이디가 일치하는 객체를 가져와서 안의 게시글 id와 내가 신청한 게시글의 id가 같은 것만 불러오도록 해야하는 것이다. <br>
    [해결]<br>
    이를 해결하기 위해 지금 사용하고 있는 json-server의 버전을 낮추고 embed를 사용하는 것 그리하여
    yarn remove json-server
    yarn add json-server@0.17.4
    를 입력하고 데이터를 불러오는 것에
    `https://xn--glitch-go6zg94b/speedMeet?_embed=speedMeetAttendee%EC%9D%84` 넣어주었다. \_embed를 이용해 부모 아래에 있는 자식 데이터까지 한 번에 불러올 수 있게 되었다. 이렇게 되면 쉬워지는데, 데이터를 리턴할 때 필터링을 잘 넣어주기만 하면 되는 것이다.

    return data.filter((data) => {
    return data.speedMeetAttendee.some((attendee) => attendee.userId === user.userId);

## 🗂️ 파일 구조

<details>
<summary>프로젝트 구조</summary>
```
📦src
┣ 📂api
┃ ┣ 📜auth.js
┃ ┣ 📜meet.js
┃ ┗ 📜mntn.js
┣ 📂assets
┃ ┣ 📜chat.png
┃ ┣ 📜Cow.png
┃ ┣ 📜GithubIcon.png
┃ ┣ 📜Lightning.png
┃ ┣ 📜MtCardDefault.jpg
┃ ┣ 📜MtSign.png
┃ ┣ 📜myPage1.png
┃ ┣ 📜myPage2.png
┃ ┣ 📜react.svg
┃ ┣ 📜SpCardDefault.png
┃ ┣ 📜test.png
┃ ┣ 📜TstoryIcon.png
┃ ┣ 📜VectorIcon.png
┃ ┗ 📜VelogIcon.png
┣ 📂components
┃ ┣ 📂mtdetail
┃ ┃ ┣ 📜MtInfoBottom.jsx
┃ ┃ ┣ 📜MtInfoTop.jsx
┃ ┃ ┣ 📜MtSpeedMeetCard.jsx
┃ ┃ ┗ 📜MtSpeedMeetList.jsx
┃ ┣ 📜KakaoMap.jsx
┃ ┣ 📜KakaoMapSpeedMeet.jsx
┃ ┣ 📜Layout.jsx
┃ ┣ 📜MtCard.jsx
┃ ┣ 📜Mypage_Post.jsx
┃ ┣ 📜Pagination.jsx
┃ ┣ 📜ProtectedRoute.jsx
┃ ┣ 📜SearchBox.jsx
┃ ┗ 📜SpeedMeetDetailSkelton.jsx
┣ 📂css
┃ ┣ 📜dlatl.css
┃ ┗ 📜Mypage.css
┣ 📂hooks
┃ ┣ 📜useSpeedMeetEdit.js
┃ ┗ 📜useSpeedMeetWrite.js
┣ 📂mutations
┃ ┣ 📜useCreateAttendeeMutation.js
┃ ┣ 📜useCreateSpeedMeetMutation.js
┃ ┣ 📜useDeleteSpeedMeetMutation.js
┃ ┗ 📜usePatchSpeedMeetMutation.js
┣ 📂pages
┃ ┣ 📜Home.jsx
┃ ┣ 📜Login.jsx
┃ ┣ 📜MtDetail.jsx
┃ ┣ 📜Mypage.jsx
┃ ┣ 📜Signup.jsx
┃ ┣ 📜SpeedMeetDetail.jsx
┃ ┣ 📜SpeedMeetEdit.jsx
┃ ┣ 📜SpeedMeetList.jsx
┃ ┗ 📜SpeedMeetWrite.jsx
┣ 📂pubsub
┃ ┗ 📜eventBus.js
┣ 📂queries
┃ ┣ 📜queryKeys.js
┃ ┣ 📜useGetAttendees.js
┃ ┣ 📜useGetMountainById.js
┃ ┣ 📜useGetMountainQuery.js
┃ ┣ 📜useGetPost.js
┃ ┣ 📜useGetSpeedMeetAndMountainQuery.js
┃ ┣ 📜useGetSpeedMeetByIdQuery.js
┃ ┣ 📜useGetSpeedMeetsQuery.js
┃ ┗ 📜usePrefetchSpeedMeetsQuery.js
┣ 📂services
┃ ┣ 📜speedMeetDetailService.js
┃ ┣ 📜speedMeetEditService.js
┃ ┗ 📜speedMeetListService.js
┣ 📂shared
┃ ┗ 📜Router.jsx
┣ 📂toast
┃ ┣ 📂icons
┃ ┃ ┣ 📜close.png
┃ ┃ ┣ 📜confirmX.png
┃ ┃ ┣ 📜confirmY.png
┃ ┃ ┣ 📜error.png
┃ ┃ ┣ 📜feed.png
┃ ┃ ┣ 📜sparta.jpeg
┃ ┃ ┣ 📜SpCardDefault.png
┃ ┃ ┣ 📜success.png
┃ ┃ ┗ 📜warning.png
┃ ┣ 📂util
┃ ┃ ┣ 📜position.js
┃ ┃ ┗ 📜styles.js
┃ ┣ 📜showToast.js
┃ ┣ 📜toast.css
┃ ┗ 📜Toast.jsx
┣ 📂utils
┃ ┣ 📜clipBoard.js
┃ ┗ 📜common.js
┣ 📂zustand
┃ ┣ 📜useSpeedMeetStore.js
┃ ┗ 📜useUserStore.js
┣ 📜App.css
┣ 📜App.jsx
┣ 📜index.css
┗ 📜main.jsx
```
</details>
