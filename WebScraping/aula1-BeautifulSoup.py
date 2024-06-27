##Web Scraping com BeautifulSoup
#O que é? Biblioteca em Python voltada a parsear documentos HTML e XML

from bs4 import BeautifulSoup

html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web_scraping_Ada</title>
</head>
<body>
    <h1> Essa é a aula 2 de web scraping da ada</h1>
    <h6 class = "teste"> esse é um subtitulo</h6>
    <p> esse é um paragrafo</p>
    <p> esse é um outro paragrafo</p>
    
    <ul>
        <li id="teste2">Item 1</li>
        <li>Item 2</li>
    </ul>

    <ol class = "teste">
        <li>Primeiro item</li>
        <li>Segundo item</li>
    </ol>
</body>
</html>"""

html_parsed = BeautifulSoup(html,"html.parser")

###Metodos principais: find() e find_all()

#encontra o primeiro item do tipo parágrafo
print(html_parsed.find("p"))

#encontra todos os itens do tipo parágrafo
print(html_parsed.find_all("p"))

#encontra o primeiro item com a classe teste
print(html_parsed.find(class_ = "teste"))

#encontra o item com o ID teste2
print(html_parsed.find(id = "teste2"))
