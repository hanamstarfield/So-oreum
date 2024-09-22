# So-oreum

등산 커뮤니티

## 프로젝트 주제

"소오름"은 서울 지역을 기반으로 한 등산 커뮤니티 플랫폼입니다. 사용자는 서울 내 산의 위치를 확인하고, 해당 산에 대한 상세 정보 및 벙개 모임 게시물을 볼 수 있으며, 직접 벙개를 모집하거나 참여할 수 있습니다.

### 선정 배경

현대 사회에서는 건강과 여가를 위한 활동으로 등산이 인기를 끌고 있으며, 특히 도시 생활에 지친 사람들이 자연 속에서 여유를 찾고자 합니다. 그러나 많은 사람들이 단체로 등산을 하길 원하지만 모임을 찾거나 만드는 과정이 번거롭습니다. 이를 해결하기 위해 등산을 즐기는 사람들이 쉽게 모임을 만들고, 참여할 수 있는 플랫폼이 필요하다는 점에서 이 프로젝트를 기획하게 되었습니다.

### 기획 의도

"소오름" 플랫폼은 사용자들이 서울의 다양한 산을 탐험하면서 건강과 여가를 동시에 즐길 수 있는 환경을 제공합니다. 또한, 등산을 혼자 하기보다는 다른 사람들과 함께하는 즐거움을 느끼고, 새로운 사람들과의 만남을 통해 커뮤니티를 형성할 수 있는 장을 마련합니다. 간편한 벙개 모집 기능과 참가 신청 시스템을 통해 등산을 사랑하는 사람들이 더욱 쉽게 모이고 소통할 수 있는 공간을 만드는 것이 이 플랫폼의 주요 의도입니다.

## 배포 링크

https://어쩌구 ..

## 📚 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 📅 프로젝트 기간

2024. 09 ... ~

## 멤버

<table>
   <tr>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
    <td align="center"><b>Frontend</b></td>
  </tr>
  <tr>
    <td align="center"><img src="" width="100px" /></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/LeeJY97" width="100px" /></td>
    <td align="center"><img src="" width="100px" /></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/hansub1n" width="100px" /></td>
  </tr>
  <tr>
    <td align="center"><b><a href="">팀장 : 유현지</a></b></td>
    <td align="center"><b><a href="https://github.com/LeeJY97">팀원 : 이준열</a></b></td>
    <td align="center"><b><a href="">팀원 : 송진우</a></b></td>
    <td align="center"><b><a href="https://github.com/hansub1n">팀원 : 한수빈</a></b></td>
  </tr>
</table>

## 🛠️ 기능

-   [x] 페이지 분리 (Home, Login, Signup, MtDetail, Mypage, SpeedMeet(Detail, Write, Edit, List))
    -   [x] 페이지 라우팅
-   [x] `Home`
-   [x] `Login/Signup`
-   [x] `MtDetail`
-   [x] `SpeedMeet`
    -   [x] `SpeedMeetWrite`
        -   [x] 게시글 작성 가능
        -   [ ] ....
-   [x] `Mypage`

## 👓 담당 기능

### 현지

-

### 준열

-

### 진우

-

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

## 🗂️ 파일 구조

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
