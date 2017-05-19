/**
 * 配置
 */

// 请求域名
const PRODUCTION_HOSTNAME = 'http://localhost:3000'
const DEVELOPENT_HOSTNAME = 'http://localhost:3000'
export const HOST_NAME = process.env.NODE_ENV === 'production'
  ? PRODUCTION_HOSTNAME
  : DEVELOPENT_HOSTNAME
