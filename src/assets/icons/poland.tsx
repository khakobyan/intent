import React from "react"
import Svg, { G, Path } from "react-native-svg"

export const PolandIcon = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <G fillRule="evenodd">
      <Path fill="#fff" d="M640 480H0V0h640z" />
      <Path fill="#dc143c" d="M640 480H0V240h640z" />
    </G>
  </Svg>
)

PolandIcon.defaultProps = {
  width: 200,
  height: 100,
};
