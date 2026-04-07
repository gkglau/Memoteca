import api from "./api.js"

const ui = {
  async renderMemos() {
    const memoList = document.getElementById('lista-pensamentos')

    try {
      const memos = await api.searchMemos()
      memos.forEach(memo => {
        memoList.innerHTML += `
          <li class="li-pensamento" data-id="${memo.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${memo.conteudo}</div>
          <div class="pensamento-autoria">${memo.autoria}</div>
          </li>
        `
      });
    }
    catch {
      alert('Error rendering memos')
    }
  }

}

export default ui;
