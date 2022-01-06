import express from 'express'
import {router} from "./routes"

const app = express()

app.use(express.json())
app.use(router)

app.get('/terms', (request, response) =>{
  return response.json({
    message: "Termos de Serviço"
  })
})

app.use('/v1', router)

app.listen(3000, () =>{
  console.log(`Server Online on Port 3000`)
})