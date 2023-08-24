import { server } from "./server/server";

const PORT = 8000;

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
