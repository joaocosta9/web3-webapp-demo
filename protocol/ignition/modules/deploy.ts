import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployModule = buildModule(
  "DeployTodos",
  (m: any) => {
    const todos = m.contract("Todos");
    const mockTokens = m.contract("MockToken");

    return { todos, mockTokens };
  },
);

export default DeployModule;
