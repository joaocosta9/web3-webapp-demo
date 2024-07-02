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
          84532:
            "0x336f4565Af9f410927C3D4Bc4fa6AAEAFa192991",
          31337:
            "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        },
        Todos: {
          84532:
            "0xE97dD088aEFFC18723609A0D57f830d0B69f940e",
          31337:
            "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
        },
      },
    }),
    react(),
  ],
});
