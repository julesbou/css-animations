serve:
	http-server ./ -p 8084

cache:
	node animations.script.js

watch:
	watch "make cache" animations --wait=1