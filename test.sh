#! /bin/sh


echo $1 | python -c 'import sys,urllib;sys.stdout.write(urllib.quote(sys.stdin.read()))' > .test

echo $1
