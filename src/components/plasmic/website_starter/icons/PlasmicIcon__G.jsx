// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.54 20a9.51 9.51 0 01-3.693-.722 9.583 9.583 0 01-3.05-2.084A10.064 10.064 0 01.728 14C.242 12.76 0 11.38 0 9.861c0-1.37.252-2.648.755-3.833a9.99 9.99 0 012.099-3.14A9.524 9.524 0 015.987.779C7.199.259 8.505 0 9.904 0c1.827 0 3.44.389 4.84 1.167 1.398.777 2.433 1.824 3.105 3.139L14.436 6.86a4.966 4.966 0 00-1.959-2.055 5.26 5.26 0 00-2.741-.75 4.59 4.59 0 00-2.07.472 4.858 4.858 0 00-1.623 1.278 5.798 5.798 0 00-1.035 1.888 7.287 7.287 0 00-.364 2.334c0 .852.13 1.639.392 2.36a5.918 5.918 0 001.09 1.89A5.102 5.102 0 007.778 15.5a5.15 5.15 0 002.154.444c.952 0 1.856-.231 2.714-.694a6.84 6.84 0 00.914-.604v4.196A7.346 7.346 0 019.54 20zm5.231-7.139h-3.86V9.556h7.665V19.86h-3.805v-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GIcon;
/* prettier-ignore-end */
