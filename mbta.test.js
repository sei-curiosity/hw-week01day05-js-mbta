const stopsBetweenStations = require("./mbta");

describe("validation check", () => {
  it("should return false because there is no blue line", () => {
    const result = stopsBetweenStations(
      "orange",
      "Forest Hills",
      "blue",
      "Davis",
      false
    );
    expect(result).toBe(false);
  });

  it("should return false because there is no blue station", () => {
    const result = stopsBetweenStations(
      "orange",
      "Forest Hills",
      "red",
      "blue",
      false
    );
    expect(result).toBe(false);
  });
});

describe("betweenStation", () => {
  it("should return 0 if the station is the same as endStation", () => {
    const result = stopsBetweenStations(
      "Red",
      "Alewife",
      "Red",
      "Alewife",
      false
    );
    expect(result).toBe(0);
  });

  it("should return 7 stops from red:alewife to red:southStation", () => {
    const result = stopsBetweenStations(
      "Red",
      "Alewife",
      "Red",
      "South Station",
      false
    );
    expect(result).toBe(7);
  });

  it("should return 6 stops from red:southStation to green:kenmore", () => {
    const result = stopsBetweenStations(
      "Red",
      "South Station",
      "green",
      "Kenmore",
      false
    );
    expect(result).toBe(6);
  });

  it("should return 4 stops from red:southStation to green:copley", () => {
    const result = stopsBetweenStations(
      "Red",
      "South Station",
      "green",
      "Copley",
      false
    );
    expect(result).toBe(4);
  });

  it("should return 11 stops from orange:forestHills to red:alewife", () => {
    const result = stopsBetweenStations(
      "orange",
      "Forest Hills",
      "red",
      "Alewife",
      false
    );
    expect(result).toBe(11);
  });

  it("should return 10 stops from orange:forestHills to red:Davis", () => {
    const result = stopsBetweenStations(
      "orange",
      "Forest Hills",
      "red",
      "Davis",
      false
    );
    expect(result).toBe(10);
  });
});
