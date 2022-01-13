import express from 'express'
import {router} from "./routes"
import swaggerUI from 'swagger-ui-express'
import swaggerDoc from "./swagger.json"

const app = express()

app.use(express.json())
app.use(router)


// MEDLEWARE DO SWAGER
// ROTA PARA A DOCUMENTAÇÃO 
app.use("/docs", swaggerUI.serve, swaggerUI.setup()) 

app.get('/terms', (request, response) =>{
  return response.json({
    message: "Termos de Serviço"
  })
})

app.get('/', (request, response) =>{
  return response.json({
    message: "Projeto - Documentação com Swagger"
  })
})


app.use('/v1', router)

app.listen(3000, () =>{
  console.log(`Server Online on Port 3000`)
})