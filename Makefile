serve:
	./node_modules/.bin/http-server -p 8000

build:
	./node_modules/.bin/jsx src/ build/

watch:
	./node_modules/.bin/jsx --watch src/ build/

dpd:
	cd deployd && cd Todo && dpd

install:
	npm install
