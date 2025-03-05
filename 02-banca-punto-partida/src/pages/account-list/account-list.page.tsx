import { AppLayout } from "@/layouts";

import React, { useEffect } from "react";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { AccountVM } from "../account";
import { getAccountList } from "./api";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVM[]>([]);

  const fetchAccounts = async () => {
    const accounts = await getAccountList();
    setAccountList(accounts);

    console.log(accounts);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Cuentas</h1>
          <button>Agregar Nueva Cuenta</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
