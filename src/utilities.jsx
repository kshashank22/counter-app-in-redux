export const counter = {
  count: 0,
};

export const IncrementCounter = () => ({
  type: "counterIncrease",
});

export const DecrementCounter = () => ({
  type: "counterDecrease",
});
