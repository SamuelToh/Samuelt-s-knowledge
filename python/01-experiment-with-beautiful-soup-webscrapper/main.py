#
# This exercise was motivated by a stackoverflow question.
# Someone was asking for a web scrapper to print all event date from
# this site: http://gigs.gigatools.com/user/Danny/archive
#

from bs4 import BeautifulSoup
import requests

# Main
print "Executing web scrapper..."

response  = requests.get("http://gigs.gigatools.com/user/Danny/archive")
web_data = response.text
soup = BeautifulSoup(web_data)

events=soup.find('div', attrs={'class':'events'})

for event_div in events.findAll('div'):
    try:
        if(event_div.get("class")[0] == "monthLeft"):  month = event_div.text.strip()
        if(event_div.get("class")[0] == "day"): day = event_div.text.strip()
        if(event_div.get("class")[0] == "number"): number = event_div.text.strip()
        #result.append("Event date -> " + month + " " + day + " " + number)
        print (month + " " + day + " " + number)
    except:
        print "Cannot parse event div content:" + str(event_div)
        day = ""

print "Done"
