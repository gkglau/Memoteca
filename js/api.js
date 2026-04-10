const URL_BASE = "http://localhost:3000"

const api = {
  async searchMemos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`)
      return await response.data
    }
    catch {
      alert('error searching memos')
      throw error
    }
  },

    async saveMemos(memo) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, memo)
      return await response.data
    }
    catch {
      alert('error save memo')
      throw error
    }
  },

  async searchMemoById(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
      return await response.data
    }
    catch {
      alert('error searching memo')
      throw error
    }
  },
   async editMemo(memo) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${memo.id}`, memo )
      return await response.data
    }
    catch {
      alert('error edit memo')
      throw error
    }
  },
    async deleteMemo(id) {
     try {
       await axios.delete(`${URL_BASE}/pensamentos/${id}`)
     }
     catch {
       alert('error delete memo')
       throw error
     }
   }
}

export default api;
