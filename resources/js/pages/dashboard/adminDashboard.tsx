import { DashboardStat } from "@/components/dashboard-stats";
import { Card, CardContent } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
type Props = {
  stats: {
    total_pengajuan: number
    pending: number
    diterima: number
    kelas_kosong: number
  }
  latestPengajuan: any[]
}

export default function AdminDashboard({ stats, latestPengajuan }: Props) {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Dashboard Akademik</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <DashboardStat title="Total Pengajuan" value={stats.total_pengajuan} />
        <DashboardStat title="Pending" value={stats.pending} />
        <DashboardStat title="Diterima" value={stats.diterima} />
        <DashboardStat title="Kelas Kosong" value={stats.kelas_kosong} />
      </div>

      <Card>
        <CardContent className="p-4">
          <h2 className="font-semibold mb-2">Pengajuan Terbaru</h2>

          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Mahasiswa</th>
                <th>Mata Kuliah</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestPengajuan.map(p => (
                <tr key={p.id}>
                  <td>{p.mahasiswa.nama}</td>
                  <td>{p.mata_kuliah.nama}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

    </div>
  );
}


AdminDashboard.layout = (page:any) =>
  <AppLayout>{page}</AppLayout>