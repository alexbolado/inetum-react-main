import { AccountVM } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";

interface Props {
  accountList: AccountVM[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;
  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className={classes.headerTable}>
            <span className={classes.headerCell}>IBAN</span>
            <span className={classes.headerCell}>ALIAS</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
            <span className={classes.headerCell}>OPERACIÓN</span>
            {accountList.map((account) => (
              <div key={account.id}>
                <div>{account.name}</div>
                <div>{account.iban}</div>
                <div>{account.balance}</div>
                <div>{account.lastTransaction.toDateString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
