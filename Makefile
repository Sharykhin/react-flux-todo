serve:
	./node_modules/.bin/live-server

build:
	./node_modules/.bin/jsx src/ build/

watch:
	./node_modules/.bin/jsx --watch src/ build/

install:
	npm install