/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/vue"
import BaseButton from "./BaseButton.vue"

test("click button", async () => {
  
  const { emitted } = render(BaseButton,{
    slots:{
      default: "Button"
    }
  });
  
  const button = screen.getByText("Button")
  
  await fireEvent.click(button)
  
  expect( emitted().click.length).toBe(1)
})
