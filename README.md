# Kandaipolis
xaringan theme for Kansai University inspired by Metropolis

## How to use
1. Download `sample.Rmd` and all files in `libs` folder.
   * `kandaipolis_small.css` is a CSS file with small font size (12px)
2. Modify the `.Rmd` file
   * Please pay attention to `.css` and `.js` paths (l.9 and 12).
3. Enjoy!

## Sample

You can see the sample slide [here](Sample.pdf).

## Sample Code

`sample.Rmd`

````markdown
---
title: "Kandaipolis"
subtitle: "A {xaringan} theme for Kansai University inspired by Metropolis"
author: "Jaehyun Song"
institute: "Faculty of Informatics, Kansai University"
date: "2021/5/18 (updated: `r Sys.Date()`)"
output:
  xaringan::moon_reader:
    css: ["lib/kandaipolis.css", "lib/kandaipolis-fonts.css"]
    lib_dir: libs
    nature:
      beforeInit: ["lib/kandaipolis-macro.js"]
      highlightStyle: github
      highlightLines: true
      highlightSpans: off
      countIncrementalSlides: false
    yolo: false
    seal: true
editor_options: 
  chunk_output_type: console
---

# Usage

* Kandaipolis is {xaringan} theme inspired by Metropolis. Usage is same to xaringan and remark.js. For detail, see [{xaringan} github page](https://github.com/yihui/xaringan).
* Kandaipolis provides some useful macros, such as alignment of text or image, three columns, image scaling.

---

class: inverse, center, middle, mline

# Section Page

---
# Two Columns (5:5)

.pull-left[

.center[(48%)]

]
.pull-right[

.center[(48%)]

]

---
# Two Columns (3:7)

.left-column[

.center[(30%)]

]
.right-column[

.center[(69%)]

]

---
# Three Columns

.pull-left3[

.center[(32%)]

]
.pull-center3[

.center[(32%)]

]
.pull-right3[

.center[(32%)]

]

---
# Macros

**Align**

.center[(Center)]

**Image Scaling**

.pull-left3[

.center[
30%

![:scale 30%](Figs/Song.png)
]

]
.pull-center3[

.center[
50%

![:scale 50%](Figs/Song.png)
]

]
.pull-right3[

.center[
100%

![:scale 100%](Figs/Song.png)
]

]

`![:width 100px](Path or URL)` and `![:height 100px](Path or URL)` are also available.

---
# Font size

`.font00[]` and `.code00[]` are available.
* Font: 10~200 (by 10)
* Code: 10~100 (by 10)

### Example

* 50%
   * .font50[Example]
  .code50[
  ```r
  print("Hello world!")
  ```
  ]

* 150%
   * .font150[Example]
````
