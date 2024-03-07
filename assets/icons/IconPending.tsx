import * as React from "react"

function IconPending(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clock-3"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6L12 12 16.5 12" />
    </svg>
  )
}

export default IconPending
