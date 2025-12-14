import { router } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import AppLayout from "@/layouts/app-layout"

type Pengajuan = {
  id: number
  mata_kuliah: string
  kelas: string
  alasan: string
  status: string
  mahasiswa: {
    name: string
    email: string
  }
}

export default function AdminPengajuan({ pengajuan }: { pengajuan: Pengajuan[] }) {
  const updateStatus = (id: number, status: "approved" | "rejected") => {
    router.patch(`/admin/pengajuan/${id}/status`, { status })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Data Pengajuan Mahasiswa</h1>

      <div className="bg-white shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100 text-left">
              <th className="p-3">Mahasiswa</th>
              <th className="p-3">Mata Kuliah</th>
              <th className="p-3">Kelas</th>
              <th className="p-3">Alasan</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {pengajuan.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">
                  <div className="font-medium">{item.mahasiswa.name}</div>
                  <div className="text-sm text-gray-500">
                    {item.mahasiswa.email}
                  </div>
                </td>
                <td className="p-3">{item.mata_kuliah}</td>
                <td className="p-3">{item.kelas}</td>
                <td className="p-3">{item.alasan}</td>
                <td className="p-3 capitalize">{item.status}</td>
                <td className="p-3 flex gap-2">
                  <Button
                    size="sm"
                    disabled={item.status !== "pending"}
                    onClick={() => updateStatus(item.id, "approved")}
                  >
                    Approve
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={item.status !== "pending"}
                    onClick={() => updateStatus(item.id, "rejected")}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

AdminPengajuan.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>
