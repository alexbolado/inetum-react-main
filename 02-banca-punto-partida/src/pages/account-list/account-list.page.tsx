import { AppLayout } from "@/layouts";
import { AccountVM } from "./account-list.vm";
import React from "react";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";

const mockAccounts: AccountVM[] = [
  {
    id: "1",
    iban: "ES123456789",
    name: "Personal Account",
    balance: "1490",
    lastTransaction: new Date("2019-12-09T21:30:00"),
  },
  {
    id: "2",
    iban: "ES987654321",
    name: "Shared Account",
    balance: "2480",
    lastTransaction: new Date("2019-11-21T21:30:00"),
  },
];
export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    setAccountList(mockAccounts);
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
