/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/vue"
import Home from "./Home.vue"

test("request count endpoint", async () => {
  
  render(Home,{
    props:{
      count: 200
    }
  })
  
  expect( screen.getByText("Count: 0")).toBeTruthy()
  
  expect( screen.getByText("count API request: 200")).toBeTruthy()
})
