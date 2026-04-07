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
  }
}

export default api;
