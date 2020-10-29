animations = [
  {
    "fileName": "anim2.html",
    "template": "\n  <div class=\"window\">\n    <div class=\"container\">\n      <square>&#xA0;</square><square>&#xA0;</square><square>&#xA0;</square><square>&#xA0;</square><square>&#xA0;</square><square>&#xA0;</square>  <square>&#xA0;</square><square>&#xA0;</square><square>&#xA0;</square>\n    </div>\n  </div>\n",
    "scss": "\n  $orders: 3 6 9 8 7 4 1 2;\n  $speed: 100;\n  $duration: 2s;\n\n  .window {\n    overflow: hidden;\n    position: relative;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 500px;\n    height: 500px;\n    outline: solid 4000px #fff;\n    z-index: 1;\n  }\n\n  .container {\n    width: 240px;\n    height: 240px;\n    animation: rotate $duration linear infinite;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  @keyframes rotate {\n    0% { transform: rotate(0deg) scale(1) }\n    50% { transform: rotate(-45deg) scale(1.7) }\n    100% { transform: rotate(-90deg) scale(3) }\n  }\n\n  square {\n    width: 80px;\n    height: 80px;\n    float: left;\n    background: #000;\n    outline: 1px solid #000;\n  }\n\n  @for $i from 0 to 8 {\n    $order: nth($orders, ($i + 1));\n      \n    square:nth-child(#{$order}) {\n      animation: move#{($order)} $duration infinite;\n    }\n    \n    $x: 0;\n    $y: 0;\n\n    @if $order % 3 == 1 { // left side\n      $x: -1;\n    } @elseif $order % 3 == 0 { // right side\n      $x: 1;\n    }\n      \n    @if $order < 4 { // top side\n      $y: -1;\n    } @elseif $order > 6 { // bottom side\n      $y: 1;\n    }\n    \n    $coeff: 8 - $i;\n    \n    @keyframes move#{$order} {\n      0% { transform: translate(0, 0) }\n      #{(100 / 8 * $i)}% {\n        transform: translate(0, 0)\n      }\n      100% { transform: translate(\n        #{$x * $speed * $coeff}px,\n        #{$y * $speed * $coeff}px\n      ) }\n    }\n  }\n",
    "css": "#cube .anim .window {\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 500px;\n  height: 500px;\n  outline: solid 4000px #fff;\n  z-index: 1; }\n\n#cube .anim .container {\n  width: 240px;\n  height: 240px;\n  animation: rotate 2s linear infinite;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg) scale(1); }\n  50% {\n    transform: rotate(-45deg) scale(1.7); }\n  100% {\n    transform: rotate(-90deg) scale(3); } }\n\n#cube .anim square {\n  width: 80px;\n  height: 80px;\n  float: left;\n  background: #000;\n  outline: 1px solid #000; }\n\n#cube .anim square:nth-child(3) {\n  animation: move3 2s infinite; }\n\n@keyframes move3 {\n  0% {\n    transform: translate(0, 0); }\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(800px, -800px); } }\n\n#cube .anim square:nth-child(6) {\n  animation: move6 2s infinite; }\n\n@keyframes move6 {\n  0% {\n    transform: translate(0, 0); }\n  12.5% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(700px, 0px); } }\n\n#cube .anim square:nth-child(9) {\n  animation: move9 2s infinite; }\n\n@keyframes move9 {\n  0% {\n    transform: translate(0, 0); }\n  25% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(600px, 600px); } }\n\n#cube .anim square:nth-child(8) {\n  animation: move8 2s infinite; }\n\n@keyframes move8 {\n  0% {\n    transform: translate(0, 0); }\n  37.5% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(0px, 500px); } }\n\n#cube .anim square:nth-child(7) {\n  animation: move7 2s infinite; }\n\n@keyframes move7 {\n  0% {\n    transform: translate(0, 0); }\n  50% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(-400px, 400px); } }\n\n#cube .anim square:nth-child(4) {\n  animation: move4 2s infinite; }\n\n@keyframes move4 {\n  0% {\n    transform: translate(0, 0); }\n  62.5% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(-300px, 0px); } }\n\n#cube .anim square:nth-child(1) {\n  animation: move1 2s infinite; }\n\n@keyframes move1 {\n  0% {\n    transform: translate(0, 0); }\n  75% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(-200px, -200px); } }\n\n#cube .anim square:nth-child(2) {\n  animation: move2 2s infinite; }\n\n@keyframes move2 {\n  0% {\n    transform: translate(0, 0); }\n  87.5% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(0px, -100px); } }\n",
    "active": true,
    "uid": "cube",
    "title": "Infinite Cube",
    "date": "2020-10-17",
    "from": "https://beesandbombs.tumblr.com/post/76725415066/splitting-squares"
  },
  {
    "fileName": "anim3.html",
    "template": "\n  <table>\n    <tbody><tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n  </tbody></table>  \n",
    "scss": "\n  $duration: 3.5s;\n\n  & {\n    height: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  table {\n    animation: zoom $duration infinite cubic-bezier(0.45, 0.29, 0.21, 0.94);\n    border-spacing: 0;\n  }\n\n  @keyframes zoom {\n    0% { transform: scale(7) translateZ(0); }\n    100% { transform: scale(1) translateZ(0); }\n  }\n\n  table td {\n    box-sizing: border-box;\n    width: 40px;\n    height: 40px;\n    background: #000;\n    backface-visibility: hidden;\n    animation-timing-function: cubic-bezier(0.42, 0, 0.71, 0.99);\n    animation-duration: $duration;\n    animation-iteration-count: infinite;\n  }\n\n  @function sqrt($r) {\n    $x0: 1;\n    $x1: $x0;\n    @for $i from 1 through 10 {\n      $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);\n      $x0: $x1;\n    }\n    @return $x1;\n  }\n  @function pow($number, $exponent) {\n    $value: 1;\n    @if $exponent > 0 {\n      @for $i from 1 through $exponent {\n        $value: $value * $number;\n      }\n    }\n    @return $value;\n  }\n\n  @for $x from 1 to 8 {\n    @for $y from 1 to 8 {\n      table tr:nth-child(#{$y}) td:nth-child(#{$x}) {\n        animation-name: square#{$x}#{$y};\n      }\n      $rotate: (\n        ($x % 2 == 0 and $y % 2 == 1) or\n        ($x % 2 == 1 and $y % 2 == 0)\n      ); \n      $distFromCenter: sqrt(pow(abs(4 - $x), 2) + pow(abs(4 - $y), 2));\n      $counterRotate: $distFromCenter <= 3 and $distFromCenter > 1;\n      \n      @keyframes square#{$x}#{$y} {\n        0% {\n          transform: \n            translate(($x - 4) * 50px, ($y - 4) * 50px)\n            rotate(if($rotate, if($counterRotate, 90deg, -90deg), 0))\n            scale(if($rotate, .01, 1))\n          ;\n        }\n        100% { \n          transform: \n            translate(0, 0) \n            rotate(0) \n            scale(1.05)\n          ; \n        }\n      }\n    }\n  }\n",
    "css": "#cube-assembling .anim {\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#cube-assembling .anim table {\n  animation: zoom 3.5s infinite cubic-bezier(0.45, 0.29, 0.21, 0.94);\n  border-spacing: 0; }\n\n@keyframes zoom {\n  0% {\n    transform: scale(7) translateZ(0); }\n  100% {\n    transform: scale(1) translateZ(0); } }\n\n#cube-assembling .anim table td {\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  background: #000;\n  backface-visibility: hidden;\n  animation-timing-function: cubic-bezier(0.42, 0, 0.71, 0.99);\n  animation-duration: 3.5s;\n  animation-iteration-count: infinite; }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(1) {\n  animation-name: square11; }\n\n@keyframes square11 {\n  0% {\n    transform: translate(-150px, -150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(1) {\n  animation-name: square12; }\n\n@keyframes square12 {\n  0% {\n    transform: translate(-150px, -100px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(1) {\n  animation-name: square13; }\n\n@keyframes square13 {\n  0% {\n    transform: translate(-150px, -50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(1) {\n  animation-name: square14; }\n\n@keyframes square14 {\n  0% {\n    transform: translate(-150px, 0px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(1) {\n  animation-name: square15; }\n\n@keyframes square15 {\n  0% {\n    transform: translate(-150px, 50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(1) {\n  animation-name: square16; }\n\n@keyframes square16 {\n  0% {\n    transform: translate(-150px, 100px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(1) {\n  animation-name: square17; }\n\n@keyframes square17 {\n  0% {\n    transform: translate(-150px, 150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(2) {\n  animation-name: square21; }\n\n@keyframes square21 {\n  0% {\n    transform: translate(-100px, -150px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(2) {\n  animation-name: square22; }\n\n@keyframes square22 {\n  0% {\n    transform: translate(-100px, -100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(2) {\n  animation-name: square23; }\n\n@keyframes square23 {\n  0% {\n    transform: translate(-100px, -50px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(2) {\n  animation-name: square24; }\n\n@keyframes square24 {\n  0% {\n    transform: translate(-100px, 0px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(2) {\n  animation-name: square25; }\n\n@keyframes square25 {\n  0% {\n    transform: translate(-100px, 50px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(2) {\n  animation-name: square26; }\n\n@keyframes square26 {\n  0% {\n    transform: translate(-100px, 100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(2) {\n  animation-name: square27; }\n\n@keyframes square27 {\n  0% {\n    transform: translate(-100px, 150px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(3) {\n  animation-name: square31; }\n\n@keyframes square31 {\n  0% {\n    transform: translate(-50px, -150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(3) {\n  animation-name: square32; }\n\n@keyframes square32 {\n  0% {\n    transform: translate(-50px, -100px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(3) {\n  animation-name: square33; }\n\n@keyframes square33 {\n  0% {\n    transform: translate(-50px, -50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(3) {\n  animation-name: square34; }\n\n@keyframes square34 {\n  0% {\n    transform: translate(-50px, 0px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(3) {\n  animation-name: square35; }\n\n@keyframes square35 {\n  0% {\n    transform: translate(-50px, 50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(3) {\n  animation-name: square36; }\n\n@keyframes square36 {\n  0% {\n    transform: translate(-50px, 100px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(3) {\n  animation-name: square37; }\n\n@keyframes square37 {\n  0% {\n    transform: translate(-50px, 150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(4) {\n  animation-name: square41; }\n\n@keyframes square41 {\n  0% {\n    transform: translate(0px, -150px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(4) {\n  animation-name: square42; }\n\n@keyframes square42 {\n  0% {\n    transform: translate(0px, -100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(4) {\n  animation-name: square43; }\n\n@keyframes square43 {\n  0% {\n    transform: translate(0px, -50px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(4) {\n  animation-name: square44; }\n\n@keyframes square44 {\n  0% {\n    transform: translate(0px, 0px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(4) {\n  animation-name: square45; }\n\n@keyframes square45 {\n  0% {\n    transform: translate(0px, 50px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(4) {\n  animation-name: square46; }\n\n@keyframes square46 {\n  0% {\n    transform: translate(0px, 100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(4) {\n  animation-name: square47; }\n\n@keyframes square47 {\n  0% {\n    transform: translate(0px, 150px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(5) {\n  animation-name: square51; }\n\n@keyframes square51 {\n  0% {\n    transform: translate(50px, -150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(5) {\n  animation-name: square52; }\n\n@keyframes square52 {\n  0% {\n    transform: translate(50px, -100px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(5) {\n  animation-name: square53; }\n\n@keyframes square53 {\n  0% {\n    transform: translate(50px, -50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(5) {\n  animation-name: square54; }\n\n@keyframes square54 {\n  0% {\n    transform: translate(50px, 0px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(5) {\n  animation-name: square55; }\n\n@keyframes square55 {\n  0% {\n    transform: translate(50px, 50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(5) {\n  animation-name: square56; }\n\n@keyframes square56 {\n  0% {\n    transform: translate(50px, 100px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(5) {\n  animation-name: square57; }\n\n@keyframes square57 {\n  0% {\n    transform: translate(50px, 150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(6) {\n  animation-name: square61; }\n\n@keyframes square61 {\n  0% {\n    transform: translate(100px, -150px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(6) {\n  animation-name: square62; }\n\n@keyframes square62 {\n  0% {\n    transform: translate(100px, -100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(6) {\n  animation-name: square63; }\n\n@keyframes square63 {\n  0% {\n    transform: translate(100px, -50px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(6) {\n  animation-name: square64; }\n\n@keyframes square64 {\n  0% {\n    transform: translate(100px, 0px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(6) {\n  animation-name: square65; }\n\n@keyframes square65 {\n  0% {\n    transform: translate(100px, 50px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(6) {\n  animation-name: square66; }\n\n@keyframes square66 {\n  0% {\n    transform: translate(100px, 100px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(6) {\n  animation-name: square67; }\n\n@keyframes square67 {\n  0% {\n    transform: translate(100px, 150px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(1) td:nth-child(7) {\n  animation-name: square71; }\n\n@keyframes square71 {\n  0% {\n    transform: translate(150px, -150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(2) td:nth-child(7) {\n  animation-name: square72; }\n\n@keyframes square72 {\n  0% {\n    transform: translate(150px, -100px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(3) td:nth-child(7) {\n  animation-name: square73; }\n\n@keyframes square73 {\n  0% {\n    transform: translate(150px, -50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(4) td:nth-child(7) {\n  animation-name: square74; }\n\n@keyframes square74 {\n  0% {\n    transform: translate(150px, 0px) rotate(90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(5) td:nth-child(7) {\n  animation-name: square75; }\n\n@keyframes square75 {\n  0% {\n    transform: translate(150px, 50px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(6) td:nth-child(7) {\n  animation-name: square76; }\n\n@keyframes square76 {\n  0% {\n    transform: translate(150px, 100px) rotate(-90deg) scale(0.01); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n\n#cube-assembling .anim table tr:nth-child(7) td:nth-child(7) {\n  animation-name: square77; }\n\n@keyframes square77 {\n  0% {\n    transform: translate(150px, 150px) rotate(0) scale(1); }\n  100% {\n    transform: translate(0, 0) rotate(0) scale(1.05); } }\n",
    "active": false,
    "uid": "cube-assembling",
    "title": "Cube Assembling",
    "date": "2020-10-29",
    "from": "https://beesandbombs.tumblr.com/post/87902670899/squares-assembling"
  },
  {
    "fileName": "anim1.html",
    "template": "\n  <table>\n    <tbody><tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n    <tr>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n      <td>&#xA0;</td>\n    </tr>\n  </tbody></table>  \n",
    "scss": "\n  $speed: 3.5s;\n  $line: 12;\n\n  table {\n    border-spacing: 0;\n    animation:\n      bg $speed infinite,\n      zoom $speed infinite;\n  }\n\n  @keyframes bg {\n    0% { background: #fff; }\n    50% { background: #fff; }\n    50.00001% { background: #000; }\n    100% { background: #000; }\n  }\n\n  @keyframes zoom {\n    0% { transform: scale(1); }\n    10% { transform: scale(1); }\n    15% { transform: scale(1.6); }\n    35% { transform: scale(1.6); }\n    40% { transform: scale(1); }\n    60% { transform: scale(1); }\n    65% { transform: scale(1.6); }\n    85% { transform: scale(1.6); }  \n    90% { transform: scale(1); }\n    100% { transform: scale(1); }\n  }\n\n  table td {\n    box-sizing: border-box;\n    width: 42px;\n    height: 42px;\n  }\n\n  tr:nth-child(odd) td:nth-child(odd),\n  tr:nth-child(even) td:nth-child(even) {\n    animation: \n      border-radius $speed / 2 infinite,\n      bg-invert $speed infinite;\n  }\n\n  @keyframes bg-invert {\n    0% { background: #000; }\n    50% { background: #000; }\n    50.00001% { background: #fff; }\n    100% { background: #fff; }\n  }\n\n  @keyframes border-radius {\n    0% { border-radius: 0; transform: scale(1); }\n    20% { border-radius: 0; transform: scale(1); }\n    30% { border-radius: 50%; transform: scale(0.6) }\n    70% { border-radius: 50%; transform: scale(0.6) }\n    80% { border-radius: 0; transform: scale(1) }\n    100% { border-radius: 0; transform: scale(1); }\n  }\n\n  tr:nth-child(odd) {\n    animation: trans-odd $speed infinite;\n  }\n\n  tr:nth-child(even) {\n    animation: trans-even $speed infinite;\n  }\n\n  @keyframes trans-odd {\n    0% { transform: translate(0, 0); }\n    20% { transform: translate(0, 0); }\n    30% { transform: translate(100% / $line, 0) } \n    50% { transform: translate(100% / $line, 0) }\n    50.0001% { transform: translate(0, 0); }\n    70% { transform: translate(0, 0); }\n    80% { transform: translate(0, 100%) } \n    100% { transform: translate(0, 100%) }\n  }\n\n  @keyframes trans-even {\n    0% { transform: translate(0, 0); }\n    20% { transform: translate(0, 0); }\n    30% { transform: translate(-100% / $line, 0); } \n    50% { transform: translate(-100% / $line, 0); }\n    50.0001% { transform: translate(0, 0); }\n    70% { transform: translate(0, 0); }\n    80% { transform: translate(0, -100%) } \n    100% { transform: translate(0, -100%) }\n  }\n",
    "css": "#cheese .anim table {\n  border-spacing: 0;\n  animation: bg 3.5s infinite, zoom 3.5s infinite; }\n\n@keyframes bg {\n  0% {\n    background: #fff; }\n  50% {\n    background: #fff; }\n  50.00001% {\n    background: #000; }\n  100% {\n    background: #000; } }\n\n@keyframes zoom {\n  0% {\n    transform: scale(1); }\n  10% {\n    transform: scale(1); }\n  15% {\n    transform: scale(1.6); }\n  35% {\n    transform: scale(1.6); }\n  40% {\n    transform: scale(1); }\n  60% {\n    transform: scale(1); }\n  65% {\n    transform: scale(1.6); }\n  85% {\n    transform: scale(1.6); }\n  90% {\n    transform: scale(1); }\n  100% {\n    transform: scale(1); } }\n\n#cheese .anim table td {\n  box-sizing: border-box;\n  width: 42px;\n  height: 42px; }\n\n#cheese .anim tr:nth-child(odd) td:nth-child(odd),\n#cheese .anim tr:nth-child(even) td:nth-child(even) {\n  animation: border-radius 1.75s infinite, bg-invert 3.5s infinite; }\n\n@keyframes bg-invert {\n  0% {\n    background: #000; }\n  50% {\n    background: #000; }\n  50.00001% {\n    background: #fff; }\n  100% {\n    background: #fff; } }\n\n@keyframes border-radius {\n  0% {\n    border-radius: 0;\n    transform: scale(1); }\n  20% {\n    border-radius: 0;\n    transform: scale(1); }\n  30% {\n    border-radius: 50%;\n    transform: scale(0.6); }\n  70% {\n    border-radius: 50%;\n    transform: scale(0.6); }\n  80% {\n    border-radius: 0;\n    transform: scale(1); }\n  100% {\n    border-radius: 0;\n    transform: scale(1); } }\n\n#cheese .anim tr:nth-child(odd) {\n  animation: trans-odd 3.5s infinite; }\n\n#cheese .anim tr:nth-child(even) {\n  animation: trans-even 3.5s infinite; }\n\n@keyframes trans-odd {\n  0% {\n    transform: translate(0, 0); }\n  20% {\n    transform: translate(0, 0); }\n  30% {\n    transform: translate(8.33333%, 0); }\n  50% {\n    transform: translate(8.33333%, 0); }\n  50.0001% {\n    transform: translate(0, 0); }\n  70% {\n    transform: translate(0, 0); }\n  80% {\n    transform: translate(0, 100%); }\n  100% {\n    transform: translate(0, 100%); } }\n\n@keyframes trans-even {\n  0% {\n    transform: translate(0, 0); }\n  20% {\n    transform: translate(0, 0); }\n  30% {\n    transform: translate(-8.33333%, 0); }\n  50% {\n    transform: translate(-8.33333%, 0); }\n  50.0001% {\n    transform: translate(0, 0); }\n  70% {\n    transform: translate(0, 0); }\n  80% {\n    transform: translate(0, -100%); }\n  100% {\n    transform: translate(0, -100%); } }\n",
    "active": true,
    "uid": "cheese",
    "title": "Cheese Board",
    "date": "2020-10-16",
    "from": "https://beesandbombs.tumblr.com/post/117860424954/squares-circles"
  }
]