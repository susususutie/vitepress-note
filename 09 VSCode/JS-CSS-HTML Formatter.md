# JS-CSS-HTML Formatter

VS-code 中用到`JS-CSS-HTML Formatter`这个格式化插件，这个插件的格式化规则遵循`js-beautify`的语法，记录下各配置字段的意思。

1. 按下F1, 输入 Formatter, 点击Formatter Config打开配置文件(如下)。
2. 按需更改配置文件，保存后重启编辑器。

```javascript
{
  "onSave": true,
  "javascript": {
    "indent_size": 2,
    "indent_char": " ",
    "eol": "auto",
    "preserve_newlines": true,
    "break_chained_methods": false,
    "max_preserve_newlines": 0,
    "space_in_paren": false,
    "space_in_empty_paren": false,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "keep_array_indentation": false,
    "space_before_conditional": true,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "e4x": false,
    "end_with_newline": false,
    "comma_first": false,
    "brace_style": "collapse-preserve-inline"
  },
  "css": {
    "indent_size": 2,
    "indentCharacter": " ",
    "indent_char": " ",
    "selector_separator_newline": true,
    "end_with_newline": false,
    "newline_between_rules": true,
    "eol": "\n"
  },
  "html": {
    "indent_inner_html": false,
    "indent_size": 2,
    "indent_char": " ",
    "indent_character": " "
  }
}
```


| 配置 | 适用格式 | 数据类型] | 详细描述 | 默认值 |
| :--- | :--- | :--- | :--- | :--- |
| eol | _All_ | String | **end-of-line 换行方式LF/CRLF,`\n`,`\r\n`,`\r`** | "\n" |
| end_with_newline | _All_ | Boolean | **文件末行是否添加空行** | false |
| indent_char | _All_ | String | **缩进字符** | " " |
| indent_size | _All_ | Integer | **缩进大小** | 4 |
| indent_with_tabs | _All_ | Boolean | **以tab键缩进,会覆盖`indent_size`和`indent_char`** | false |
| preserve_newlines | _All_ | Boolean | **是否保留空行** | true |
| max_preserve_newlines | JS, HTML | Integer | **最多保留的空行数，当`preserve_newlines`为`true`时才生效** | 10 |
| wrap_line_length | JS, HTML | Integer | **指定字符数之后的行应在下一次可换行时换行，设为0不换行** | 0 |
| extra_liners | HTML | Array<String> | **数组中的标签，其后保留空行** | ["head", "body", "/html"] |
| indent_body_inner_html | HTML | Boolean | **是否缩进`<body>`内的部分** | true |
| indent_handlebars | HTML | Boolean | **对HTML中双重花括号内JS进行缩进和格式化`{{#foo}}`,`{{/foo}}`** | false |
| indent_head_inner_html | HTML | Boolean | **是否缩进`<head>`内的部分** | true |
| indent_inner_html | HTML | Boolean | **是否缩进`<head>`和`<body>`** | false |
| indent_scripts | HTML | String | **对html中scripts的代码缩进规则，"keep", "separate"不缩进,"normal"正常缩进** | "normal" |
| inline | HTML | Array<String> |  | [ "a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt" ] |
| wrap_attributes | HTML | String | **属性换行"auto", "force", "force-aligned", "force-expand-multiline", "align-multiple", "preserve", or "preserve-aligned"** | "auto" |
| wrap_attributes_indent_size | HTML | Boolean | **Indent wrapped attributes to after N characters. Defaults to 'indent_size'.** | false |
| unformatted | HTML | Array<String> | **不需换行的元素** | [] |
| content_unformatted | HTML | Array<String> | **该元素内部不进行格式化，保留换行符** | ["pre", "textarea"] |
| void_elements | HTML | Array<String> | **HTML的自封闭标签** | ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "?=", "basefont", "isindex"] |
| newline_between_rules | CSS | Boolean | **在每个css规则之后添加一行新行** | false |
| selector_separator_newline | CSS | Boolean | **选择器换行** | true |
| space_around_combinator | CSS | Boolean | **选择器后添加空格** | false |
| brace_style | JS | String | **控制大括号位置 "collapse"将大括号放在控制语句所在行, "expand"将大括号放在单独一行中, "end-expand"将结束大括号放在单独一行中, "none"尝试将其保留在原位置, "collapse,preserve-inline", "expand,preserve-inline", "end-expand,preserve-inline", or "none,preserve-inline"** | "collapse" |
| break_chained_methods | JS | Boolean | **链式调用的函数间是否允许保留换行** | false |
| comma_first | JS | Boolean | **以逗号换行时，逗号应在行首** | false |
| e4x | JS | Boolean | **Pass E4X xml literals through untouched.** | false |
| indent_level | JS | Integer | **初始缩进级别** | 0 |
| jslint_happy | JS | Boolean | **是否采用jslint-stricter模式(Forces 'space_after_anon_function')** | false |
| keep_array_indentation | JS | Boolean | **是否保留数组中的换行符** | false |
| keep_function_indentation | JS | Boolean | **保留函数缩进** | false |
| operator_position | JS | String | **如果将长条件表达式分成多行，则该标记用于定义运算符在行中的位置。"before-newline", "after-newline", or "preserve-newline"** | "before-newline" |
| space_after_anon_function | JS | Boolean | **是否在匿名函数的圆括号前添加空格`function ()`** | false |
| space_after_named_function | JS | Boolean | **是否在命名函数的圆括号前添加空格`function foo ()`.** | false |
| space_before_conditional | JS | Boolean | **是否在条件语句前添加空格`if ()`** | true |
| space_in_empty_paren | JS | Boolean | **在空括号内添加空格`f( )`.** | false |
| space_in_paren | JS | Boolean | **在圆括号内添加空格`f( a, b )`.** | false |
| unescape_strings | JS | Boolean | **不格式化转义字符** | false |
| unindent_chained_methods | JS | Boolean | **Unindent chained methods** |  |


[https://github.com/HookyQR/VSCodeBeautify/edit/master/Settings.md](https://github.com/HookyQR/VSCodeBeautify/edit/master/Settings.md)
