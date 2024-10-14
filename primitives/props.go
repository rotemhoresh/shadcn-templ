package primitives

import "github.com/a-h/templ"

//
// type Option[T CorePropsInter] func(T)
//
// // Sets the class
// func WithClass[T CorePropsInter](c string) Option[T] {
// 	return func(p T) {
// 		p.SetClass(c)
// 	}
// }
//
// // Sets the attributes
// func WithAttrs[T CorePropsInter](a templ.Attributes) Option[T] {
// 	return func(p T) {
// 		p.SetAttrs(a)
// 	}
// }
//
// // Adds an attribute
// func WithAttr[T CorePropsInter](k string, v any) Option[T] {
// 	return func(p T) {
// 		p.SetAttr(k, v)
// 	}
// }

type CoreProps struct {
	Class string
	Attrs templ.Attributes
}

func (p *CoreProps) AddAttr(k string, v any) {
	if p.Attrs == nil {
		p.Attrs = templ.Attributes{}
	}
	if k != "" && v != nil {
		p.Attrs[k] = v
	}
}

//
// // assert interface implementation
// var _ CorePropsInter = (*CoreProps)(nil)
//
// type CorePropsInter interface {
// 	SetClass(string)
// 	SetAttrs(templ.Attributes)
// 	SetAttr(string, any)
// 	Class() string
// 	Attrs() templ.Attributes
// }
//
// func (p *CoreProps) SetClass(c string) {
// 	p.class = c
// }
//
// func (p *CoreProps) SetAttrs(a templ.Attributes) {
// 	p.attrs = a
// }
//
// func (p *CoreProps) SetAttr(k string, v any) {
// 	p.attrs[k] = v
// }
//
// func (p *CoreProps) Class() string {
// 	return p.class
// }
//
// func (p *CoreProps) Attrs() templ.Attributes {
// 	return p.attrs
// }
