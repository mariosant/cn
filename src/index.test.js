import className from "./index";

test("outputs single class", () => {
  expect(className("test")).toEqual("test");
});

test("outputs multiple classes", () => {
  expect(className("test", "work")).toEqual("test work");
});

test("works with conditions", () => {
  expect(className([true, "works", "does not work"])).toEqual("works");
  expect(className([false, "works", "does not work"])).toEqual("does not work");
});

test("a mixed example", () => {
  expect(className("a", "b", [true, "works", "does not work"])).toEqual(
    "a b works"
  );
});
