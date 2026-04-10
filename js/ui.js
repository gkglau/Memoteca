import api from "./api.js"

const ui = {

  async fillForm(memoId){
    const memo = await api.searchMemoById(memoId)
    document.getElementById("pensamento-id").value = memo.id
    document.getElementById("pensamento-conteudo").value = memo.conteudo
    document.getElementById("pensamento-autoria").value = memo.autoria
  },

  resetForm() {
    document.getElementById("pensamento-form").reset();
  },

  async renderMemos() {
    const memoList = document.getElementById('lista-pensamentos')
    memoList.innerHTML = ""

    try {
      const memos = await api.searchMemos()
      memos.forEach(memo => ui.addMemoToList(memo))
    }
    catch {
      alert('Error rendering memos')
    }
  },

  addMemoToList(memo) {
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

    const editButton = document.createElement("button")
    editButton.classList.add("botao-editar")
    editButton.onclick = () => ui.fillForm(memo.id)

    const editIcon = document.createElement("img")
    editIcon.src = "assets/imagens/icone-editar.png"
    editIcon.alt = "Edit"
    editButton.appendChild(editIcon)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("botao-excluir")
    deleteButton.onclick = async () => {
      try {
        await api.deleteMemo(memo.id)
        ui.renderMemos()
      } catch (error) {
        alert("error deleting memo")
      }
    }

    const deleteIcon = document.createElement("img")
    deleteIcon.src = "assets/imagens/icone-excluir.png"
    deleteIcon.alt = "Delete"
    deleteButton.appendChild(deleteIcon)

    const icons = document.createElement("div")
    icons.classList.add("icones")
    icons.appendChild(editButton)
    icons.appendChild(deleteButton)

    li.appendChild(iconMarks)
    li.appendChild(memoContent)
    li.appendChild(memoAuthor)
    li.appendChild(icons)
    memoList.appendChild(li)
  }
}

export default ui;
