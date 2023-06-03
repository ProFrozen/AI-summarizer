import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo/logo.png";
const Header = () => {
  // const { pathname } = useLocation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState(null);
  // const handleOpen = () => setIsOpen(true);
  // const handleClose = () => setIsOpen(false);
  // const wallet = useSelector((state) => state.user.wallet);

  // const handleRedirect = (id) => {
  //   navigate("/");
  //   setActiveLink(id);
  // };

  // useEffect(() => {
  //   if (activeLink) {
  //     scroller.scrollTo(activeLink, { smooth: true });
  //     return;
  //   }
  //   animateScroll.scrollToTop();
  // }, [activeLink]);

  // const getShortAddress = (address) => {
  //   if (!address) return "";
  //   return address.slice(0, 5) + "..." + address.slice(-5);
  // };

  useEffect(() => {
    // const sequenceWalletInfo = Storage.get("@sequence.session");
    // if (sequenceWalletInfo) {
    //   const walletAddress = JSON.parse(
    //     Storage.get("@sequence.session")
    //   ).accountAddress;
    //   dispatch(setWallet(walletAddress));
    //   if (pathname === "/inventory") {
    //     API.me({ wallet: walletAddress }).then((res) => {
    //       if (res.data) {
    //         dispatch(setDiscord(res.data.discord));
    //         dispatch(setTwitter(res.data.twitter));
    //         if (res.data.status === "active") {
    //           dispatch(setEmail(res.data.email));
    //         }
    //       }
    //     });
    //   } else {
    //     navigate("/inventory");
    //   }
    // } else {
    //   navigate("/");
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="max-w-full pr-8 pl-8 pt-6 pb-6 shadow-2xl fixed top-0 z-50 w-full" style={{color: "rgb(33, 33, 33)", backgroundColor: "#d1d1f7"}}>
        <div className="hb yb md lf tn un fo tp 2xl:ud-px-20">
          <div className="e aa ic jn sp">
            <a href="/" className="gb">
              <img src={logo} alt="logo" className="hj" style={{height: "35px"}} />
            </a>
          </div>
          <div className="menu-wrapper c f g ba lb yb pd re kf sj vm xm gn in vn co eo gp mp">
            <div className="yb zd">
              <nav>
                <ul className="navbar hb ld od pd sd kh sn vn xn yn">
                  <li>
                    <a href="/"
                      className="menu-scroll ib od pd kh lh mh bi _i ek">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/record"
                      className="menu-scroll ib od pd kh lh mh bi _i ek">
                      Get started
                    </a>
                  </li>
                  <li>
                    <a href="/admin"
                      className="menu-scroll ib od pd kh lh mh bi _i ek">
                      Admin
                    </a>
                  </li>
                  {/* <li className="submenu-item bj e">
                    <a href="javascript:void(0)" className="submenu-taggler ib od pd kh lh mh bi _i ek">
                      Pages
                      <span className="dg">
                        <svg width="14" height="8" viewBox="0 0 14 8" className="if">
                          <path
                            d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z">
                          </path>
                        </svg>
                      </span>
                    </a>
                    <ul className="submenu jb sd eg ti ui wm ym zm fn kn _n ao do go lo _o hp ip jp kp lp np">
                      <li>
                        <a href="https://go-tailwind.preview.uideck.com/blog-grids.html" className="ib od pd kh lh mh bi _i ek">
                          Blog Grids
                        </a>
                      </li>
                      <li>
                        <a href="https://go-tailwind.preview.uideck.com/blog-details.html"
                          className="ib od pd kh lh mh bi _i ek">
                          Blog Details
                        </a>
                      </li>
                      <li>
                        <a href="https://go-tailwind.preview.uideck.com/404.html" className="ib od pd kh lh mh bi _i ek">
                          404 Error
                        </a>
                      </li>
                      <li>
                        <a href="https://go-tailwind.preview.uideck.com/signin.html" className="ib od pd kh lh mh bi _i ek">
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a href="/SignUp" className="ib od pd kh lh mh bi _i ek">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </li> */}

                </ul>
              </nav>
            </div>
            <div className="d h g hb yb od qd td yd kf xm ln zn eo">
              <a href="/signin" className="yb ce de se mf nf kh lh ci yi ln">
                Sign In
              </a>
              <a href="/signup" className="yb ce de te mf nf kh lh ci yi ln">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <Sidebar open={isOpen} onClose={handleClose} /> */}
    </>
  );
};

export default Header;
