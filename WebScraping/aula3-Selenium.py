##Web Scraping com Selenium
#O que é?
#Biblioteca em python voltada para simular  interações de usuário em páginas web

from selenium import webdriver
from selenium.webdriver.firefox.options import Options

# Configurando as opções do Firefox
firefox_options = Options()
firefox_options.add_argument("--width=1920")
firefox_options.add_argument("--height=1080")
firefox_options.headless = True  # Modo headless

# Inicializando o driver do Firefox com as opções configuradas
driver = webdriver.Firefox(options=firefox_options)

driver.get("https://selenium.dev")

driver.quit()