import { createMocks } from "node-mocks-http";
import api from "../../pages/api/jobs";
import  jobs from "../../data/jobs.json";

describe("Jobs APIs", () => {
  it("should request all jobs", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await api(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(jobs);
  });

  describe("Search Jobs API", () => {
    it("should search with any hospital name", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "Mammoth Hospital",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should search with any job title", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "LPN Charge Nurse",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should search any required skills", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "search": "Bed Bath",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should search any department", async () => {
        const { req, res } = createMocks({
          method: "GET",
          query: {
            "search": "Medicine",
          },
        });
        await api(req, res);
        expect(res._getStatusCode()).toBe(200);
      });
  })

  describe("Filter Jobs API", () => {
    it("should filter jobs using job type", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter": "job_type:Per-Diem",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should filter jobs using work schedule", async () => {
        const { req, res } = createMocks({
          method: "GET",
          query: {
            "filter": "work_schedule:Night shift",
          },
        });
        await api(req, res);
        expect(res._getStatusCode()).toBe(200);
      });
    it("should filter jobs using experience", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter":"experience:Intermediate",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    
    it("should filter jobs using department", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "filter":"department:Pediatrics",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
  });

  describe("Sort Jobs API", () => {
    it("should sort jobs using location", async () => {
      const { req, res } = createMocks({
        method: "GET",
        query: {
          "sort": "location:asc",
        },
      });
      await api(req, res);
      expect(res._getStatusCode()).toBe(200);
    });
    it("should sort jobs using experience", async () => {
        const { req, res } = createMocks({
          method: "GET",
          query: {
            "sort": "experience:desc",
          },
        });
        await api(req, res);
        expect(res._getStatusCode()).toBe(200);
      });
    });

    describe("Search and Filter Jobs API", () => {
        it("should search and filter jobs", async () => {
          const { req, res } = createMocks({
            method: "GET",
            query: {
                "search": "Nurse",
                "filter": "experience:Intermediate"
            },
          });
          await api(req, res);
          expect(res._getStatusCode()).toBe(200);
        });
    })
});
