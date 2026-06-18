import SideBar from "./SideBar"
import Header from "./Header"


type Props = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-bg-green">
      <SideBar />

      <div className="flex flex-1 flex-col min-h-0">
        <Header />
        { children }
      </div>
    </div>
  )
}