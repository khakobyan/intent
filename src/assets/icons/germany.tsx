import React from "react"
import Svg, { Path } from "react-native-svg"

export const GermanyIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <Path fill="#ffce00" d="M0 320h640v160H0z" />
    <Path fill="#000" d="M0 0h640v160H0z" />
    <Path fill="#d00" d="M0 160h640v160H0z" />
  </Svg>
)

GermanyIcon.defaultProps = {
  width: 200,
  height: 100,
};
