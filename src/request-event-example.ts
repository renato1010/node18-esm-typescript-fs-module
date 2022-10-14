import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer();

// emit request event
// register a function that listen/respond to it

server.on(
  "request",
  (req: IncomingMessage, res: ServerResponse<IncomingMessage> & { req: IncomingMessage }) => {
    if (typeof req.url !== "string") {
      throw new Error("No URL available");
    }
    const url = new URL(req.url, `http://${req.headers.host}`);
    res.end(url.pathname);
  }
);

server.listen(3000);
