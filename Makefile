serve:
	./node_modules/.bin/live-server

build:
	./node_modules/.bin/jsx src/ build/

watch:
	./node_modules/.bin/jsx --watch src/ build/

install:
	npm install

dpd:
	cd deployd && cd Todo && dpd