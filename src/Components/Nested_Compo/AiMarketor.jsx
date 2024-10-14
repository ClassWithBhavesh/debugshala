import React from "react";
import "./nestedPage.css"
import Footer from "../Footer";

function AiMarketor() {
  return (
    <>
      <meta charSet="utf-8" />
      {/* <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="stylesheet" href="./assets/CSS/style.css" />
  <link rel="stylesheet" href="./assets/CSS/nestedPage.css" /> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
      />
      {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        href="./assets/images/brandkit/Debugshala Icon.svg"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <title>AI_Marketer Course - Debugshala</title>
      <div className="body-body-black">
        <main className="condition-split">
          <div className="input-collect" id="curri_sec">
            <div className="div-banner-top">
              <div className="want-to-know-container">
                Want to know more?
                <a href="#" className="dld_curriculum">
                  <span className="download-the-curriculum">
                    Download the Curriculum
                  </span>{" "}
                </a>
              </div>
              <div className="loop-control cross-mark" id="cross-mark">
                ✖
              </div>
            </div>
          </div>
          <section className="div-div-block-297">
            <div className="div-div-block-297-inner">
              <div className="frame-parent">
                <div className="if-statement-parent">
                  <div className="if-statement">
                    <svg
                      className="icon1"
                      loading="lazy"
                      data-aos="zoom-in"
                      width={140}
                      height={40}
                      viewBox="0 0 140 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.32593 26.7883V26.7883C11.5221 26.7883 13.3263 25.0539 13.4129 22.8594L13.4839 21.0611C13.4995 20.6658 13.5921 20.2773 13.7564 19.9174V19.9174C14.2511 18.8339 15.3327 18.1387 16.5239 18.1387H18.7501"
                        stroke="url(#paint0_linear_44_183)"
                        strokeWidth="3.48566"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4569 16.3313V11.0382L10.7458 11.757V16.3313H13.4569ZM13.5419 16.3313H9.07017C5.71771 16.3313 3 19.049 3 22.4015V22.8754C3 25.8875 5.3798 28.3439 8.3618 28.4668V25.0597C7.17145 24.9144 6.24947 23.9002 6.24947 22.6706V22.4667C6.24947 21.0248 7.41838 19.8559 8.8603 19.8559H10.8622C10.9497 19.0903 11.3306 18.2341 11.9694 17.5009C12.449 16.9504 13.0006 16.5534 13.5419 16.3313Z"
                        fill="white"
                      />
                      <path
                        d="M23.337 28.7414C22.5475 28.7414 22.1527 28.3648 22.1527 27.6116V12.2846C22.1527 11.5314 22.5475 11.1548 23.337 11.1548H27.4886C29.1493 11.1548 30.5831 11.6539 31.79 12.6521C33.0513 13.7047 33.682 14.9843 33.682 16.4907V23.4055C33.682 24.1678 33.5096 24.8801 33.1648 25.5426C32.8199 26.205 32.3617 26.7722 31.79 27.2441C30.5831 28.2423 29.1493 28.7414 27.4886 28.7414H23.337ZM24.2898 13.3055V26.6043H27.4886C28.632 26.6043 29.6121 26.2685 30.4288 25.597C31.1729 24.9799 31.545 24.2494 31.545 23.4055V16.4907C31.545 15.6558 31.1729 14.9253 30.4288 14.2991C29.6211 13.6367 28.6411 13.3055 27.4886 13.3055H24.2898ZM42.5434 20.9145C43.1423 20.9145 43.5098 20.6831 43.646 20.2203C43.6913 20.057 43.714 19.5443 43.714 18.6822C43.714 18.0742 43.5234 17.6159 43.1423 17.3074C42.6886 16.9353 42.008 16.7493 41.1005 16.7493C40.2384 16.7493 39.5669 16.9444 39.086 17.3346C38.7048 17.6431 38.5143 18.0923 38.5143 18.6822V20.9145H42.5434ZM36.3772 18.6822C36.3772 17.4389 36.8355 16.4453 37.752 15.7012C38.6232 14.9933 39.7393 14.6394 41.1005 14.6394C42.498 14.6394 43.6233 14.9843 44.4763 15.6739C45.3837 16.409 45.8465 17.5297 45.8647 19.0361C45.901 21.704 44.8438 23.038 42.6931 23.038H39.2493C38.8863 23.038 38.6413 22.979 38.5143 22.861V25.2431C38.5143 25.7422 38.7729 26.1415 39.2901 26.441C39.6803 26.6769 40.1613 26.8221 40.733 26.8765C41.2412 26.9128 41.7584 26.872 42.2848 26.754C42.684 26.6633 43.0198 26.5181 43.292 26.3185C43.3919 26.2459 43.4826 26.1596 43.5643 26.0598C43.9 25.6878 44.3265 25.6288 44.8438 25.8829L45.8783 26.3865C45.6877 26.8312 45.4246 27.2259 45.0888 27.5707C44.6079 28.0517 43.9999 28.4147 43.2648 28.6597C42.5933 28.8866 41.8946 29 41.1686 29C40.5697 29 40.0161 28.941 39.5079 28.823C38.9272 28.6869 38.4144 28.4691 37.9698 28.1697C37.4435 27.8248 37.0442 27.353 36.7719 26.754C36.5088 26.1823 36.3772 25.5653 36.3772 24.9028V18.6822ZM48.1107 12.2301C48.1107 11.4769 48.5054 11.1003 49.2949 11.1003H50.2477V15.4834C51.1552 14.9207 52.1579 14.6394 53.256 14.6394C54.6081 14.6394 55.7969 15.0569 56.8223 15.8917C57.8749 16.7538 58.4013 17.8201 58.4013 19.0905V24.5489C58.4013 25.8193 57.8749 26.8902 56.8223 27.7613C55.815 28.5871 54.6262 29 53.256 29C51.8766 29 50.6924 28.5871 49.7033 27.7613C48.6415 26.8811 48.1107 25.8103 48.1107 24.5489V12.2301ZM50.2477 24.5489C50.2477 25.1569 50.52 25.6832 51.0644 26.1279C51.6634 26.627 52.3939 26.8765 53.256 26.8765C54.118 26.8765 54.8531 26.627 55.4611 26.1279C55.9965 25.6832 56.2642 25.1569 56.2642 24.5489V19.0905C56.2642 18.4825 55.9965 17.9607 55.4611 17.5252C54.8531 17.0261 54.118 16.7765 53.256 16.7765C52.3939 16.7765 51.6634 17.0261 51.0644 17.5252C50.52 17.9607 50.2477 18.4825 50.2477 19.0905V24.5489ZM60.9875 16.0823C60.9875 15.3291 61.3823 14.9525 62.1718 14.9525H63.1246V24.7395C63.1246 25.293 63.3696 25.774 63.8596 26.1823C64.4223 26.6451 65.1029 26.8765 65.9014 26.8765C66.6909 26.8765 67.3715 26.6451 67.9432 26.1823C68.4332 25.7831 68.6783 25.3021 68.6783 24.7395V16.0823C68.6783 15.3291 69.073 14.9525 69.8625 14.9525H70.8289V24.7395C70.8289 25.9464 70.3208 26.9764 69.3044 27.8294C68.3697 28.6098 67.2354 29 65.9014 29C64.5856 29 63.4558 28.6098 62.5121 27.8294C61.4957 26.9854 60.9875 25.9555 60.9875 24.7395V16.0823ZM78.5741 14.6939C79.9353 14.6939 81.1241 15.1113 82.1404 15.9462C83.1931 16.8173 83.7194 17.8881 83.7194 19.1586V28.6461C83.7194 29.3085 83.5878 29.9029 83.3247 30.4293C83.0615 30.9647 82.6849 31.4048 82.1949 31.7496C81.6958 32.1035 81.174 32.3621 80.6295 32.5255C79.3591 32.8975 78.0569 32.9202 76.7229 32.5935C75.9788 32.403 75.3481 32.0944 74.8308 31.6679C74.6947 31.55 74.5768 31.4365 74.4769 31.3276L75.5795 30.4293C75.8971 30.1661 76.251 30.1343 76.6412 30.334C77.5578 30.8058 78.6921 30.8558 80.0442 30.4837C81.0696 30.1933 81.5823 29.5808 81.5823 28.6461V28.2377C80.693 28.8004 79.6903 29.0817 78.5741 29.0817C77.1948 29.0817 76.006 28.6642 75.0078 27.8294C73.9551 26.9582 73.4288 25.8919 73.4288 24.6306V19.1586C73.4288 17.8972 73.9551 16.8264 75.0078 15.9462C76.0151 15.1113 77.2038 14.6939 78.5741 14.6939ZM80.7792 17.5796C80.1712 17.0805 79.4362 16.831 78.5741 16.831C77.712 16.831 76.9815 17.0805 76.3826 17.5796C75.8381 18.0333 75.5659 18.5597 75.5659 19.1586V24.6306C75.5659 25.2295 75.8381 25.7513 76.3826 26.1959C76.9815 26.695 77.712 26.9446 78.5741 26.9446C79.4362 26.9446 80.1712 26.695 80.7792 26.1959C81.3146 25.7604 81.5823 25.2386 81.5823 24.6306V19.1586C81.5823 18.5597 81.3146 18.0333 80.7792 17.5796Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M122.155 28.8484L119.812 26.2623V13.1829C119.812 12.4893 119.795 11.8255 119.76 11.1913C119.725 10.6563 119.673 10.1212 119.604 9.58614C119.534 9.05107 119.439 8.625 119.317 8.30793C119.248 8.14939 119.179 8.02058 119.109 7.9215C119.057 7.82241 119.005 7.73323 118.953 7.65396C118.883 7.5747 118.831 7.49543 118.797 7.41616L118.979 7C119.239 7.1189 119.517 7.27744 119.812 7.47561C120.055 7.65396 120.315 7.88186 120.593 8.1593C120.871 8.43674 121.131 8.80336 121.374 9.25915C121.652 9.83385 121.843 10.4284 121.947 11.0427C122.069 11.6372 122.138 12.3506 122.155 13.1829V28.8484ZM113.45 16.8392C113.867 16.9779 114.266 17.1662 114.648 17.404C115.03 17.622 115.36 17.8796 115.637 18.1769C115.932 18.4543 116.158 18.7615 116.314 19.0984C116.488 19.4353 116.575 19.7721 116.575 20.109V28.8781L114.492 27.0351C114.179 27.3918 113.771 27.7188 113.268 28.0161C112.765 28.3133 112.218 28.5511 111.628 28.7295C111.038 28.888 110.422 28.9772 109.779 28.997C109.154 29.0168 108.556 28.9376 107.983 28.7592C107.41 28.5809 106.889 28.2935 106.421 27.8972C105.952 27.5008 105.588 26.9757 105.327 26.3217C105.032 25.6281 104.937 24.9345 105.041 24.2409C105.162 23.5473 105.414 22.9231 105.796 22.3682C106.195 21.7935 106.707 21.3278 107.332 20.9711C107.974 20.5946 108.668 20.3865 109.415 20.3468C110.179 20.2874 110.968 20.4261 111.784 20.763C112.617 21.0801 113.433 21.6449 114.231 22.4574V20.1388C114.231 19.5641 113.954 19.1281 113.398 18.8308C112.86 18.5138 112.201 18.4345 111.42 18.593C110.864 18.6921 110.422 18.7813 110.092 18.8606C109.762 18.9398 109.45 19.0389 109.154 19.1578C108.859 19.2569 108.538 19.3857 108.191 19.5443C107.844 19.7028 107.375 19.9109 106.785 20.1685L106.212 18.6822C106.803 18.4048 107.384 18.1372 107.957 17.8796C108.46 17.6616 108.99 17.4436 109.545 17.2256C110.118 17.0077 110.638 16.8392 111.107 16.7203C111.142 16.7005 111.177 16.6906 111.211 16.6906C111.263 16.6906 111.307 16.6807 111.341 16.6609V16.4809H104V16.4817H101.95V28.5703H99.4961V16.4817H96.7506L96.7317 16.5104C96.9888 16.8414 97.1831 17.2329 97.3147 17.6849C97.4526 18.1305 97.5216 18.5793 97.5216 19.0312C97.5216 19.4959 97.4495 19.9511 97.3053 20.3967C97.1611 20.8359 96.9574 21.256 96.6941 21.6571C96.4309 22.0581 96.1143 22.4337 95.7445 22.7838C95.3746 23.1276 94.964 23.4331 94.5127 23.7005V23.7482C94.8073 23.9392 95.1208 24.1843 95.453 24.4835C95.7852 24.7827 96.1143 25.1073 96.4403 25.4574C96.7662 25.8012 97.0796 26.1608 97.3805 26.5364C97.6814 26.9056 97.9541 27.2589 98.1986 27.5963L96.4685 29C96.2365 28.688 95.967 28.3443 95.6598 27.9687C95.3527 27.5931 95.0205 27.2144 94.6632 26.8324C94.3121 26.4505 93.9392 26.0813 93.5442 25.7248C93.1556 25.3619 92.7607 25.0373 92.3595 24.7508C91.858 24.9418 91.3503 25.0373 90.8363 25.0373C90.4414 25.0373 90.0935 24.9832 89.7926 24.875C89.4917 24.7604 89.2378 24.614 89.031 24.4357C88.8304 24.2575 88.6768 24.057 88.5702 23.8342C88.4699 23.6114 88.4198 23.3886 88.4198 23.1658C88.4198 22.9684 88.4605 22.7806 88.542 22.6024C88.6235 22.4178 88.7426 22.2555 88.8993 22.1154C89.0623 21.9754 89.266 21.864 89.5105 21.7812C89.755 21.6921 90.0402 21.6475 90.3662 21.6475C90.7423 21.6475 91.1246 21.7048 91.5133 21.8194C91.9082 21.934 92.2749 22.0963 92.6134 22.3064C92.6823 22.2873 92.7889 22.2459 92.9331 22.1823C93.0835 22.1122 93.2496 22.0168 93.4314 21.8958C93.6195 21.7749 93.8107 21.6284 94.005 21.4566C94.1993 21.2783 94.378 21.0714 94.5409 20.8359C94.7039 20.6004 94.8355 20.333 94.9358 20.0338C95.0424 19.7346 95.0957 19.4004 95.0957 19.0312C95.0957 18.7066 95.0518 18.3946 94.964 18.0955C94.8763 17.7963 94.7447 17.5321 94.5691 17.3029C94.3999 17.0738 94.1899 16.8923 93.9392 16.7586C93.6884 16.6186 93.4032 16.5486 93.0835 16.5486C92.8453 16.5486 92.6447 16.5836 92.4817 16.6536C92.325 16.7236 92.1965 16.8159 92.0962 16.9305C92.0022 17.0451 91.9333 17.1724 91.8894 17.3125C91.8518 17.4525 91.833 17.5926 91.833 17.7326C91.833 18.1336 91.9709 18.4424 92.2467 18.6588C92.5288 18.8689 92.9331 18.9739 93.4596 18.9739V21.1319C93.4095 21.1383 93.3656 21.1415 93.328 21.1415H93.2716C92.6698 21.1415 92.1276 21.0555 91.6449 20.8836C91.1622 20.7118 90.7517 20.4794 90.4132 20.1866C90.0809 19.8874 89.8239 19.5405 89.6421 19.1458C89.4604 18.7511 89.3695 18.3278 89.3695 17.8758C89.3695 17.4302 89.4635 16.9719 89.6515 16.5008L89.6327 16.4817H87V14.3333H104H117.176L118 16.4809H113.45V16.8392ZM114.231 24.2409C113.555 23.6464 112.843 23.2104 112.097 22.933C111.35 22.6357 110.656 22.497 110.014 22.5168C109.371 22.5366 108.816 22.715 108.347 23.0519C107.879 23.369 107.584 23.8446 107.462 24.4787C107.323 25.1723 107.358 25.7173 107.566 26.1136C107.775 26.51 108.078 26.7874 108.478 26.946C108.894 27.1045 109.371 27.1639 109.909 27.1243C110.465 27.0847 111.012 26.9757 111.55 26.7973C112.105 26.619 112.617 26.401 113.086 26.1434C113.572 25.8857 113.954 25.6182 114.231 25.3408V24.2409ZM134.073 17.404C133.691 17.1662 133.292 16.9779 132.876 16.8392V16.4809H138V14.3333H124L125 16.4809H130.767V16.6609C130.732 16.6807 130.689 16.6906 130.637 16.6906C130.602 16.6906 130.567 16.7005 130.532 16.7203C130.064 16.8392 129.543 17.0077 128.97 17.2256C128.415 17.4436 127.885 17.6616 127.382 17.8796C126.809 18.1372 126.228 18.4048 125.638 18.6822L126.21 20.1685C126.801 19.9109 127.269 19.7028 127.616 19.5443C127.964 19.3857 128.285 19.2569 128.58 19.1578C128.875 19.0389 129.187 18.9398 129.517 18.8606C129.847 18.7813 130.289 18.6921 130.845 18.593C131.626 18.4345 132.286 18.5138 132.824 18.8308C133.379 19.1281 133.657 19.5641 133.657 20.1388V22.4574C132.858 21.6449 132.043 21.0801 131.209 20.763C130.394 20.4261 129.604 20.2874 128.84 20.3468C128.094 20.3865 127.399 20.5946 126.757 20.9711C126.132 21.3278 125.62 21.7935 125.221 22.3682C124.839 22.9231 124.588 23.5473 124.466 24.2409C124.362 24.9345 124.457 25.6281 124.752 26.3217C125.013 26.9757 125.377 27.5008 125.846 27.8972C126.315 28.2935 126.835 28.5809 127.408 28.7592C127.981 28.9376 128.58 29.0168 129.205 28.997C129.847 28.9772 130.463 28.888 131.053 28.7295C131.643 28.5511 132.19 28.3133 132.693 28.0161C133.197 27.7188 133.605 27.3918 133.917 27.0351L136 28.8781V20.109C136 19.7721 135.913 19.4353 135.74 19.0984C135.583 18.7615 135.358 18.4543 135.063 18.1769C134.785 17.8796 134.455 17.622 134.073 17.404ZM122.932 13.1829V13.2402L122.904 13.1829H122.932ZM131.522 22.933C132.268 23.2104 132.98 23.6464 133.657 24.2409V25.3408C133.379 25.6182 132.997 25.8857 132.511 26.1434C132.043 26.401 131.53 26.619 130.975 26.7973C130.437 26.9757 129.89 27.0847 129.335 27.1243C128.797 27.1639 128.319 27.1045 127.903 26.946C127.504 26.7874 127.2 26.51 126.992 26.1136C126.783 25.7173 126.749 25.1723 126.887 24.4787C127.009 23.8446 127.304 23.369 127.773 23.0519C128.241 22.715 128.797 22.5366 129.439 22.5168C130.081 22.497 130.775 22.6357 131.522 22.933Z"
                        fill="url(#paint1_linear_44_183)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_44_183"
                          x1="11.7144"
                          y1="19.1858"
                          x2="14.0524"
                          y2="24.7119"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#09A9B0" />
                          <stop offset={1} stopColor="#1280D9" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_44_183"
                          x1={87}
                          y1="15.381"
                          x2="138.278"
                          y2="27.8577"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#09A9B0" />
                          <stop offset={1} stopColor="#1766F2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="while-loop" data-aos="fade-up">
                    <b className="unleash-your">Unleash Your </b>
                    <b className="creativity-master">Creativity: Master </b>
                    <b className="generative-ai-and">Generative AI and </b>
                    <b className="shape-the-future">Shape the Future</b>
                  </div>
                  <div className="switch-case" data-aos="fade-up">
                    <div className="generative-ai-is">
                      Generative AI is exploding, transforming industries
                    </div>
                    <div className="from-marketing-to">
                      from marketing to healthcare.
                    </div>
                    <div className="ready-to-shape">
                      Ready to shape your career through coding? Enroll
                    </div>
                    <div className="in-the-generative">
                      in the Generative AI program now.
                    </div>
                  </div>
                  <button
                    id="openModalBtn"
                    className="link-cta-angel-investing"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={1000}
                  >
                    <div className="enroll-now">Enroll Now</div>
                  </button>
                </div>
                {/* form code */}
                <div id="myModal" className="modal">
                  <div className="modal-content" id="modal-content">
                    <h2>Enroll Now</h2>
                    <span className="close">×</span>
                    <form id="myForm">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" required="" />
                      <br />
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required="" />
                      <br />
                      <label htmlFor="phone">Phone:</label>
                      <input type="tel" id="phone" name="phone" required="" />
                      <br />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required=""
                      />
                      <br />
                      <input
                        className="submit"
                        type="submit"
                        defaultValue="Submit"
                        id="submitBtn"
                      />
                    </form>
                  </div>
                </div>
                {/* //////////////////////////////////////////// */}
                <div className="div-w-node-1e8ff5f0-88ea-a88">
                  <img
                    className="div-div-block-252-icon"
                    alt=""
                    src="/images/courses_banner/AI_Marketer.jpg"
                    data-aos="zoom-out"
                  />
                  <div className="div-hero-mentor-component">
                    <div
                      className="div-hero-mentor-details"
                      data-aos="zoom-out"
                    >
                      <div className="div-hero-mentor-logo-componen">
                        <div className="image-w-node-0a53a0e8-64bc-c-parent">
                          <img
                            className="image-w-node-0a53a0e8-64bc-c-icon"
                            loading="lazy"
                            alt=""
                            src="/images/company logos/Aimleap.png"
                          />
                          <div className="image-wrapper">
                            <img
                              className="image-icon"
                              loading="lazy"
                              alt=""
                              src="/images/company logos/7 Paexskin.png"
                            />
                          </div>
                          <div className="image-container">
                            <img
                              className="image-icon1"
                              alt=""
                              src="/images/company logos/Bitcot.png"
                            />
                          </div>
                          <div className="image-frame">
                            <img
                              className="image-icon2"
                              alt=""
                              src="/images/company logos/Beyond key.png"
                            />
                          </div>
                          <div className="frame-div">
                            <img
                              className="image-icon3"
                              alt=""
                              src="/images/company logos/20.png"
                            />
                          </div>
                        </div>
                        <div className="image-parent">
                          <img
                            className="image-icon4"
                            alt=""
                            src="/images/company logos/Celebal technologies.png"
                          />
                          <div className="image-wrapper1">
                            <img
                              className="image-icon5"
                              alt=""
                              src="/images/company logos/Chapter 247.png"
                            />
                          </div>
                          <div className="image-wrapper2">
                            <img
                              className="image-icon6"
                              alt=""
                              src="/images/company logos/Conative.png"
                            />
                          </div>
                          <div className="image-wrapper3">
                            <img
                              className="image-icon7"
                              alt=""
                              src="/images/company logos/cubexo.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="div-hero-mentor-info-highligh"
                      data-aos="zoom-in"
                    >
                      <div className="event-dispatcher">
                        <div className="top">Top</div>
                      </div>
                      <div className="companies-wrapper">
                        <div className="companies">Companies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-section-angel-investing">
              <div className="div-div-block-385" data-aos="flip-left">
                <div className="why-choose-generative-ai-progr-wrapper">
                  <div className="why-choose-generative">
                    Why Choose Generative AI Program?
                  </div>
                </div>
                <div className="div-div-block-385-inner">
                  <div className="craft-code-write-headlines-d-parent">
                    <div className="craft-code-write">
                      Craft code, write headlines, design visuals - future-proof
                      your career with our expert-led generative
                    </div>
                    <div className="ai-program-solve">
                      AI program. Solve real-world challenges, join a thriving
                      community, be the AI innovator you were
                    </div>
                    <div className="meant-to-be">meant to be.</div>
                  </div>
                </div>
                <div className="div-div-block-390">
                  <div className="div-w-node-3411eaf0-61c5-a1f">
                    <img
                      className="icon2"
                      alt=""
                      src="/images/extra__icons/arrow.png"
                    />
                    <div className="div">
                      <div className="future-proof-your-career">
                        Future-Proof Your Career
                      </div>
                    </div>
                  </div>
                  <div className="div-w-node-4b22400c-2877-693">
                    <img
                      className="icon3"
                      alt=""
                      src="/images/extra__icons/bijli.png"
                    />
                    <div className="div1">
                      <div className="global-market">Global Market</div>
                      <div className="requirement">Requirement</div>
                    </div>
                  </div>
                  <div className="div-w-node-ecbd7dfc-0325-65e5">
                    <img
                      className="icon4"
                      alt=""
                      src="/images/extra__icons/sitare.png"
                    />
                    <div className="solve-real-world-problems">
                      Solve Real-World Problems
                    </div>
                  </div>
                  <div className="div-w-node-2485c1d2-e985-173">
                    <img
                      className="icon5"
                      alt=""
                      src="/images/extra__icons/profile.png"
                    />
                    <div className="div2">
                      <div className="in-demand-skill-in">
                        In-Demand skill in
                      </div>
                      <div className="div3">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-handler">
              <div
                className="frame-group"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={300}
                data-aos-offset={0}
              >
                <div
                  className="who-should-choose-generative-a-wrapper"
                  data-aos="fade-up"
                >
                  <div className="who-should-choose">
                    Who should choose Generative AI?
                  </div>
                </div>
                <div className="star-shape-parent">
                  <div className="star-shape">
                    <div className="div-w-node-d57d53ab-fae1-8635">
                      <img
                        className="div-w-node-d57d53ab-fae1-8635-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="oval-shape">
                        <div className="graduates">Graduates</div>
                      </div>
                    </div>
                    <div className="div-div-block-257">
                      <img
                        className="div-w-node-d2173fab-73d4-63e1-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="web-developer-wrapper">
                        <div className="web-developer">Web Developer</div>
                      </div>
                    </div>
                  </div>
                  <div className="star-shape1">
                    <div className="div-div-block-2571">
                      <img
                        className="div-w-node-e8b78e50-33cc-7814-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="business-professional-wrapper">
                        <div className="business-professional">
                          Business Professional
                        </div>
                      </div>
                    </div>
                    <div className="div-div-block-2572">
                      <img
                        className="div-w-node-7023bf85-a29a-940-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="students-wrapper">
                        <div className="students">Students</div>
                      </div>
                    </div>
                  </div>
                  <div className="star-shape2">
                    <div className="div-div-block-2573">
                      <img
                        className="div-w-node-56406bd5-ed41-3be-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="programming-enthusiast-wrapper">
                        <div className="programming-enthusiast">
                          Programming Enthusiast
                        </div>
                      </div>
                    </div>
                    <div className="div-div-block-2574">
                      <img
                        className="div-w-node-2ec6a161-bcb6-6c2-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="engineer-wrapper">
                        <div className="engineer">Engineer</div>
                      </div>
                    </div>
                  </div>
                  <div className="star-shape3">
                    <div className="div-div-block-2575">
                      <img
                        className="div-w-node-b35ead88-1d7e-5e8e-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="data-scientists-analysts-wrapper">
                        <div className="data-scientists">
                          Data Scientists &amp; Analysts
                        </div>
                      </div>
                    </div>
                    <button className="div-div-block-2576">
                      <img
                        className="div-w-node-3b56df57-6dcd-df5-icon"
                        alt=""
                        src="/images/extra__icons/tick_ka_nissan.png"
                      />
                      <div className="entrepreneurs-business-leade-wrapper">
                        <div className="entrepreneurs-business">
                          Entrepreneurs &amp; Business Leaders
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="frame-container">
                    <div className="div-div-block-257-parent">
                      <div className="div-div-block-2577">
                        <img
                          className="div-w-node-51f29905-2f32-e2b-icon"
                          alt=""
                          src="/images/extra__icons/tick_ka_nissan.png"
                        />
                        <div className="content-creators-writers-wrapper">
                          <div className="content-creators">
                            Content Creators &amp; Writers
                          </div>
                        </div>
                      </div>
                      <div className="div-div-block-2578">
                        <img
                          className="div-w-node-fd4a7b4c-838a-0f24-icon"
                          alt=""
                          src="/images/extra__icons/tick_ka_nissan.png"
                        />
                        <div className="developers-wrapper">
                          <div className="developers">Developers</div>
                        </div>
                      </div>
                    </div>
                    <div className="div-div-block-2579">
                      <div className="div-w-node-1fd9a149-eac6-bda-wrapper">
                        <img
                          className="div-w-node-1fd9a149-eac6-bda-icon"
                          alt=""
                          src="/images/extra__icons/tick_ka_nissan.png"
                        />
                      </div>
                      <div className="people-who-are-interested-to-l-parent">
                        <div className="people-who-are">
                          People who are interested to learn about
                        </div>
                        <div className="ai-and-curious">
                          AI and curious about AI
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-div-block-297-child">
              <div className="frame-parent1">
                <div className="frame-wrapper" data-aos="fade-up">
                  <div className="how-does-debugshala-navigate-t-parent">
                    <div className="how-does-debugshala">
                      How does Debugshala navigate the learning
                    </div>
                    <div className="experience-wrapper">
                      <div className="experience" data-aos="fade-up">
                        experience?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent2">
                  <div
                    className="choosing-a-course-with-lecture-parent"
                    data-aos="fade-up"
                  >
                    <div className="choosing-a-course">
                      Choosing a course with lectures and modules for a
                      certificate isn't enough. DebugShala
                    </div>
                    <div className="offering-hands-on-implementati">
                      goes beyond, offering hands-on implementation, AI tools,
                      and a performance dashboard
                    </div>
                    <div className="its-not-just">
                      for practical learning.It's not just about certificates,
                      it's about building real solutions.
                    </div>
                  </div>
                  <div className="image-group" data-aos="fade-right">
                    <img
                      className="image-icon8"
                      alt=""
                      src="/images/service_images/Image (1).png"
                    />
                    <div className="data-aggregator-wrapper">
                      <div className="data-aggregator">
                        <div className="div-animated-container">
                          <div className="practical-learning-offline">
                            Practical Learning Offline
                          </div>
                        </div>
                        <div className="logic-branch">
                          <div className="benefit-from-a">
                            Benefit from a carefully curated batches, ensuring a
                            collaborative and
                          </div>
                          <div className="enriching-learning-experience">
                            enriching learning experience.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent3" data-aos="fade-left">
                  <div className="frame-wrapper1">
                    <div className="div-animated-container-parent">
                      <div className="div-animated-container1">
                        <div className="personalized-training-experien">
                          Personalized Training Experience
                        </div>
                      </div>
                      <div className="benefit-from-a-carefully-curat-parent">
                        <div className="benefit-from-a1">
                          Benefit from a carefully curated batches, ensuring a
                          collaborative and
                        </div>
                        <div className="enriching-learning-experience1">
                          enriching learning experience.
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-icon9"
                    alt=""
                    src="/images/service_images/Image (2).png"
                  />
                </div>
                <div className="output-divider" data-aos="fade-right">
                  <img
                    className="image-icon10"
                    alt=""
                    src="/images/service_images/Image (3).png"
                  />
                  <div className="sorting-structure">
                    <div className="iteration-loop">
                      <div className="div-animated-container2">
                        <div className="personal-ai-assistant">
                          Personal AI Assistant - Meet Yukti
                        </div>
                      </div>
                      <div className="error-handler">
                        <div className="navigate-your-data">
                          Navigate your Data Science journey with Yukti, your
                          personal AI assistant at
                        </div>
                        <div className="debugshala">DebugShala.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent4" data-aos="fade-left">
                  <div className="frame-wrapper2">
                    <div className="frame-parent5">
                      <div className="progress-tracking-dashboard-an-parent">
                        <div className="progress-tracking-dashboard">
                          Progress Tracking Dashboard and Study
                        </div>
                        <div className="space">Space</div>
                      </div>
                      <div className="track-your-progress">
                        Track your progress seamlessly with our dedicated
                        dashboard.
                      </div>
                    </div>
                  </div>
                  <img
                    className="image-icon11"
                    alt=""
                    src="/images/service_images/Image (4).png"
                  />
                </div>
                <div className="value-comparator" data-aos="fade-right">
                  <img
                    className="image-icon12"
                    alt=""
                    src="/images/service_images/Image (5).png"
                  />
                  <div className="iteration-counter">
                    <div className="input-splitter">
                      <div className="div-animated-container3">
                        <div className="interactive-offline-developer">
                          Interactive Offline Developer Community
                        </div>
                      </div>
                      <div className="control-structure">
                        <div className="you-learn-and">
                          You learn and grow best when you are surrounded by
                          like-minded people ,
                        </div>
                        <div className="you-will-be">
                          You will be made part of a community where you can
                          network, share
                        </div>
                        <div className="opportunities-and-build">
                          opportunities, and build relations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="variable-holder">
              <div className="function-caller">
                <div className="value-receiver">
                  <div className="lets-have-an" data-aos="fade-up">
                    Let's have an overview of the course
                  </div>
                </div>
                <div className="output-requester">
                  <div
                    className="div-hero-mentor-component1"
                    data-aos="flip-up"
                  >
                    <div className="logic-builder">
                      <div className="div-hero-mentor-details1">
                        <b className="foundations-of-generative">
                          Foundations of Generative AI
                        </b>
                      </div>
                      <button className="div-hero-mentor-info-highligh1">
                        <div className="module-1">Module 1</div>
                      </button>
                    </div>
                    <div className="iteration-loop-manager">
                      <div className="data-connection-network">
                        <div className="introduction-to-generative">
                          Introduction to Generative AI
                        </div>
                        <div className="variable-holder-pool">
                          <div className="list-w-node-2b6923aa-a6bd-85">
                            <div className="item-list-item-7">
                              <div className="overview-of-generative">
                                Overview of Generative AI
                              </div>
                              <img
                                className="marker-icon"
                                loading="lazy"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-71">
                              <div className="generative-ai-vs">
                                &nbsp;Generative AI vs. Traditional AI
                              </div>
                              <img
                                className="marker-icon1"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-72">
                              <div className="generative-ai-in">
                                Generative AI in Different Domains
                              </div>
                              <img
                                className="marker-icon2"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-73">
                              <div className="generative-ai-vs1">
                                &nbsp;Generative AI vs. Traditional AI Models
                              </div>
                              <img
                                className="marker-icon3"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ///////////////////// */}
                  <div
                    className="div-hero-mentor-component2"
                    data-aos="flip-up"
                  >
                    <div className="div-hero-mentor-details-parent">
                      <div className="div-hero-mentor-details2">
                        <div className="programming-fundamentals-and">
                          Programming Fundamentals and Tools
                        </div>
                      </div>
                      <button className="div-hero-mentor-info-highligh2">
                        <div className="module-2">Module 2</div>
                      </button>
                    </div>
                    <div className="div-hero-mentor-component-inner">
                      <div className="introduction-to-programming-an-parent">
                        <div className="introduction-to-programming">
                          Introduction to Programming and Tools
                        </div>
                        <div className="list-list-8-wrapper">
                          <div className="list-list-8">
                            <div className="item-list-item-74">
                              <div className="introduction-to-python class">
                                Introduction to Python Programming
                              </div>
                              <img
                                className="marker-icon4"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-75">
                              <div className="introduction-to-jupyter class">
                                Introduction to Jupyter Notebooks
                              </div>
                              <img
                                className="marker-icon5"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-76">
                              <div className="introduction-to-version class">
                                Introduction to Version Control with Git
                              </div>
                              <img
                                className="marker-icon6"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-hero-mentor-component3"
                    data-aos="flip-up"
                  >
                    <div className="div-hero-mentor-details-group">
                      <div className="div-hero-mentor-details3">
                        <b className="deep-dive-into">
                          Deep Dive into Advanced Generative Models
                        </b>
                      </div>
                      <button className="div-hero-mentor-info-highligh3">
                        <div className="module-3">Module 3</div>
                      </button>
                    </div>
                    <div className="div-hero-mentor-component-child">
                      <div className="deep-dive-into-generative-mode-parent">
                        <div className="deep-dive-into1">
                          Deep Dive into Generative Models
                        </div>
                        <div className="list-list-8-container">
                          <div className="list-list-81">
                            <div className="item-list-item-77">
                              <div className="introduction-to-deep">
                                Introduction to Deep Learning
                              </div>
                              <img
                                className="marker-icon7"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-78">
                              <div className="generative-adversarial-network">
                                Generative Adversarial Networks (GANs)
                              </div>
                              <img
                                className="marker-icon8"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-79">
                              <div className="variational-autoencoders-vaes">
                                Variational Autoencoders (VAEs)
                              </div>
                              <img
                                className="marker-icon9"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-710">
                              <div className="transformer-models">
                                Transformer Models
                              </div>
                              <img
                                className="marker-icon10"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-hero-mentor-component4"
                    data-aos="flip-up"
                  >
                    <div className="div-hero-mentor-details-container">
                      <div className="div-hero-mentor-details4">
                        <b className="advanced-applications-and">
                          Advanced Applications and Ethical Considerations
                        </b>
                      </div>
                      <button className="div-hero-mentor-info-highligh4">
                        <div className="module-4">module 4</div>
                      </button>
                    </div>
                    <div className="div-hero-mentor-component-inner1">
                      <div className="advanced-applications-ethics-parent">
                        <div className="advanced-applications-ethics">
                          Advanced Applications, Ethics, and Deployment
                        </div>
                        <div className="list-w-node-3597bbb2-2995-8b-wrapper">
                          <div className="list-w-node-3597bbb2-2995-8b">
                            <div className="item-list-item-711">
                              <div className="advanced-nlp-large">
                                Advanced NLP, Large Language Models (LLMs), and
                                Ethics
                              </div>
                              <img
                                className="marker-icon11"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-712">
                              <div className="deployment-and-hardware">
                                Deployment and Hardware Considerations
                              </div>
                              <img
                                className="marker-icon12"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-713">
                              <div className="introduction-to-pytorch">
                                Introduction to PyTorch for Deep Learning
                              </div>
                              <img
                                className="marker-icon13"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-714">
                              <div className="finetuning-large-language">
                                FineTuning Large Language Models (LLMs)
                              </div>
                              <img
                                className="marker-icon14"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                            <div className="item-list-item-715">
                              <div className="final-project-building">
                                Final Project: Building a FullStack Generative
                                AI Application
                              </div>
                              <img
                                className="marker-icon15"
                                alt=""
                                src="/marker.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-processor-wrapper">
              <div className="input-processor">
                <div className="output-generator">
                  <div className="master-these-tools" data-aos="fade-up">
                    Master these tools
                  </div>
                </div>
                <div className="connected-components">
                  <div className="feature-extractor">
                    <div className="frame-parent6">
                      <div className="image-wrapper4">
                        <img
                          className="image-icon13"
                          alt=""
                          src="./assets/images/tech logos/python.png"
                        />
                      </div>
                      <div className="python">Python</div>
                    </div>
                    <div className="frame-parent7">
                      <div className="image-wrapper5">
                        <img
                          className="image-icon14"
                          alt=""
                          src="./assets/images/tech logos/jupyter.png"
                        />
                      </div>
                      <div className="jupiter-notebooks">
                        Jupiter <br /> Notebooks
                      </div>
                    </div>
                    <div className="frame-parent8">
                      <div className="image-wrapper6">
                        <img
                          className="image-icon15"
                          alt=""
                          src="./public/image-15@2x.png"
                        />
                      </div>
                      <div className="tensorflow">TensorFlow</div>
                    </div>
                  </div>
                  <div className="connected-components-inner">
                    <div className="frame-parent9">
                      <div className="image-parent1">
                        <img
                          className="image-icon16"
                          alt=""
                          src="./assets/images/tech logos/git.png"
                        />
                        <div className="git-wrapper">
                          <div className="git">Git</div>
                        </div>
                      </div>
                      <div className="frame-parent10">
                        <div className="image-wrapper7">
                          <img
                            className="image-icon17"
                            alt=""
                            src="./public/image-17@2x.png"
                          />
                        </div>
                        <div className="pytorch">PyTorch</div>
                      </div>
                      <div className="frame-parent11">
                        <div className="image-wrapper8">
                          <img
                            className="image-icon18"
                            alt=""
                            src="./public/image-18@2x.png"
                          />
                        </div>
                        <div className="nltk">NLTK</div>
                      </div>
                    </div>
                  </div>
                  <div className="connected-components-child">
                    <div className="frame-parent12">
                      <div className="frame-parent13">
                        <div className="image-parent2">
                          <img
                            className="image-icon19"
                            alt=""
                            src="./public/image-19@2x.png"
                          />
                          {/* <img
                    class="image-icon20"
                    alt=""
                    src="./public/image-19@2x.png"
                  /> */}
                        </div>
                        <div className="bert-parent">
                          <div className="bert">BERT</div>
                          {/* <div class="bert1">BERT</div> */}
                        </div>
                      </div>
                      <div className="frame-parent14">
                        <div className="image-parent3">
                          <img
                            className="image-icon21"
                            alt=""
                            src="./public/image-21@2x.png"
                          />
                          {/* <img
                    class="image-icon22"
                    alt=""
                    src="./public/image-21@2x.png"
                  /> */}
                        </div>
                        <div className="spacy-parent">
                          <div className="spacy">SpaCy</div>
                          {/* <div class="spacy1">SpaCy</div> */}
                        </div>
                      </div>
                      <div className="frame-parent15">
                        <div className="image-parent4">
                          {/* <img
                    class="image-icon23"
                    alt=""
                    src="./public/image-23@2x.png"
                  /> */}
                          <img
                            className="image-icon24"
                            alt=""
                            src="./public/image-23@2x.png"
                          />
                        </div>
                        <div className="hugging-face-transformers-parent">
                          <div className="hugging-face-transformers">
                            Hugging Face <br /> Transformers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-div-block-297-inner1">
              <div className="frame-parent16">
                <div className="roadmap-at-debugshala-wrapper">
                  <div className="roadmap-at-debugshala" data-aos="fade-up">
                    Roadmap at Debugshala
                  </div>
                </div>
                <div className="frame-parent17">
                  <div className="frame-parent18">
                    <div className="frame-wrapper3" data-aos="fade-right">
                      <div className="frame-parent19">
                        <div className="counseling-session-wrapper">
                          <div className="counseling-session">
                            Counseling Session
                          </div>
                        </div>
                        <div className="seek-guidance-and">
                          Seek guidance and advice for career development.
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent20" data-aos="fade-right">
                      <div className="frame-parent21">
                        <div className="placement-preparation-wrapper">
                          <div className="placement-preparation">
                            Placement Preparation
                          </div>
                        </div>
                        <div className="enhance-employability-skills">
                          Enhance employability skills and prepare for job
                          interviews.
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper4">
                      <div className="frame-parent22" data-aos="fade-right">
                        <div className="data-aggregator-parent">
                          <div className="data-aggregator1">
                            <div className="interview-exposure">
                              Interview &amp; Exposure
                            </div>
                          </div>
                          <div className="engage-in-mock">
                            Engage in mock interviews and gain industry
                            exposure.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="size-adjustor">
                    <div className="div-d2c-inactive-line" />
                    <div className="div-d2c-stroke-circle" />
                    <div className="div-d2c-stroke-circle1" />
                    <div className="div-d2c-stroke-circle2" />
                    <div className="div-d2c-stroke-circle3" />
                    <div className="div-d2c-stroke-circle4" />
                    <div className="div-d2c-stroke-circle5" />
                  </div>
                  <div className="icon-generator-wrapper">
                    <div className="icon-generator">
                      <div className="layout-organizer" data-aos="fade-left">
                        <div className="admission-process">
                          Admission Process
                        </div>
                        <div className="gain-practical-experience">
                          Gain practical experience through applied learning.
                        </div>
                      </div>
                      <div className="label-designer" data-aos="fade-left">
                        <div className="chart-maker">
                          <div className="industry-level-project">
                            Industry-Level Project
                          </div>
                        </div>
                        <div className="develop-real-world-projects">
                          Develop real-world projects to demonstrate
                          capabilities
                        </div>
                      </div>
                      <div className="conditional-handler" data-aos="fade-left">
                        <div className="placement">Placement</div>
                        <div className="timer-controller">
                          <div className="secure-a-job">
                            Secure a job position aligned with career
                            aspirations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="function-generator">
              <div className="expression-evaluator">
                <div className="animation-creator">
                  <div className="seeking-answers-find" data-aos="fade-up">
                    Seeking Answers? Find Them All in Our Detailed FAQ
                  </div>
                </div>
                <div className="div-faq-container" data-aos="flip-down">
                  <div className="proximity-sensor">
                    <div className="collision-detector">
                      {/* /////Accordiaan//// */}
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What type of generation models will i learn about?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{" "}
                              It is shown by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What are the prerequisites for this program?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What Programing language will i learn
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the third item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              How wil lthis program help me prepare for a career
                              in generative AI?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the fourth item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              Do i need a powerfull computer to participate
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the fifth item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What are ethical considerations of using
                              generative AI?
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the sixth item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What will i be able to build by the end of the
                              program?
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the seventh item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                              style={{ color: "rgb(214, 210, 210)" }}
                            >
                              What is the future of generative AI?
                            </button>
                          </h2>
                          <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the eighth item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <Footer />
        {/* <footer className="vcustomer snipcss-gUUI8">
          <div className="container-fluid snipcss0-0-0-1">
            <div className="rows snipcss0-1-1-2">
              <div className="cols-xl-8 cols-lg-8 cols-md-8 cols-sm-12 cols-xs mb-2 snipcss0-2-2-3">
                <div className="foo_navs snipcss0-3-3-4">
                  <h2 className="mb-3 pt-0 snipcss0-4-4-5">
                    Contact Debugshala
                  </h2>
                  <ul className="chennai_footerlist snipcss0-4-4-6">
                    <li className="snipcss0-5-6-7">
                      <span className="snipcss0-6-9-10">Call :</span>
                      <a
                        href="tel:+918982385539"
                        title="Center Manager"
                        className="snipcss0-6-7-8"
                        target="_blank"
                      >
                        +918982385539
                      </a>
                      <a
                        href="tel:+919111333207"
                        title="HR"
                        className="snipcss0-6-7-8"
                        target="_blank"
                      >
                        +919111333207
                      </a>
                    </li>
                    <li className="snipcss0-5-6-9">
                      <span>Mail :</span>
                      <a
                        href="mailto:debugshala@gmail.com"
                        title="Write a mail to Debugshala"
                        className="snipcss0-6-9-10"
                        target="_blank"
                      >
                        debugshala@gmail.com
                      </a>
                      <a
                        href="mailto:info@debugshala.com"
                        title="Write a mail to Debugshala"
                        className="snipcss0-6-9-10"
                        target="_blank"
                      >
                        info@debugshala.com
                      </a>
                    </li>
                    <li className="snipcss0-5-6-11">
                      <span>Address :</span>
                      <a
                        href="https://maps.app.goo.gl/VKgv76ZvFft78Fsb9"
                        title="Visit Debugshala"
                        className="snipcss0-6-11-12"
                        target="_blank"
                      >
                        C.S Naidu Arcade, 204, Greater Kailash Road, Opposite
                        Grotto, Old Palasia, Indore, Madhya Pradesh 452001
                      </a>
                    </li>
                    <li className="snipcss0-5-6-13">
                      <a
                        href="https://g.page/r/CcsLemNK3jpGEBM/review"
                        title="Google Reviews - Debugshala"
                        className="snipcss0-6-13-14"
                        target="_blank"
                      >
                        Leave a Review for Debugshala
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="cols-xl-4 cols-lg-4 cols-md-4 cols-sm-12 cols-xs mb-2 snipcss0-2-2-27">
                <div className="foo_navs pb-3 snipcss0-3-27-28">
                  <h2 className="mb-3 pt-0 snipcss0-4-28-29">
                    Shoot a DM at our Social Media Handles!
                  </h2>
                  <div className="footer_socialnav snipcss0-4-28-30">
                    <ul className="footer_social_list snipcss0-5-30-31">
                      <li className="snipcss0-6-31-32">
                        <a
                          href="https://www.facebook.com/debugshala"
                          title="Facebook"
                          rel="noreferrer"
                          target="_blank"
                          className="snipcss0-7-32-33"
                        >
                          <i
                            className="fa fa-facebook cus_fb snipcss0-8-33-34"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="snipcss0-6-31-35">
                        <a
                          href="https://twitter.com/debugshala"
                          title="Twitter"
                          rel="noreferrer"
                          target="_blank"
                          className="snipcss0-7-35-36"
                        >
                          <i
                            className="fa fa-twitter cus_twi snipcss0-8-36-37"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="snipcss0-6-31-38">
                        <a
                          href="https://www.youtube.com/@debugshala"
                          title="Youtube"
                          rel="noreferrer"
                          target="_blank"
                          className="snipcss0-7-38-39"
                        >
                          <i
                            className="fa fa-youtube-play cus_play snipcss0-8-39-40"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="snipcss0-6-31-41">
                        <a
                          href="https://www.linkedin.com/company/debugshala"
                          title="Linkedin"
                          rel="noreferrer"
                          target="_blank"
                          className="snipcss0-7-41-42"
                        >
                          <i
                            className="fa fa-linkedin cus_linkd snipcss0-8-42-43"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="snipcss0-6-31-44">
                        <a
                          href="https://www.instagram.com/debugshala/"
                          title="Instagram"
                          rel="noreferrer"
                          target="_blank"
                          className="snipcss0-7-44-45"
                        >
                          <i
                            className="fa fa-instagram cus_insta snipcss0-8-45-46"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cols-xl-8 cols-lg-8 cols-md-8 cols-sm-12 cols-xs mb-2 snipcss0-2-2-3">
                <div className="foo_navs snipcss0-3-3-4">
                  <h2 className="mb-3 pt-0 snipcss0-4-4-5">Students Zone</h2>
                  <ul className="chennai_footerlist snipcss0-4-4-6">
                    <li className="snipcss0-5-6-7">
                      <a
                        href="https://ai.debugshala.com/"
                        title="Yukti, Your Own Personal Learning Assistant"
                        className="snipcss0-6-7-8"
                        target="_blank"
                      >
                        Yukti - AI Assistant
                      </a>
                    </li>
                    <li className="snipcss0-5-6-9">
                      <a
                        href="https://app.debugshala.com/"
                        title="Your Own Progress Tracking Dashboard"
                        className="snipcss0-6-9-10"
                        target="_blank"
                      >
                        Study Space - Ultimate AI Productivity Partner
                      </a>
                    </li>
                    <li className="snipcss0-5-6-11">
                      <a
                        href="https://debugshala.com/compiler/C_compiler.html"
                        title="Compilers for Backend Languages"
                        className="snipcss0-6-11-12"
                        target="_blank"
                      >
                        Playground - Programming Language Compilers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cols-xl-12 cols-lg-12 cols-md-12 cols-sm-12 cols-xs mb-2 snipcss0-2-2-47">
                <div className="foo_navs snipcss0-3-47-48">
                  <h2 className="mb-3 pt-0 snipcss0-4-48-49">Company</h2>
                  <ul className="chennai_footerlist snipcss0-4-48-50">
                    <li className="snipcss0-5-50-51">
                      <a
                        href="https://www.debugshala.com/about-us"
                        title="About Debugshala"
                        className="snipcss0-6-51-52"
                        target="_blank"
                      >
                        About Debugshala
                      </a>
                    </li>
                    <li className="snipcss0-5-50-53">
                      <a
                        href="https://wa.me/+919111333207"
                        title="Share your expertise with others"
                        className="snipcss0-6-53-54"
                        target="_blank"
                      >
                        Become An Instructor
                      </a>
                    </li>
                    <li className="snipcss0-5-50-55">
                      <a
                        href="https://www.thedatacareer.com/candidates/"
                        title="Hire From Us"
                        className="snipcss0-6-55-56"
                        target="_blank"
                      >
                        Hire From Us
                      </a>
                    </li>
                    <li className="snipcss0-5-50-57">
                      <a
                        href="https://www.thedatacareer.com/jobs"
                        title="Daily Job Listing in Data Science"
                        className="snipcss0-6-57-58"
                        target="_blank"
                      >
                        Find a Job in Data Science
                      </a>
                    </li>
                    <li className="snipcss0-5-50-69">
                      <a
                        href="https://www.debugshala.com/privacy-policy"
                        title="Privacy Policy"
                        className="snipcss0-6-69-70"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="snipcss0-5-50-75">
                      <a
                        href="https://debugshala.com/terms-conditions/"
                        title="Terms & Conditions"
                        className="snipcss0-6-75-76"
                        target="_blank"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="snipcss0-5-50-77">
                      <a
                        href="https://www.debugshala.com/refund-policy"
                        title="Refund/Cancellation Policy"
                        className="snipcss0-6-77-78"
                        target="_blank"
                      >
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="cols-xl-12 cols-lg-12 cols-md-12 cols-sm-12 cols-xs mb-2 snipcss0-2-2-47">
                  <div className="foo_navs snipcss0-3-47-48">
                    <h2 className="mb-3 pt-0 snipcss0-4-48-49">
                      Top Placement Courses in Indore
                    </h2>
                    <ul className="chennai_footerlist snipcss0-4-48-50">
                      <li className="snipcss0-5-50-51">
                        <a
                          href="https://debugshala.com/data-science-course-in-indore/"
                          title=" Data Science Placement Course in Indore"
                          className="snipcss0-6-51-52"
                          target="_blank"
                        >
                          Data Science Placement Course in Indore
                        </a>
                      </li>
                      <li className="snipcss0-5-50-53">
                        <a
                          href="https://debugshala.com/java-full-stack-course-in-indore/"
                          title="Java Web Development Placement Course in Indore"
                          className="snipcss0-6-53-54"
                          target="_blank"
                        >
                          Java Web Development Placement Course in Indore
                        </a>
                      </li>
                      <li className="snipcss0-5-50-55">
                        <a
                          href="https://www.debugshala.com/mern-stack-course-in-indore"
                          title=" MERN Stack Development Placement Course in Indore"
                          className="snipcss0-6-55-56"
                          target="_blank"
                        >
                          MERN Stack Development Placement Course in Indore
                        </a>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="foo_navs snipcss0-3-47-79">
                    <h2 className="mb-3 pt-0 snipcss0-4-79-80">
                      Crash Courses by Debugshala in Indore
                    </h2>
                    <ul
                      id="menu-top-online-courses-footer"
                      className="chennai_footerlist snipcss0-4-79-81"
                    >
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64666"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64666 nav-item snipcss0-5-81-82"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-82-83"
                          target="_blank"
                        >
                          Cybersecurity
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64655"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64655 nav-item snipcss0-5-81-84"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          target="_blank"
                          className=" snipcss0-6-84-85"
                        >
                          Cloud computing
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64659"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64659 nav-item snipcss0-5-81-86"
                      >
                        <a
                          title="Crash Courses"
                          href="https://www.debugshala.com/crash-courses"
                          className=" snipcss0-6-86-87"
                          target="_blank"
                        >
                          DevOps
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64656"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64656 nav-item snipcss0-5-81-88"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-88-89"
                          target="_blank"
                        >
                          Project Management
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64661"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64661 nav-item snipcss0-5-81-90"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-90-91"
                          target="_blank"
                        >
                          Blockchain
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64662"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64662 nav-item snipcss0-5-81-92"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-92-93"
                          target="_blank"
                        >
                          UI/UX Designing
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64657"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64657 nav-item snipcss0-5-81-94"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-94-95"
                          target="_blank"
                        >
                          Generative AI
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64658"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64658 nav-item snipcss0-5-81-96"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-96-97"
                          target="_blank"
                        >
                          Chatbot Development
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64660"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64660 nav-item snipcss0-5-81-98"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-98-99"
                          target="_blank"
                        >
                          Linux Administrator
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64663"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64663 nav-item snipcss0-5-81-100"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          className=" snipcss0-6-100-101"
                          target="_blank"
                        >
                          WordPress Development
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-64674"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64674 nav-item snipcss0-5-81-102"
                      >
                        <a
                          title="Crash Courses"
                          href="#"
                          target="_blank"
                          className=" snipcss0-6-102-103"
                        >
                          LinkedIn Optimisation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cols-xl-4 cols-lg-4 cols-md-4 col-sm-12 cols-xs d-none snipcss0-2-2-104">
                  <div className="foo_navs snipcss0-3-104-105">
                    <h2 className="mb-3 pt-0 snipcss0-4-105-106" />
                  </div>
                </div>
              </div>
              <div className="row footer_row snipcss0-1-1-107">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs snipcss0-2-107-108">
                  <div className="footer_details chennailinks snipcss0-3-108-109">
                    <p className="snipcss0-4-109-110">
                      We have convenient location in Indore at Old Palasia. If
                      you reside or seek training in any of these areas, reach
                      out to our career counselors to discover the our branch
                      for you.
                    </p>
                    <p className="snipcss0-4-109-111">
                      Adya Nagar, Airport Road, Aishbagh, Anand Nagar, Annapurna
                      Nagar, Arjun Nagar, Bada Ganpati Nagar, Banganga, Bapu
                      Nagar, Bhawarkuan, Bhelpur, Bhopal Road, Brahmin Colony,
                      Chandan Nagar, Chandragupta Colony, Chhatripura, Civil
                      Lines, Dev Nagar, Dhan Mandi, Dhar Road, Ganesh Nagar,
                      Gopal Mandir, Gopalpura, Hanumanganj, Hira Nagar, Indore
                      Cantt, Janakpuri, Jawahar Nagar, Khajrana, Kothi, Lalbagh,
                      Laxmi Nagar, Malharganj, Manoramaganj, Mangalmurti Nagar,
                      Mhow Road, Nehru Nagar, New Palasia, Old Palasia,
                      Pardesipura, Parle Tilak Nagar, Pithampur, Rajendra Nagar,
                      Rajgarh Road, Rakhial, Ratlam Road, Sanchar Nagar,
                      Saraswati Nagar, Sarafa Bazar, Sayaji Nagar, Shivaji
                      Nagar, Sneh Nagar, Subhash Nagar, Tilak Nagar, Trilanga,
                      Vijay Nagar, Yashwant Nagar.
                    </p>
                    <p className="snipcss0-4-109-112">
                      We guarantee that investing an extra 15 - 20 minutes in
                      travel will bring you to the premier training institute
                      that is truly worth both your money and career.
                    </p>
                    <p className="snipcss0-4-109-113">
                      © 2023{" "}
                      <a href="https://www.debugshala.com/">Debugshala</a>. All
                      Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_img">
              <img src="./assets/images/brandkit/footer_dbs_1.png" alt="" />
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}

export default AiMarketor;
