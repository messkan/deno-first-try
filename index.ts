import router from "./routing.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
const hostname = "127.0.0.1";
const port = 3000;
console.log(`Listening on ${port}...`);
await app.listen({ hostname, port });
