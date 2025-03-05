import * as apiModel from "./api";
import * as viewModel from "../account";

export const mapAccountsFromVmToApi = (
  account: viewModel.AccountVM
): apiModel.AccountVM => ({
  ...account,
});
