#!/bin/bash
echo "A quelle heure souhaitez-vous mettre le reveil ?"
read date
echo Okay ! Je vous reveillerais le $(date --date="$date").
if [ $1 = '-c' ]
then
	echo "A quelle heure souhaitez-vous mettre le chauffage ?"
	read chauffage
	echo Okay! Je vous reveillerais le $(date --date="$chauffage").
	sleep $(( $(date --date="$chauffage" +%s) - $(date +%s) ));
	./power.sh on 2
	./power.sh on 2
	./power.sh on 2
fi

sleep $(( $(date --date="$date" +%s) - $(date +%s) ));
echo "Wake up!"
./power.sh on 1
#mpg321 AC_DC-Back_In_Black.mp3
sleep 120
./power.sh off 1
./power.sh off 2
