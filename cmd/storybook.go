package main

import (
	"context"
	"log"
	"net/url"

	"github.com/a-h/templ/storybook"
	"github.com/rotemhoresh/shadcn-templ/ui/button"
)

func main() {
	s := storybook.New(storybook.WithHeader(`<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script src="https://cdn.tailwindcss.com"></script>`))
	s.AddComponent("button", button.Root, storybook.Arg{
		Name:    "content",
		Value:   "val",
		Control: "con",
		Get: func(q url.Values) interface{} {
			return q.Get("content")
		},
	})

	// if err := s.Build(context.Background()); err != nil {
	// 	log.Fatalln(err)
	// }

	if err := s.ListenAndServeWithContext(context.Background()); err != nil {
		log.Fatalln(err)
	}
}
