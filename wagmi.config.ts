import { defineConfig } from "@wagmi/cli";
import {
  hardhat,
  react,
} from "@wagmi/cli/plugins";
export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    hardhat({
      project: "./protocol",
      deployments: {
        MockToken: {
          31337:
            "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        },
        Todos: {
          31337:
            "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
        },
      },
    }),
    react(),
  ],
});
