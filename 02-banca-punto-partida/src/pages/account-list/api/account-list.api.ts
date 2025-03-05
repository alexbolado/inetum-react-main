import { AccountVM } from "@/pages/account/account.vm";
import Axios from "axios";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = async (): Promise<AccountVM[]> =>
  Axios.get<AccountVM[]>(url).then(({ data }) => data);
