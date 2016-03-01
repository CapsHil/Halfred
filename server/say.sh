#! /bin/sh
if [ $1 = '-i' ]
then
	nodejs itineraire.js > .itineraire;
	cat .itineraire | python -c 'import sys,urllib;sys.stdout.write(urllib.quote(sys.stdin.read()))' > .speak
elif [ $1 = '-w' ]
then
	nodejs meteo.js > .weather;
	cat .weather | python -c 'import sys,urllib;sys.stdout.write(urllib.quote(sys.stdin.read()))' > .speak
	cat .weather
	cat .speak
else 
	echo $1 | python -c 'import sys,urllib;sys.stdout.write(urllib.quote(sys.stdin.read()))' > .speak;
fi
	speak=$(cat .speak);
	mpg321 "http://translate.google.com/translate_tts?tl=fr&q=$speak"
