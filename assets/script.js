function toggleMode() {
  const html =
    document.documentElement /*document é minha página, acesso minha página html através do documentElement*/

  if (html.classList.contains("light")) {
    /*html contem na lista de class 'light'*/
    html.classList.remove(
      "light"
    ) /*no caso dele conter o nome light, vou acessar a lista do html e remover o nome light */
  } else {
    html.classList.add("light")
  }

  /*Todo código abaixa faz o que está no conteúdo acima
html.classList.toggle('light')
*/

  //Pegar a tag img
  const img =
    document.querySelector(
      "#profile img"
    ) /*vai procurar non css o profile img */
  //substituir a imagem
  if (html.classList.contains("light")) {
    /*Se no html conter na classe o light irá atribuir a imagem light */
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-fefe-light.jpg")
  } else {
    /*Se não tiver o light então mantei a imagem sem o light */
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-fefe-dark.jpg")
  }
}
