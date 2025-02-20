import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a credentials object with the same values as the input", () => {
    // Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myUser",
      password: "myPassword",
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myUser",
      password: "myPassword",
    };

    // Act
    const result = mapCredentialsFromVmToApi(vmCredentials);

    // Assert
    expect(result).toStrictEqual(expectedApiCredentials);
  });
});
