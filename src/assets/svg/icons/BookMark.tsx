import * as React from "react";
import type { SVGProps } from "react";
const SvgBookMark = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.4166 3.33333V13.6209L8.0984 11.7702L7.99992 11.728L7.90144 11.7702L3.58325 13.6209V3.33333C3.58325 3.03357 3.68715 2.78329 3.90188 2.56893C4.11682 2.35435 4.36733 2.2504 4.66675 2.25H11.3333C11.633 2.25 11.8836 2.35391 12.0985 2.56878C12.3133 2.78364 12.4169 3.0339 12.4166 3.33303V3.33333Z"
      stroke="black"
      stroke-width="0.5"
    />
  </svg>
);
export default SvgBookMark;