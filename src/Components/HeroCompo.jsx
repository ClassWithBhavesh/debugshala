import React from "react";
import "./style.css";
import RotatingText from "./RotatingText";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";


function HeroCompo() {
  return (
    <>
      <div className="t_head snipcss-p9FT8">
        <div
          className="collapse dont-collapse-sm combo_cntctdiv"
          id="collapseExample"
        >
          <div className="lh_head_left text-lg-left text-center col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs">
            <a className="topNav" href="tel:+91 89823 85539">
            <IoCall /> {" "}
            +91 89823 85539
            </a>
            {" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="topNav" href="tel:+91-8767260270">
            <IoMailSharp /> {" "}
              contact@debugshala.com{" "}
            </a>
          </div>
          <div className="lh_head_right text-right col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs top-bar-head">
            Hire Talent:
            <a
              className="topNav"
              href="tel:+91-9111333207"
              title="+91-9111333207"
            >
              +91-9111333207
            </a>
          </div>
        </div>
      </div>

      <div data-w-id="71e5312f-0e2a-b6b4-7a8c-655b3c5675a1" className="navbar2">
        <div className="navbar-content-left">
          <Link
            to="/"
            aria-current="page"
            className="gs-logo w-inline-block w--current"
          >
            <svg
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
          </Link>
          {/* New Nav bar */}
            <IconContext.Provider value={{className: "hamburger"}}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          <div className="navBar">
            <ul className="ulList">
              <li className="Lists">
                <a href="#">Courses</a>
                <ul className="ulList nav-Bar-bg">
                  <li className="Lists">
                    <a href="#">AI &amp; Data Science</a>
                    <ul className="ulList">
                      <li className="Lists nav-Bar-bg">
                        <Link to="/Gen_AI">
                          Generative AI
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/Data_Science">
                          Data Science
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/Data_Analyst">
                          Data Analytics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="Lists">
                    <a href="#">Web Development</a>
                    <ul className="ulList">
                      <li className="Lists nav-Bar-bg">
                        <Link to="/MERN_Stack_Web_Dev">
                          MERN Stack
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/Next_Web_Dev">
                          Next Js
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/React_Web_Dev">
                          React Js
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/Java_Web_Dev">
                          Java Full Stack
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="Lists">
                    <label htmlFor="btn-3" className="show">
                      Upskill Courses
                    </label>
                    <a href="#">Upskill Courses </a>
                    <ul className="ulList">
                      <li className="Lists nav-Bar-bg">
                        <Link to="/UI_UX">
                          Ui-UX Developer
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/AI_Marketer">
                          AI Marketer
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/MS_Office">
                          MS Office for DA
                        </Link>
                      </li>
                      <li className="Lists nav-Bar-bg">
                        <Link to="/ChatGPT_for_developers">
                          ChatGPT for Dev
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="Lists">
                <a href="https://thedatacareer.com" target="_blank">Hire From Us</a>
              </li>
              <li className="Lists">
                <Link to="/Placed_Candidates">Our Placements</Link>
              </li>
              <li className="Lists">
                <Link to="/About">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="div-block-789">
          <Link
            to="/Contact"
            className="nav-link2 is-button"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <section className="hero-section-w section-gs-dark home-header">
        <div className="flex-row-reverse space-x-reverse flex items-center relative -space-x-70px self-start">
          <div className="innerSec">
            <div className="h-600 !w-700px w-full relative flex flex-col justify-start items-center md:flex-1 h-full leftSec"></div>
            <div className="rightSec">
              <div className="visual-text-banner">
                <h1 className="hero-title-1 top-head" data-aos="zoom-in">
                  BUILDING
                </h1>
                <h1 className="hero-title-1" data-aos="zoom-in">
                  NEXT GEN PROFESSIONALS
                </h1>
                <h2
                  className="top-content"
                  data-aos="fade-left"
                  data-aos-offset={100}
                  data-aos-easing="ease-in-sine"
                >
                  Upskill Your Career With Debugshala!
                </h2>
                <h1 className="rotating-text">
                  <p className="become_para">Become a</p>
                  <br />
                  <RotatingText />
                </h1>
                <form
                  action=""
                  className="header_form"
                  data-aos="fade-left"
                  data-aos-offset={100}
                  data-aos-easing="ease-in-sine"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="Your Whatsapp Number"
                    />
                  </div>
                  <div className="form-group">
                    <select name="qualification" id="qualification">
                      <option value="">Qualification (UG, PG or Others)</option>
                      <option value="ug">UG</option>
                      <option value="pg">PG</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select name="course" id="course">
                      <option value="">Select a Course</option>
                      <option value="mern">MERN Stack Development</option>
                      <option value="nextjs">Next.js</option>
                      <option value="reactjs">React.js</option>
                      <option value="datascience">Data Science</option>
                      <option value="dataanalytics">Data Analytics</option>
                      <option value="javafullstack">Java Full Stack Development</option>
                      <option value="aiengineering">AI Engineering</option>
                      <option value="aimarketer">AI Marketer</option>
                    </select>
                  </div>
                  <button className="header_btn" type="submit">
                    Schedule Free Demo Now!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Infinite Scrolling for placed students */}
        <div className="scroller_container">
          <h1 className="scroller_head">Our Recent Placements</h1>
          <div className="box box1">
            <div className="std_img">
              <img src="/images/placed_students/Sanidhya_Jain.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Sanidhya Jain</h3>
              <h4>Junior Python Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Bitcot.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box2">
            <div className="std_img">
              <img src="/images/placed_students/Siddharth_Jain.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Siddharth Jain</h3>
              <h4>Software Engineer Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Bitsquad.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box3">
            <div className="std_img">
              <img src="/images/placed_students/Amit_Saini.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Amit Saini</h3>
              <h4>Block-Chain Dev Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/ESP_Softech.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box4">
            <div className="std_img">
              <img src="/images/placed_students/Ajay_Singh_Parihar.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Ajay Singh Parihar</h3>
              <h4>Data Analyst Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Aimleap.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box5">
            <div className="std_img">
              <img src="/images/placed_students/Yash_Palod.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Yash Palod</h3>
              <h4>Jr. AI Researcher</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Avalon.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box6">
            <div className="std_img">
              <img src="/images/placed_students/Anita_Singh.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Anita Singh</h3>
              <h4>AI Process Associate</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/ORAI.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box7">
            <div className="std_img">
              <img src="/images/placed_students/Aryan_Gupta.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Aryan Gupta</h3>
              <h4>Technical Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Nine_A.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box8">
            <div className="std_img">
              <img src="/images/placed_students/Shravan_Kanade.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Shravan Kanade</h3>
              <h4>Java Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/DigiMantra.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box9">
            <div className="std_img">
              <img src="/images/placed_students/Ashwini_Bigha.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Ashwini Bigha</h3>
              <h4>Frontend Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Nine_A.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box10">
            <div className="std_img">
              <img src="/images/placed_students/Chetan_Dhakad.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Chetan Dhakad</h3>
              <h4>Advance Excel Associate</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Innovquant.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box11">
            <div className="std_img">
              <img src="/images/placed_students/Rajat_Baghel.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Rajat Baghel</h3>
              <h4>Software Developer Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Throughout_Technologies.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box12">
            <div className="std_img">
              <img src="/images/placed_students/Surendra_Gurjar.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Surendra Gurjar</h3>
              <h4>Software Engineer Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Cubexo.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box13">
            <div className="std_img">
              <img src="/images/placed_students/Yatendra_Gurjar.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Yatendra Gurjar</h3>
              <h4>Frontend Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Nine_A.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box14">
            <div className="std_img">
              <img src="/images/placed_students/Vivek_Kushwah.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Vivek Kushwah</h3>
              <h4>Data Analyst Trainee</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Aimleap.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box15">
            <div className="std_img">
              <img src="/images/placed_students/Suruchi_Sahu.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Suruchi Sahu</h3>
              <h4>Assistant System Engineer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/TCS.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box16">
            <div className="std_img">
              <img src="/images/placed_students/Anuj_Mehta.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Anuj Mehta</h3>
              <h4>Jr. Data Science Engineer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/Engineer_Master.png"
                alt=""
              />
            </div>
          </div>
          <div className="box box17">
            <div className="std_img">
              <img src="/images/placed_students/Aniket_Jhawar.jpg" alt="" />
            </div>
            <div className="std_des">
              <h3>Aniket Jhawar</h3>
              <h4>Angular Developer</h4>
            </div>
            <div className="std_cpny">
              <img
                src="/images/placed_students/placed_students_company_logo/TeamLease.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroCompo;
