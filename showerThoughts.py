from selenium import webdriver
import time 

driver = webdriver.Firefox()

url = 'https://www.reddit.com/r/Showerthoughts/'

writer = open("shower_10.txt", "w")

def get_page():
	time.sleep(2)

	titles = driver.find_elements_by_css_selector('a.title')

	for title in titles:
		print title.text
		writer.write(title.text.encode('utf-8') + "\n")

	driver.find_element_by_css_selector('span.next-button').click()


driver.get(url)
for i in range(10):
	get_page()
	writer.write("\n\n")
writer.close()
driver.quit()