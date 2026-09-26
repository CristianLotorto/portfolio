import { useEffect, useState } from "react";
import "./home.css";
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";

function getInitialTheme() {
  try {
    return window.localStorage.getItem("portfolio-theme") !== "light";
  } catch {
    return true;
  }
}

function Home() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    try {
      window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch {
      // Keep the theme usable when browser storage is unavailable.
    }
  }, [isDark]);

  return ( <div className="home">
    <div>
        <Header isDark={isDark} onToggleTheme={() => setIsDark((currentTheme) => !currentTheme)} />
    </div>
    <div>
        <Body />
    </div>
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default Home;