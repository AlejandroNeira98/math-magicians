import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Calculator from "./Calculator";
it('it works', () => {
    const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})