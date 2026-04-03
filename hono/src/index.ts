import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

// 导入 API 模块
import cryptoApi from './api/crypto.ts'
import authApi from './api/auth.ts'
import cloudVarApi from './api/cloudvar.ts'
import projectApi from './api/project.ts'
import adminApi from './api/admin.ts'

const app = new Hono()

// 启用 CORS 中间件
app.use('*', cors())

// 注册 API 路由
app.route('/api/crypto', cryptoApi)
app.route('/api/auth', authApi)
app.route('/api/cloud-var', cloudVarApi)
app.route('/api/project', projectApi)
app.route('/admin', adminApi)

// 健康检查
app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

// 根路径
app.get('/', (c) => {
  return c.text('NextKey Hono API Server')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`NextKey Hono API server starting on port ${info.port}...`)
  console.log(`Health check: http://localhost:${info.port}/health`)
  console.log(`Encryption schemes: http://localhost:${info.port}/api/crypto/schemes`)
})
