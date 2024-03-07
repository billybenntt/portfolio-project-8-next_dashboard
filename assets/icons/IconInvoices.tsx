import * as React from "react"

function IconInvoices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"1.5em"}
      height={"1.5em"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 7h-3a2 2 0 01-2-2V2" />
      <path d="M9 18a2 2 0 01-2-2V4a2 2 0 012-2h7l4 4v10a2 2 0 01-2 2z" />
      <path d="M3 7.6v12.8A1.6 1.6 0 004.6 22h9.8" />
    </svg>
  )
}

export default IconInvoices
