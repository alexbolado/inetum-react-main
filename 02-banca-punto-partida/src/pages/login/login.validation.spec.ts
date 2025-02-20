import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation specs", () => {
  it("should return validation succeeded when both fields are informed", () => {
    // Arrange
    const credentials: Credentials = {
      user: "myUser",
      password: "myPassword",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });
  it("should return validation failed when user is empty", () => {
    // Arrange
    const credentials: Credentials = {
      user: "",
      password: "myPassword",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("User is required");
    expect(result.errors.password).toEqual("");
  });
  it("should return validation failed when password is empty", () => {
    // Arrange
    const credentials: Credentials = {
      user: "myUser",
      password: "",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("Password is required");
  });
  it("should return validation failed when both user and password is empty", () => {
    // Arrange
    const credentials: Credentials = {
      user: "",
      password: "",
    };
    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("User is required");
    expect(result.errors.password).toEqual("Password is required");
  });
});
