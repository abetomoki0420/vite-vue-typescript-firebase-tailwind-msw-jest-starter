import { rest } from 'msw'
// import { endpoint } from "@/repositories/login";
const endpoint = "http://localhost:5000"

const loginHandlers = [
  rest.get(endpoint, (req, res, ctx) => {
    
    const token = "xxxxxxxx"
  
    return res(
      ctx.status(200),
      ctx.json({
        token
      })
    )
  }),
]

export default loginHandlers
