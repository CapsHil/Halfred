#! /bin/sh

if [ $1 = 'on' ]
then
        sudo rcswitch-pi/send 10101 $2 1;
elif [ $1 = 'off' ]
then
        sudo rcswitch-pi/send 10101 $2 0;
fi
