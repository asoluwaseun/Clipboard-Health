import { createMocks } from "node-mocks-http";
import api from "../../pages/api/filters";
import filters from "../../data/filters.json";

describe("Filter API", () => {
  it("should request all available filters", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await api(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(filters);
  });
});
