from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

firefox_options = Options()
firefox_options.add_argument("--width=1920")
firefox_options.add_argument("--height=1080")
firefox_options.headless = False

driver = webdriver.Firefox(options=firefox_options)

driver.get("https://www.ifood.com.br/delivery/pinhais-pr/burger-king---carrefour-pinhais-jardim-amelia/")

try:
    # Aguardando até que os elementos estejam presentes
    WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'dish-card__description')))
    WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'dish-card__price')))

    names_itens = driver.find_elements(By.CLASS_NAME, 'dish-card__description')      
    price_itens = driver.find_elements(By.CLASS_NAME, 'dish-card__price')

    itens_info = []

    for name, price in zip(names_itens, price_itens):
        dici = {"name": name.text,
                "price": price.text}
        itens_info.append(dici)

    for elemento in itens_info:
        print(elemento)

finally:
    driver.quit()
