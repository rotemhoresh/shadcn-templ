package primitives

import (
	"fmt"
	"strings"

	"github.com/a-h/templ"
)

const (
	propPrefix = "shadcntempl"
)

// Id returns a string to be used with alpine's `:id` directive.
//
// example:
//
//	<span :id={ Id("label", "header") }></span>
//	// :id="`${$id('label')}:header`"
func Id(scope, postfix string) string {
	return fmt.Sprintf("`${$id('%s')}:%s`", scope, postfix)
}

// Scope returns a string to define an alpine id scope using the `x-id` directive.
func Scope(name string) string {
	return fmt.Sprintf("['%s']", name)
}

type Data map[string]string

func (d Data) String() string {
	var b strings.Builder
	b.WriteString("{ ")
	for k, v := range d {
		if k != "" && v != "" {
			b.WriteString(fmt.Sprintf("%s: %s, ", k, v))
		}
	}
	b.WriteString("}")
	return b.String()
}

// Data builds a `x-data` directive from a map.
//
// example:
//
//	Data({{ "state", "'open'" }})
//	// "{ state: 'open', }"
// func Data(kvs XData) string {
// 	var b strings.Builder
// 	b.WriteString("{ ")
// 	for k, v := range kvs {
// 		if k != "" && v != "" {
// 			b.WriteString(fmt.Sprintf("%s: %s, ", k, v))
// 		}
// 	}
// 	b.WriteString("}")
// 	return b.String()
// }

// Prop formats a string to be a shadcn-templ prop.
//
// example:
//
//	x-data={ Data({{ Prop("open"), "false" }}) }
//	// x-data="{ shadcntempl_open: false, }"
func Prop(p string) string {
	return fmt.Sprintf("%s_%s", propPrefix, p)
}

// ExtractClass takes the class attribute, returns it, and DELETES it.
// If no class is defined, returns an empty string.
func ExtractClass(attrs templ.Attributes) any {
	if class, ok := attrs["class"]; ok {
		delete(attrs, "class")
		return class
	}
	return ""
}
