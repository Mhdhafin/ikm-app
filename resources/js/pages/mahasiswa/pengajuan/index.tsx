import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { router } from "@inertiajs/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";

type Mahasiswa = {
  id: number
  nama: string
}

type MataKuliah = {
  id: number
  nama: string
}

type Pengajuan = {
  id: number
  status: string
  tanggal_diinginkan: string
  mata_kuliah: MataKuliah
}

type Props = {
  pengajuan: Pengajuan[]
  mahasiswa: Mahasiswa 
  mataKuliah: MataKuliah[]

}


export default function Page({ pengajuan, mahasiswa, mataKuliah }: Props) {

    const [form, setForm] = useState({
  mahasiswa_id: mahasiswa.id, 
  mata_kuliah_id: "",
  tanggal_diinginkan: "",
  jam_mulai: "",
  jam_selesai: "",
  alasan: "",
})

const submit = () => {
  router.post("/pengajuan-kelas", form, {
    preserveScroll: true,
  })
}


  return (
    <div className="p-6 space-y-6">
  <h1 className="text-2xl font-bold">Pengajuan Kelas Pengganti</h1>

  {/* FORM */}
  <div className="bg-white rounded-lg shadow p-4 space-y-4 max-w-xl">
    <h2 className="font-semibold text-lg">Form Pengajuan</h2>

    {/* MATA KULIAH */}
    <div>
      <label className="text-sm font-medium">Mata Kuliah</label>
      <Select
        onValueChange={(v) =>
          setForm({ ...form, mata_kuliah_id: v })
        }
      >
        <SelectTrigger className="mt-1">
          <SelectValue placeholder="Pilih Mata Kuliah" />
        </SelectTrigger>
        <SelectContent>
          {mataKuliah.map((mk) => (
            <SelectItem key={mk.id} value={String(mk.id)}>
              {mk.nama}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* TANGGAL */}
    <div>
      <label className="text-sm font-medium">Tanggal Diinginkan</label>
      <input
        type="date"
        className="w-full mt-1 border rounded px-3 py-2"
        value={form.tanggal_diinginkan}
        onChange={(e) =>
          setForm({ ...form, tanggal_diinginkan: e.target.value })
        }
      />
    </div>

    {/* ALASAN */}
    <div>
      <label className="text-sm font-medium">Alasan</label>
      <textarea
        className="w-full mt-1 border rounded px-3 py-2"
        rows={3}
        value={form.alasan}
        onChange={(e) =>
          setForm({ ...form, alasan: e.target.value })
        }
      />
    </div>

    {/* SUBMIT */}
    <button
      onClick={submit}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Ajukan
    </button>
  </div>

  {/* TABLE */}
  <div className="bg-white rounded-lg shadow p-4">
    <h2 className="font-semibold text-lg mb-3">Riwayat Pengajuan</h2>

    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Mata Kuliah</th>
          <th className="p-2 text-left">Tanggal</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {pengajuan.length === 0 ? (
          <tr>
            <td colSpan={3} className="text-center p-4 text-gray-500">
              Belum ada pengajuan
            </td>
          </tr>
        ) : (
          pengajuan.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.mata_kuliah.nama}</td>
              <td className="p-2">{p.tanggal_diinginkan}</td>
              <td className="p-2">
                <Badge
                  variant={
                    p.status === "approved"
                      ? "success"
                      : p.status === "rejected"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {p.status}
                </Badge>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>

  );
}

Page.layout = (page:any) =>
  <AppLayout>{page}</AppLayout>
