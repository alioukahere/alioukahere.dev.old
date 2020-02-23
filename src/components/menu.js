import React from "react"
import { css } from "@emotion/core"

export default function Menu() {
  return (
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
  )
}
