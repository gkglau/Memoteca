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
        body: JSON.stringify(memo)
      })
      return await response.json()
    }
    catch {
      alert('error save memo')
      throw error
    }
  },

  async searchMemoById(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
      return await response.json()
    }
    catch {
      alert('error searching memo')
      throw error
    }
  },
   async editMemo(memo) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${memo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(memo)
      })
      return await response.json()
    }
    catch {
      alert('error edit memo')
      throw error
    }
  },
    async deleteMemo(id) {
     try {
       await fetch(`http://localhost:3000/pensamentos/${id}`, {
         method: "DELETE"
       })
     }
     catch {
       alert('error delete memo')
       throw error
     }
   }
}

export default api;
