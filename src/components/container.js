import React from "react"
import { css } from "@emotion/core"

const Container = props => {
  const { maxWidth = 1250, ...restProps } = props

  return (
    <div
      css={css`
        width: 100%;
        max-width: ${maxWidth}px;
        margin: 0 auto;
        background-color: transparent;
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
