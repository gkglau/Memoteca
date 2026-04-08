import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderMemos()

  const memoForm = document.getElementById("pensamento-form")
  memoForm.addEventListener("submit", formSubmission)
})

async function formSubmission(event) {
  event.preventDefault();

  const id = document.getElementById("pensamento-id").value
  const conteudo = document.getElementById("pensamento-conteudo").value
  const autoria = document.getElementById("pensamento-autoria").value
  console.log(conteudo, autoria)

  try{
    await api.saveMemos({ conteudo, autoria })
    ui.renderMemos()
  }
  catch (error) {
    console.error(error)
    alert("error saving memo")
  }
}
