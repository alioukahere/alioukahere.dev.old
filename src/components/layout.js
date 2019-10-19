import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import { rhythm, scale } from "../utils/typography"

export const globalStyles = css`
  body {
    background-color: #fafafa;
  }
`

const Header = () => (
  <header>
    <nav>
      <div className="brand">
        <a href="/">alioukahere.dev</a>
      </div>

      <ul>
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
  </header>
)

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default ({ children }) => (
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
