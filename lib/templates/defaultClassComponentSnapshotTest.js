import React from "react";
import { shallow } from "enzyme";
import COMPONENT_NAME from "COMPONENT_NAME/COMPONENT_NAME";
import { initialState } from "../../simulatedStates";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("COMPONENT_NAME shallow test", () => {
  it("renders without crashing", () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    shallow(<COMPONENT_NAME store={store} />);
  });
});

describe("COMPONENT_NAME", () => {
  it("should handle props as expected", () => {
    const component = renderer.create(<COMPONENT_NAME></COMPONENT_NAME>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
