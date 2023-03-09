import http from './http.js'
// 파일 업로드
const getItem = async (file) => {
  return await http.get('/path')
}

const api = {
  getItem,
}

export default api
