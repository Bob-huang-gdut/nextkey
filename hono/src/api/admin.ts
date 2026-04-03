import { Hono } from 'hono'

const adminApi = new Hono()

// 管理员登录
adminApi.post('/login', (c) => {
  return c.json({
    access_token: "test-access-token",
    refresh_token: "test-refresh-token",
    expires_in: 900
  })
})

// 刷新令牌
adminApi.post('/refresh', (c) => {
  return c.json({
    access_token: "new-access-token",
    refresh_token: "new-refresh-token",
    expires_in: 900
  })
})

// 管理员注销
adminApi.post('/logout', (c) => {
  return c.json({
    message: "注销成功"
  })
})

// 项目管理
adminApi.get('/projects', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { list: [], total: 0, page: 1 }
  })
})

adminApi.post('/projects', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: 1, uuid: "test-uuid", name: "测试项目" }
  })
})

adminApi.put('/projects/:id', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: parseInt(c.req.param('id')), name: "更新后的项目" }
  })
})

adminApi.delete('/projects/:id', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.get('/projects/:uuid', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: 1, uuid: c.req.param('uuid'), name: "测试项目" }
  })
})

adminApi.post('/projects/batch', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { created: 2 }
  })
})

adminApi.delete('/projects/batch', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.post('/projects/:id/encryption', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: {
      encryption_scheme: "aes-256-gcm",
      encryption_key: "test-encryption-key"
    }
  })
})

// 卡密管理
adminApi.get('/cards', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { list: [], total: 0, page: 1 }
  })
})

adminApi.post('/cards', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { created: 10, cards: [] }
  })
})

adminApi.get('/cards/:id', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: parseInt(c.req.param('id')), card_key: "TEST-123456" }
  })
})

adminApi.put('/cards/:id', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: parseInt(c.req.param('id')), note: "更新后的备注" }
  })
})

adminApi.delete('/cards/:id', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.put('/cards/:id/freeze', (c) => {
  return c.json({
    message: "冻结成功"
  })
})

adminApi.put('/cards/:id/unfreeze', (c) => {
  return c.json({
    message: "解冻成功"
  })
})

adminApi.put('/cards/batch', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.delete('/cards/batch', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.put('/cards/batch/freeze', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.put('/cards/batch/unfreeze', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

// 云变量管理
adminApi.get('/cloud-vars', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { list: [], total: 0, page: 1 }
  })
})

adminApi.post('/cloud-vars', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { id: 1, key: "test-key", value: "test-value" }
  })
})

adminApi.delete('/cloud-vars/:id', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

adminApi.post('/cloud-vars/batch', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: { created: 2 }
  })
})

adminApi.delete('/cloud-vars/batch', (c) => {
  return c.json({
    code: 0,
    message: "success"
  })
})

export default adminApi
