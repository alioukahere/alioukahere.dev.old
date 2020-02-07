import React, { useState } from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import { rhythm, scale } from "../utils/typography"
import Container from "./container"
import { fonts } from "../utils/typography"

export default ({ children }) => {
  // const { location, title, children } = this.props
  // const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }

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

  const Header = () => {
    const [mobile, setMobile] = useState(false)

    const toggleMobileMenu = () => setMobile(true)

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

            <ul
              css={css`
                padding: 0;
                margin: 0;
                height: 80px;

                & li {
                  display: inline-block;

                  &:not(:last-child) {
                    margin-right: 30px;
                  }

                  a {
                    color: #0f0f0f;
                    text-transform: lowercase;
                    font-size: 1rem;

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }

                @media screen and (max-width: 600px) {
                  display: none;
                }
              `}
            >
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/">projects</Link>
              </li>
              <li>
                <a href="mailto:hello@alioukahere.dev">contact</a>
              </li>
            </ul>
            <div
              css={css`
                padding: 0;
                margin: 0;
                height: 80px;

                a {
                  color: #0f0f0f;
                  text-transform: lowercase;
                  font-size: 1rem;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              `}
            >
              <a href="#">menu</a>

              <ul
                css={css`
                  padding: 0;
                  margin: 0;
                  height: 60px;
                  line-height: 60px;
                  position: absolute;
                  width: 100%;
                  background-color: #0f0f0f;
                  left: 0;
                  right: 0;
                  top: 60px;
                  text-align: center;
                  display: ${mobile ? "block" : "none"};

                  & li {
                    display: inline-block;

                    &:not(:last-child) {
                      margin-right: 30px;
                    }

                    a {
                      color: #fafafa;
                      text-transform: lowercase;
                      font-size: 1rem;

                      &:hover {
                        text-decoration: underline;
                      }
                    }
                  }
                `}
              >
                <li>
                  <Link to="/blog">blog</Link>
                </li>
                <li>
                  <Link to="/">projects</Link>
                </li>
                <li>
                  <a href="mailto:hello@alioukahere.dev">contact</a>
                </li>
              </ul>
            </div>
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
        <a href="mailto:hello@alioukahere.dev">hello@alioukahere.dev</a>
      </div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>
      .
    </footer>
  )

  return (
    <div
    // style={{
    //   marginLeft: `auto`,
    //   marginRight: `auto`,
    //   maxWidth: rhythm(24),
    //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    // }}
    >
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
  )
}
