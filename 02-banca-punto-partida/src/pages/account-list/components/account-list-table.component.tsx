import { AccountVM } from "../../account/account.vm";
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
          </div>
          {accountList.map((account) => (
            <div key={account.id} className={classes.rowTable}>
              <span className={classes.cellTable}>{account.iban}</span>
              <span className={classes.cellTable}>{account.name}</span>
              <span className={classes.cellTable}>{account.balance}</span>
              <span className={classes.cellTable}>
                {account.lastTransaction}
              </span>
              <span className={classes.cellTable}>AQUI VA COMBO</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
