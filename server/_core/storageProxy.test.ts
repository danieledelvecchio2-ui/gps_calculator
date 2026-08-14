import { describe, expect, it, vi } from "vitest";
import { registerStorageProxy } from "./storageProxy";

describe("registerStorageProxy", () => {
  it("registra una route per gli asset caricati nello spazio persistente", () => {
    const get = vi.fn();

    registerStorageProxy({ get } as any);

    expect(get).toHaveBeenCalledTimes(1);
    expect(get).toHaveBeenCalledWith("/manus-storage/*", expect.any(Function));
  });

  it("rifiuta richieste prive della chiave dell’asset", async () => {
    const get = vi.fn();
    registerStorageProxy({ get } as any);

    const handler = get.mock.calls[0][1];
    const status = vi.fn().mockReturnThis();
    const send = vi.fn();

    await handler(
      { params: {} },
      { status, send }
    );

    expect(status).toHaveBeenCalledWith(400);
    expect(send).toHaveBeenCalledWith("Missing storage key");
  });
});
