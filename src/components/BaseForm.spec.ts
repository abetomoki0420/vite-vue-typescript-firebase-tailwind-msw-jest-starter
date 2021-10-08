/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/vue"
import BaseForm from "./BaseForm.vue"

test("input form", async () => {
  render(BaseForm);
  
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)
  
  await fireEvent.update(usernameInput, 'username')
  await fireEvent.update(passwordInput, 'password')
})
