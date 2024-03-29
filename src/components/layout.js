import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import Container from "./container"
import { fonts } from "../utils/typography"
import MobileMenu from "./mobileMenu"
import Menu from "./menu"

const MobileContext = React.createContext(true)

const Header = () => {
  const device = useContext(MobileContext)

  return (
    <header
      css={css`
        display: flex;
        height: 80px;
        line-height: 80px;
        align-items: center;
        font-family: ${fonts.firaMonoBold};
      `}
    >
      <Container>
        <nav
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <div>
            <Link
              to={`/`}
              css={css`
                color: #0f0f0f;
                font-size: 1.4rem;

                @media screen and (max-width: 800px) {
                  font-size: 1.1rem;
                }
              `}
            >
              alioukahere.dev
            </Link>
          </div>
          {device === "desktop" ? <Menu /> : <MobileMenu />}
        </nav>
      </Container>
    </header>
  )
}

const Footer = () => (
  <footer
    css={css`
      text-align: center;
      position: relative;
      bottom: 20px;
      width: 100%;

      a {
        color: #0f0f0f;
        text-decoration: underline;
      }

      @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
      }
    `}
  >
    <div>
      <a href="mailto:aliou.diallo@kaherecode.com">
        aliou.diallo@kaherecode.com
      </a>
    </div>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org" target="_blank">
      Gatsby
    </a>
    .
  </footer>
)

export default ({ children }) => {
  const globalStyles = css`
    * {
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #fafafa;
      min-height: 100vh;
      position: relative;
    }

    a {
      text-decoration: none;
    }
  `

  let defaultWidth
  if (typeof window !== "undefined") {
    defaultWidth = window.innerWidth
  }

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(defaultWidth)

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowWidth
  }

  const value = useWindowWidth() > 600 ? "desktop" : "mobile"

  return (
    <MobileContext.Provider value={value}>
      <div>
        <Global styles={globalStyles} />
        <Header></Header>

        <main
          css={css`
            min-height: 83vh;
            display: flex;
            align-items: center;
            padding-top: 30px;
          `}
        >
          {children}
        </main>

        <Footer></Footer>
      </div>
    </MobileContext.Provider>
  )
}
