package components

import _ "embed"

// The compiled CSS used in this module.
//
// You need to include a path that serves this in your head tag.
//
//go:embed static/css/output.css
var CSS []byte
