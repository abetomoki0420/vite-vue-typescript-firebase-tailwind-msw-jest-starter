import { rest } from 'msw'
// import { endpoint } from "@/repositories/count";
const resource = "count"
const baseUrl = "http://localhost:5000"
const endpoint = `${baseUrl}/${resource}`

let counts = 100;

const countHandlers = [
  rest.get(endpoint, (req, res, ctx) => {
    
    return res(
      ctx.status(200),
      ctx.json({
        count: counts
      })
    )
  }),
  rest.post<any,{count:number},any>(endpoint, (req, res, ctx) => {
    const { count } = req.body;
    
    counts = count + 1;
    
    return res(
      ctx.status(200),
      ctx.json({
        count: counts
      })
    )
  })
]

export default countHandlers
