function solve(args){
	var text = args, pattern, matchArray, match=[], i=0,
	j, currentMatch, 
	pattern1, newText, newMatchArray, cLen, mLen;
	text = text.join('');


pattern1 = /<body>/;
if(matchArray = pattern1.exec(text)){
var ind = matchArray.index;
newText = text.slice(ind);
}
else{
	newText = text;
}

pattern = /<a[^>]+?href\s?\s?=\s?\s?"?'?([\^\/a-z0-9\?\+_#\.:!\-A-Z\/\(\)='"]+)/g;
while(newMatchArray = pattern.exec(newText))		
{
	match[i] = newMatchArray[1];
	i+=1;
}	

mLen = match.length;
for(j = 0; j < mLen; j+=1){
	cLen = match[j].length;
	currentMatch = match[j];
	if(currentMatch.charCodeAt(cLen-1) === 34 || currentMatch.charCodeAt(cLen-1) === 39){
		currentMatch = currentMatch.split('');
		currentMatch[cLen-1] = '';
		currentMatch = currentMatch.join('');
		console.log(currentMatch);
	}
	else {
		console.log(currentMatch);
	}	
}	
}

test = [
'<!DOCTYPE html>',
'<html>',
'',
'<head>',
	'<title>Hyperlinks</title>',
	'<link href="theme.css" rel="stylesheet" />',
	'<link rel="dns-prefetch" href="//s.yimg.com"><link rel="dns-prefetch" href="//y.analytics.yahoo.com"><link rel="dns-prefetch" href="//geo.query.yahoo.com">',
	'<link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />',
	'<link href=\'https://fonts.googleapis.com/css?family=PT+Sans:400,700&subset=latin,cyrillic\' rel=\'stylesheet\' type=\'text/css\'>',
	'<link href="/Content/bootstrap/css?v=THER5XG4hyMnZIqomngRLKPhCGCEsfQ7qQirPcgby3U1" rel="stylesheet"/>',
	'<link href="/Content/kendo/css?v=DV0k8Hx0p6p01ql58FDBk9LhVPZdl652mviUoD0AB_c1" rel="stylesheet"/>',
	'<link href="/Content/css?v=uHXsRAaqsZTcusWatpeYiH_q3WHMFmJ4usTzpETXUWs1" rel="stylesheet"/>',
	'<script src="/bundles/modernizr?v=2Cd8JeME-7hc5hAzdQ_aEd88z64SuGgeJlzBbXxfQi01"></script>',
	'<script src="/bundles/kendo?v=LeEgdJj6mLKMo7mWt4jt9pdurCQSIoj4x8eJFg5oSrs1"></script>',
	'<script src="/Scripts/jquery.signalR-2.0.3.min.js"></script>',
	'<script src="/signalr/hubs"></script>',
	'<script src="/bundles/global?v=CgDK6Mgg8ZRkzz0z4dOiziLRCKg05Q_KOP0nMzUuTRw1"></script>',
	'<link href="/Content/administrationReset.css" rel="stylesheet"/>',
'</head>',
'',
'<body>',
'',
	'<ul><li><a   href="/"  id="home">Home</a></li><li><a class="selected" href="/courses">Courses</a>	</li><li><a href = 	\'/forum\' >Forum</a></li><li><a class="href"	onclick="go()" href= "#">Forum</a></li>	<li><a id="js" href =	"javascript:alert(\'hi\')" class="new">click</a><a id="js2" href =\'javascript:alert("hi")\' class="new">click</a></li>	<li><a id=\'nakov\' href =	\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul><a href="#"></a>	<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\' 	alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
'',
'<ul class="uh-more-menu d-n">                <li class="header-item fz-xs"><a data-ylk="t4:mu;elm:itm;elmt:pty;itc:0;rspns:nav" href="http://hsrd.yahoo.com/_ylt=Av01rCkq0sX2JQH8oSTfuO.bvZx4/RV=1/RE=1407602675/RH=aHNyZC55YWhvby5jb20-/RO=2/RU=aHR0cDovL2NlbGVicml0eS55YWhvby5jb20v/RS=^ADAoNG4qGmScajWzEMN2P0j.MS4.Z4-">Celebrity</a></li>                <li class="header-item fz-xs"><a data-ylk="t4:mu;elm:itm;elmt:pty;itc:0;rspns:nav" href="http://hsrd.yahoo.com/_ylt=AuN61KIBznTPTkTGcFHFg1SbvZx4/RV=1/RE=1407602675/RH=aHNyZC55YWhvby5jb20-/RO=2/RU=aHR0cDovL3NoaW5lLnlhaG9vLmNvbS8-/RS=^ADAABGlFvsKbTyuYeLra43h5RW2ANY-">Shine</a></li>                <li class="header-item fz-xs"><a data-ylk="t4:mu;elm:itm;elmt:pty;itc:0;rspns:nav" href="http://hsrd.yahoo.com/_ylt=Ap6L9JtoSHdrLPVyb1VLeYebvZx4/RV=1/RE=1407602675/RH=aHNyZC55YWhvby5jb20-/RO=2/RU=aHR0cHM6Ly93d3cueWFob28uY29tL3RyYXZlbA--/RS=^ADACn9tdLtxp98BWHigGhoNd_TCjmw-">Travel</a></li>                <li class="header-item fz-xs"><a data-ylk="t4:mu;elm:itm;elmt:pty;itc:0;rspns:nav" href="http://hsrd.yahoo.com/_ylt=AvwiMcWG83Pd2GLSYu9MhCebvZx4/RV=1/RE=1407602675/RH=aHNyZC55YWhvby5jb20-/RO=2/RU=aHR0cDovL2F1dG9zLnlhaG9vLmNvbS8-/RS=^ADARx5ezaTryg_k_2k1jNVfnz_S5YA-">Autos</a></li>                <li class="header-item fz-xs"><a data-ylk="t4:mu;elm:itm;elmt:pty;itc:0;rspns:nav" href="http://hsrd.yahoo.com/_ylt=AqiWjHzNLjuMf6Vo_Q0gF1ibvZx4/RV=1/RE=1407602675/RH=aHNyZC55YWhvby5jb20-/RO=2/RU=aHR0cDovL2hvbWVzLnlhaG9vLmNvbS8-/RS=^ADARk3uixOBlyP1R5xP7UQb5ZH7SK0-">Homes</a></li></ul>',
	'',
'<!-- This code is commented:',
  '<a href="#commented">commentex hyperlink</a>',
'-->',
'',
'<a',
 'id="adminUniPartners" ',
'href="/Administration/UniversityPartners"',
 'class="admin-nav-link">',
    '<div>',
        '<img src="/Content/administration/house_two.png" alt="Partners" />',
    '</div>',
'',
    '<span>Partners</span>',
'</a>',
'',
'<nav class="navbar-header">',
	'<a class="navbar-brand" href="/"><span>Software University</span><div class="beta">beta</div></a>',
'</nav>',
'',
'',
'<ul class="social clearfix">',
	'<li><a title="Twitter" target="_blank" href="https://twitter.com/softunibg"><img alt="Twitter" src="/Content/design/twitter.png"></a></li>',
	'<li><a title="Facebook" target="_blank" href="https://www.facebook.com/SoftwareUniversity"><img alt="Facebook" src="/Content/design/facebook.png"></a></li>',
	'<li><a title="Google Plus" target="_blank" href="https://plus.google.com/+SoftuniBg"><img alt="Google Plus" src="/Content/design/googleplus.png"></a></li>',
'</ul>',
'',
'<div class="yt-lockup-content">',
  '<h3 class="yt-lockup-title"><a class="yt-uix-sessionlink yt-uix-tile-link  spf-link  yt-ui-ellipsis yt-ui-ellipsis-2" dir="ltr" title="HTML" data-sessionlink="ved=CNYBEL8b&amp;ei=Cd3TU-_aIeauiAaOwICABg&amp;feature=g-high-rch" href="/watch?v=2hscdSJDgWI">HTML</a></h3>',
'<div class="yt-lockup-meta">',
'<ul class="yt-lockup-meta-info">',
'<li>',
  '',
'by <a  dir="ltr" data-ytid="UCLC-vbm7OWvpbqzXaoAMGGw" data-name="g-high-rch" href="/channel/UCLC-vbm7OWvpbqzXaoAMGGw" class="g-hovercard yt-uix-sessionlink yt-user-name  spf-link " data-sessionlink="ved=CNcBEMEb&amp;ei=Cd3TU-_aIeauiAaOwICABg&amp;feature=g-high-rch">SoftUni</a>',
'</li>',
'<li>9,537 views</li>',
'<li class="yt-lockup-deemphasized-text">',
	'1 year ago',
'</li>',
'</ul>',
'</div>',
'',
'<a  ',
'dir="ltr" ',
'data-ytid="UCLC-vbm7OWvpbqzXaoAMGGw" data-name="g-high-rch" href="/channel/UCLC-vbm7OWvpbqzXaoAMGGw" ',
 'class="g-hovercard yt-uix-sessionlink yt-user-name  spf-link " data-sessionlink="ved=CNcBEMEb&amp;ei=Cd3TU-_aIeauiAaOwICABg&amp;feature=g-high-rch">SoftUni</a>',
'',
	'',
'</body>',
];
solve(test);