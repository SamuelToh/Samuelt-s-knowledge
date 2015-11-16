## \<div\> VS \<table\> - Why should we not use \<table\> as HTML layout? ##
In layman's term a HTML table tag and a div tag, styled as a table using the "display:table" css, are no different in anyway but they each have a different purpose.
<p>
Table is designed to hold presentation whereas a div equipped with table-like styling are for giving structure to a web page. Since table and the table-styled div element are the same implementation why can't table be used for giving structure to web page? Obviously it can but there are disadvantages.

<ul>
  <li>It will take too many <b>Table, Tr, Td, Th</b> markups give structure to a web page thus making the size of a html page relatively larger than those who styles a div as a table using a few lines of CSS. Hence the latter loads faster than the former. *<b>Note</b>* not forgetting the invisible spacer gifs which blows up the file size even more for table strategy. <b>Note Note</b> this can however counter by using proper padding and margin from css. </li>

  <li>
    It is difficult to maintain a consistent style for a web application if table tags are used. Unlike div styling, all a developer need is to update a css file and all styling will be updated consistently.
  </li>

  <li>
    Table strategy is not search engine optimized. Minimizing markup in a page and using header tags properly will help improve page ranking. Reducing the ratio of code to content, using keywords in header tags and replacing header gifs with actual text will all help a site get better search ranking.
  </li>

  <li>
    Web pages should comply to HTML standards. That is, only use the appropriate tag for the right reason. Simply because HTML markup standard exists for a reason, so it make sense to developers. When dev sees table they know that presentation data are supposed to live there.
  </li>
</ul>
