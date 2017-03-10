from selenium import webdriver
import time 
import os

driver = webdriver.Firefox()

url = 'https://www.reddit.com/r/Showerthoughts/'
thoughts_arr = []

def get_page():
        time.sleep(2)
	titles = driver.find_elements_by_css_selector('a.title')

	for title in titles:
		thoughts_arr.append(title.text.encode('utf-8'))

	driver.find_element_by_css_selector('span.next-button').click()

driver.get(url)

for i in range(10):
	get_page()
        
driver.quit()


thoughts_str = " [[slnc 3000]] ".join(thoughts_arr)
thoughts_str_clean = thoughts_str.replace("'", " ") # Look, I can explain...

# You should consider naming the file as <today's date>.aiff
command = "say -v Tessa \"%s\" -o shower.aiff" % thoughts_str_clean
os.system(command)
