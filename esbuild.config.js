import dotenv from "dotenv";
import esbuild from "esbuild";

dotenv.config();

esbuild
  .build({
    entryPoints: ["server/server.ts"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    sourcemap: true,
    external: ["pg-hstore", "mock-aws-s3", "aws-sdk", "nock", "bcrypt"],
    loader: { ".html": "text" },
    outExtension: { ".js": ".cjs" },
    define: {
      "process.env.SECRET_KEY": JSON.stringify(process.env.SECRET_KEY),
    },
  })
  .catch(() => process.exit(1));
