## emmet練習
- 参考
```
Emmetとは？これだけ知っておけばOK！
https://zenn.dev/miz_dev/articles/6cac5f2e32398d

Emmet cheat-sheat
https://docs.emmet.io/cheat-sheet/
```

- 子供生成 
```
li
<li></li>

ul>li
<ul>
    <li></li>
</ul>
```
- 繰り返し
```
ul>li*3
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

ul>li*3>a.title
<ul>
    <li><a href="" class="title"></a></li>
    <li><a href="" class="title"></a></li>
    <li><a href="" class="title"></a></li>
</ul>
```

- 兄弟生成
```
div+p+bq
<div></div>
<p></p>
<blockquote></blockquote>
```

- 親になる奴
```
div+div>p>span+em^^bq
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

- グルーピングする
```
div>(header>ul>li*2>a)^footer>p
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
</div>
<footer>
    <p></p>
</footer>
```

- ID, Class
```
#header
<div id="header"></div>

div.class-name
<div class="class-name"></div>

div#id-name
<div id="id-name"></div>

p.hoge.fuga.class3
<p class="hoge fuga class3"></p>
```

- 連番
```
ul>li.list$*3
<ul>
    <li class="list1"></li>
    <li class="list2"></li>
    <li class="list3"></li>
</ul>

ul>li.list$$$*5
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>

h$[title=item$$$]{Header $}*3
<h1 title="item001">Header 1</h1>
<h2 title="item002">Header 2</h2>
<h3 title="item003">Header 3</h3>
```

- その他(連番)
```
ul>li.item$@-*5
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>

ul>li.item$@3*5
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

- text挿入
```
h2{neko}
<h2>neko</h2>

p>{Click }+a{here}+{ to continue}
<p>Click <a href="">here</a> to continue</p>
```

- dummyテキスト
```
lorem

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis libero quos, explicabo architecto ipsum corporis cupiditate aperiam accusamus voluptatibus ut distinctio debitis autem doloremque rerum assumenda dolore? Cupiditate, enim ducimus.
```

- 属性をCustom
```
p[title="Hello world"]
<p title="Hello world"></p>

td[rowspan=2 colspan=3 title]
<td rowspan="2" colspan="3" title=""></td>

//なにも指定しないとdivになる
[a="val1" b="val2"]
<div a="val1" b="val2"></div>
```

- tagnameの推論(もちろんdivも)
```
table>.row>.col
<table>
    <tr class="row">
        <td class="col"></td>
    </tr>
</table>

em>.class
<em><span class="class"></span></em>

ul>#id
<ul>
    <li id="id"></li>
</ul>
```

- css関連
```
p : padding: ;
m : margin: ;
m10-20-30-40: margin: 10px 20px 30px 40px;
mb80 : margin-bottom: 80px;

c: color: ;
fz: font-size: ;
fw: font-weight: ;
ff: font-family: ;

fz14: font-size: 14px;
fz1.6r: font-size: 1.6rem;

w: width: ;
h: height: ;
dn: display: none;
bg: backgriound: ;

```