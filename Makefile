
build: components index.js menu.css
	@component build

components: component.json
	@component install

test: build
	@open test/index.html

clean:
	rm -fr build components


.PHONY: clean test

