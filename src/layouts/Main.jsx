import React from 'react';
import { useEffect } from 'react';
//= Components
import PreLoader from "../components/PreLoader";
import ScrollToTop from "../components/ScrollToTop";
//= Scripts
import fixStylesheetsOrder from "../common/fixStylesheetsOrder";

const MainLayout = ({ children, scrollTopText, isRTL }) => {
  useEffect(() => {
    fixStylesheetsOrder(isRTL);
  }, [isRTL]);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />
      <link rel="stylesheet" href="/assets/css/lib/all.min.css" />
      <link rel="stylesheet" href="/assets/css/lib/animate.css" />
      {
        isRTL ?
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.rtl.min.css" />
          :
          <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      }
      <link rel="stylesheet" href="/assets/css/style.css" />
      {
        isRTL ? <link rel="stylesheet" href="/assets/css/rtl_style.css" /> : null
      }

      {/* <PreLoader /> */}
      {children}
      <ScrollToTop topText={scrollTopText} />
    </>
  );
};

export default MainLayout;
