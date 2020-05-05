import React from "react";
import { render, fireEvent } from "@testing-library/react";
// fireEvent pembantu untuk mengCLick component tanpa tes di browser
import InputNumber from "./index";

class TestInput extends React.Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <InputNumber
        max={30}
        suffix=" night"
        isSuffixPlural
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector("input.form-control[name='value']");

  return {
    input,
  };
};

test("should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("should not be to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});