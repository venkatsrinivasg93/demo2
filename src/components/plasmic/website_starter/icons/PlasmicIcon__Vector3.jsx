// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.866 10.968c0 3.594-.875 6.322-2.617 8.175-1.742 1.862-4.313 2.793-7.696 2.793H0V0h8.553C12 0 14.581.912 16.295 2.728c1.714 1.816 2.571 4.562 2.571 8.24zM5.207 17.576h3.254c1.733 0 3.005-.535 3.825-1.595.82-1.06 1.226-2.737 1.226-5.013 0-2.277-.406-3.945-1.226-5.014-.811-1.07-2.092-1.595-3.825-1.595H5.207v13.226-.009z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
