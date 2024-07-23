import { defineConfig } from "@wagmi/cli";
import { hardhat, react } from "@wagmi/cli/plugins";
export default defineConfig({
  out: "src/generated.ts",
  plugins: [
    hardhat({
      project: "./protocol",
      deployments: {
        Token: {
          31337: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        },
        Todos: {
          31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        },
      },
    }),
    react(),
  ],
});
