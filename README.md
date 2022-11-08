# US-Campus Publish

##### US-Campus Version 0.1.0

본 문서는 US-Campus 파일추가 및 업데이트 이슈에 대해서 기술합니다.

추가적인 이슈사항에 대한 요청 및 문의 : 📨 100designer@us-all.co.kr

- 11M 01D Legacy Update
- 11M 02D 요청완료 Update
- 11M 03D 탭 스타일 변경 요청 / 완료
- 11M 08D 팝업 추가요청

---

#### AS-IS

- HTML

  - /Us-campus/html/05_mypage/video.html

---

#### TO-BE

<!--👇🏼 해당 부분 수정
                    1. 탭 Sticky
                    2. 탭 갯수 증가 예측 > Swipe  -->

- HTML

  - /Us-campus/html/05_mypage/video_tobe.html

추가파일

- CSS

  - swiper-bundle.min.css
  - videoPlus.css

- JS

  - swiper.js
  - swiper-bundle.min.js

- IMG

  - WG_bg.png

```
  <!-- ⚠️ 추가 시작 1️⃣ -->
  <link rel="stylesheet" type="text/css" href="../../share/css/swiper-bundle.min.css" />
  <link rel="stylesheet" type="text/css" href="../../share/css/videoPlus.css" />
  <script src="../../share/js/swiper-bundle.min.js"></script>
  <script defer src="../../share/js/swiper.js"></script>
  <!-- ⚠️ 추가 끝 1️⃣ -->


  <!--📌 변경부분 : class="study study-vis cf"-->
  <div class="study study-vis cf">
  <!--📌 변경부분 : class="content cf"-->
  <div class="content cf">



<!-- ⚠️ 추가 시작 2️⃣ -->
  <div class="stickyBox">
    <div class="swiperWrap">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="./com.html">커뮤니티</a>
          </div>

          <div class="swiper-slide active">
            <a href="./com.html">동영상</a>
          </div>
          <div class="swiper-slide"><a href="./guide.html">학습가이드</a></div>
          <div class="swiper-slide">커뮤니티</div>
          <div class="swiper-slide">동영상</div>
          <div class="swiper-slide">학습가이드</div>
          <div class="swiper-slide">커뮤니티</div>
          <div class="swiper-slide">동영상</div>
          <div class="swiper-slide">학습가이드</div>
          <div class="swiper-slide">커뮤니티</div>
          <div class="swiper-slide">동영상</div>
          <div class="swiper-slide">학습가이드</div>
        </div>
      </div>
    </div>
  </div>
  <!-- ⚠️ 추가 끝 2️⃣ -->

```

---

#### AS-IS

- HTML

  - /Us-campus/html/05_mypage/index.html

---

#### TO-BE

- HTML

  - /Us-campus/html/05_mypage/index_PopUp.html

---
