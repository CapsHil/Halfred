#! /bin/sh
speak=$(cat .speak);
mpg321 "http://translate.google.com/translate_tts?tl=fr&q=$speak"
