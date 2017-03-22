from selenium import webdriver
import time 
import os
import datetime as dt
import subprocess

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

for i in range(4):
	get_page()
        
driver.quit()

thoughts_str = " [[slnc 1000]] ".join(thoughts_arr)
thoughts_str_clean = thoughts_str.replace("'", " ") 

date = dt.datetime.today().strftime("%m_%d_%Y")
filename = date + ".aiff"
command = "say -v Lee \"%s\" -o %s" % (thoughts_str_clean, filename)

os.system(command)

subprocess.call(['ffmpeg', '-i', date + '.aiff', date + '.mp3'])


