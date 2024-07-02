##Utilizando Pandas no Web Scraping
#Pandas é uma biblioteca voltada para manipulação de dados em formato tabular, mas que pode ajudar em algumas situações de web scraping

import pandas as pd

dfs =  pd.read_html("https://webscraper.io/test-sites/tables/tables-semantically-correct")

print(dfs[0])