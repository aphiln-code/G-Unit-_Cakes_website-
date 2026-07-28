import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the G-Unit Cakes customer site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /G-Unit Cakes/);
  assert.match(html, /Made for your moment/);
  assert.match(html, /Custom-order enquiry/);
  assert.match(html, /Open WhatsApp enquiry/);
  assert.match(html, /gunitcakes_10/);
  assert.match(html, /gunit\.cakes/);
  assert.match(html, /065 538 0964/);
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});
