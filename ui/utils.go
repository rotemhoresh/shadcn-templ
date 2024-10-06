package ui

import "github.com/a-h/templ"

// boolAttr checks if an attribute exists and has a true value - `true` (bool) or `"true"` (string).
func boolAttr(attr string, attrs templ.Attributes) bool {
	if v, ok := attrs[attr]; ok {
		if boolV, ok := v.(bool); ok && boolV {
			return true
		} else if stringV, ok := v.(string); ok && stringV == "true" {
			return true
		}
	}
	return false
}
