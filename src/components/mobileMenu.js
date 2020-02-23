import React, { useState } from "react"
import { css } from "@emotion/core"

export default function MobileMenu() {
  const [mobile, setMobile] = useState(false)

  return (
    <div
      css={css`
        padding: 0;
        margin: 0;
        height: 80px;
        display: none;

        @media screen and (max-width: 600px) {
          display: block;
        }

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
      <button
        onClick={() => setMobile(!mobile)}
        css={css`
          border: none;
          background: none;
          outline: none;
        `}
      >
        menu
      </button>

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
        {/* <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/">projects</Link>
        </li> */}
        <li>
          <a href="mailto:hello@alioukahere.dev">contact</a>
        </li>
      </ul>
    </div>
  )
}
