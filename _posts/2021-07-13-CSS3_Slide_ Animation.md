---
title: CSS3 Slide Animation
tags: [menu, nav, jquery]
style: 
color: 
description: CSS3 Slide Animation
---


## CSS3 Slide Animation

<ul>
<li>1 display:flex로 li를 가로로 나열함</li>
<li>2 ul width = slide width * li count</li>
<li>3 li width = slide width = ul width / li count * 100%</li>
<li>4 @keyframes에서 100%를 li count로 등분하여 진행함 (25%간격)</li>
<li>5 @keyframes의 0%와 100%가 이어짐</li>
</ul>

#### 가로형식 Slide 

<iframe height="400" width="100%" src="https://codepen.io/qrtukjrg-the-flexboxer/embed/poPRvGw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>


#### 세로형식 Slide

<iframe height="400" width="100%"  title="" src="https://codepen.io/qrtukjrg-the-flexboxer/embed/rNmjVaK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>