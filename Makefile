serve:
	http-server ./ -p 8084

cache:
	echo '> generating cache'
	node animations.script.js

watch:
	watch "make cache" animations