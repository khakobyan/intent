import React from "react"
import Svg, { G, Path } from "react-native-svg"

export const FranceIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <G fillRule="evenodd" strokeWidth="1pt">
      <Path fill="#fff" d="M0 0h640v480H0z" />
      <Path fill="#002654" d="M0 0h213.3v480H0z" />
      <Path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
    </G>
  </Svg>
)

FranceIcon.defaultProps = {
  width: 200,
  height: 100,
};