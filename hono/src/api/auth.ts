import { Hono } from 'hono'

const authApi = new Hono()

// 卡密登录
authApi.post('/login', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

// 心跳
authApi.post('/heartbeat', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

// 更新卡密专属信息
authApi.post('/card/custom-data', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

// 卡密解绑
authApi.post('/card/unbind', (c) => {
  return c.json({
    nonce: "test-nonce",
    data: "encrypted-data"
  })
})

// 卡密解绑（公开）
authApi.post('/card/unbind-public', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { "message": "解绑成功" }
  })
})

export default authApi
