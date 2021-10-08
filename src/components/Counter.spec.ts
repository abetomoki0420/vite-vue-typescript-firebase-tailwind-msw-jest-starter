/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/vue"
import Counter from "./Counter.vue"

test("counts up", async () => {
  
  render(Counter);
  
  expect( screen.getByText("Count: 0") ).toBeTruthy()
  
  const button = screen.getByText("Click me")
  
  await fireEvent.click(button)
  
  expect( screen.getByText("Count: 1") ).toBeTruthy()
})
