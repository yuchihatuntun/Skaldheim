---
UID: 
aliases: 
tags: Anime
cssClasses: cards
---

```dataviewjs
let pages = dv.pages('"ダイエーオタクのアニメ蔵/Anime/data/files"')
	.sort(p => p.year, 'desc');
// Create table
dv.table(["Cover","CN","Category","tags","year/month","Class/Episodes","MediaInfo","Production"],
	 pages.map(p => [`<img class="myTableImg"
src="${app.vault.adapter.getResourcePath("ダイエーオタクのアニメ蔵/Anime/cover/" + p.Cover)}">`,
	 ("**[[" + p.CN + "]]**"),
	 ("📚" + " " + "[[" + p.Category + "]]"),
	 ("📌" + " " + "[[" + (p.tags[0] + p.tags[1]) + "]]" + p.tags[2] +  "[[" + (p.tags[3] + p.tags[4]) + "]]" + p.tags[5] + "[[" + (p.tags[6] + p.tags[7]) + "]]"),
	 ("📅" + " " + "[[" + p.year + "]]" + "-" + "[[" + p.month + "]]"),
	 ("📺" + " " + "[[" + p.Class + "]]" + " " + "[[" + p.Episodes + "]]"),
	 ("💿" + " " + "[[" + p.MediaInfo + "]]"),
	 ("🏢" + " " + "[[" + p.Production + "]]"),
	 ]));
```
