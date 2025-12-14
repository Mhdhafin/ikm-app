import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AppTable() {
  return (
    <Table>
      <TableCaption>Daftar Jadwal Kelas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Kelas</TableHead>
          <TableHead>Lantai</TableHead>
          <TableHead>Jam</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Matematika</TableCell>
          <TableCell>2</TableCell>
          <TableCell>08:00 - 09:30</TableCell>
          <TableCell className="text-green-600 font-semibold">Aktif</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bahasa Inggris</TableCell>
          <TableCell>3</TableCell>
          <TableCell>10:00 - 11:30</TableCell>
          <TableCell className="text-yellow-600 font-semibold">Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fisika</TableCell>
          <TableCell>1</TableCell>
          <TableCell>13:00 - 14:30</TableCell>
          <TableCell className="text-red-600 font-semibold">Batal</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
