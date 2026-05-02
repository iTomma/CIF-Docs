---
id: localization
title: Localization
sidebar_position: 7
---

# Localization

Add translations directly in any item definition file using `<lang>.<field>` keys:

```
en.name    = Iron Helmet
de.name    = Eisenhelm
zh-CN.name = 铁盔

en.flavor  = Heavy, but reliable.
de.flavor  = Schwer, aber zuverlässig.
```

Language codes accept three formats:

| Format | Example |
|---|---|
| ISO-639-1 short code | `en`, `de`, `zh-CN` |
| Lowercase full name | `german` |
| Full I2 language name | `German` |

---

## Splitting loca into a separate file

Because localization keys are accumulated across all files with the same `id`, you can keep translations in a dedicated file. This works well for keeping your main item file tidy:

```
# myHelmet/base.txt
id           = myHelmet
display_name = Iron Helmet
slot_type    = Head
...

# myHelmet/loca.txt
id     = myHelmet
en.name   = Iron Helmet
de.name   = Eisenhelm
en.flavor = Heavy, but reliable.
de.flavor = Schwer, aber zuverlässig.
```

The loca file doesn't need `priority` or any non-loca keys: it's merged automatically.
