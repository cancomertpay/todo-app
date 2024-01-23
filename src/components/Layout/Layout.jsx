import React, { useEffect, useState } from "react";

// redux
import { useSelector } from "react-redux";

// styles
import { ContentContainer, StyledLayout } from "./LayoutStyles";

// bg-images
// desktop
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
// mobile
import bgMobileLight from "../../assets/images/bg-mobile-light.jpg";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";

function Layout({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setBgImage(
      isDesktop
        ? theme === "dark"
          ? bgDesktopDark
          : bgDesktopLight
        : theme === "dark"
        ? bgMobileDark
        : bgMobileLight
    );
  }, [isDesktop, theme]);

  return (
    <StyledLayout>
      <img src={bgImage} alt="background-image" />
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
}

export default Layout;
