serve:
	node server.js

bootstrap:
	npm install

test:
	NODE_PATH=. npm run test

build:
	mkdir -p dist
	NODE_PATH=. NODE_ENV=development ./node_modules/.bin/webpack -p --config webpack.config.js

build-prod:
	cp -r index.html css dist
	NODE_PATH=. NODE_ENV=production ./node_modules/.bin/webpack -p --config webpack.production.js

clean:
	rm -rf dist

.PHONY: test build build-prod clean
