/**
 * @jest-environment jsdom
 */

import { setupServer } from "msw/node";
import countHandlers from "../mocks/handlers/count";

// FIXIT: jest environment cannot use import.meta syntax
// import store from "@/store";
// import { render, screen, fireEvent } from "@testing-library/vue"
// import Home from "./Home.vue"

const server = setupServer(...countHandlers)

beforeAll( () => server.listen())
beforeEach( () => server.resetHandlers())
afterAll( () => server.close())

test("request count endpoint", async () => {
  
  // FIXIT: jest environment cannot use import.meta syntax
  // render(Home,{
  //   global: {
  //     plugins: [store]
  //   }
  // })

  // expect( screen.getByText("count API request: 0")).toBeTruthy()
  // const button = screen.getByText("Click me to send a request API")
  // await fireEvent.click(button)
  // expect( screen.getByText("count API request: 1")).toBeTruthy()
})
