
type Props = {
  label: string
  active?: boolean
  onClick?: () => void
  icon: React.ElementType;
}

export default function SideBarItem({ label, active, onClick, icon: Icon }: Props) {
  return (
    
      <button
        onClick={onClick}
        className={`w-full text-left px-5 py-3 rounded-[18px] transition
          font-bold text-[20px] flex items-center gap-3
          ${active ? "bg-medium-green text-white" : "hover:bg-hover-green text-text-all"}
        `}
      >
        {Icon && <Icon size={20} />}
        {label}
      </button>

  )
}