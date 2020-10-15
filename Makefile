serve:
	http-server ./ -p 8084

cache:
	@for file in $(shell ls ./animations); do \
		echo $${file}; \
		$(addsuffix "$${file}", cached); \
	done;