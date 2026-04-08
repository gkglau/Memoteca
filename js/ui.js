import api from "./api.js"

const ui = {
  async renderMemos() {
    const memoList = document.getElementById('lista-pensamentos')

    try {
      const memos = await api.searchMemos()
      memos.forEach(ui.addMemoToList)
    }
    catch {
      alert('Error rendering memos')
    }
  },

  addMemoToList() {
    const memoList = document.getElementById('lista-pensamentos')
    const li = document.createElement("li")
    li.setAttribute("data-id", memo.id)
    li.classList.add("li-pensamento")

    const iconMarks = document.createElement("img")
    iconMarks.src = "assets/imagens/aspas-azuis.png"
    iconMarks.alt = "Aspas azuis"
    iconMarks.classList.add("icone-aspas")

    const memoContent = document.createElement("div")
    memoContent.textContent = memo.conteudo
    memoContent.classList.add("pensamento-conteudo")

    const memoAuthor = document.createElement("div")
    memoAuthor.textContent = memo.autoria
    memoAuthor.classList.add("pensamento-autoria")

    li.appendChild(iconMarks)
    li.appendChild(memoContent)
    li.appendChild(memoAuthor)
    memoList.appendChild(li)
  }
}

export default ui;
