# Shadcn/ui port for Go + Templ + Alpine.js + Tailwind CSS

[![Go Reference](https://pkg.go.dev/badge/github.com/rotemhoresh/shadcn-templ.svg)](https://pkg.go.dev/github.com/rotemhoresh/shadcn-templ)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Go Report Card](https://goreportcard.com/badge/github.com/rotemhoresh/shadcn-templ)](https://goreportcard.com/report/github.com/rotemhoresh/shadcn-templ)

### Note

**The codebase is going through a change in structure, so it's currently a bit messy**

This is a work in proccess. 

- Not all the components from shadcn/ui are implemented.
- There are refinements needed for some of the components - alpine.js naming, unfinished accessibility, improvements I want to make, etc.
- Some components might contain behavior that existed for previous needs (I detached the developement of this from another project). Hopefully will be fixed in the future.

## Overview

A [shadcn/ui](https://ui.shadcn.com/) port using [Go](https://go.dev/), [Templ](https://templ.guide/), [Alpine.js](https://alpinejs.dev/) and [Tailwind CSS](https://tailwindcss.com/).

### Components

[issue](https://github.com/rotemhoresh/shadcn-templ/issues/1#issue-2570468143).

### Roadmap

- Adding all the components from shadcn/ui
- Making sure the components are of good quality: Accessibility, Correct functionality, Style, etc.
- Creating a CLI to have a flow similar to shadcn's.

### Usage 

You have to include the [Head](https://github.com/rotemhoresh/shadcn-templ/blob/main/include.templ#L4) component in your `head` tag (it includes the neccessery scripts - Alpine.js and a theme script).
You have to serve the [CSS](https://github.com/rotemhoresh/shadcn-templ/blob/main/css.go#L10) var and link to it in your `head` tag.

Example:

```go
router.HandleFunc("GET /static/css/styles.css", func(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "text/css")
  w.Write(shadcntempl.CSS)
})
```

```templ
templ Layout() {
  <!DOCTYPE html>
	<html lang="en">
		<head>
			// ...
			@shadcntempl.Head()
			<link rel="stylesheet" href="/static/css/styles.css"/>
		</head>
		<body>
			{ children... }
		</body>
	</html>

}
```

### Example

Use in `.templ` files.

```templ
import "github.com/rotemhoresh/shadcn-templ/ui/button"

templ Page() {
  @button.Root(button.RootProps{}) {
    Click me
  }
}
```

### Design

The components props (parameters) is structures like this:

```go
type Props struct {
  <COMPONENT_SPECIFIC_PROPS>
  p.CoreProps // Class and Attrs 
}
```

For example, the `button.Root`'s props:

```go
type RootProps struct {
	Type    Type    // default: [TypeButton]
	Variant Variant // default: [VariantDefault]
	Size    Size    // default: [SizeDefault]
	p.CoreProps
}
```

The components are written with constant referencing to the shadcn/ui source code and the underlying radix components. 

## Contributing

Contributions are welcome for both new components and improvements for existing ones.

Make sure to read the README and go over the codebase to understand the design choices and overall coding style as well as getting familiar with shadcn/ui.

### License 

MIT
