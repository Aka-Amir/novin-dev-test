import axios from "axios";

export async function fetchSwrData(url: string) {
  return await axios.get(url).then((r) => r.data.data);
}
