# US-Campus Publish

##### US-Campus Version 0.1.0

본 문서는 US-Campus 파일추가 및 업데이트 이슈에 대해서 기술합니다.

추가적인 이슈사항에 대한 요청 및 문의 : 📨 100designer@us-all.co.kr

- 11M 01D Legacy Update
- 11M 02D 요청완료 Update
- 11M 03D 탭 스타일 변경 요청 / 완료
- 11M 08D 팝업 추가요청
- 11M 11D 팝업 추가완료
- 11M 14D (11.14)인앱결제안내
- 11M 15D 탭 2개일 경우수 추가 (videoPlus.css)
- 11M 15D 모바일 마이페이지 반응형 탭부분 변경
- 11M 16D 결제안내 문구 추가 (자세한 사항은 어스캠퍼스 홈페이지에서 확인해주세요.)
- 11M 17D 1-1 모바일 마이페이지 UI 퍼블리싱
- 11M 18D 1-1 모바일 마이페이지 UI 퍼블리싱 완료
- 11M 18D 1-3 드롭다운 리스트 스타일 변경
- 11M 18D 1-2 리스트 Hover Cursor
- 11M 29D 키인 결제 (카드결제) 디자인 / 1-5 페이지별 레이아웃 일관성 필요 / 1-4 주문서 페이지 레이아웃 및 디자인리뉴얼 (홀딩)

- 12M 01D 모바일 백그라운드 CSS 수정
- 12M 01D 팝업 및 폰트 수정
- 12M 01D layout.css / base.css > site CSS 변화코드변경

- 12M 15D 키인 결제 (카드결제) 디자인 / 1-5 페이지별 레이아웃 일관성 필요 / 1-4 주문서 페이지 레이아웃 및 디자인리뉴얼 (재시작)
- 12M 20D 키인 결제 (카드결제) 디자인 / 1-5 페이지별 레이아웃 일관성 필요 / 1-4 주문서 페이지 레이아웃 및 디자인리뉴얼 (완료)

- 12M 20D 서적 구매 배너 Ui-Dev
- 12M 21D 서적 구매 배너 Ui-Dev (완료)

- 12M 22D 1-3 드롭다운 리스트 스타일 변경 (리터치)
- 12M 22D Sticky + Swipe Tab page 추가

