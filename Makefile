gen:
	templ generate
	./tailwindcss -i ./static/css/input.css -o ./static/css/output.css --minify
	go generate ./...

sb:
	go run ./cmd/storybook.go
