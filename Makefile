gen:
	templ generate
	./tailwindcss -i ./static/css/input.css -o ./static/css/output.css --minify
	go generate ./...
