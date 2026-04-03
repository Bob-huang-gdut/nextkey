import { Hono } from 'hono'

const projectApi = new Hono()

// 获取项目信息
projectApi.get('/info', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

projectApi.post('/info', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

export default projectApi
