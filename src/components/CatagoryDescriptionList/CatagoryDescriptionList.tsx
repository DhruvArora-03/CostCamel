import { expenseColors } from 'src/lib/colors'
import { ExpenseTypes } from 'src/lib/types'

type CatagoryDescriptionProps = {
  x: number
  y: number
  type: ExpenseTypes
  className?: string
}

type CatagoryDescriptionListProps = {
  catagoryTextClassName?: string
  radius: number
}

function CatagoryDesc({ x, y, type, className }: CatagoryDescriptionProps) {
  return (
    <>
      <rect
        x={x}
        y={y}
        rx="4"
        ry="4"
        width="15"
        height="15"
        fill={expenseColors[type]}
      />
      <text
        x={x + 20}
        y={y + 2}
        dominantBaseline="hanging"
        className={className}
        fill={expenseColors[type]}
      >
        <tspan>{type.charAt(0)}</tspan>
        {type.slice(1)}
      </text>
    </>
  )
}

export default function CatagoryDescriptionList(
  props: CatagoryDescriptionListProps,
) {
  const pad = 10
  const dim = (pad + props.radius) * 2
  return (
    <svg width={dim} height={pad + 21 * Math.ceil(ExpenseTypes.length / 2)}>
      {ExpenseTypes.map((type, i) => (
        <CatagoryDesc
          key={type}
          className={props.catagoryTextClassName}
          x={i < Math.ceil(ExpenseTypes.length / 2) ? 0 : dim / 2}
          y={10 + 21 * Math.floor(i % (ExpenseTypes.length / 2))}
          type={type as ExpenseTypes}
        />
      ))}
    </svg>
  )
}