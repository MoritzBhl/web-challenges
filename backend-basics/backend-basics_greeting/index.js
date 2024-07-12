import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(`This port runs on ${port}`);
});
