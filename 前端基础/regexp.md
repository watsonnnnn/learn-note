### 正则表达式


### exec
加g修饰符后，exec可以duoci 执行，下次搜索位置从上次匹配成功结束的位置开始
<pre>
var r = /a(b+)a/g;
var s = '_abbba_aba_';

while(true) {
  var match = r.exec(s);
  if (!match) break;
  console.log(match[1]);
}
</pre>

### 字符类
字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如[xyz] 表示x、y、z之中任选一个匹配。

* 脱字符（^）

如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配。

如果方括号内没有其他字符，即只有[^]，就表示匹配一切字符，其中包括换行符，而点号（.）是不包括换行符的。

### 贪婪匹配
正则默认为贪婪匹配，就是说最大可能的匹配，直到不满足规则为止。
<pre>
'aaa'.match(/a+/) 结果是['aaa']
</pre>
要想改为非贪婪模式，在量词符后加一个问号
<pre>
'aaa'.match(/a+?/) 结果是['a']
</pre>

### 组匹配
<pre>
/fred+/.test('fredd') // true
上面这种只匹配一个d字母重复
/(fred)+/.test('fredfred') // true
这种表示组匹配
</pre>
<pre>
var m = 'abcabc'.match(/(.)b(.)/);
m
// ['abc', 'a', 'c']
第一个括号捕获a，第二个捕获c。
使用match组匹配时不宜使用g修饰符，否则match方法不会捕获分组内容。
var m = 'abcabc'.match(/(.)b(.)/g);
m
// ['abc', 'abc']
</pre>
在正则表达式内部，可以用\n引用括号匹配的内容，n是从1开始的自然数，表示对应顺序的括号。
<pre>
/(.)b(.)\1b\2/.test("abcabc")
// true
上面的代码中，\1表示前一个括号匹配的内容（即“a”），\2表示第二个括号匹配的内容（即“b”）。
</pre>
组匹配括号嵌套时，\n数字小的到大的表示的括号由外而内
<pre>
/y((..)\2)\1/.test('yabababab') // true
上面代码中，\1指向外层括号，\2指向内层括号。
</pre>
组匹配网页标签
<pre>
var tagName = /<([^>]+)>[^<]*<\/\1>/;
tagName.exec("<b>bold</b>")[1]
// 'b'

//exec组匹配可以用g修饰符
var html = '<b class="hello">Hello</b><i>world</i>';
var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

var match = tag.exec(html);

match[1] // "b"
match[2] // "class="hello""
match[3] // "Hello"

match = tag.exec(html);

match[1] // "i"
match[2] // ""
match[3] // "world"

</pre>

### 非捕获组

(?:x)
<pre>
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"]


// 正常匹配
var url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "http", "google.com", "/"]

// 非捕获组匹配
var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "google.com", "/"]

</pre>

### 先行断言
x(?=y)称为先行断言（Positive look-ahead），x只有在y前面才匹配，y不会被计入返回结果。比如，要匹配后面跟着百分号的数字，可以写成/\d+(?=%)/。

“先行断言”中，括号里的部分是不会返回的。
<pre>
var m = 'abc'.match(/b(?=c)/);
m // ["b"]
</pre>

### 先行否定断言
x(?!y)称为先行否定断言（Negative look-ahead），x只有不在y前面才匹配，y不会被计入返回结果。比如，要匹配后面跟的不是百分号的数字，就要写成/\d+(?!%)/。

“先行否定断言”中，括号里的部分是不会返回的。
<pre>
var m = 'abd'.match(/b(?!c)/);
m // ['b']
</pre>


