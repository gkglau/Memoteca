const api = {
  async searchMemos() {
    try {
      const response = await fetch('http://localhost:3000/pensamentos')
      return response.json()
    }
    catch {
      alert('error searchMemos')
    }
  }
}

export default api;
