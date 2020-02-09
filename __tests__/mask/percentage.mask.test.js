import { PercentageMask } from "../../lib/masks"

test("getType results percentage", () => {
  var expected = "percentage"
  var received = PercentageMask.getType();

  expect(received).toBe(expected);
});

test("1 results 1.00%", () => {
  var mask = new PercentageMask();
  var expected = "1.00%"
  var received = mask.getValue("1");
  expect(received).toBe(expected);
});

test("111 results 111.00%", () => {
  var mask = new PercentageMask();
  var expected = "111.00%"
  var received = mask.getValue("111");

  expect(received).toBe(expected);
});

test("1111 results 1111.00%", () => {
  var mask = new PercentageMask();
  var expected = "1111.00%"
  var received = mask.getValue("1111");

  expect(received).toBe(expected);
});
test("'' results 0.00%", () => {
  var mask = new PercentageMask();
  var expected = "0.00%"
  var received = mask.getValue("");

  expect(received).toBe(expected);
});

test("100.001 results 100.001 and raw value 100.001", () => {
  var mask = new PercentageMask()
  var expected = "100.00%"
  var received = mask.getValue("100.001")

  var expectedRawValue = 100.00
  var receivedRawValue = mask.getRawValue(received)

  expect(received).toBe(expected);
  expect(receivedRawValue).toBe(expectedRawValue)
});
test("'' results 0% and raw value 0", () => {
  var mask = new PercentageMask()
  var expected = "0.00%"
  var received = mask.getValue("0");

  var expectedRawValue = 0
  var receivedRawValue = mask.getRawValue(received)

  expect(received).toBe(expected)
  expect(receivedRawValue).toBe(expectedRawValue)
});

test("'' results 0% and raw value 0", () => {
  var mask = new PercentageMask()
  var expected = "0.000%"
  var received = mask.getValue("0", {
    precision: 3
  });

  var expectedRawValue = 0.000
  var receivedRawValue = mask.getRawValue(received, {
    precision: 3
  })

  expect(received).toBe(expected)
  expect(receivedRawValue).toBe(expectedRawValue)
});
test("0.001 results 0.001% and raw value 0.001", () => {
  var mask = new PercentageMask()
  var expected = "0.001%"
  var received = mask.getValue("0.001", {
    precision: 3
  });

  var expectedRawValue = 0.001
  var receivedRawValue = mask.getRawValue(received, {
    precision: 3
  })

  expect(received).toBe(expected)
  expect(receivedRawValue).toBe(expectedRawValue)
});
test("0.009 results 0.001% and raw value 0.009", () => {
  var mask = new PercentageMask()
  var expected = "0.009%"
  var received = mask.getValue("0.009", {
    precision: 3
  });

  var expectedRawValue = 0.009
  var receivedRawValue = mask.getRawValue(received)

  expect(received).toBe(expected)
  expect(receivedRawValue).toBe(expectedRawValue)
});
test("0.009 results 0.0% and raw value 0.0", () => {
  var mask = new PercentageMask()
  var expected = "0.0%"
  var received = mask.getValue("0.009", {
    precision: 1
  });

  var expectedRawValue = 0.0
  var receivedRawValue = mask.getRawValue(received)

  expect(received).toBe(expected)
  expect(receivedRawValue).toBe(expectedRawValue)
});
