serve:
	./node_modules/.bin/live-server

build:
	./node_modules/.bin/jsx src/ build/

wathc:
	./node_modules/.bin/jsx --watch src/ build/

install:
	npm install