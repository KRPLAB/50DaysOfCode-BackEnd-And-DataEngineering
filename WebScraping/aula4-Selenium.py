from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

firefox_options = Options()
firefox_options.add_argument("--width=1920")
firefox_options.add_argument("--height=1080")
firefox_options.headless = True 

driver = webdriver.Firefox(options=firefox_options)

driver.get("https://webscraper.io/test-sites/e-commerce/allinone/phones")

lista_itens = driver.find_elements(By.CLASS_NAME, "title")

for i in lista_itens:
    print(i.text)

computadores = driver.find_element(By.XPATH, '//*[@id="side-menu"]/li[2]/a')
computadores.click()