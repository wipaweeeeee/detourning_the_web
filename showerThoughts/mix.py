import requests
import sys
import datetime as dt

date = dt.datetime.today().strftime("%m_%d_%Y")
filename = date + '.mp3'
songname_date = dt.datetime.today().strftime("%B %d %Y")

base_url = "https://api.mixcloud.com/upload/"

files = [
	('mp3', open(filename, 'rb')),
]

data = [
	('name', songname_date),
	('sections-0-artist', 'shower curtain'),
	('sections-0-song', songname_date),
	('description', 'Daily shower thoughts for ' + songname_date),
]

r = requests.post('https://api.mixcloud.com/upload/?access_token=ACCESSTOKEN', files=files, data=data)

