import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={24} fill="#111113" rx={12} />
    <path
      fill="#fff"
      d="M22 10v3.974h-.933V10zm-4.555.052h3.13v3.88H18.06q-.303 0-.462-.16-.153-.158-.153-.464zm.932 3.277q0 .208.205.208h1.06v-3.09h-1.265zM15.805 10v3.974h-.84v-1.826h-.825v-.421h.824V10zm-3.408.052h2.296v.395H13.33v3.095h1.363v.396h-1.835q-.225 0-.343-.12t-.118-.349zm3.67-.052h.886v3.974h-.887zM11.383 10v1.623h.543v.421h-.543v1.93h-.933V10zm-4.228.052h2.542a.35.35 0 0 1 .364.37v3.516h-.984v-1.842H7.2v-.385h1.876v-1.29H7.155zM5.408 11.685v-1.253h-3.25v-.4H5.89q.205 0 .339.134.133.135.133.344v1.175zM2 11.925h1.455v-.74h.953v.74h2.276v.4H2zm.097 1.347q0-.36.21-.541.21-.187.61-.187h2.778q.4 0 .61.187.21.182.21.54 0 .36-.21.542-.21.187-.61.187H2.917q-.4 0-.61-.187-.21-.183-.21-.541m.974.03q0 .313.307.313h1.86q.308 0 .308-.312v-.062q0-.313-.307-.313h-1.86q-.308 0-.308.313z"
    />
  </svg>
);
export default SvgLogoImage;