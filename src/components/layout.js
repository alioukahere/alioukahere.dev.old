import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import { rhythm, scale } from "../utils/typography"
import Container from "./container"

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

  const Header = () => (
    <header
      css={css`
        display: flex;
        height: 80px;
        line-height: 80px;
        align-items: center;
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
          <div className="brand">
            <a href="/">alioukahere.dev</a>
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
              }
            `}
          >
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )

  const Footer = () => (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
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

      <main>{children}</main>

      <Footer></Footer>
    </div>
  )
}
