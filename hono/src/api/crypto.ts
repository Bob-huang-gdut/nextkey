import { Hono } from 'hono'

// 模拟数据
const encryptionSchemes = [
  {
    "scheme": "aes-256-gcm",
    "name": "AES-256-GCM",
    "description": "AES-256-GCM 加密（推荐）",
    "security_level": "secure",
    "performance": "medium",
    "is_deprecated": false
  },
  {
    "scheme": "chacha20-poly1305",
    "name": "ChaCha20-Poly1305",
    "description": "ChaCha20-Poly1305 加密",
    "security_level": "secure",
    "performance": "fast",
    "is_deprecated": false
  },
  {
    "scheme": "rc4",
    "name": "RC4",
    "description": "RC4 加密（兼容性，仅测试）",
    "security_level": "insecure",
    "performance": "fast",
    "is_deprecated": true
  },
  {
    "scheme": "xor",
    "name": "XOR",
    "description": "XOR 加密（兼容性，仅测试）",
    "security_level": "insecure",
    "performance": "fast",
    "is_deprecated": true
  },
  {
    "scheme": "custom-base64",
    "name": "自定义Base64",
    "description": "随机字符表Base64编码，简单混淆",
    "security_level": "insecure",
    "performance": "fast",
    "is_deprecated": false
  }
]

const cryptoApi = new Hono()

// 获取加密方案列表
cryptoApi.get('/schemes', (c) => {
  return c.json({
    code: 0,
    message: "success",
    data: encryptionSchemes
  })
})

export default cryptoApi
