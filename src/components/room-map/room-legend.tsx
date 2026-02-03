import clsx from "clsx"


interface Props {
  color: string
  label: string
}

export const RoomLegend = ({color,label}:Props) => {
  return (
    <div key={'label_option'+label} className="flex items-center gap-1 text-nowrap">
      <div className={clsx("size-3 rounded",color)}/>
      <p className="text-base">{label}</p>
    </div>
  )
}
