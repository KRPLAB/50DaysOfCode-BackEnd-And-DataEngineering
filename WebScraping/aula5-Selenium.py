from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By

firefox_options = Options()
firefox_options.add_argument("--width=1920")
firefox_options.add_argument("--height=1080")
firefox_options.headless = True 

driver = webdriver.Firefox(options=firefox_options)

driver.get("https://quotes.toscrape.com")

login_page_button = driver.find_element(By.XPATH, '/html/body/div/div[1]/div[2]/p/a')
login_page_button.click()

login_username = driver.find_element(By.XPATH, '//*[@id="username"]')
login_username.send_keys("admin")

login_pass = driver.find_element(By.XPATH, '//*[@id="password"]')
login_pass.send_keys("admin")

login_submit_button = driver.find_element(By.XPATH, '/html/body/div/form/input[2]')
login_submit_button.click()