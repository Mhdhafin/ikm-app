import { Link, usePage, router } from "@inertiajs/react"
import {
  LayoutDashboard,
  ClipboardList,
  ChevronDown,
  LogOut,
} from "lucide-react"
import { useState } from "react"

export default function AppSidebar() {
  const page: any = usePage()
  const user = page.props.auth?.user
const role = user?.role
  const [openDashboard, setOpenDashboard] = useState(true)

  const logout = () => {
    router.post("/logout")
  }

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">Sistem Akademik</h1>

        {/* DASHBOARD */}
        <button
          type="button"
          onClick={() => setOpenDashboard(!openDashboard)}
          className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>
          <ChevronDown
            size={16}
            className={openDashboard ? "rotate-180 transition" : "transition"}
          />
        </button>

        {openDashboard && (
          <div className="ml-6 mt-2 space-y-1">
            {role === "mahasiswa" && (
              <Link
                href="dashboard"
                className="block p-2 rounded hover:bg-gray-100 text-sm"
              >
                Dashboard Mahasiswa
              </Link>
            )}

            {(role === "admin" || role === "akademik") && (
              <Link
                href="dashboard"
                className="block p-2 rounded hover:bg-gray-100 text-sm"
              >
                Dashboard Admin
              </Link>
            )}
          </div>
        )}

        {/* MENU */}
        <nav className="mt-4 space-y-2">
          {role === "mahasiswa" && (
            <Link
              href="/pengajuan-kelas"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
            >
              <ClipboardList size={18} />
              <span>Pengajuan Kelas</span>
            </Link>
          )}

          {(role === "admin" || role === "akademik") && (
            <Link
              href="/admin/pengajuan"
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
            >
              <ClipboardList size={18} />
              <span>Data Pengajuan</span>
            </Link>
          )}
        </nav>
      </div>

      {/* LOGOUT */}
      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 rounded hover:bg-red-100 text-red-600"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </aside>
  )
}
