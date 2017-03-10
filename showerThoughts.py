from selenium import webdriver
import time 
import os

driver = webdriver.Firefox()

url = 'https://www.reddit.com/r/Showerthoughts/'
thoughts = []

def get_page():
	time.sleep(2)

	titles = driver.find_elements_by_css_selector('a.title')

	for title in titles:
		# print title.text
		thoughts.append(title.text.encode('utf-8'))

	driver.find_element_by_css_selector('span.next-button').click()


driver.get(url)
for i in range(10):
	get_page()
driver.quit()

for thought in thoughts:
	command = "say -v Alex \"%s\"" % thought
	os.system(command)
