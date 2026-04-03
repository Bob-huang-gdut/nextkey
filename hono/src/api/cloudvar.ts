import { Hono } from 'hono'

const cloudVarApi = new Hono()

// 获取云变量
cloudVarApi.get('/:key', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

cloudVarApi.post('/:key', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

export default cloudVarApi
