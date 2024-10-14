package dialog

import (
	"fmt"

	p "github.com/rotemhoresh/shadcn-templ/primitives"
)

const scopeName = "dialog"

var control = p.Prop("open")

func getState(c string) string {
	return fmt.Sprintf("%s ? 'open' : 'closed'", c)
}
