# US-Campus Publish

##### US-Campus Version 0.1.0

본 문서는 US-Campus 파일추가 및 업데이트 이슈에 대해서 기술합니다.

추가적인 이슈사항에 대한 요청 및 문의 : 📨 100designer@us-all.co.kr

- 11M 01D Legacy Update
- 11M 02D 요청완료 Update
- 11M 03D 탭 스타일 변경 요청 / 완료
- 11M 08D 팝업 추가요청
- 11M 11D 팝업 추가완료

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

추가파일

- HTML

  - html/00_main/index_PopUp.html

- CSS

  - share/css/PopUp.css

- IMG

  - img/IC_PopUp_closeBtn.png

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
    <link rel="stylesheet" type="text/css" href="../../share/css/PopUp.css" />
    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->
      <div id="modal" class="modal_bg">
        <div class="modal_wrap">
          <button onclick="location.href='#modal'" class="modal_close_select">오늘 하루 보지않기</button>
          <button onclick="location.href='#modal'" class="modal_close_button">close</button>
          <div class="modal_contents">
            <img src="/img/PopUp_EXcontents.jpg" />
            <span>
              구조적인 저성장.저금리 시대에 접어들었습니다. 모든 자산의 거품은 붕괴되는 과정에 있습니다. 이건 다르게 보면 싼 자산을 매입해서 부자가 될 기회가
              오고 있다는 이야기입니다. 지금 대비해서, 기회를 누릴 수 있는 시기가 내년 상반기가 아닐까 생각합니다. 구조적인 저성장.저금리 시대에 접어들었습니다.
              모든 자산의 거품은 붕괴되는 과정에 있습니다. 이건 다르게 보면 싼 자산을 매입해서 부자가 될 기회가 오고 있다는 이야기입니다. 지금 대비해서, 기회를
              누릴 수 있는 시기가 내년 상반기가 아닐까 생각합니다. 구조적인 저성장.저금리 시대에 접어들었습니다. 모든 자산의 거품은 붕괴되는 과정에 있습니다.
              이건 다르게 보면 싼 자산을 매입해서 부자가 될 기회가 오고 있다는 이야기입니다. 지금 대비해서, 기회를 누릴 수 있는 시기가 내년 상반기가 아닐까
              생각합니다. 구조적인 저성장.저금리 시대에 접어들었습니다. 모든 자산의 거품은 붕괴되는 과정에 있습니다. 이건 다르게 보면 싼 자산을 매입해서 부자가
              될 기회가 오고 있다는 이야기입니다. 지금 대비해서, 기회를 누릴 수 있는 시기가 내년
            </span>
          </div>
          <div class="modal_button_wrap">
            <button class="btn02-modal_button-pos">신청하기</button>
            <button class="btn02-modal_button-neu">혜택 알아보기</button>
            <button class="btn01-modal_button-neg">김영익 교수와 함께하는 투자스쿨</button>
          </div>
        </div>
      </div>

      <!-- ⚠️ 추가 끝 2️⃣ -->

      <!-- ⚠️ 추가 시작 3️⃣ -->
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" rel="stylesheet" />
      <!-- ⚠️ 추가 끝 3️⃣ -->

```

---
