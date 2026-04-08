const api = {
  async searchMemos() {
    try {
      const response = await fetch('http://localhost:3000/pensamentos')
      return await response.json()
    }
    catch {
      alert('error searching memos')
      throw error
    }
  },

    async saveMemos(memo) {
    try {
      const response = await fetch('http://localhost:3000/pensamentos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify()
      })
      return await response.json(memo)
    }
    catch {
      alert('error save memo')
      throw error
    }
  }
}

export default api;
