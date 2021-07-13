---
title: CSS3 Slide Animation
tags: [menu, nav, jquery]
style: 
color: 
description: CSS3 Slide Animation
---


## CSS3 Slide Animation

<p>1. display:flex로 li를 가로로 나열함</p>
<p>2. ul width = slide width * li count</p>
<p>3. li width = slide width = ul width / li count * 100%</p>
<p>4. @keyframes에서 100%를 li count로 등분하여 진행함 (25%간격)</p>
<p>5. @keyframes의 0%와 100%가 이어짐</p>


<strong>가로형식 Slide</strong>

<iframe height="400" width="100%" style="margin-bottom:30px" src="https://codepen.io/qrtukjrg-the-flexboxer/embed/poPRvGw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>


<strong>세로형식 Slide</strong>

<iframe height="400" width="100%"  title="" src="https://codepen.io/qrtukjrg-the-flexboxer/embed/rNmjVaK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>