- [<code>12M 23D</code> 황홍 수정 요청](#12m-23d-황홍-수정-요청)

- [<code>12M 23D</code> 얼리버드 판매 방식](#12m-23d-얼리버드-판매-방식)

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

#### AS-IS

- HTML

  - /html/02_product/intro.html

---

#### TO-BE

추가파일

- HTML

  - html/02_product/intro_tobe.html

- CSS

  - share/css/productPlus.csss

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
    <link rel="stylesheet" type="text/css" href="../../share/css/productPlus.css" />
    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->
      <!-- 구글 안내
      <p class="inAppPayGuide">
        <b>Google Play 결제안내</b><br />
        <span> *현재 사용하고 있는 Google Play 계정을 통해 결제 됩니다. </span> <br />
        <span> *결제 금액에는 Google Play 수수료가 포함되어 있습니다. </span>
      </p> -->
      <!-- 애플 안내 -->
      <p class="inAppPayGuide">
        <b>애플 앱스토어 결제안내</b><br />
        <span> *현재 사용하고 있는 앱스토어 계정을 통해 결제 됩니다. </span> <br />
        <span> *결제 금액에는 앱스토어의 수수료가 포함되어 있습니다. </span><br />
        <span> *환불은 어스캠퍼스에 권한이 없음으로 애플을 통해 가능합니다. </span>
      </p>
    <!-- ⚠️ 추가 끝 2️⃣ -->

```

---

- 11M 18D 1-1 모바일 마이페이지 UI 퍼블리싱 완료

#### AS-IS

- HTML

  - /html/05_mypage/com.html

---

#### TO-BE

추가파일

- HTML

  - html/05_mypage/com_tobe.html

- CSS

  - share/css/Res_menu.csss

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
     <link rel="stylesheet" type="text/css" href="../../share/css/Res_menu.css" />
    <style>
      @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    </style>

    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->
<div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <div class="deem"></div>
          <ul class="menu__box">
            <li class="memberMenu">
              <ol>
                <li class="profile"></li>
                <li class="prof_text">
                  <span>안녕하세요.</span><br />
                  <b>백규진님!</b>
                </li>
                <li class="alarm_noti">
                  <span>1</span>
                </li>
                <li>
                  <button class="btn-pos btn-change"><span>회원정보 수정</span></button>
                </li>
                <li><button class="btn-neg">로그아웃</button></li>
              </ol>
            </li>
            <li><a class="menu__item" href="#">나의 스터디</a></li>
            <li><a class="menu__item" href="#">어스캠퍼스</a></li>
            <li><a class="menu__item" href="#">815캠퍼스</a></li>
            <li class="sub_menu">
              <ol>
                <li><button class="btn-neu">FAQ</button></li>
                <li><button class="btn-neu">구매내역</button></li>
              </ol>
            </li>
          </ul>
        </div>
    <!-- ⚠️ 추가 끝 2️⃣ -->

```

---

#### TO-BE

##### 12M 22D 1-3 드롭다운 리스트 스타일 변경 (리터치)

변경파일

- CSS

  - share/css/study.css

```
/* 추가 */
.video .array.pd {
 border-bottom: 2px solid #ddd;
}
.video .menuCate .menuCateTitle {
 margin-top: 0.5rem;
 margin-bottom: 0.5rem;
}

.video .menuCate .menuCateTitle.open + .menuCateList {
 background: #f8f8f8;
}


```

---

#### AS-IS

- HTML

  - /html/03_pay/index.html

---

#### TO-BE

추가파일

- HTML

  - /html/03_pay/index_tobe.html

- CSS

  -

```
    <!-- ⚠️ 추가 시작 1️⃣ -->

    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->

    <!-- ⚠️ 추가 끝 2️⃣ -->

```

---

#### 12M 01D 모바일 백그라운드 CSS 수정

변경파일

- CSS

  - share/css/product.css

  ```
  /* ⚠️ 추가 시작 1️⃣ */
  /* .p_view {
    padding: 0;
  } */
  .p_view {
    padding: 0 0 5rem 0;
    background: #fff; /*추가 부분*/
  }
  /* ⚠️ 추가 시작 1️⃣ */

  ```

---

#### 12M 01D 팝업 및 폰트 수정

- CSS

  - share/css/layout.css

```
  /* ⚠️ 추가 시작 1️⃣ */
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  /* ⚠️ 추가 끝 1️⃣ */

  /* ⚠️ 추가 시작 2️⃣ */
  /*font-family: Noto Sans KR;*/

  font-family: 'Pretendard', serif;
  /* ⚠️ 추가 끝 2️⃣ */

```

- CSS

  - share/css/PopUp.css

```

 /* ⚠️ 변경 시작 1️⃣ */
  padding: 0.5rem 1rem;
  /* ⚠️ 변경 끝 1️⃣ */


```

---

#### 12M 01D layout.css / base.css > site CSS 변화코드변경

- CSS

  - share/css/layout.css

  - share/css/base.css

  - share/css/PopUp.css

---

### Key in Pay

#### AS-IS

- HTML

  - /html/03_pay/index.html

---

#### TO-BE

추가파일

- HTML

  - /html/03_pay/index_tobe.html

- CSS

  - share/css/pay02.css

- JS

  - share/js/radio_accordian.js
  - share/js/toggle.js

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
   <!--CSS-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="../../share/css/pay02.css" />

    <!--JS-->
    <script type="text/javascript" src="/share/js/jquery-3.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script type="text/javascript" defer src="/share/js/radio_accordian.js"></script>
    <script type="text/javascript" defer src="/share/js/toggle.js"></script>
    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->
    파일에서 확인
    <!-- ⚠️ 추가 끝 2️⃣ -->


    <!--📌 확인부분 01 : requied 상태값 예시-->

    <!--📌 확인부분 02 : validation 알림글-->

     <!--📌 확인부분 03 : class="btnST01 active" 상태값 btnST02 동일-->

     <!--📌 확인부분 04 : 아멕스 카드시 Place 홀더 변경 및 마지막 input 삭제로 진행-->

     <!--📌 확인부분 05 : github pages 경로 변경 ../../ >> 해당부분 개발시 경로 재설정필요-->

```

---

### 서적 구매 배너

#### AS-IS

- HTML

  - html/00_main/index.html

---

#### TO-BE

추가파일

- HTML

  - html/00_main/index_bookBanner.html

- CSS

  - share/css/main02.css

- JS

  - share/js/bookBanner.js

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
    <!--CSS-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" type="text/css" href="../../share/css/main02.css" />

    <!--JS-->
    <script type="text/javascript" defer src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script type="text/javascript" defer src="../../share/js/bookBanner.js"></script>
    <!-- ⚠️ 추가 끝 1️⃣ -->

    <!-- ⚠️ 추가 시작 2️⃣ -->
    파일에서 확인
    <!-- ⚠️ 추가 끝 2️⃣ -->

     <!--📌 확인부분 01 : github pages 경로 변경 ../../ >> 해당부분 개발시 경로 재설정필요-->

```

---

### Swipe Tab page 추가

- 12M 22D Sticky + Swipe Tab page 추가

#### AS-IS

- HTML

  - html/02_product/intro.html

---

#### TO-BE

추가파일

- HTML

  - html/02_product/intro_tobe.html

- CSS

  - share/css/videoPlus.css
  - share/css/swiper-bundle.min.css

- JS

  - share/js/swiper-bundle.min.js
  - share/js/swiper.js

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
    <link rel="stylesheet" type="text/css" href="../../share/css/swiper-bundle.min.css" />
    <link rel="stylesheet" type="text/css" href="../../share/css/videoPlus.css" />
    <script src="../../share/js/swiper-bundle.min.js"></script>
    <script defer src="../../share/js/swiper.js"></script>
    <!-- ⚠️ 추가 끝 1️⃣ -->

     <!--👇🏼 해당 부분 수정
            1. 탭 Sticky
            2. 탭 갯수 증가 예측 > Swipe  -->
    <!-- ⚠️ 추가 시작 2️⃣ -->

    <div class="stickyBox">
      <div class="swiperWrap">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="./com.html">웰컴패키지 영상</a>
            </div>

            <!-- <div class="swiper-slide active">
              <a href="./com.html">동영상동영상동영상동영상</a>
            </div>
            <div class="swiper-slide"><a href="./guide.html">학습가이드</a></div> -->
            <div class="swiper-slide"><a href="./guide.html">웰컴패키지 사용안내</a></div>

            <!-- <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">커뮤니티</div> -->
            <!-- <div class="swiper-slide">동영상동영상동영상동영상</div>
            <div class="swiper-slide">학습가이드</div>
            <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">동영상</div>
            <div class="swiper-slide">동영상동영상동영상동영상학습가이드</div>
            <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">동영상</div>
            <div class="swiper-slide">학습가이드</div> -->
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <!-- ⚠️ 추가 끝 2️⃣ -->

    <!--📌 확인부분 01 -->
      <div class="p_view study-vis cf">

    <!--📌 확인부분 02 -->
      <div class="content study-vis cf">

```

---

# 12M 23D 황홍 수정 요청

#### TO-BE

변경파일

- html/00_main/index_bookBanner.html

```
/*황홍 12/23 추가요청*/
주석부분 확인

```

- share/css/main02.css

```
전체교체

```

- share/css/Res_menu.css

```
전체교체

```

```
/*황홍 12/23 추가요청*/
  .study.study-vis {
    padding-top: 65px;
  }

```

- share/css/PopUp.csss

```
/*황홍 12/23 추가요청*/
주석부분 확인

```

- share/css/layout.css

```
/*황홍 12/22 추가요청*/
  .product,
  .master {
    padding-top: 65px;
  }

```

- share/css/study.css

```
/*황홍 12/23 추가요청*/
  .study > div {
    padding: 0;
    padding-top: 65px;
  }
```

---

# 12M 23D 얼리버드 판매 방식

-

#### TO-BE

추가파일

- HTML

  - html/03_pay/earlyBird.html

- CSS

  - share/css/earlyBird.css

- JS

  - share/js/swiper-bundle.min.js
  - share/js/swiper.js

```
    <!-- ⚠️ 추가 시작 1️⃣ -->
    <link rel="stylesheet" type="text/css" href="../../share/css/swiper-bundle.min.css" />
    <link rel="stylesheet" type="text/css" href="../../share/css/videoPlus.css" />
    <script src="../../share/js/swiper-bundle.min.js"></script>
    <script defer src="../../share/js/swiper.js"></script>
    <!-- ⚠️ 추가 끝 1️⃣ -->

     <!--👇🏼 해당 부분 수정
            1. 탭 Sticky
            2. 탭 갯수 증가 예측 > Swipe  -->
    <!-- ⚠️ 추가 시작 2️⃣ -->

    <div class="stickyBox">
      <div class="swiperWrap">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="./com.html">웰컴패키지 영상</a>
            </div>

            <!-- <div class="swiper-slide active">
              <a href="./com.html">동영상동영상동영상동영상</a>
            </div>
            <div class="swiper-slide"><a href="./guide.html">학습가이드</a></div> -->
            <div class="swiper-slide"><a href="./guide.html">웰컴패키지 사용안내</a></div>

            <!-- <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">커뮤니티</div> -->
            <!-- <div class="swiper-slide">동영상동영상동영상동영상</div>
            <div class="swiper-slide">학습가이드</div>
            <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">동영상</div>
            <div class="swiper-slide">동영상동영상동영상동영상학습가이드</div>
            <div class="swiper-slide">커뮤니티</div>
            <div class="swiper-slide">동영상</div>
            <div class="swiper-slide">학습가이드</div> -->
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <!-- ⚠️ 추가 끝 2️⃣ -->

    <!--📌 확인부분 01 -->
      <div class="p_view study-vis cf">

    <!--📌 확인부분 02 -->
      <div class="content study-vis cf">

```

---
