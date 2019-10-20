import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Container from "../components/container"
import { Twitter, Github, Linkedin } from "../components/social"

function Index(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Mamadou Aliou Diallo - Full Stack Web Developer" />

      <Container centerAlign="true">
        <div>
          <img
            src="https://www.kaherecode.com/uploads/users/5c52e73b634bd.png"
            alt="Mamadou Aliou Diallo"
            css={css`
              width: 200px;
              border-radius: 50%;
            `}
          />

          <h1
            css={css`
              font-size: 1.4rem;
              margin-top: -10px;
              margin-bottom: 20px;
            `}
          >
            Mamadou Aliou Diallo - Full Stack Web Developer
          </h1>

          <p
            css={css`
              width: 75%;
              margin: 0 auto;
              font-size: 1.1rem;
              line-height: 2.2rem;

              a {
                color: #000;
                text-decoration: underline;
              }
            `}
          >
            Hi, I'm Mamadou Aliou Diallo a.k.a <strong>alioukahere</strong>. A
            Web Developer (Python, PHP, JS, ...Web), Technical Writer,
            Passionate about entrepreneurship, writing and teaching code.
            Currently working on{" "}
            <strong>
              <a href="https://kaherecode.com" target="_blank">
                kaherecode
              </a>
            </strong>
            , an aspiring community for french developers, a web platform to
            learn and share about programming.
          </p>

          <p
            css={css`
              margin-top: 30px;
            `}
          >
            <ul
              css={css`
                li {
                  display: inline-block;
                  list-style-type: none;

                  &:not(:last-child) {
                    margin-right: 20px;
                  }
                }
              `}
            >
              <li>
                <Twitter />
              </li>
              <li>
                <Github />
              </li>
              <li>
                <Linkedin />
              </li>
            </ul>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
