// Code generated by templ - DO NOT EDIT.

// templ: version: v0.2.778
package button

//lint:file-ignore SA4006 This context is only used if a nested component is present.

import "github.com/a-h/templ"
import templruntime "github.com/a-h/templ/runtime"

import (
	"github.com/Oudwins/tailwind-merge-go/pkg/twmerge"
	"github.com/rotemhoresh/shadcn-templ/ui"
)

const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

type Type int

const (
	TypeButton Type = iota
	TypeSubmit
	TypeReset
)

func (t Type) String() string {
	switch t {
	case TypeSubmit:
		return "submit"
	case TypeReset:
		return "reset"
	default:
		return "button"
	}
}

type Variant int

const (
	VariantDefault Variant = iota
	VariantDestructive
	VariantSecondary
	VariantOutline
	VariantGhost
	VariantLink
)

func (v Variant) Class() string {
	switch v {
	case VariantDestructive:
		return "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
	case VariantSecondary:
		return "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
	case VariantOutline:
		return "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
	case VariantGhost:
		return "hover:bg-accent hover:text-accent-foreground"
	case VariantLink:
		return "text-primary underline-offset-4 hover:underline"
	default:
		return "bg-primary text-primary-foreground shadow hover:bg-primary/90"
	}
}

type Size int

const (
	SizeDefault Size = iota
	SizeSmall
	SizeLarge
	SizeIcon
)

func (s Size) Class() string {
	switch s {
	case SizeSmall:
		return "h-8 rounded-md px-3 text-xs"
	case SizeLarge:
		return "h-10 rounded-md px-8"
	case SizeIcon:
		return "h-9 w-9"
	default:
		return "h-9 px-4 py-2"
	}
}

type RootOption = ui.Option[*RootProps]

func WithType(t Type) RootOption {
	return func(p *RootProps) {
		p.Type = t
	}
}

func WithVariant(v Variant) RootOption {
	return func(p *RootProps) {
		p.Variant = v
	}
}

func WithSize(s Size) RootOption {
	return func(p *RootProps) {
		p.Size = s
	}
}

//go:generate go run ../optalias_generator.go -type=RootProps

type RootProps struct {
	Type    Type
	Variant Variant
	Size    Size
	ui.CoreProps
}

func Root(opts ...RootOption) templ.Component {
	p := &RootProps{
		Type:      TypeButton,
		Variant:   VariantDefault,
		Size:      SizeDefault,
		CoreProps: ui.DefaultCoreProps,
	}
	for _, opt := range opts {
		opt(p)
	}
	return root(p)
}

func root(props *RootProps) templ.Component {
	return templruntime.GeneratedTemplate(func(templ_7745c5c3_Input templruntime.GeneratedComponentInput) (templ_7745c5c3_Err error) {
		templ_7745c5c3_W, ctx := templ_7745c5c3_Input.Writer, templ_7745c5c3_Input.Context
		if templ_7745c5c3_CtxErr := ctx.Err(); templ_7745c5c3_CtxErr != nil {
			return templ_7745c5c3_CtxErr
		}
		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templruntime.GetBuffer(templ_7745c5c3_W)
		if !templ_7745c5c3_IsBuffer {
			defer func() {
				templ_7745c5c3_BufErr := templruntime.ReleaseBuffer(templ_7745c5c3_Buffer)
				if templ_7745c5c3_Err == nil {
					templ_7745c5c3_Err = templ_7745c5c3_BufErr
				}
			}()
		}
		ctx = templ.InitializeContext(ctx)
		templ_7745c5c3_Var1 := templ.GetChildren(ctx)
		if templ_7745c5c3_Var1 == nil {
			templ_7745c5c3_Var1 = templ.NopComponent
		}
		ctx = templ.ClearChildren(ctx)
		var templ_7745c5c3_Var2 = []any{twmerge.Merge(baseClass, props.Variant.Class(), props.Size.Class(), props.Class())}
		templ_7745c5c3_Err = templ.RenderCSSItems(ctx, templ_7745c5c3_Buffer, templ_7745c5c3_Var2...)
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("<button type=\"")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		var templ_7745c5c3_Var3 string
		templ_7745c5c3_Var3, templ_7745c5c3_Err = templ.JoinStringErrs(props.Type.String())
		if templ_7745c5c3_Err != nil {
			return templ.Error{Err: templ_7745c5c3_Err, FileName: `ui/button/root.templ`, Line: 123, Col: 28}
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString(templ.EscapeString(templ_7745c5c3_Var3))
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("\" class=\"")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		var templ_7745c5c3_Var4 string
		templ_7745c5c3_Var4, templ_7745c5c3_Err = templ.JoinStringErrs(templ.CSSClasses(templ_7745c5c3_Var2).String())
		if templ_7745c5c3_Err != nil {
			return templ.Error{Err: templ_7745c5c3_Err, FileName: `ui/button/root.templ`, Line: 1, Col: 0}
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString(templ.EscapeString(templ_7745c5c3_Var4))
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("\"")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		templ_7745c5c3_Err = templ.RenderAttributes(ctx, templ_7745c5c3_Buffer, props.Attrs())
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString(">")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		templ_7745c5c3_Err = templ_7745c5c3_Var1.Render(ctx, templ_7745c5c3_Buffer)
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("</button>")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		return templ_7745c5c3_Err
	})
}

var _ = templruntime.GeneratedTemplate
