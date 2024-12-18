// Code generated by templ - DO NOT EDIT.

// templ: version: v0.2.778
package dialog

//lint:file-ignore SA4006 This context is only used if a nested component is present.

import "github.com/a-h/templ"
import templruntime "github.com/a-h/templ/runtime"

import (
	twmerge "github.com/Oudwins/tailwind-merge-go"
	"github.com/rotemhoresh/shadcn-templ/primitives/dialog"
)

const overlayClass = "fixed inset-0 z-50 bg-black/80 fill-mode-forwards"

type OverlayProps = dialog.OverlayProps

func Overlay(props OverlayProps) templ.Component {
	props.Class = twmerge.Merge(overlayClass, props.Class)
	props.AddAttr("x-transition:enter", "animate-in fade-in-0")
	props.AddAttr("x-transition:leave", "animate-out fade-out-0")
	return dialog.Overlay(props)
}

var _ = templruntime.GeneratedTemplate
