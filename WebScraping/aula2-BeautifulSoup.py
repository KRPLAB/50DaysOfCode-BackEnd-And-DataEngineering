##Utilizando BeautifulSoup em um site real com requests

import requests
from bs4 import BeautifulSoup

html_real_site = requests.get("https://www.scrapethissite.com/pages/simple/").text

html_parsed = BeautifulSoup(html_real_site,"html.parser")

lista_paises = html_parsed.find_all(class_ = "country-name")
lista_capitais = html_parsed.find_all(class_ = "country-capital")

lista_final = []

for pais,capital in zip (lista_paises, lista_capitais):
    dici = {"pais": pais.text.strip(),
            "capital": capital.text.strip()}
    lista_final.append(dici)

for elemento in lista_final:
    print(elemento)