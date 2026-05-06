import dayjs from "dayjs";
import "dayjs/locale/id";

export function formatDate(dateString?: string) {
    if (!dateString) return "";
    return dayjs(dateString).locale("id").format("DD MMMM YYYY, HH:mm");
}
