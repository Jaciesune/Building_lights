import UserNavigation from "@/components/user-navigation"
import Link from "next/link"

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <header className="flex items-center justify-between space-x-2 p-4 shadow-lg">
        <Link href="/" className="mr-auto">
          Oświecenie Dashboard
        </Link>

        <UserNavigation />
      </header>

      <main className="container mt-6">{children}</main>
    </div>
  )
}
