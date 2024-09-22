# So-oreum

등산 커뮤니티

## 프로젝트 주제

"소오름"은 사용자들이 .... 어쩌구 ..

### 선정 배경

현대 사회에서는 ... 어쩌구 ..

### 기획 의도

어쩌구 ...

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
    <td align="center"><img src="" width="100px" /></td>
  </tr>
  <tr>
    <td align="center"><b><a href="">팀장 : 유현지</a></b></td>
    <td align="center"><b><a href="https://github.com/LeeJY97">팀원 : 이준열</a></b></td>
    <td align="center"><b><a href="">팀원 : 송진우</a></b></td>
    <td align="center"><b><a href="">팀원 : 한수빈</a></b></td>
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

-

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
