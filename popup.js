document.getElementById('printButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    // Send a message to the background script to initiate the PDF printing process
    chrome.runtime.sendMessage({ action: 'printChatAsPDF' }, (response) => {
        if (response && response.success) {
            // message.innerHTML = response.title;
            printAsPDF(response.content, response.title);
        } else {
            message.innerText = response.error;
        }
    });
});

function printAsPDF(content, title) {
    const printWindow = window.open('', '_blank');
    printWindow.document.title = title;
    printWindow.document.write(`
    <html>

<head>
    <title>${title}</title>
    <style>
        @font-face {
            font-family: KaTeX_AMS;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_AMS-Regular.a79f1c3119.woff2)format("woff2"), url(/static/KaTeX_AMS-Regular.1608a09b4a.woff)format("woff"), url(/static/KaTeX_AMS-Regular.4aafdb685c.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Caligraphic;
            font-style: normal;
            font-weight: 700;
            src: url(/static/KaTeX_Caligraphic-Bold.ec17d13264.woff2)format("woff2"), url(/static/KaTeX_Caligraphic-Bold.b67709187b.woff)format("woff"), url(/static/KaTeX_Caligraphic-Bold.cce5b8ecea.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Caligraphic;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Caligraphic-Regular.55fac25845.woff2)format("woff2"), url(/static/KaTeX_Caligraphic-Regular.dad44a7fc6.woff)format("woff"), url(/static/KaTeX_Caligraphic-Regular.07ef19e7b0.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Fraktur;
            font-style: normal;
            font-weight: 700;
            src: url(/static/KaTeX_Fraktur-Bold.d42a5579b0.woff2)format("woff2"), url(/static/KaTeX_Fraktur-Bold.9f256b8593.woff)format("woff"), url(/static/KaTeX_Fraktur-Bold.b18f59e1d1.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Fraktur;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Fraktur-Regular.d3c882a649.woff2)format("woff2"), url(/static/KaTeX_Fraktur-Regular.7c1871215e.woff)format("woff"), url(/static/KaTeX_Fraktur-Regular.ed38e79f57.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Main;
            font-style: normal;
            font-weight: 700;
            src: url(/static/KaTeX_Main-Bold.c3fb5ac22f.woff2)format("woff2"), url(/static/KaTeX_Main-Bold.d181c4650d.woff)format("woff"), url(/static/KaTeX_Main-Bold.b74a1a8b2c.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Main;
            font-style: italic;
            font-weight: 700;
            src: url(/static/KaTeX_Main-BoldItalic.6f2bb1dff2.woff2)format("woff2"), url(/static/KaTeX_Main-BoldItalic.e3f82f9d27.woff)format("woff"), url(/static/KaTeX_Main-BoldItalic.70d8b0a530.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Main;
            font-style: italic;
            font-weight: 400;
            src: url(/static/KaTeX_Main-Italic.8916142bec.woff2)format("woff2"), url(/static/KaTeX_Main-Italic.9024d815ba.woff)format("woff"), url(/static/KaTeX_Main-Italic.47373d1e51.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Main;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Main-Regular.0462f03bdf.woff2)format("woff2"), url(/static/KaTeX_Main-Regular.7f51fe0340.woff)format("woff"), url(/static/KaTeX_Main-Regular.b7f8fe9b5f.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Math;
            font-style: italic;
            font-weight: 700;
            src: url(/static/KaTeX_Math-BoldItalic.572d331f69.woff2)format("woff2"), url(/static/KaTeX_Math-BoldItalic.f1035d8d5d.woff)format("woff"), url(/static/KaTeX_Math-BoldItalic.a879cf8383.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Math;
            font-style: italic;
            font-weight: 400;
            src: url(/static/KaTeX_Math-Italic.f28c23acad.woff2)format("woff2"), url(/static/KaTeX_Math-Italic.5295ba483a.woff)format("woff"), url(/static/KaTeX_Math-Italic.939bc64440.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_SansSerif;
            font-style: normal;
            font-weight: 700;
            src: url(/static/KaTeX_SansSerif-Bold.8c5b5494b6.woff2)format("woff2"), url(/static/KaTeX_SansSerif-Bold.bf59d231c3.woff)format("woff"), url(/static/KaTeX_SansSerif-Bold.94e1e8dc5f.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_SansSerif;
            font-style: italic;
            font-weight: 400;
            src: url(/static/KaTeX_SansSerif-Italic.3b1e59b3ba.woff2)format("woff2"), url(/static/KaTeX_SansSerif-Italic.7c9bc82b17.woff)format("woff"), url(/static/KaTeX_SansSerif-Italic.b4c20c84d8.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_SansSerif;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_SansSerif-Regular.ba21ed5f84.woff2)format("woff2"), url(/static/KaTeX_SansSerif-Regular.740484788f.woff)format("woff"), url(/static/KaTeX_SansSerif-Regular.d4d7ba4804.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Script;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Script-Regular.03e9641d6f.woff2)format("woff2"), url(/static/KaTeX_Script-Regular.0750571032.woff)format("woff"), url(/static/KaTeX_Script-Regular.fe9cbbe1a0.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Size1;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Size1-Regular.eae34984b3.woff2)format("woff2"), url(/static/KaTeX_Size1-Regular.e1e279cbdd.woff)format("woff"), url(/static/KaTeX_Size1-Regular.fabc004aab.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Size2;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Size2-Regular.5916a24fa3.woff2)format("woff2"), url(/static/KaTeX_Size2-Regular.577270225e.woff)format("woff"), url(/static/KaTeX_Size2-Regular.d6b476ecd3.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Size3;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Size3-Regular.b4230e7e83.woff2)format("woff2"), url(/static/KaTeX_Size3-Regular.9acaf01c64.woff)format("woff"), url(/static/KaTeX_Size3-Regular.a144ef5840.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Size4;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Size4-Regular.10d95fd3a2.woff2)format("woff2"), url(/static/KaTeX_Size4-Regular.7a996c9da2.woff)format("woff"), url(/static/KaTeX_Size4-Regular.fbccdabe0a.ttf)format("truetype")
        }

        @font-face {
            font-family: KaTeX_Typewriter;
            font-style: normal;
            font-weight: 400;
            src: url(/static/KaTeX_Typewriter-Regular.a8709e3622.woff2)format("woff2"), url(/static/KaTeX_Typewriter-Regular.6258592bdc.woff)format("woff"), url(/static/KaTeX_Typewriter-Regular.d97aaf4a1e.ttf)format("truetype")
        }

        .katex {
            text-indent: 0;
            text-rendering: auto;
            font: 1.21em/1.2 KaTeX_Main, Times New Roman, serif
        }

        .katex * {
            border-color: currentColor;
            -ms-high-contrast-adjust: none !important
        }

        .katex .katex-version:after {
            content: "0.16.11"
        }

        .katex .katex-mathml {
            clip: rect(1px, 1px, 1px, 1px);
            border: 0;
            width: 1px;
            height: 1px;
            padding: 0;
            position: absolute;
            overflow: hidden
        }

        .katex .katex-html>.newline {
            display: block
        }

        .katex .base {
            white-space: nowrap;
            width: -moz-min-content;
            width: min-content;
            position: relative
        }

        .katex .base,
        .katex .strut {
            display: inline-block
        }

        .katex .textbf {
            font-weight: 700
        }

        .katex .textit {
            font-style: italic
        }

        .katex .textrm {
            font-family: KaTeX_Main
        }

        .katex .textsf {
            font-family: KaTeX_SansSerif
        }

        .katex .texttt {
            font-family: KaTeX_Typewriter
        }

        .katex .mathnormal {
            font-family: KaTeX_Math;
            font-style: italic
        }

        .katex .mathit {
            font-family: KaTeX_Main;
            font-style: italic
        }

        .katex .mathrm {
            font-style: normal
        }

        .katex .mathbf {
            font-family: KaTeX_Main;
            font-weight: 700
        }

        .katex .boldsymbol {
            font-family: KaTeX_Math;
            font-style: italic;
            font-weight: 700
        }

        .katex .amsrm,
        .katex .mathbb,
        .katex .textbb {
            font-family: KaTeX_AMS
        }

        .katex .mathcal {
            font-family: KaTeX_Caligraphic
        }

        .katex .mathfrak,
        .katex .textfrak {
            font-family: KaTeX_Fraktur
        }

        .katex .mathboldfrak,
        .katex .textboldfrak {
            font-family: KaTeX_Fraktur;
            font-weight: 700
        }

        .katex .mathtt {
            font-family: KaTeX_Typewriter
        }

        .katex .mathscr,
        .katex .textscr {
            font-family: KaTeX_Script
        }

        .katex .mathsf,
        .katex .textsf {
            font-family: KaTeX_SansSerif
        }

        .katex .mathboldsf,
        .katex .textboldsf {
            font-family: KaTeX_SansSerif;
            font-weight: 700
        }

        .katex .mathitsf,
        .katex .textitsf {
            font-family: KaTeX_SansSerif;
            font-style: italic
        }

        .katex .mainrm {
            font-family: KaTeX_Main;
            font-style: normal
        }

        .katex .vlist-t {
            border-collapse: collapse;
            table-layout: fixed;
            display: inline-table
        }

        .katex .vlist-r {
            display: table-row
        }

        .katex .vlist {
            vertical-align: bottom;
            display: table-cell;
            position: relative
        }

        .katex .vlist>span {
            height: 0;
            display: block;
            position: relative
        }

        .katex .vlist>span>span {
            display: inline-block
        }

        .katex .vlist>span>.pstrut {
            width: 0;
            overflow: hidden
        }

        .katex .vlist-t2 {
            margin-right: -2px
        }

        .katex .vlist-s {
            vertical-align: bottom;
            width: 2px;
            min-width: 2px;
            font-size: 1px;
            display: table-cell
        }

        .katex .vbox {
            flex-direction: column;
            align-items: baseline;
            display: inline-flex
        }

        .katex .hbox {
            width: 100%
        }

        .katex .hbox,
        .katex .thinbox {
            flex-direction: row;
            display: inline-flex
        }

        .katex .thinbox {
            width: 0;
            max-width: 0
        }

        .katex .msupsub {
            text-align: left
        }

        .katex .mfrac>span>span {
            text-align: center
        }

        .katex .mfrac .frac-line {
            border-bottom-style: solid;
            width: 100%;
            display: inline-block
        }

        .katex .hdashline,
        .katex .hline,
        .katex .mfrac .frac-line,
        .katex .overline .overline-line,
        .katex .rule,
        .katex .underline .underline-line {
            min-height: 1px
        }

        .katex .mspace {
            display: inline-block
        }

        .katex .clap,
        .katex .llap,
        .katex .rlap {
            width: 0;
            position: relative
        }

        .katex .clap>.inner,
        .katex .llap>.inner,
        .katex .rlap>.inner {
            position: absolute
        }

        .katex .clap>.fix,
        .katex .llap>.fix,
        .katex .rlap>.fix {
            display: inline-block
        }

        .katex .llap>.inner {
            right: 0
        }

        .katex .clap>.inner,
        .katex .rlap>.inner {
            left: 0
        }

        .katex .clap>.inner>span {
            margin-left: -50%;
            margin-right: 50%
        }

        .katex .rule {
            border: 0 solid;
            display: inline-block;
            position: relative
        }

        .katex .hline,
        .katex .overline .overline-line,
        .katex .underline .underline-line {
            border-bottom-style: solid;
            width: 100%;
            display: inline-block
        }

        .katex .hdashline {
            border-bottom-style: dashed;
            width: 100%;
            display: inline-block
        }

        .katex .sqrt>.root {
            margin-left: .277778em;
            margin-right: -.555556em
        }

        .katex .fontsize-ensurer.reset-size1.size1,
        .katex .sizing.reset-size1.size1 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size1.size2,
        .katex .sizing.reset-size1.size2 {
            font-size: 1.2em
        }

        .katex .fontsize-ensurer.reset-size1.size3,
        .katex .sizing.reset-size1.size3 {
            font-size: 1.4em
        }

        .katex .fontsize-ensurer.reset-size1.size4,
        .katex .sizing.reset-size1.size4 {
            font-size: 1.6em
        }

        .katex .fontsize-ensurer.reset-size1.size5,
        .katex .sizing.reset-size1.size5 {
            font-size: 1.8em
        }

        .katex .fontsize-ensurer.reset-size1.size6,
        .katex .sizing.reset-size1.size6 {
            font-size: 2em
        }

        .katex .fontsize-ensurer.reset-size1.size7,
        .katex .sizing.reset-size1.size7 {
            font-size: 2.4em
        }

        .katex .fontsize-ensurer.reset-size1.size8,
        .katex .sizing.reset-size1.size8 {
            font-size: 2.88em
        }

        .katex .fontsize-ensurer.reset-size1.size9,
        .katex .sizing.reset-size1.size9 {
            font-size: 3.456em
        }

        .katex .fontsize-ensurer.reset-size1.size10,
        .katex .sizing.reset-size1.size10 {
            font-size: 4.148em
        }

        .katex .fontsize-ensurer.reset-size1.size11,
        .katex .sizing.reset-size1.size11 {
            font-size: 4.976em
        }

        .katex .fontsize-ensurer.reset-size2.size1,
        .katex .sizing.reset-size2.size1 {
            font-size: .833333em
        }

        .katex .fontsize-ensurer.reset-size2.size2,
        .katex .sizing.reset-size2.size2 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size2.size3,
        .katex .sizing.reset-size2.size3 {
            font-size: 1.16667em
        }

        .katex .fontsize-ensurer.reset-size2.size4,
        .katex .sizing.reset-size2.size4 {
            font-size: 1.33333em
        }

        .katex .fontsize-ensurer.reset-size2.size5,
        .katex .sizing.reset-size2.size5 {
            font-size: 1.5em
        }

        .katex .fontsize-ensurer.reset-size2.size6,
        .katex .sizing.reset-size2.size6 {
            font-size: 1.66667em
        }

        .katex .fontsize-ensurer.reset-size2.size7,
        .katex .sizing.reset-size2.size7 {
            font-size: 2em
        }

        .katex .fontsize-ensurer.reset-size2.size8,
        .katex .sizing.reset-size2.size8 {
            font-size: 2.4em
        }

        .katex .fontsize-ensurer.reset-size2.size9,
        .katex .sizing.reset-size2.size9 {
            font-size: 2.88em
        }

        .katex .fontsize-ensurer.reset-size2.size10,
        .katex .sizing.reset-size2.size10 {
            font-size: 3.45667em
        }

        .katex .fontsize-ensurer.reset-size2.size11,
        .katex .sizing.reset-size2.size11 {
            font-size: 4.14667em
        }

        .katex .fontsize-ensurer.reset-size3.size1,
        .katex .sizing.reset-size3.size1 {
            font-size: .714286em
        }

        .katex .fontsize-ensurer.reset-size3.size2,
        .katex .sizing.reset-size3.size2 {
            font-size: .857143em
        }

        .katex .fontsize-ensurer.reset-size3.size3,
        .katex .sizing.reset-size3.size3 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size3.size4,
        .katex .sizing.reset-size3.size4 {
            font-size: 1.14286em
        }

        .katex .fontsize-ensurer.reset-size3.size5,
        .katex .sizing.reset-size3.size5 {
            font-size: 1.28571em
        }

        .katex .fontsize-ensurer.reset-size3.size6,
        .katex .sizing.reset-size3.size6 {
            font-size: 1.42857em
        }

        .katex .fontsize-ensurer.reset-size3.size7,
        .katex .sizing.reset-size3.size7 {
            font-size: 1.71429em
        }

        .katex .fontsize-ensurer.reset-size3.size8,
        .katex .sizing.reset-size3.size8 {
            font-size: 2.05714em
        }

        .katex .fontsize-ensurer.reset-size3.size9,
        .katex .sizing.reset-size3.size9 {
            font-size: 2.46857em
        }

        .katex .fontsize-ensurer.reset-size3.size10,
        .katex .sizing.reset-size3.size10 {
            font-size: 2.96286em
        }

        .katex .fontsize-ensurer.reset-size3.size11,
        .katex .sizing.reset-size3.size11 {
            font-size: 3.55429em
        }

        .katex .fontsize-ensurer.reset-size4.size1,
        .katex .sizing.reset-size4.size1 {
            font-size: .625em
        }

        .katex .fontsize-ensurer.reset-size4.size2,
        .katex .sizing.reset-size4.size2 {
            font-size: .75em
        }

        .katex .fontsize-ensurer.reset-size4.size3,
        .katex .sizing.reset-size4.size3 {
            font-size: .875em
        }

        .katex .fontsize-ensurer.reset-size4.size4,
        .katex .sizing.reset-size4.size4 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size4.size5,
        .katex .sizing.reset-size4.size5 {
            font-size: 1.125em
        }

        .katex .fontsize-ensurer.reset-size4.size6,
        .katex .sizing.reset-size4.size6 {
            font-size: 1.25em
        }

        .katex .fontsize-ensurer.reset-size4.size7,
        .katex .sizing.reset-size4.size7 {
            font-size: 1.5em
        }

        .katex .fontsize-ensurer.reset-size4.size8,
        .katex .sizing.reset-size4.size8 {
            font-size: 1.8em
        }

        .katex .fontsize-ensurer.reset-size4.size9,
        .katex .sizing.reset-size4.size9 {
            font-size: 2.16em
        }

        .katex .fontsize-ensurer.reset-size4.size10,
        .katex .sizing.reset-size4.size10 {
            font-size: 2.5925em
        }

        .katex .fontsize-ensurer.reset-size4.size11,
        .katex .sizing.reset-size4.size11 {
            font-size: 3.11em
        }

        .katex .fontsize-ensurer.reset-size5.size1,
        .katex .sizing.reset-size5.size1 {
            font-size: .555556em
        }

        .katex .fontsize-ensurer.reset-size5.size2,
        .katex .sizing.reset-size5.size2 {
            font-size: .666667em
        }

        .katex .fontsize-ensurer.reset-size5.size3,
        .katex .sizing.reset-size5.size3 {
            font-size: .777778em
        }

        .katex .fontsize-ensurer.reset-size5.size4,
        .katex .sizing.reset-size5.size4 {
            font-size: .888889em
        }

        .katex .fontsize-ensurer.reset-size5.size5,
        .katex .sizing.reset-size5.size5 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size5.size6,
        .katex .sizing.reset-size5.size6 {
            font-size: 1.11111em
        }

        .katex .fontsize-ensurer.reset-size5.size7,
        .katex .sizing.reset-size5.size7 {
            font-size: 1.33333em
        }

        .katex .fontsize-ensurer.reset-size5.size8,
        .katex .sizing.reset-size5.size8 {
            font-size: 1.6em
        }

        .katex .fontsize-ensurer.reset-size5.size9,
        .katex .sizing.reset-size5.size9 {
            font-size: 1.92em
        }

        .katex .fontsize-ensurer.reset-size5.size10,
        .katex .sizing.reset-size5.size10 {
            font-size: 2.30444em
        }

        .katex .fontsize-ensurer.reset-size5.size11,
        .katex .sizing.reset-size5.size11 {
            font-size: 2.76444em
        }

        .katex .fontsize-ensurer.reset-size6.size1,
        .katex .sizing.reset-size6.size1 {
            font-size: .5em
        }

        .katex .fontsize-ensurer.reset-size6.size2,
        .katex .sizing.reset-size6.size2 {
            font-size: .6em
        }

        .katex .fontsize-ensurer.reset-size6.size3,
        .katex .sizing.reset-size6.size3 {
            font-size: .7em
        }

        .katex .fontsize-ensurer.reset-size6.size4,
        .katex .sizing.reset-size6.size4 {
            font-size: .8em
        }

        .katex .fontsize-ensurer.reset-size6.size5,
        .katex .sizing.reset-size6.size5 {
            font-size: .9em
        }

        .katex .fontsize-ensurer.reset-size6.size6,
        .katex .sizing.reset-size6.size6 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size6.size7,
        .katex .sizing.reset-size6.size7 {
            font-size: 1.2em
        }

        .katex .fontsize-ensurer.reset-size6.size8,
        .katex .sizing.reset-size6.size8 {
            font-size: 1.44em
        }

        .katex .fontsize-ensurer.reset-size6.size9,
        .katex .sizing.reset-size6.size9 {
            font-size: 1.728em
        }

        .katex .fontsize-ensurer.reset-size6.size10,
        .katex .sizing.reset-size6.size10 {
            font-size: 2.074em
        }

        .katex .fontsize-ensurer.reset-size6.size11,
        .katex .sizing.reset-size6.size11 {
            font-size: 2.488em
        }

        .katex .fontsize-ensurer.reset-size7.size1,
        .katex .sizing.reset-size7.size1 {
            font-size: .416667em
        }

        .katex .fontsize-ensurer.reset-size7.size2,
        .katex .sizing.reset-size7.size2 {
            font-size: .5em
        }

        .katex .fontsize-ensurer.reset-size7.size3,
        .katex .sizing.reset-size7.size3 {
            font-size: .583333em
        }

        .katex .fontsize-ensurer.reset-size7.size4,
        .katex .sizing.reset-size7.size4 {
            font-size: .666667em
        }

        .katex .fontsize-ensurer.reset-size7.size5,
        .katex .sizing.reset-size7.size5 {
            font-size: .75em
        }

        .katex .fontsize-ensurer.reset-size7.size6,
        .katex .sizing.reset-size7.size6 {
            font-size: .833333em
        }

        .katex .fontsize-ensurer.reset-size7.size7,
        .katex .sizing.reset-size7.size7 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size7.size8,
        .katex .sizing.reset-size7.size8 {
            font-size: 1.2em
        }

        .katex .fontsize-ensurer.reset-size7.size9,
        .katex .sizing.reset-size7.size9 {
            font-size: 1.44em
        }

        .katex .fontsize-ensurer.reset-size7.size10,
        .katex .sizing.reset-size7.size10 {
            font-size: 1.72833em
        }

        .katex .fontsize-ensurer.reset-size7.size11,
        .katex .sizing.reset-size7.size11 {
            font-size: 2.07333em
        }

        .katex .fontsize-ensurer.reset-size8.size1,
        .katex .sizing.reset-size8.size1 {
            font-size: .347222em
        }

        .katex .fontsize-ensurer.reset-size8.size2,
        .katex .sizing.reset-size8.size2 {
            font-size: .416667em
        }

        .katex .fontsize-ensurer.reset-size8.size3,
        .katex .sizing.reset-size8.size3 {
            font-size: .486111em
        }

        .katex .fontsize-ensurer.reset-size8.size4,
        .katex .sizing.reset-size8.size4 {
            font-size: .555556em
        }

        .katex .fontsize-ensurer.reset-size8.size5,
        .katex .sizing.reset-size8.size5 {
            font-size: .625em
        }

        .katex .fontsize-ensurer.reset-size8.size6,
        .katex .sizing.reset-size8.size6 {
            font-size: .694444em
        }

        .katex .fontsize-ensurer.reset-size8.size7,
        .katex .sizing.reset-size8.size7 {
            font-size: .833333em
        }

        .katex .fontsize-ensurer.reset-size8.size8,
        .katex .sizing.reset-size8.size8 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size8.size9,
        .katex .sizing.reset-size8.size9 {
            font-size: 1.2em
        }

        .katex .fontsize-ensurer.reset-size8.size10,
        .katex .sizing.reset-size8.size10 {
            font-size: 1.44028em
        }

        .katex .fontsize-ensurer.reset-size8.size11,
        .katex .sizing.reset-size8.size11 {
            font-size: 1.72778em
        }

        .katex .fontsize-ensurer.reset-size9.size1,
        .katex .sizing.reset-size9.size1 {
            font-size: .289352em
        }

        .katex .fontsize-ensurer.reset-size9.size2,
        .katex .sizing.reset-size9.size2 {
            font-size: .347222em
        }

        .katex .fontsize-ensurer.reset-size9.size3,
        .katex .sizing.reset-size9.size3 {
            font-size: .405093em
        }

        .katex .fontsize-ensurer.reset-size9.size4,
        .katex .sizing.reset-size9.size4 {
            font-size: .462963em
        }

        .katex .fontsize-ensurer.reset-size9.size5,
        .katex .sizing.reset-size9.size5 {
            font-size: .520833em
        }

        .katex .fontsize-ensurer.reset-size9.size6,
        .katex .sizing.reset-size9.size6 {
            font-size: .578704em
        }

        .katex .fontsize-ensurer.reset-size9.size7,
        .katex .sizing.reset-size9.size7 {
            font-size: .694444em
        }

        .katex .fontsize-ensurer.reset-size9.size8,
        .katex .sizing.reset-size9.size8 {
            font-size: .833333em
        }

        .katex .fontsize-ensurer.reset-size9.size9,
        .katex .sizing.reset-size9.size9 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size9.size10,
        .katex .sizing.reset-size9.size10 {
            font-size: 1.20023em
        }

        .katex .fontsize-ensurer.reset-size9.size11,
        .katex .sizing.reset-size9.size11 {
            font-size: 1.43981em
        }

        .katex .fontsize-ensurer.reset-size10.size1,
        .katex .sizing.reset-size10.size1 {
            font-size: .24108em
        }

        .katex .fontsize-ensurer.reset-size10.size2,
        .katex .sizing.reset-size10.size2 {
            font-size: .289296em
        }

        .katex .fontsize-ensurer.reset-size10.size3,
        .katex .sizing.reset-size10.size3 {
            font-size: .337512em
        }

        .katex .fontsize-ensurer.reset-size10.size4,
        .katex .sizing.reset-size10.size4 {
            font-size: .385728em
        }

        .katex .fontsize-ensurer.reset-size10.size5,
        .katex .sizing.reset-size10.size5 {
            font-size: .433944em
        }

        .katex .fontsize-ensurer.reset-size10.size6,
        .katex .sizing.reset-size10.size6 {
            font-size: .48216em
        }

        .katex .fontsize-ensurer.reset-size10.size7,
        .katex .sizing.reset-size10.size7 {
            font-size: .578592em
        }

        .katex .fontsize-ensurer.reset-size10.size8,
        .katex .sizing.reset-size10.size8 {
            font-size: .694311em
        }

        .katex .fontsize-ensurer.reset-size10.size9,
        .katex .sizing.reset-size10.size9 {
            font-size: .833173em
        }

        .katex .fontsize-ensurer.reset-size10.size10,
        .katex .sizing.reset-size10.size10 {
            font-size: 1em
        }

        .katex .fontsize-ensurer.reset-size10.size11,
        .katex .sizing.reset-size10.size11 {
            font-size: 1.19961em
        }

        .katex .fontsize-ensurer.reset-size11.size1,
        .katex .sizing.reset-size11.size1 {
            font-size: .200965em
        }

        .katex .fontsize-ensurer.reset-size11.size2,
        .katex .sizing.reset-size11.size2 {
            font-size: .241158em
        }

        .katex .fontsize-ensurer.reset-size11.size3,
        .katex .sizing.reset-size11.size3 {
            font-size: .281351em
        }

        .katex .fontsize-ensurer.reset-size11.size4,
        .katex .sizing.reset-size11.size4 {
            font-size: .321543em
        }

        .katex .fontsize-ensurer.reset-size11.size5,
        .katex .sizing.reset-size11.size5 {
            font-size: .361736em
        }

        .katex .fontsize-ensurer.reset-size11.size6,
        .katex .sizing.reset-size11.size6 {
            font-size: .401929em
        }

        .katex .fontsize-ensurer.reset-size11.size7,
        .katex .sizing.reset-size11.size7 {
            font-size: .482315em
        }

        .katex .fontsize-ensurer.reset-size11.size8,
        .katex .sizing.reset-size11.size8 {
            font-size: .578778em
        }

        .katex .fontsize-ensurer.reset-size11.size9,
        .katex .sizing.reset-size11.size9 {
            font-size: .694534em
        }

        .katex .fontsize-ensurer.reset-size11.size10,
        .katex .sizing.reset-size11.size10 {
            font-size: .833601em
        }

        .katex .fontsize-ensurer.reset-size11.size11,
        .katex .sizing.reset-size11.size11 {
            font-size: 1em
        }

        .katex .delimsizing.size1 {
            font-family: KaTeX_Size1
        }

        .katex .delimsizing.size2 {
            font-family: KaTeX_Size2
        }

        .katex .delimsizing.size3 {
            font-family: KaTeX_Size3
        }

        .katex .delimsizing.size4 {
            font-family: KaTeX_Size4
        }

        .katex .delimsizing.mult .delim-size1>span {
            font-family: KaTeX_Size1
        }

        .katex .delimsizing.mult .delim-size4>span {
            font-family: KaTeX_Size4
        }

        .katex .nulldelimiter {
            width: .12em;
            display: inline-block
        }

        .katex .delimcenter,
        .katex .op-symbol {
            position: relative
        }

        .katex .op-symbol.small-op {
            font-family: KaTeX_Size1
        }

        .katex .op-symbol.large-op {
            font-family: KaTeX_Size2
        }

        .katex .accent>.vlist-t,
        .katex .op-limits>.vlist-t {
            text-align: center
        }

        .katex .accent .accent-body {
            position: relative
        }

        .katex .accent .accent-body:not(.accent-full) {
            width: 0
        }

        .katex .overlay {
            display: block
        }

        .katex .mtable .vertical-separator {
            min-width: 1px;
            display: inline-block
        }

        .katex .mtable .arraycolsep {
            display: inline-block
        }

        .katex .mtable .col-align-c>.vlist-t {
            text-align: center
        }

        .katex .mtable .col-align-l>.vlist-t {
            text-align: left
        }

        .katex .mtable .col-align-r>.vlist-t {
            text-align: right
        }

        .katex .svg-align {
            text-align: left
        }

        .katex svg {
            fill: currentColor;
            stroke: currentColor;
            fill-rule: nonzero;
            fill-opacity: 1;
            stroke-width: 1px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
            stroke-opacity: 1;
            height: inherit;
            width: 100%;
            display: block;
            position: absolute
        }

        .katex svg path {
            stroke: none
        }

        .katex img {
            border-style: none;
            min-width: 0;
            max-width: none;
            min-height: 0;
            max-height: none
        }

        .katex .stretchy {
            width: 100%;
            display: block;
            position: relative;
            overflow: hidden
        }

        .katex .stretchy:after,
        .katex .stretchy:before {
            content: ""
        }

        .katex .hide-tail {
            width: 100%;
            position: relative;
            overflow: hidden
        }

        .katex .halfarrow-left {
            width: 50.2%;
            position: absolute;
            left: 0;
            overflow: hidden
        }

        .katex .halfarrow-right {
            width: 50.2%;
            position: absolute;
            right: 0;
            overflow: hidden
        }

        .katex .brace-left {
            width: 25.1%;
            position: absolute;
            left: 0;
            overflow: hidden
        }

        .katex .brace-center {
            width: 50%;
            position: absolute;
            left: 25%;
            overflow: hidden
        }

        .katex .brace-right {
            width: 25.1%;
            position: absolute;
            right: 0;
            overflow: hidden
        }

        .katex .x-arrow-pad {
            padding: 0 .5em
        }

        .katex .cd-arrow-pad {
            padding: 0 .55556em 0 .27778em
        }

        .katex .mover,
        .katex .munder,
        .katex .x-arrow {
            text-align: center
        }

        .katex .boxpad {
            padding: 0 .3em
        }

        .katex .fbox,
        .katex .fcolorbox {
            box-sizing: border-box;
            border: .04em solid
        }

        .katex .cancel-pad {
            padding: 0 .2em
        }

        .katex .cancel-lap {
            margin-left: -.2em;
            margin-right: -.2em
        }

        .katex .sout {
            border-bottom-style: solid;
            border-bottom-width: .08em
        }

        .katex .angl {
            box-sizing: border-box;
            border-top: .049em solid;
            border-right: .049em solid;
            margin-right: .03889em
        }

        .katex .anglpad {
            padding: 0 .03889em
        }

        .katex .eqn-num:before {
            content: "(" counter(katexEqnNo)")";
            counter-increment: katexEqnNo
        }

        .katex .mml-eqn-num:before {
            content: "(" counter(mmlEqnNo)")";
            counter-increment: mmlEqnNo
        }

        .katex .mtr-glue {
            width: 50%
        }

        .katex .cd-vert-arrow {
            display: inline-block;
            position: relative
        }

        .katex .cd-label-left {
            text-align: left;
            display: inline-block;
            position: absolute;
            right: calc(50% + .3em)
        }

        .katex .cd-label-right {
            text-align: right;
            display: inline-block;
            position: absolute;
            left: calc(50% + .3em)
        }

        .katex-display {
            text-align: center;
            margin: 1em 0;
            display: block
        }

        .katex-display>.katex {
            text-align: center;
            white-space: nowrap;
            display: block
        }

        .katex-display>.katex>.katex-html {
            display: block;
            position: relative
        }

        .katex-display>.katex>.katex-html>.tag {
            position: absolute;
            right: 0
        }

        .katex-display.leqno>.katex>.katex-html>.tag {
            left: 0;
            right: auto
        }

        .katex-display.fleqn>.katex {
            text-align: left;
            padding-left: 2em
        }

        body {
            counter-reset: katexEqnNo mmlEqnNo
        }
    </style>
    <style>
        [data-transform-origin=bottom] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=bottom] .ds-fade-in-zoom-in-exit {
            transform-origin: bottom
        }

        [data-transform-origin=bottom\ left] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=bottom\ left] .ds-fade-in-zoom-in-exit {
            transform-origin: 0 100%
        }

        [data-transform-origin=bottom\ right] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=bottom\ right] .ds-fade-in-zoom-in-exit {
            transform-origin: 100% 100%
        }

        [data-transform-origin=top] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=top] .ds-fade-in-zoom-in-exit {
            transform-origin: top
        }

        [data-transform-origin=top\ left] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=top\ left] .ds-fade-in-zoom-in-exit {
            transform-origin: 0 0
        }

        [data-transform-origin=top\ right] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=top\ right] .ds-fade-in-zoom-in-exit {
            transform-origin: 100% 0
        }

        [data-transform-origin=left] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=left] .ds-fade-in-zoom-in-exit {
            transform-origin: 0
        }

        [data-transform-origin=left\ top] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=left\ top] .ds-fade-in-zoom-in-exit {
            transform-origin: 0 0
        }

        [data-transform-origin=left\ bottom] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=left\ bottom] .ds-fade-in-zoom-in-exit {
            transform-origin: 0 100%
        }

        [data-transform-origin=right] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=right] .ds-fade-in-zoom-in-exit {
            transform-origin: 100%
        }

        [data-transform-origin=right\ top] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=right\ top] .ds-fade-in-zoom-in-exit {
            transform-origin: 100% 0
        }

        [data-transform-origin=right\ bottom] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=right\ bottom] .ds-fade-in-zoom-in-exit {
            transform-origin: 100% 100%
        }

        [data-transform-origin=center] .ds-fade-in-zoom-in-enter,
        [data-transform-origin=center] .ds-fade-in-zoom-in-exit {
            transform-origin: 50%
        }

        .ds-fade-in-zoom-in-enter {
            opacity: 0;
            transform: scale(.96)
        }

        .ds-fade-in-zoom-in-active {
            opacity: 1;
            transition: opacity var(--ds-ease-in)var(--ds-transition-duration-fast), transform var(--ds-ease-in)var(--ds-transition-duration-fast);
            transform: scale(1)
        }

        .ds-fade-in-zoom-in-exit {
            opacity: 1;
            transform: scale(1)
        }

        .ds-fade-in-zoom-in-exit-active {
            opacity: 0;
            transition: opacity var(--ds-ease-out)var(--ds-transition-duration-fast), transform var(--ds-ease-out)var(--ds-transition-duration-fast);
            transform: scale(.96)
        }

        .ds-form-item.ds-form-item--label-s {
            --ds-form-item-label-font-size: var(--ds-font-size-s);
            --ds-form-item-label-line-height: var(--ds-line-height-s)
        }

        .ds-form-item.ds-form-item--label-m .ds-form-item__label {
            --ds-form-item-label-font-size: var(--ds-font-size-m);
            --ds-form-item-label-line-height: var(--ds-line-height-m)
        }

        .ds-form-item .ds-form-item__label {
            color: rgb(var(--ds-rgb-label-2));
            font-size: var(--ds-form-item-label-font-size);
            line-height: var(--ds-form-item-label-line-height);
            margin-bottom: 6px;
            display: block
        }

        .ds-form-item .ds-form-item__content {
            color: rgb(var(--ds-rgb-label-1))
        }

        .ds-form-item .ds-form-item__description {
            color: rgb(var(--ds-rgb-label-2));
            box-sizing: border-box;
            min-height: 21px;
            transition: color var(--ds-transition-duration)var(--ds-ease-in-out);
            padding: 2px 0;
            font-size: 12px;
            line-height: 17px
        }

        .ds-form-item .ds-form-item__feedback {
            box-sizing: border-box;
            min-height: 21px;
            transition: color var(--ds-transition-duration)var(--ds-ease-in-out);
            padding: 2px 0;
            font-size: 12px;
            line-height: 17px
        }

        .ds-form-item .ds-form-item__feedback-content {
            width: -moz-fit-content;
            width: fit-content
        }

        .ds-form-item.ds-form-item--none .ds-form-item__feedback {
            color: rgb(var(--ds-rgb-label-2))
        }

        .ds-form-item.ds-form-item--error .ds-form-item__feedback {
            color: rgb(var(--ds-rgb-error))
        }

        .ds-input {
            --ds-input-text-color: rgb(var(--ds-rgb-label-1));
            --ds-input-placeholder-color: rgb(var(--ds-rgb-label-3));
            --ds-input-icon-color: rgb(var(--ds-rgb-label-3));
            --ds-input-prefix-text-color: rgb(var(--ds-rgb-label-1));
            --ds-input-color: rgb(var(--ds-rgb-input));
            --ds-input-font-weight: initial;
            --ds-input-color-focus: rgb(var(--ds-rgb-input-focus))
        }

        .ds-input.ds-input--bordered {
            --ds-input-color: rgba(var(--ds-rgba-transparent))
        }

        .ds-input.ds-input--l {
            --ds-input-padding: 0 10px;
            --ds-input-border-radius: 10px;
            --ds-input-height: var(--ds-input-height-l);
            --ds-input-font-size: var(--ds-font-size-m);
            --ds-input-line-height: var(--ds-line-height-m);
            --ds-input-prefix-margin: 0 8px 0 0;
            --ds-input-password-toggle-margin: 0 0 0 8px;
            --ds-input-icon-size: 18px
        }

        .ds-input.ds-input--m {
            --ds-input-padding: 0 10px;
            --ds-input-border-radius: 10px;
            --ds-input-height: var(--ds-input-height-m);
            --ds-input-font-size: var(--ds-font-size-m);
            --ds-input-line-height: var(--ds-line-height-m);
            --ds-input-prefix-margin: 0 8px 0 0;
            --ds-input-password-toggle-margin: 0 0 0 8px;
            --ds-input-icon-size: 18px
        }

        .ds-input.ds-input--m .ds-input__password-toggle .ds-icon-button {
            --ds-icon-button-size: 16px
        }

        .ds-input.ds-input--s {
            --ds-input-padding: 0 10px;
            --ds-input-border-radius: 10px;
            --ds-input-height: var(--ds-input-height-s);
            --ds-input-font-size: var(--ds-font-size-s);
            --ds-input-line-height: var(--ds-line-height-s);
            --ds-input-prefix-margin: 0 8px 0 0;
            --ds-input-password-toggle-margin: 0 0 0 8px;
            --ds-input-icon-size: 18px
        }

        .ds-input.ds-input--s .ds-input__password-toggle .ds-icon-button {
            --ds-icon-button-size: 15px
        }

        .ds-input.ds-input--xs {
            --ds-input-padding: 0 10px;
            --ds-input-border-radius: 8px;
            --ds-input-height: var(--ds-input-height-xs);
            --ds-input-font-size: var(--ds-font-size-xs);
            --ds-input-line-height: var(--ds-line-height-xs);
            --ds-input-prefix-margin: 0 7px 0 0;
            --ds-input-icon-size: 18px;
            --ds-input-password-toggle-margin: 0 0 0 7px
        }

        .ds-input.ds-input--xs .ds-input__password-toggle .ds-icon-button {
            --ds-icon-button-size: 14px
        }

        .ds-input {
            cursor: text;
            background-color: var(--ds-input-color);
            width: 100%;
            color: var(--ds-input-text-color);
            box-sizing: border-box;
            border-radius: var(--ds-input-border-radius);
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out), color var(--ds-transition-duration)var(--ds-ease-in-out);
            padding: var(--ds-input-padding);
            height: var(--ds-input-height);
            font-size: var(--ds-input-font-size);
            line-height: var(--ds-input-line-height);
            font-weight: var(--ds-input-font-weight);
            align-items: center;
            display: flex;
            position: relative
        }

        .ds-input.ds-input--disabled {
            opacity: .45;
            cursor: not-allowed
        }

        .ds-input.ds-input--disabled .ds-input__input {
            cursor: not-allowed
        }

        .ds-input .ds-input__mirror {
            padding: var(--ds-input-padding);
            pointer-events: none;
            white-space: nowrap;
            visibility: hidden;
            height: 0;
            position: absolute;
            top: 0;
            left: 0
        }

        .ds-input .ds-input__mirror,
        .ds-input .ds-input__input {
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            border: none;
            display: block
        }

        .ds-input .ds-input__input {
            background-color: rgba(var(--ds-rgba-transparent));
            color: inherit;
            caret-color: rgb(var(--ds-rgb-primary));
            border: none;
            outline: none;
            flex: 1;
            padding: 0;
            font-family: inherit
        }

        .ds-input .ds-input__input::placeholder {
            color: var(--ds-input-placeholder-color)
        }

        .ds-input .ds-input__input::placeholder {
            color: var(--ds-input-placeholder-color)
        }

        .ds-input .ds-input__input::placeholder {
            color: var(--ds-input-placeholder-color)
        }

        .ds-input .ds-input__icon {
            color: var(--ds-input-icon-color);
            font-size: var(--ds-input-icon-size);
            margin: var(--ds-input-prefix-margin);
            justify-content: center;
            align-items: center;
            display: flex
        }

        .ds-input .ds-input__prefix {
            color: var(--ds-input-prefix-color);
            margin: var(--ds-input-prefix-margin);
            line-height: var(--ds-input-height)
        }

        .ds-input .ds-input__password-toggle {
            margin: var(--ds-input-password-toggle-margin)
        }

        .ds-input.ds-input--none:focus-within {
            background-color: var(--ds-input-focus-color, --ds-input-color-focus);
            box-shadow: inset 0 0 0 2px var(--ds-input-focus-border-color, rgb(var(--ds-rgb-primary)))
        }

        .ds-input.ds-input--filled.ds-input--error:focus-within {
            background-color: var(--ds-input-focus-color, --ds-input-color-focus)
        }

        .ds-input.ds-input--bordered.ds-input--error:focus-within {
            background-color: var(--ds-input-focus-color, --ds-input-color-focus)
        }

        .ds-input.ds-input--filled.ds-input--error,
        .ds-input.ds-input--bordered.ds-input--error {
            background-color: rgba(var(--ds-rgb-error)/.06);
            box-shadow: inset 0 0 0 2px var(--ds-input-focus-border-color, rgb(var(--ds-rgb-error)))
        }

        .ds-input.ds-input--filled {
            background-color: var(--ds-input-color)
        }

        .ds-input.ds-input--bordered {
            box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong))
        }

        .ds-icon-button {
            --ds-icon-button-text-color: rgb(var(--ds-rgb-label-2));
            --ds-icon-button-outline-color: rgb(var(--ds-rgb-primary));
            --ds-icon-button-size: 18px;
            --ds-icon-button-background-inset: -4px;
            width: var(--ds-icon-button-size);
            height: var(--ds-icon-button-size);
            color: var(--ds-icon-button-text-color);
            cursor: pointer;
            justify-content: center;
            align-items: center;
            display: flex;
            position: relative
        }

        .ds-icon-button svg {
            height: var(--ds-icon-button-size);
            width: var(--ds-icon-button-size);
            fill: currentColor;
            position: relative
        }

        .ds-icon-button:hover:before {
            background-color: var(--ds-icon-button-hover-color, rgb(var(--ds-rgb-hover)))
        }

        .ds-icon-button:before {
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out);
            content: "";
            background-color: rgba(var(--ds-rgba-transparent));
            top: var(--ds-icon-button-background-inset);
            right: var(--ds-icon-button-background-inset);
            bottom: var(--ds-icon-button-background-inset);
            left: var(--ds-icon-button-background-inset);
            border-radius: 8px;
            display: block;
            position: absolute
        }

        .ds-icon-button {
            outline: none
        }

        .ds-icon-button:after {
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            content: "";
            top: calc(var(--ds-icon-button-background-inset) - 2px);
            right: calc(var(--ds-icon-button-background-inset) - 2px);
            bottom: calc(var(--ds-icon-button-background-inset) - 2px);
            left: calc(var(--ds-icon-button-background-inset) - 2px);
            pointer-events: none;
            border-radius: 10px;
            display: block;
            position: absolute
        }

        .ds-icon-button:focus-visible:after {
            box-shadow: 0 0 0 2px var(--ds-icon-button-outline-color)
        }

        .ds-icon {
            line-height: 0;
            display: inline-flex
        }

        .ds-icon>svg {
            width: inherit;
            height: inherit
        }

        .ds-a {
            --a-border-radius: 6px;
            --a-box-shadow-color-focus: rgb(var(--ds-rgb-link))
        }

        .ds-a.ds-a--link {
            --a-text-color: rgb(var(--ds-rgb-link));
            --a-box-shadow-color-focus: rgb(var(--ds-rgb-link))
        }

        .ds-a.ds-a--primary {
            --a-text-color: rgb(var(--ds-rgb-primary));
            --a-box-shadow-color-focus: rgb(var(--ds-rgb-primary))
        }

        .ds-a.ds-a--secondary {
            --a-text-color: var(--a-text-color-secondary);
            --a-box-shadow-color-focus: rgb(var(--ds-rgb-link))
        }

        .ds-a:focus {
            outline: none
        }

        .ds-a:focus-visible {
            box-shadow: 0 0 0 2px var(--a-box-shadow-color-focus)
        }

        .ds-a {
            cursor: pointer;
            transition: color var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: var(--a-border-radius);
            color: var(--a-text-color);
            border-left: 3px solid rgba(var(--ds-rgba-transparent));
            border-right: 3px solid rgba(var(--ds-rgba-transparent));
            border-top: 2px solid rgba(var(--ds-rgba-transparent));
            border-bottom: 2px solid rgba(var(--ds-rgba-transparent));
            margin: -2px -3px;
            text-decoration: none;
            position: relative
        }

        .ds-checkbox-wrapper {
            font-size: var(--font-size);
            line-height: var(--line-height);
            color: rgb(var(--ds-rgb-label-1))
        }

        .ds-checkbox-wrapper.disabled {
            opacity: .45
        }

        .ds-checkbox-wrapper.disabled .checkbox,
        .ds-checkbox-wrapper.disabled .label {
            cursor: not-allowed
        }

        .ds-checkbox-wrapper.ds-checkbox-wrapper--block {
            display: flex
        }

        .ds-checkbox-wrapper.ds-checkbox-wrapper--xs {
            --font-size: var(--ds-font-size-xs);
            --line-height: var(--ds-line-height-xs)
        }

        .ds-checkbox-wrapper.ds-checkbox-wrapper--s {
            --font-size: var(--ds-font-size-s);
            --line-height: var(--ds-line-height-s)
        }

        .ds-checkbox-wrapper.ds-checkbox-wrapper--m {
            --font-size: var(--ds-font-size-m);
            --line-height: var(--ds-line-height-m)
        }

        .ds-checkbox-wrapper.ds-checkbox-wrapper--l {
            --font-size: var(--ds-font-size-l);
            --line-height: var(--ds-line-height-l)
        }

        .ds-checkbox-align-wrapper {
            vertical-align: bottom;
            height: var(--line-height);
            align-items: center;
            display: inline-flex
        }

        .ds-checkbox {
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            cursor: pointer;
            border-radius: 6px;
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            margin-right: 7px;
            display: inline-flex;
            position: relative
        }

        .ds-checkbox svg {
            width: 12px;
            height: 12px;
            color: rgb(var(--ds-rgb-primary-foreground));
            opacity: 0;
            transition: opacity var(--ds-transition-duration)var(--ds-ease-in-out), transform var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            transform: scale(.8)
        }

        .ds-checkbox.ds-checkbox--filled.ds-checkbox--none {
            background-color: rgb(var(--ds-rgb-input-strong))
        }

        .ds-checkbox.ds-checkbox--filled.ds-checkbox--active {
            background-color: rgb(var(--ds-rgb-primary))
        }

        .ds-checkbox.ds-checkbox--bordered.ds-checkbox--none {
            box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong))
        }

        .ds-checkbox.ds-checkbox--bordered.ds-checkbox--active {
            box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-primary))
        }

        .ds-checkbox.ds-checkbox--error {
            background-color: rgba(var(--ds-rgb-error)/.06);
            box-shadow: inset 0 0 0 2px rgb(var(--ds-rgb-error))
        }

        .ds-checkbox.ds-checkbox--error:focus-visible:after {
            box-shadow: 0 0 0 2px rgb(var(--ds-rgb-error))
        }

        .ds-checkbox.ds-checkbox--active {
            background-color: rgb(var(--ds-rgb-primary))
        }

        .ds-checkbox.ds-checkbox--active svg {
            color: rgb(var(--ds-rgb-primary-foreground));
            opacity: 1;
            transform: scale(1)
        }

        .ds-checkbox {
            outline: none
        }

        .ds-checkbox:after {
            pointer-events: none;
            content: "";
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: 8px;
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px
        }

        .ds-checkbox:focus-visible:after {
            box-shadow: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-checkbox-label {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            flex: 1;
            display: inline
        }

        .ds-fade-in-enter {
            opacity: 0
        }

        .ds-fade-in-active {
            opacity: 1;
            transition: opacity var(--ds-ease-in)var(--ds-transition-duration-fast)
        }

        .ds-fade-in-exit {
            opacity: 1
        }

        .ds-fade-in-exit-active {
            opacity: 0;
            transition: opacity var(--ds-ease-out)var(--ds-transition-duration-fast)
        }

        .ds-modal-wrapper {
            padding: 16px 0;
            display: flex;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto
        }

        .ds-modal-wrapper.ds-modal-wrapper--hide {
            pointer-events: none
        }

        .ds-modal-wrapper .ds-modal {
            box-sizing: border-box;
            margin: auto;
            position: relative
        }

        .ds-modal-overlay {
            pointer-events: none;
            background-color: rgba(0, 0, 0, .24);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .ds-modal-content {
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m);
            color: var(--ds-modal-content-text-color, rgb(var(--ds-rgb-label-1)));
            box-sizing: border-box;
            background-color: var(--ds-modal-content-color, rgb(var(--ds-rgb-elevated)));
            border-radius: 18px;
            outline: none;
            width: 525px;
            max-width: calc(100vw - 32px);
            padding: 18px 21px 21px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, .12)
        }

        .ds-modal-content.ds-modal-content--dialog {
            width: 420px
        }

        .ds-modal-content__header-wrapper {
            color: rgb(var(--ds-rgb-label-1));
            justify-content: space-between;
            margin-bottom: 14px;
            display: flex
        }

        .ds-modal-content__header-wrapper .ds-icon-button {
            margin-top: 4px
        }

        .ds-modal-content__title {
            font-weight: var(--ds-font-weight-strong);
            flex: 1;
            min-height: 24px;
            font-size: 18px;
            line-height: 24px
        }

        .ds-modal-content__footer {
            margin-top: 21px;
            display: block
        }

        .ds-modal-content__button-group {
            justify-content: flex-end;
            display: flex
        }

        .ds-modal-content__button-group>:not(:last-child) {
            margin-right: 14px
        }

        body.dark .ds-skeleton {
            --color-start: rgba(255, 255, 255, .12);
            --color-end: rgba(255, 255, 255, .18)
        }

        .ds-skeleton {
            --color-start: #eee;
            --color-end: #ddd;
            max-width: 100%;
            transition: --color-start .3s var(--ds-ease-in-out), --color-end .3s var(--ds-ease-in-out), background-color .3s var(--ds-ease-in-out);
            background-color: var(--color-start);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            animation: 2s cubic-bezier(.36, 0, .64, 1) infinite ds-skeleton-loading
        }

        .ds-skeleton * {
            visibility: hidden
        }

        .ds-skeleton.ds-skeleton--text {
            border-radius: 4px
        }

        .ds-skeleton.ds-skeleton--text.ds-skeleton--has-children {
            width: -moz-fit-content;
            width: fit-content
        }

        .ds-skeleton.ds-skeleton--text>span {
            visibility: hidden
        }

        .ds-skeleton.ds-skeleton--circle {
            border-radius: 4096px
        }

        .ds-skeleton.ds-skeleton--rect {
            border-radius: 10px
        }

        .ds-skeleton.ds-skeleton--sharp {
            border-radius: 0
        }

        .ds-skeleton.ds-skeleton--circle.ds-skeleton--xs,
        .ds-skeleton.ds-skeleton--rect.ds-skeleton--xs {
            height: var(--ds-input-height-xs)
        }

        .ds-skeleton.ds-skeleton--circle.ds-skeleton--s,
        .ds-skeleton.ds-skeleton--rect.ds-skeleton--s {
            height: var(--ds-input-height-s)
        }

        .ds-skeleton.ds-skeleton--circle.ds-skeleton--m,
        .ds-skeleton.ds-skeleton--rect.ds-skeleton--m {
            height: var(--ds-input-height-m)
        }

        @keyframes ds-skeleton-loading {
            0% {
                background: var(--color-start)
            }

            40% {
                background: var(--color-end)
            }

            80% {
                background: var(--color-start)
            }

            to {
                background: var(--color-start)
            }
        }

        .ds-fade-in-zoom-in-expand-enter {
            opacity: 0;
            transform: scale(.8)
        }

        .ds-fade-in-zoom-in-expand-enter-active {
            opacity: 1;
            transition: max-height var(--ds-ease-in)var(--ds-transition-duration-fast), opacity var(--ds-ease-in)var(--ds-transition-duration-fast), transform var(--ds-ease-in)var(--ds-transition-duration-fast);
            transform: scale(1)
        }

        .ds-fade-in-zoom-in-expand-exit {
            opacity: 1;
            transform: scale(1)
        }

        .ds-fade-in-zoom-in-expand-exit-active {
            opacity: 0;
            transition: max-height var(--ds-ease-out)var(--ds-transition-duration-fast), opacity var(--ds-ease-out)var(--ds-transition-duration-fast), transform var(--ds-ease-out)var(--ds-transition-duration-fast);
            transform: scale(.8)
        }

        .ds-fade-in-zoom-in-expand-top {
            align-items: flex-start;
            display: flex
        }

        .ds-fade-in-zoom-in-expand-center {
            align-items: center;
            display: flex
        }

        .ds-toast {
            --ds-toast-color: var(--ds-toast-custom-color, rgb(var(--ds-rgb-elevated)));
            --ds-toast-text-color: var(--ds-toast-custom-text-color, rgb(var(--ds-rgb-label-1)));
            --ds-toast-border-radius: 12px;
            --ds-toast-font-size: var(--ds-toast-custom-font-size, var(--ds-font-size-m));
            --ds-toast-line-height: var(--ds-line-height-m);
            --ds-toast-padding: 11px 14px;
            --ds-toast-icon-size: 20px;
            --ds-toast-close-size: 18px;
            --ds-toast-close-border-radius: 6px;
            --ds-toast-close-icon-size: 10px
        }

        .ds-toast.ds-toast--filled {
            --ds-toast-color: rgb(var(--ds-rgb-elevated));
            --ds-toast-text-color: white
        }

        .ds-toast.ds-toast--filled.ds-toast--warning {
            --ds-toast-color: rgb(var(--ds-rgb-warning));
            --ds-toast-icon-color: white
        }

        .ds-toast.ds-toast--filled.ds-toast--success {
            --ds-toast-color: rgb(var(--ds-rgb-success));
            --ds-toast-icon-color: white
        }

        .ds-toast.ds-toast--filled.ds-toast--error {
            --ds-toast-color: rgb(var(--ds-rgb-error));
            --ds-toast-icon-color: white
        }

        .ds-toast.ds-toast--warning {
            --ds-toast-icon-color: rgb(var(--ds-rgb-warning))
        }

        .ds-toast.ds-toast--success {
            --ds-toast-icon-color: rgb(var(--ds-rgb-success))
        }

        .ds-toast.ds-toast--error {
            --ds-toast-icon-color: rgb(var(--ds-rgb-error))
        }

        .ds-toast-container {
            z-index: 2000;
            pointer-events: none;
            --ds-toast-top-distance: 28px;
            position: fixed;
            right: 0
        }

        .ds-toast-container.ds-toast-container--top {
            top: var(--ds-toast-top-distance)
        }

        .ds-toast-container.ds-toast-container--center {
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translateY(-50%)translate(-50%)
        }

        .ds-toast-container.ds-toast-container--center .ds-toast-animation {
            margin-top: 16px
        }

        .ds-toast-container .ds-toast-animation {
            width: -moz-fit-content;
            width: fit-content;
            margin-bottom: 16px;
            margin-left: auto;
            margin-right: auto
        }

        @supports (top: env(safe-area-inset-top)) {
            .ds-toast-container.ds-toast-container--top {
                top: calc(var(--ds-toast-top-distance) + env(safe-area-inset-top));
                bottom: calc(var(--ds-toast-top-distance) + env(safe-area-inset-bottom));
                left: calc(var(--ds-toast-top-distance) + env(safe-area-inset-left));
                right: calc(var(--ds-toast-top-distance) + env(safe-area-inset-right))
            }
        }

        .ds-toast {
            text-align: center;
            word-break: break-word;
            box-sizing: border-box;
            pointer-events: all;
            background-color: var(--ds-toast-color);
            border-radius: var(--ds-toast-border-radius);
            max-width: calc(100vw - 28px);
            padding: var(--ds-toast-padding);
            font-size: var(--ds-toast-font-size);
            color: var(--ds-toast-text-color);
            line-height: var(--ds-toast-line-height);
            box-shadow: var(--ds-toast-custom-box-shadow, 0px 4px 15px 0px rgba(191, 196, 213, .25));
            align-items: center;
            display: flex
        }

        .ds-toast .ds-toast__icon {
            width: var(--ds-toast-icon-size);
            height: var(--ds-toast-icon-size);
            font-size: var(--ds-toast-icon-size);
            color: var(--ds-toast-icon-color);
            margin-bottom: auto;
            margin-right: 10px;
            display: flex;
            position: relative;
            top: 2px
        }

        .ds-toast .ds-toast__icon svg {
            width: var(--ds-toast-icon-size);
            height: var(--ds-toast-icon-size)
        }

        .ds-toast .ds-toast__close {
            width: var(--ds-toast-close-size);
            height: var(--ds-toast-close-size);
            color: var(--ds-toast-custom-close-text-color, #c2c2c2);
            border-radius: var(--ds-toast-close-border-radius);
            cursor: pointer;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            display: flex
        }

        .ds-toast .ds-toast__close:hover {
            background-color: var(--ds-toast-custom-close-hover-color, #f5f5f5)
        }

        .ds-toast .ds-toast__close svg {
            width: var(--ds-toast-close-icon-size);
            height: var(--ds-toast-close-icon-size)
        }

        .ds-toast {
            color: var(--ds-toast-text-color)
        }

        .ds-toast .ds-toast__content {
            white-space: pre-wrap
        }

        .ds-loading {
            width: 1em;
            height: 1em;
            color: inherit;
            display: inline-flex
        }

        .ds-loading svg {
            will-change: transform;
            width: 1em;
            height: 1em;
            animation: .6s linear infinite ds-loading
        }

        @keyframes ds-loading {
            0% {
                transform: rotate(0)
            }

            to {
                transform: rotate(360deg)
            }
        }

        .ds-button {
            --ds-rgb-error-hover: 218 54 54
        }

        .ds-button:not(.ds-button--text).ds-button--l {
            --button-height: var(--ds-input-height-l);
            --button-font-size: var(--ds-font-size-m);
            --button-line-height: var(--ds-line-height-m);
            --button-border-radius: 10px;
            --button-padding: 0 14px;
            --button-icon-size: 18px;
            --button-icon-margin: 0 8px 0 0
        }

        .ds-button:not(.ds-button--text).ds-button--m {
            --button-height: var(--ds-input-height-m);
            --button-font-size: var(--ds-font-size-m);
            --button-line-height: var(--ds-line-height-m);
            --button-border-radius: 10px;
            --button-padding: 0 14px;
            --button-icon-size: 18px;
            --button-icon-margin: 0 8px 0 0
        }

        .ds-button:not(.ds-button--text).ds-button--s {
            --button-height: var(--ds-input-height-s);
            --button-font-size: var(--ds-font-size-s);
            --button-line-height: var(--ds-line-height-s);
            --button-border-radius: 10px;
            --button-padding: 0 14px;
            --button-icon-size: 18px;
            --button-icon-margin: 0 8px 0 0
        }

        .ds-button:not(.ds-button--text).ds-button--xs {
            --button-height: var(--ds-input-height-xs);
            --button-font-size: var(--ds-font-size-xs);
            --button-line-height: var(--ds-line-height-xs);
            --button-border-radius: 8px;
            --button-padding: 0 10px;
            --button-icon-size: 18px;
            --button-icon-margin: 0 8px 0 0
        }

        .ds-button:not(.ds-button--text).ds-button--capsule,
        .ds-button:not(.ds-button--text).ds-button--circle {
            --button-border-radius: 4096px
        }

        .ds-button.ds-button--text.ds-button--l {
            --button-height: unset;
            --button-font-size: var(--ds-font-size-l);
            --button-line-height: var(--ds-line-height-l);
            --button-border-radius: 8px;
            --button-padding: 0;
            --button-icon-size: 18px;
            --button-icon-margin: 0 4px 0 0
        }

        .ds-button.ds-button--text.ds-button--m {
            --button-height: unset;
            --button-font-size: var(--ds-font-size-m);
            --button-line-height: var(--ds-line-height-m);
            --button-border-radius: 8px;
            --button-padding: 0;
            --button-icon-size: 18px;
            --button-icon-margin: 0 4px 0 0
        }

        .ds-button.ds-button--text.ds-button--s {
            --button-height: unset;
            --button-font-size: var(--ds-font-size-s);
            --button-line-height: var(--ds-line-height-s);
            --button-border-radius: 8px;
            --button-padding: 0;
            --button-icon-size: 18px;
            --button-icon-margin: 0 2px 0 0
        }

        .ds-button.ds-button--text.ds-button--xs {
            --button-height: unset;
            --button-font-size: var(--ds-font-size-xs);
            --button-line-height: var(--ds-line-height-xs);
            --button-border-radius: 6px;
            --button-padding: 0;
            --button-icon-size: 18px;
            --button-icon-margin: 0 2px 0 0
        }

        .ds-button.ds-button--text.ds-button--capsule {
            --button-border-radius: 4096px
        }

        .ds-button {
            --ds-button-color: transparent
        }

        .ds-button.ds-button--filled.ds-button--primary {
            --ds-button-color: rgb(var(--ds-rgb-primary))
        }

        .ds-button.ds-button--filled.ds-button--error {
            --ds-button-color: rgb(var(--ds-rgb-error))
        }

        .ds-button.ds-button--filled.ds-button--error:hover {
            --ds-button-color: rgb(var(--ds-rgb-error-hover, var(--ds-rgb-error)))
        }

        .ds-button.ds-button--filled.ds-button--secondary {
            background-color: var(--ds-secondary-button-color, var(--ds-button-color, rgb(var(--ds-rgb-input))))
        }

        .ds-button.ds-button--filled.ds-button--secondary:hover {
            background-color: var(--ds-secondary-button-hover-color, rgb(var(--ds-rgb-hover)))
        }

        .ds-button.ds-button--filled.ds-button--success {
            --ds-button-color: rgb(var(--ds-rgb-success))
        }

        .ds-button.ds-button--filled.ds-button--info {
            --ds-button-color: rgb(var(--ds-rgb-info))
        }

        .ds-button.ds-button--filled.ds-button--warning {
            --ds-button-color: rgb(var(--ds-rgb-warning))
        }

        .ds-button.ds-button--error {
            --button-ring-color: rgb(var(--ds-rgb-error))
        }

        .ds-button.ds-button--success {
            --button-ring-color: rgb(var(--ds-rgb-success))
        }

        .ds-button.ds-button--info {
            --button-ring-color: rgb(var(--ds-rgb-info))
        }

        .ds-button.ds-button--warning {
            --button-ring-color: rgb(var(--ds-rgb-warning))
        }

        .ds-button {
            --button-ring-color: rgb(var(--ds-rgb-primary))
        }

        .ds-button.ds-button--filled.ds-button--primary {
            --button-text-color: rgb(var(--ds-rgb-primary-foreground));
            --button-icon-color: rgb(var(--ds-rgb-primary-foreground))
        }

        .ds-button.ds-button--filled.ds-button--error {
            --button-text-color: white;
            --button-icon-color: white
        }

        .ds-button.ds-button--filled.ds-button--secondary {
            --button-text-color: rgb(var(--ds-rgb-label-1));
            --button-icon-color: rgb(var(--ds-rgb-label-1))
        }

        .ds-button.ds-button--filled.ds-button--success,
        .ds-button.ds-button--filled.ds-button--info,
        .ds-button.ds-button--filled.ds-button--warning {
            --button-text-color: white;
            --button-icon-color: white
        }

        .ds-button.ds-button--filled:hover {
            color: var(--ds-button-hover-text-color, var(--button-text-color));
            background-color: var(--ds-button-hover-color, var(--ds-button-color, rgb(var(--ds-rgb-hover))))
        }

        .ds-button.ds-button--bordered.ds-button--secondary {
            --button-text-color: rgb(var(--ds-rgb-label-1));
            --button-icon-color: rgb(var(--ds-rgb-label-2));
            --button-border-color: rgb(var(--ds-rgb-separator-strong))
        }

        .ds-button.ds-button--bordered:hover {
            background-color: var(--ds-button-bordered-hover-color, rgb(var(--ds-rgb-hover)))
        }

        .ds-button.ds-button--text.ds-button--primary {
            --button-text-color: rgb(var(--ds-rgb-primary));
            --button-icon-color: rgb(var(--ds-rgb-primary))
        }

        .ds-button.ds-button--text.ds-button--error {
            --button-text-color: rgb(var(--ds-rgb-error));
            --button-icon-color: rgb(var(--ds-rgb-error))
        }

        .ds-button.ds-button--text.ds-button--success {
            --button-text-color: rgb(var(--ds-rgb-success));
            --button-icon-color: rgb(var(--ds-rgb-success))
        }

        .ds-button.ds-button--text.ds-button--info {
            --button-text-color: rgb(var(--ds-rgb-info));
            --button-icon-color: rgb(var(--ds-rgb-info))
        }

        .ds-button.ds-button--text.ds-button--warning {
            --button-text-color: rgb(var(--ds-rgb-warning));
            --button-icon-color: rgb(var(--ds-rgb-warning))
        }

        .ds-button.ds-button--text:hover:after {
            z-index: -1
        }

        .ds-button {
            height: var(--button-height);
            line-height: var(--button-line-height);
            font-size: var(--button-font-size);
            border-radius: var(--button-border-radius);
            padding: var(--button-padding);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            white-space: nowrap;
            box-sizing: border-box;
            transition: opacity var(--ds-transition-duration)var(--ds-ease-in-out), background-color var(--ds-transition-duration)var(--ds-ease-in-out);
            font-variant-numeric: tabular-nums;
            outline: none;
            align-items: center;
            text-decoration: none;
            display: inline-flex;
            position: relative
        }

        .ds-button>.ds-button__icon {
            line-height: 0;
            font-size: var(--button-icon-size);
            width: var(--button-icon-size);
            height: var(--button-icon-size);
            margin: var(--button-icon-margin);
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            display: flex
        }

        .ds-button>.ds-button__icon.ds-button__icon--last-child {
            margin-right: 0
        }

        .ds-button.ds-button--circle,
        .ds-button.ds-button--square {
            justify-content: center;
            align-items: center
        }

        .ds-button>.ds-button__icon {
            color: var(--button-icon-color)
        }

        .ds-button {
            background-color: var(--ds-button-color)
        }

        .ds-button.ds-button--filled {
            color: var(--button-text-color)
        }

        .ds-button.ds-button--bordered.ds-button--secondary {
            color: var(--button-text-color);
            box-shadow: inset 0 0 0 1px var(--button-border-color)
        }

        .ds-button.ds-button--text,
        .ds-button.ds-button--borderless {
            color: var(--button-text-color)
        }

        .ds-button.ds-button--borderless:not(.ds-button--disabled):hover {
            background-color: var(--ds-button-hover-color)
        }

        .ds-button:after {
            pointer-events: none;
            content: "";
            border-radius: calc(var(--button-border-radius) + 2px);
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px
        }

        .ds-button:focus-visible:after {
            box-shadow: 0 0 0 2px var(--button-ring-color)
        }

        .ds-button.ds-button--block {
            justify-content: center;
            display: flex
        }

        .ds-button.ds-button--disabled {
            opacity: .45;
            cursor: not-allowed
        }

        .ds-button:not(.ds-button--text).ds-button--circle,
        .ds-button:not(.ds-button--text).ds-button--square {
            width: var(--button-height)
        }

        .ds-button.ds-button--text.ds-button--l:after {
            top: -4px;
            bottom: -4px;
            left: -8px;
            right: -8px
        }

        .ds-button.ds-button--text.ds-button--m:after,
        .ds-button.ds-button--text.ds-button--s:after {
            border-radius: 12px;
            top: -4px;
            bottom: -4px;
            left: -8px;
            right: -8px
        }

        .ds-button.ds-button--text.ds-button--xs:after,
        .ds-button.ds-button--text.ds-button--square:after {
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px
        }

        .ds-sign-in-with-wechat-dialog__wrapper {
            justify-content: center;
            align-items: center;
            display: flex;
            overflow: hidden
        }

        .ds-sign-in-with-wechat-dialog__wrapper iframe {
            border: 1px solid rgb(var(--ds-rgb-separator-strong));
            border-radius: 8px;
            width: 160px;
            height: 160px;
            margin: 16px;
            padding: 4px
        }

        .ds-sign-in-with-wechat-dialog__description {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            display: flex
        }

        .ds-sign-in-with-wechat-dialog__logo {
            color: #00bc0c;
            margin-right: 8px
        }

        .ds-sign-in-with-wechat-dialog__agreement {
            text-align: center;
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            color: rgb(var(--ds-rgb-label-2));
            margin-top: 8px;
            padding-bottom: 30px
        }

        .ds-sign-in-with-wechat-dialog__agreement a {
            color: rgb(var(--ds-rgb-label-1))
        }

        .ds-sign-in-form__form-footer {
            justify-content: space-between;
            margin-top: 12px;
            display: flex
        }

        .ds-sign-up-form__tabs {
            font-weight: var(--ds-font-weight-strong);
            color: rgb(var(--ds-rgb-label-2));
            justify-content: center;
            margin: 0 auto 20px
        }

        .ds-sign-up-form__footer-placeholder {
            height: 10px
        }

        .ds-sign-up-form__tips {
            text-align: left;
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            color: rgb(var(--ds-rgb-label-2));
            margin-bottom: 4px
        }

        .ds-sign-up-form__register-button {
            margin-top: 21px
        }

        .ds-sign-up-form__icon {
            justify-content: center;
            align-items: center;
            margin: auto auto 24px;
            line-height: 0;
            display: flex
        }

        .ds-sign-up-form__icon>svg {
            height: 44px
        }

        .ds-sign-up-form__description {
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            color: rgb(var(--ds-rgb-label-2));
            margin-bottom: 16px
        }

        .ds-sign-up-form__form-footer {
            justify-content: space-between;
            margin-top: 14px;
            display: flex
        }

        .ds-tabs {
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m);
            height: 32px;
            display: flex
        }

        .ds-tab {
            margin-right: var(--ds-tab-gap);
            cursor: pointer;
            align-items: center;
            height: 100%;
            display: flex;
            position: relative
        }

        .ds-tab:last-child {
            margin-right: 0
        }

        .ds-tab.ds-tab--active {
            color: rgb(var(--ds-rgb-primary))
        }

        .ds-tab .ds-tab__line {
            background-color: rgb(var(--ds-rgb-primary));
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: -3px;
            right: -3px
        }

        .ds-tab .ds-tab__content {
            position: relative
        }

        .ds-tab .ds-tab__content:after {
            content: "";
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: 8px;
            position: absolute;
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px
        }

        .ds-tab:focus {
            outline: none
        }

        .ds-tab:focus-visible .ds-tab__content:after {
            box-shadow: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-divider {
            justify-content: center;
            align-items: center;
            margin: 8px 0;
            display: flex
        }

        .ds-divider__left,
        .ds-divider__right {
            background-color: rgb(var(--ds-rgb-separator));
            flex-grow: 1;
            height: 1px
        }

        .ds-divider__content {
            font-size: var(--ds-font-size-s);
            line-height: var(--ds-line-height-s);
            color: rgb(var(--ds-rgb-label-3));
            flex-shrink: 0;
            margin: 0 10px
        }

        .ds-divider--strong {
            font-weight: var(--ds-font-weight-strong)
        }

        .ds-divider--strong .ds-divider__content {
            color: rgb(var(--ds-rgb-primary));
            font-size: var(--ds-font-size-s)
        }

        .ds-divider--strong .ds-divider__left,
        .ds-divider--strong .ds-divider__right {
            background: rgb(var(--ds-rgb-primary));
            border-color: rgb(var(--ds-rgb-primary));
            height: 3px;
            transform: scaleY(.5)
        }

        .ds-forgot-password-form__icon {
            justify-content: center;
            margin: auto auto 28px;
            line-height: 0;
            display: flex
        }

        .ds-forgot-password-form__icon>svg {
            height: 44px
        }

        .ds-forgot-password-form__title {
            color: rgb(var(--ds-rgb-label-1));
            font-size: 23px;
            line-height: 23px;
            font-weight: var(--ds-font-weight-strong);
            text-align: center;
            margin-bottom: 21px
        }

        .ds-forgot-password-form__loading-wrapper {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            padding: 28px 0;
            font-size: 28px;
            display: flex
        }

        .ds-forgot-password-form__form-footer {
            justify-content: flex-end;
            margin-top: 14px;
            display: flex
        }

        .ds-forgot-password-form__description {
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            color: rgb(var(--ds-rgb-label-2));
            margin-bottom: 21px
        }

        .ds-enhanced-text__p {
            margin: 0 0 14px
        }

        .ds-enhanced-text__p:last-child {
            margin: 0
        }

        .ds-enhanced-text__bold {
            font-weight: 700
        }

        .ds-authorized-container__loading {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            font-size: 21px;
            display: flex
        }

        .ds-sider__policies-footer {
            color: rgb(var(--ds-rgb-label-2));
            flex-wrap: wrap;
            align-items: center;
            padding: 0 12px;
            font-size: 14px;
            line-height: 22px;
            display: flex
        }

        .ds-banned-container__wrapper {
            font-size: var(--ds-font-size-m);
            color: rgb(var(--ds-rgb-label-1));
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: flex
        }

        .ds-banned-container__logo,
        .ds-banned-container__slogan {
            line-height: var(--ds-line-height-m);
            text-align: center;
            margin-bottom: 20px;
            padding: 0 20px
        }

        @media not all and (min-width: 640px) {
            .ds-banned-container__logo svg {
                width: 70%
            }
        }

        .ds-auth-footer {
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            display: flex
        }

        .ds-text.ds-text--block {
            display: block
        }

        .ds-text.ds-text--monospace {
            font-family: var(--ds-font-family-code)
        }

        .ds-text.ds-text--fxs {
            font-size: var(--ds-font-size-xs)
        }

        .ds-text.ds-text--fxsp {
            font-size: var(--ds-font-size-xsp)
        }

        .ds-text.ds-text--fs {
            font-size: var(--ds-font-size-s)
        }

        .ds-text.ds-text--fsp {
            font-size: var(--ds-font-size-sp)
        }

        .ds-text.ds-text--fm {
            font-size: var(--ds-font-size-m)
        }

        .ds-text.ds-text--lxs {
            line-height: var(--ds-line-height-xs)
        }

        .ds-text.ds-text--lxsp {
            line-height: var(--ds-line-height-xsp)
        }

        .ds-text.ds-text--ls {
            line-height: var(--ds-line-height-s)
        }

        .ds-text.ds-text--lsp {
            line-height: var(--ds-line-height-sp)
        }

        .ds-text.ds-text--lm {
            line-height: var(--ds-line-height-m)
        }

        .ds-text.ds-text--label1 {
            color: rgb(var(--ds-rgb-label-1))
        }

        .ds-text.ds-text--label2 {
            color: rgb(var(--ds-rgb-label-2))
        }

        .ds-text.ds-text--label3 {
            color: rgb(var(--ds-rgb-label-3))
        }

        .ds-mobile-verfication-form__icon {
            justify-content: center;
            margin: auto auto 28px;
            line-height: 0;
            display: flex
        }

        .ds-mobile-verfication-form__icon>svg {
            height: 44px
        }

        .ds-mobile-verfication-form__title {
            color: rgb(var(--ds-rgb-label-1));
            font-size: 23px;
            line-height: 23px;
            font-weight: var(--ds-font-weight-strong);
            text-align: center;
            margin-bottom: 21px
        }

        .ds-mobile-verfication-form__loading-wrapper {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            padding: 28px 0;
            font-size: 28px;
            display: flex
        }

        .ds-mobile-verfication-form__description {
            font-size: var(--ds-font-size-sp);
            line-height: var(--ds-line-height-sp);
            color: rgb(var(--ds-rgb-label-2));
            margin-bottom: 21px
        }

        .ds-banner {
            --ds-banner-font-size: var(--ds-font-size-m);
            --ds-banner-line-height: var(--ds-line-height-m);
            --ds-banner-text-color: rgb(var(--ds-rgb-primary-foreground));
            --ds-banner-padding: 8px 14px;
            --ds-banner-close-icon-color: rgb(var(--ds-rgb-primary-foreground))
        }

        .ds-banner.ds-banner--info {
            --ds-banner-color: rgb(var(--ds-rgb-info))
        }

        .ds-banner.ds-banner--warning {
            --ds-banner-color: rgb(var(--ds-rgb-warning))
        }

        .ds-banner.ds-banner--error {
            --ds-banner-color: rgb(var(--ds-rgb-error))
        }

        .ds-banner {
            background-color: var(--ds-banner-color);
            font-size: var(--ds-banner-font-size);
            line-height: var(--ds-banner-line-height);
            color: var(--ds-banner-text-color);
            padding: var(--ds-banner-padding);
            display: flex
        }

        .ds-banner__content {
            text-align: center;
            text-wrap: balance;
            flex: 1;
            padding-right: 14px
        }

        .ds-banner__close-wrapper {
            min-height: var(--ds-banner-line-height);
            width: 21px;
            height: 21px;
            color: var(--ds-banner-close-icon-color);
            flex-grow: 0;
            flex-shrink: 0;
            align-items: center;
            margin-left: 8px;
            display: flex
        }

        .ds-notification-container {
            z-index: 1500;
            pointer-events: none;
            flex-direction: column;
            align-items: center;
            display: flex;
            position: fixed;
            bottom: 16px;
            right: 16px
        }

        .ds-notification-container .ds-notification {
            background-color: rgb(var(--ds-rgb-elevated));
            pointer-events: all;
            width: 315px;
            max-width: calc(100vw - 32px);
            color: rgb(var(--ds-rgb-label-1));
            font-size: 14px;
            line-height: var(--ds-line-height-m);
            border-radius: 10px;
            flex-wrap: nowrap;
            margin-top: 14px;
            padding: 14px;
            display: flex;
            position: relative;
            box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)
        }

        .ds-notification-container .ds-notification .ds-notification__main {
            flex-flow: column;
            flex-grow: 1;
            display: flex
        }

        .ds-notification-container .ds-notification .ds-notification__content {
            color: rgb(var(--ds-rgb-label-2));
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m)
        }

        .ds-notification-container .ds-notification .ds-notification__title {
            font-weight: var(--ds-font-weight-strong);
            flex-grow: 1;
            min-height: 21px;
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 21px
        }

        .ds-notification-container .ds-notification .ds-notification__footer {
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m);
            margin-top: 8px
        }

        .ds-notification-container .ds-notification .ds-notification__close-wrapper {
            height: 21px;
            color: rgb(var(--ds-rgb-label-2));
            flex-grow: 0;
            flex-shrink: 0;
            margin-left: 8px
        }

        .ds-notification-container .ds-notification .ds-notification__icon-wrapper {
            flex-grow: 0;
            flex-shrink: 0;
            width: 21px;
            margin-right: 10px
        }

        .ds-notification-container .ds-notification .ds-notification__icon {
            justify-content: center;
            align-items: center;
            width: 21px;
            height: 21px;
            margin-right: 10px;
            font-size: 21px;
            display: flex
        }

        .ds-notification-container .ds-notification .ds-notification__icon svg {
            flex-shrink: 0;
            width: 24px;
            height: 24px
        }

        .ds-notification-container .ds-notification .ds-notification__icon--warning {
            color: #f97316
        }

        .ds-notification-container .ds-notification .ds-notification__icon--success {
            color: #22c55e
        }

        .ds-notification-container .ds-notification .ds-notification__icon--error {
            color: rgb(var(--ds-rgb-error))
        }

        .c994dda2 {
            box-sizing: border-box;
            flex-direction: column;
            align-items: stretch;
            min-height: 100vh;
            display: flex
        }

        @supports (top: env(safe-area-inset-top)) {
            .c994dda2 {
                padding-top: env(safe-area-inset-top);
                padding-left: env(safe-area-inset-left);
                padding-right: env(safe-area-inset-right);
                padding-bottom: env(safe-area-inset-bottom)
            }
        }

        .c279e7ba {
            flex-shrink: 0
        }

        .ad066d2e {
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 0;
            justify-content: safe center;
            align-items: safe center;
            display: flex
        }

        .cc447402 {
            justify-content: center;
            padding: 32px 0 20px;
            display: flex
        }

        @media not all and (min-width: 768px) {
            .cc447402 {
                padding: 32px 18px 20px
            }
        }

        .e2394955 {
            justify-content: center;
            align-items: center;
            margin: auto auto 24px;
            line-height: 0;
            display: flex
        }

        .e2394955>svg {
            height: 44px
        }

        .a02c1715 {
            justify-content: center;
            align-items: center;
            display: flex;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .e32c2b1a {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: calc(100vw - 32px);
            display: flex
        }

        .bde80c41 {
            font-size: 32px;
            font-weight: var(--ds-font-weight-strong);
            color: rgb(var(--ds-rgb-label-1));
            margin-bottom: 21px;
            line-height: 46px
        }

        .e693efc9 {
            display: flex
        }

        .e693efc9>:not(:last-child) {
            margin-right: 16px
        }

        .cf2d5336 {
            white-space: pre-wrap;
            color: rgb(var(--ds-rgb-label-2));
            width: 600px;
            max-width: calc(100vw - 32px);
            font-size: 12px;
            line-height: 18px
        }

        .ds-flex {
            display: flex
        }

        .ds-floating-position-wrapper {
            width: -moz-max-content;
            width: max-content;
            position: absolute;
            top: 0;
            left: 0
        }

        .ds-tooltip {
            --tooltip-text-color: #fff;
            --tooltip-color: #222;
            --tooltip-box-shadow: 0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 9px 28px 8px rgba(0, 0, 0, .05)
        }

        .ds-tooltip.ds-tooltip--m {
            --tooltip-font-size: var(--ds-font-size-m);
            --tooltip-line-height: var(--ds-line-height-m);
            --tooltip-padding: 6px 12px;
            --tooltip-arrow-size: 8px
        }

        .ds-tooltip.ds-tooltip--s {
            --tooltip-font-size: var(--ds-font-size-s);
            --tooltip-line-height: var(--ds-line-height-s);
            --tooltip-padding: 6px 10px;
            --tooltip-arrow-size: 6px
        }

        body.dark .ds-tooltip {
            --tooltip-text-color: rgb(var(--ds-rgb-label-1));
            --tooltip-color: rgb(var(--ds-rgb-elevated));
            --tooltip-box-shadow: 0 6px 16px 0 rgba(0, 0, 0, .08), 0 3px 6px -4px rgba(0, 0, 0, .12), 0 9px 28px 8px rgba(0, 0, 0, .05)
        }

        .ds-tooltip.ds-tooltip--show-shadow,
        .ds-tooltip.ds-tooltip--show-shadow__arrow,
        body.dark .ds-tooltip {
            box-shadow: var(--tooltip-box-shadow)
        }

        .ds-tooltip {
            padding: var(--tooltip-padding);
            font-size: var(--tooltip-font-size);
            line-height: var(--tooltip-line-height);
            background-color: var(--tooltip-color);
            color: var(--tooltip-text-color);
            max-width: var(--ds-toast-max-width, calc(100vw - 28px));
            border-radius: 10px;
            position: relative
        }

        .ds-tooltip__arrow {
            z-index: -1;
            color: var(--tooltip-color);
            z-index: 1;
            justify-content: center;
            align-items: flex-start;
            display: flex;
            position: absolute
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--sharp {
            width: calc(var(--tooltip-arrow-size)*1.414);
            height: calc(var(--tooltip-arrow-size)*1.414);
            background-color: var(--tooltip-color)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--soft {
            width: calc(var(--tooltip-arrow-size)*2);
            height: calc(var(--tooltip-arrow-size)*2)
        }

        .ds-tooltip__soft-arrow {
            height: var(--tooltip-arrow-size);
            flex-shrink: 0;
            transform: translateY(100%)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--sharp[ds-floating-placement^=top] {
            top: 100%;
            transform: translateY(-50%)rotate(45deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--sharp[ds-floating-placement^=bottom] {
            bottom: 100%;
            transform: translateY(50%)rotate(45deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--sharp[ds-floating-placement^=left] {
            left: 100%;
            transform: translate(-50%)rotate(45deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--sharp[ds-floating-placement^=right] {
            right: 100%;
            transform: translate(50%)rotate(45deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--soft[ds-floating-placement^=top] {
            top: 100%;
            transform: translateY(-50%)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--soft[ds-floating-placement^=bottom] {
            bottom: 100%;
            transform: translateY(50%)rotate(180deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--soft[ds-floating-placement^=left] {
            left: 100%;
            transform: translate(-50%)rotate(270deg)
        }

        .ds-tooltip__arrow.ds-tooltip__arrow--soft[ds-floating-placement^=right] {
            right: 100%;
            transform: translate(50%)rotate(90deg)
        }

        .dd7e4fda {
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-font-size-m);
            color: rgb(var(--ds-rgb-label-2));
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
            font-weight: 500
        }

        [data-ds-dark-theme] .dd7e4fda {
            color: #cdd4df
        }

        .d6322366 {
            flex-direction: column;
            display: flex
        }

        .d6322366>*+* {
            margin-top: 16px
        }

        .ddff0051 {
            display: flex
        }

        .ddff0051>:not(:last-child) {
            margin-right: 16px
        }

        .ddff0051 {
            justify-content: flex-end
        }

        [data-ds-dark-theme] .d6322366 .ds-radio-button-group .ds-radio-button.ds-radio-button--active {
            --radio-button-group-button-text-color-active: 255 255 255;
            background-color: transparent
        }

        [data-ds-dark-theme] .d6322366 .ds-radio-button-group .ds-radio-button.ds-radio-button--active:after {
            box-shadow: 0 0 0 2px #4d6bfe
        }

        .ds-radio-button-group.ds-radio-button-group--bordered1 {
            --radio-button-group-button-color: transparent;
            --radio-button-group-button-box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong));
            --radio-button-group-button-box-shadow-active: inset 0 0 0 1px rgb(var(--ds-rgb-primary));
            --radio-button-group-button-box-shadow-active-focus: inset 0 0 0 1px rgb(var(--ds-rgb-primary));
            --radio-button-group-button-box-shadow-focus: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong));
            --radio-button-group-button-color-active: rgb(var(--ds-rgb-primary));
            --radio-button-group-button-text-color-active: rgb(var(--ds-rgb-primary-foreground));
            --radio-button-group-button-outline-box-shadow-focus: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-radio-button-group.ds-radio-button-group--bordered2 {
            --radio-button-group-button-color: transparent;
            --radio-button-group-button-box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong));
            --radio-button-group-button-box-shadow-active: inset 0 0 0 2px rgb(var(--ds-rgb-primary));
            --radio-button-group-button-box-shadow-active-focus: inset 0 0 0 2px rgb(var(--ds-rgb-primary)), 0 0 0 1px rgb(var(--ds-rgb-primary));
            --radio-button-group-button-box-shadow-focus: inset 0 0 0 1px rgba(var(--ds-rgb-primary)/.48), 0 0 0 1px rgba(var(--ds-rgb-primary)/.48);
            --radio-button-group-button-color-active: transparent;
            --radio-button-group-button-text-color-active: rgb(var(--ds-rgb-primary));
            --radio-button-group-button-outline-box-shadow-focus: none
        }

        .ds-radio-button-group.ds-radio-button-group--bordered3 {
            --radio-button-group-button-color: transparent;
            --radio-button-group-button-box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong));
            --radio-button-group-button-box-shadow-active: inset 0 0 0 1px transparent;
            --radio-button-group-button-box-shadow-active-focus: inset 0 0 0 1px transparent;
            --radio-button-group-button-box-shadow-focus: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong));
            --radio-button-group-button-color-active: rgba(var(--ds-rgb-primary)/.16);
            --radio-button-group-button-text-color-active: rgb(var(--ds-rgb-primary));
            --radio-button-group-button-outline-box-shadow-focus: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-radio-button-group.ds-radio-button-group--filled1 {
            --radio-button-group-button-color: rgb(var(--ds-rgb-input));
            --radio-button-group-button-box-shadow: none;
            --radio-button-group-button-box-shadow-active: none;
            --radio-button-group-button-box-shadow-active-focus: none;
            --radio-button-group-button-box-shadow-focus: none;
            --radio-button-group-button-color-active: rgba(var(--ds-rgb-primary)/.16);
            --radio-button-group-button-text-color-active: rgb(var(--ds-rgb-primary));
            --radio-button-group-button-outline-box-shadow-focus: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-radio-button-group.ds-radio-button-group--filled2 {
            --radio-button-group-button-color: rgb(var(--ds-rgb-input));
            --radio-button-group-button-box-shadow: none;
            --radio-button-group-button-box-shadow-active: none;
            --radio-button-group-button-box-shadow-active-focus: none;
            --radio-button-group-button-box-shadow-focus: none;
            --radio-button-group-button-color-active: rgb(var(--ds-rgb-primary));
            --radio-button-group-button-text-color-active: rgb(var(--ds-rgb-primary-foreground));
            --radio-button-group-button-outline-box-shadow-focus: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-radio-button-group {
            color: var(--radio-button-group-button-text-color);
            transition: opacity var(--ds-transition-duration)var(--ds-ease-in-out);
            flex-wrap: wrap;
            margin-bottom: -12px;
            display: flex
        }

        .ds-radio-button-group.ds-radio-button-group--disabled .ds-radio-button,
        .ds-radio-button-group.ds-radio-button-group--disabled .ds-radio-button__input {
            cursor: not-allowed
        }

        .ds-radio-button-group.ds-radio-button-group--disabled .ds-radio-button {
            opacity: .45
        }

        .ds-radio-button-group .ds-radio-button__input {
            border-radius: inherit;
            opacity: 0;
            z-index: 1;
            cursor: pointer;
            border: 0;
            margin: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .ds-radio-button-group .ds-radio-button-group-tail {
            align-items: center;
            height: 32px;
            margin-bottom: 12px;
            display: flex
        }

        .ds-radio-button-group .ds-radio-button {
            box-shadow: var(--radio-button-group-button-box-shadow);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            background-color: var(--radio-button-group-button-color);
            box-sizing: border-box;
            height: 32px;
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out), background-color var(--ds-transition-duration)var(--ds-ease-in-out), color var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: 8px;
            align-items: center;
            margin-bottom: 12px;
            padding: 0 12px;
            font-size: 14px;
            line-height: 14px;
            display: flex;
            position: relative
        }

        .ds-radio-button-group .ds-radio-button:not(:last-child) {
            margin-right: 12px
        }

        .ds-radio-button-group .ds-radio-button:after {
            content: "";
            pointer-events: none;
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: 10px;
            display: block;
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px
        }

        .ds-radio-button-group .ds-radio-button.ds-radio-button--focus:after {
            box-shadow: var(--radio-button-group-button-outline-box-shadow-focus)
        }

        .ds-radio-button-group .ds-radio-button:focus-within {
            box-shadow: var(--radio-button-group-button-box-shadow-focus)
        }

        .ds-radio-button-group .ds-radio-button.ds-radio-button--active {
            color: var(--radio-button-group-button-text-color-active);
            box-shadow: var(--radio-button-group-button-box-shadow-active);
            background-color: var(--radio-button-group-button-color-active)
        }

        .ds-radio-button-group .ds-radio-button.ds-radio-button--active:focus-within {
            box-shadow: var(--radio-button-group-button-box-shadow-active-focus)
        }

        .ds-textarea {
            --ds-textarea-text-color: rgb(var(--ds-rgb-label-1));
            --ds-textarea-border-radius: 10px;
            --ds-textarea-font-size: var(--ds-font-size-m);
            --ds-textarea-line-height: var(--ds-line-height-m);
            --ds-textarea-padding: 6px 10px
        }

        .ds-textarea--bordered {
            --ds-textarea-color: transparent;
            --ds-textarea-border-color: rgb(var(--ds-rgb-separator-strong))
        }

        .ds-textarea--filled {
            --ds-textarea-color: rgb(var(--ds-rgb-input));
            --ds-textarea-border-color: transparent
        }

        .ds-textarea {
            color: var(--ds-textarea-text-color);
            font-size: var(--ds-textarea-font-size);
            line-height: var(--ds-textarea-line-height);
            box-sizing: border-box;
            border-radius: var(--ds-textarea-border-radius);
            background-color: var(--ds-textarea-color);
            max-width: 100%;
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out), color var(--ds-transition-duration)var(--ds-ease-in-out);
            box-shadow: inset 0 0 0 1px var(--ds-textarea-border-color);
            position: relative
        }

        .ds-textarea.ds-textarea--focused {
            background-color: var(--ds-textarea-focus-color, rgb(var(--ds-rgb-input-focus)));
            box-shadow: inset 0 0 0 2px var(--ds-textarea-focus-border-color, rgb(var(--ds-rgb-primary)))
        }

        .ds-textarea {
            box-sizing: border-box
        }

        .ds-textarea .ds-textarea__textarea,
        .ds-textarea .ds-textarea__mirror {
            font-size: inherit;
            line-height: inherit;
            padding: var(--ds-textarea-padding);
            word-break: break-word;
            font-family: inherit
        }

        .ds-textarea .ds-textarea__mirror {
            white-space: pre-wrap;
            pointer-events: none;
            visibility: hidden;
            max-width: 100%
        }

        .ds-textarea .ds-textarea__textarea {
            box-sizing: border-box;
            width: 100%;
            color: inherit;
            background-color: rgba(var(--ds-rgba-transparent));
            border: none;
            outline: none;
            display: block
        }

        .ds-textarea .ds-textarea__textarea::placeholder {
            color: rgb(var(--ds-rgb-label-3))
        }

        .ds-textarea .ds-textarea__textarea::placeholder {
            color: rgb(var(--ds-rgb-label-3))
        }

        .ds-textarea .ds-textarea__textarea::placeholder {
            color: rgb(var(--ds-rgb-label-3))
        }

        .ds-textarea.ds-textarea--auto-height .ds-textarea__textarea,
        .ds-textarea.ds-textarea--auto-width .ds-textarea__textarea {
            resize: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .ds-textarea.ds-textarea--auto-height {
            width: 100%
        }

        .ds-textarea.ds-textarea--auto-width {
            width: -moz-fit-content;
            width: fit-content
        }

        .d9f56c96 {
            border: 1px solid var(--button-border-color);
            border-radius: 14px;
            justify-content: center;
            align-items: center;
            height: 28px;
            margin-right: 10px;
            padding: 0 7px;
            display: flex
        }

        .d9f56c96 .ds-button__icon {
            margin-right: 4px
        }

        .d9f56c96.ds-button.ds-button--disabled {
            opacity: 1
        }

        .d9f56c96 .ad0c98fd {
            font-size: 12px;
            line-height: 17px
        }

        @media not all and (min-width: 640px) {
            .d9f56c96 {
                margin-right: 10px
            }
        }

        .a6d716f5 {
            width: -moz-fit-content;
            background: var(--dsr-button-grey-1);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            padding: 7px 14px;
            display: flex
        }

        .a6d716f5:hover {
            background: var(--dsr-button-grey-0)
        }

        .a6d716f5 {
            color: var(--dsr-text-1);
            margin-bottom: 12px;
            font-size: 12px;
            line-height: 18px
        }

        .a6d716f5.db5991dd {
            cursor: pointer
        }

        .acbf4957 {
            margin-right: 6px
        }

        .f4262477 {
            margin-left: 6px
        }

        .ebf91e35 {
            flex-direction: column;
            display: flex
        }

        .ebf91e35.b35873a {
            cursor: pointer
        }

        .ebf91e35 .a93786a8 {
            align-items: center;
            gap: 6px;
            font-size: 12px;
            line-height: 17px;
            display: flex
        }

        .ebf91e35 .a93786a8 .c16074e9 {
            border-radius: 50%;
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            overflow: hidden
        }

        .ebf91e35 .a93786a8 .c16074e9 .siteIcon_img {
            -o-object-fit: cover;
            object-fit: cover;
            width: 100%;
            height: 100%
        }

        .ebf91e35 .a93786a8 .c16074e9 .siteIcon_loading {
            background-color: #f5f5f5;
            justify-content: center;
            align-items: center;
            height: 100%;
            display: flex
        }

        .ebf91e35 .a93786a8 .c16074e9 .siteIcon_fallback {
            color: #8b8b8b;
            background-color: #d9d9d9
        }

        .ebf91e35 .a93786a8 .d2eca804 {
            color: #262626;
            font-weight: 500
        }

        .ebf91e35 .a93786a8 .caa1ee14 {
            color: #a3a3a3;
            font-size: 12px
        }

        .ebf91e35 .a93786a8 .ba26051b {
            font-variant: tabular-nums;
            color: #404040;
            background: #e5e5e5;
            border-radius: 10px;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            height: 20px;
            margin-left: auto;
            padding: 0 6px;
            display: flex
        }

        .ebf91e35 .f664d0b2 {
            color: #262626;
            margin-top: 6px;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px
        }

        .ebf91e35 .c56273f9 {
            color: #757575;
            margin-top: 6px;
            font-size: 14px;
            line-height: 20px
        }

        .search-view-card__title,
        .search-view-card__snippet {
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden
        }

        @media not all and (min-width: 640px) {
            .search-view-card__title {
                -webkit-line-clamp: 1
            }

            .ebf91e35 .c56273f9 {
                font-size: 13px
            }
        }

        [data-ds-dark-theme] .ebf91e35 .a93786a8 .c16074e9 .siteIcon_fallback {
            color: #f8faff;
            background-color: #696973
        }

        [data-ds-dark-theme] .ebf91e35 .a93786a8 .d2eca804 {
            color: #f8faff
        }

        [data-ds-dark-theme] .ebf91e35 .a93786a8 .caa1ee14 {
            color: #dcdcdc
        }

        [data-ds-dark-theme] .ebf91e35 .a93786a8 .ba26051b {
            color: #32333e;
            background: rgba(205, 212, 223, .75)
        }

        [data-ds-dark-theme] .ebf91e35 .f664d0b2 {
            color: #f8faff
        }

        [data-ds-dark-theme] .ebf91e35 .c56273f9 {
            color: #dcdcdc
        }

        .de80ba65 {
            background: #fff;
            border: .5px solid #dcdcdc;
            border-radius: 12px;
            max-width: 355px;
            padding: 20px;
            box-shadow: 0 4px 16px rgba(133, 138, 154, .25)
        }

        [data-ds-dark-theme] .de80ba65 {
            background: #4b4b5b;
            border: 1px solid #5a5a69;
            box-shadow: 0 4px 16px rgba(51, 51, 51, .75)
        }

        .edb250b1 {
            margin-bottom: 13px
        }

        .edb250b1 .e1675d8b {
            color: #8b8b8b;
            white-space: pre-wrap;
            margin: 0;
            padding: 0 0 0 13px;
            line-height: 26px;
            position: relative
        }

        .edb250b1 .e1675d8b .ecc93a3b {
            border-left: 2px solid #e5e5e5;
            height: calc(100% - 10px);
            margin-top: 5px;
            position: absolute;
            top: 0;
            left: 0
        }

        .edb250b1 .e1675d8b .ba94db8a {
            margin: 1em 0
        }

        [data-ds-dark-theme] .edb250b1 .e1675d8b {
            color: #a6a6a6
        }

        [data-ds-dark-theme] .edb250b1 .ecc93a3b {
            border-color: #4e4e56
        }

        .be6c1f64 {
            margin-right: 6px
        }

        .f883e7c0 {
            margin-left: 6px
        }

        .bf9dce37 {
            border: 1.5px solid var(--color);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: #fff;
            border-radius: 50%;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            display: flex;
            position: relative
        }

        .cb792bd9 {
            color: var(--color);
            word-break: break-all;
            line-height: 1.2;
            font-size: var(--font-size);
            font-weight: 500
        }

        .db33d433 {
            font-variant: tabular-nums;
            text-align: center
        }

        .fdc09121 {
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 50%;
            flex-shrink: 0
        }

        .ac543b58 {
            border: solid 1px var(--dsr-risk-border);
            background-color: var(--dsr-risk-fill);
            width: -moz-fit-content;
            border-radius: 12px;
            align-items: center;
            width: fit-content;
            margin-top: 10px;
            padding: 6px 12px;
            display: flex
        }

        .ce6e41a9 {
            flex-shrink: 0;
            align-self: flex-start;
            margin-right: 10px;
            position: relative;
            top: 6px
        }

        .c8da0b2f {
            color: var(--dsr-risk-text);
            font-size: 14px;
            font-weight: 500;
            line-height: 28px
        }

        .f9bf7997 {
            font-size: var(--ds-font-size-m);
            color: rgb(var(--ds-rgb-label-1));
            margin-bottom: 12px;
            padding-left: 48px;
            position: relative
        }

        .f9bf7997.d7dc56a8 .abe97156,
        .f9bf7997.fa7a8e16 .abe97156 {
            opacity: 1
        }

        .f9bf7997.d7dc56a8 {
            margin-bottom: 0
        }

        .f9bf7997.d7dc56a8:not(.c05b5566) {
            margin-bottom: 32px
        }

        .f9bf7997:hover .abe97156 {
            opacity: 1
        }

        .f9bf7997:focus-within .abe97156 {
            opacity: 1
        }

        .abe97156 {
            opacity: 0;
            transition: opacity var(--ds-transition-duration)var(--ds-ease-in-out);
            will-change: opacity
        }

        .dfa60d66 {
            position: absolute;
            top: -2px;
            left: 0
        }

        .eb23581b {
            background-color: #fff;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            display: flex;
            box-shadow: 0 0 0 1px #d5e4ff
        }

        .eb23581b svg {
            width: 28px;
            height: 28px
        }

        .b4e4476b {
            color: #909090;
            --ds-md-zoom: 1.143;
            line-height: calc(var(--ds-md-zoom)*var(--ds-line-height-m, 25px));
            height: calc(var(--ds-md-zoom)*var(--ds-line-height-m, 25px));
            box-sizing: border-box;
            padding-top: 4px;
            display: flex
        }

        .f297cc6e {
            height: 28px
        }

        [data-ds-dark-theme] .eb23581b {
            box-shadow: none;
            background-color: #32333e;
            border: 1px solid #4f647b
        }

        [data-ds-dark-theme] .f9bf7997 {
            color: #f8faff
        }

        .a4380d7b {
            flex-wrap: wrap;
            gap: 8px;
            max-height: 180px;
            display: flex;
            overflow-y: auto
        }

        .cd190a50 {
            background-color: var(--dsr-input-bg);
            border-radius: 12px;
            width: calc(33.3333% - 8.33333px);
            transition: background-color .3s;
            position: relative
        }

        .cd190a50 .d2d04dae {
            align-items: center;
            padding: 8px;
            display: flex
        }

        .cd190a50 .d2d04dae .b3a5d6c1 {
            color: #4c4c4c;
            margin-right: 10px
        }

        .cd190a50 .d2d04dae .aea7ca45 {
            overflow: hidden
        }

        .cd190a50 .d2d04dae .aea7ca45 .f3a54b52 {
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #262626;
            min-height: 20px;
            margin: 0;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            overflow: hidden
        }

        .cd190a50 .d2d04dae .aea7ca45 .ee357eab {
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            font-size: 12px;
            line-height: 17px;
            overflow: hidden
        }

        .cd190a50:hover .b2b9d30d {
            opacity: 1
        }

        .cd190a50 .ee357eab {
            color: #bbb
        }

        .cd190a50.ebfd1816 .ee357eab {
            color: #e53535
        }

        .cd190a50.ebfd1816 .b2b9d30d {
            opacity: 1
        }

        .cd190a50.e5931f90 {
            cursor: pointer;
            transition: box-shadow .2s ease-in-out
        }

        .cd190a50.e5931f90:hover {
            box-shadow: 0px 0px 0px .5px var(--dsr-input-border), 0px 4px 8px 0px rgba(144, 150, 174, .25)
        }

        .a0c3ba85 {
            justify-content: flex-end;
            padding: 10px 0
        }

        .b2b9d30d {
            z-index: 1;
            opacity: 0;
            will-change: opacity;
            cursor: pointer;
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            transition: opacity .2s ease-in-out;
            display: flex;
            position: absolute;
            top: -5px;
            right: -5px;
            box-shadow: 0 1px 2px rgba(148, 147, 147, .25), inset 0 0 0 .5px #ededed
        }

        .b421135a {
            opacity: 1
        }

        .a418378a {
            background-color: #e53535;
            box-shadow: 0 1px 2px rgba(148, 147, 147, .25)
        }

        .acc38691 {
            margin: 6px
        }

        @media not all and (min-width: 640px) {
            .a4380d7b {
                gap: 8px
            }

            .cd190a50 {
                width: calc(50% - 6.5px)
            }
        }

        [data-ds-dark-theme] .cd190a50 .aea7ca45 .f3a54b52 {
            color: #fff
        }

        [data-ds-dark-theme] .cd190a50.e5931f90:hover {
            box-shadow: 0px 0px 0px .5px var(--dsr-input-border), 0px 4px 8px 0px rgba(11, 11, 12, .25)
        }

        [data-ds-dark-theme] .cd190a50.ebfd1816 .ee357eab {
            color: #ef4444
        }

        [data-ds-dark-theme] .acc38691 {
            color: #c9c9c9
        }

        .fa81 {
            justify-content: flex-end;
            margin-bottom: 16px;
            padding-bottom: 32px;
            display: flex
        }

        .fa81:hover .e0558cb1 {
            opacity: 1
        }

        .fa81.bad9aaff {
            margin-bottom: 24px
        }

        .fa81.eee33222 {
            margin-bottom: 56px
        }

        .e0558cb1 {
            opacity: 0;
            transition: opacity var(--ds-transition-duration)var(--ds-ease-in-out);
            will-change: opacity
        }

        .e0558cb1:focus {
            opacity: 1
        }

        .e0558cb1:focus-within {
            opacity: 1
        }

        .fbb737a4 {
            font-size: var(--ds-font-size-l);
            line-height: var(--ds-line-height-l);
            color: #262626;
            padding: calc((44px - var(--ds-line-height-l))/2)20px;
            box-sizing: border-box;
            white-space: pre-wrap;
            word-break: break-word;
            background-color: #eff6ff;
            border-radius: 14px;
            max-width: calc(100% - 48px);
            position: relative
        }

        @media not all and (min-width: 640px) {
            .fbb737a4 {
                max-width: calc(100% - 68px)
            }
        }

        [data-ds-dark-theme] .fbb737a4 {
            color: #f8faff;
            background-color: #414158
        }

        .b83ee326 {
            flex-grow: 1;
            position: relative
        }

        .f6004764 {
            padding: 0 var(--message-list-padding-horizontal);
            min-height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto
        }

        .f6004764.e7c08643 {
            display: flex
        }

        .f6004764 .f72b0bab {
            flex-direction: column;
            flex-grow: 1;
            height: 100%;
            display: flex;
            position: relative
        }

        .dad65929 {
            width: 100%;
            max-width: var(--message-list-max-width);
            box-sizing: border-box;
            flex-grow: 1;
            margin: auto;
            padding: 38px 0 40px
        }

        .e7920f9e {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-size: 32px;
            display: flex
        }

        .df4cb668 {
            color: rgb(var(--ds-rgb-label-2));
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-size: 14px;
            line-height: 20px;
            display: flex
        }

        .e886deb9 {
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
            display: flex
        }

        @media not all and (min-width: 640px) {
            .e886deb9 {
                margin-bottom: 6px
            }
        }

        .e214291b {
            width: -moz-fit-content;
            white-space: nowrap;
            background-color: rgb(var(--ds-rgb-blue-100));
            color: #4d6bfe;
            cursor: pointer;
            z-index: 1;
            border-radius: 12px;
            align-items: center;
            gap: 10px;
            width: fit-content;
            padding: 2px 14px;
            font-size: 14px;
            line-height: 28px;
            display: flex
        }

        .e214291b:hover {
            background-color: #c3daf8
        }

        [data-ds-dark-theme] .e214291b {
            color: #f8faff;
            background-color: #4d6bfe
        }

        [data-ds-dark-theme] .e214291b:hover {
            background-color: #4f6eca
        }

        .e87bfa92 {
            width: -moz-fit-content;
            box-sizing: border-box;
            text-align: center;
            color: #262626;
            border: 1px solid #ededed;
            border-radius: 10px;
            width: fit-content;
            max-width: 100%;
            margin: 8px auto 38px;
            padding: 7px 14px;
            font-size: 12px;
            line-height: 20px
        }

        .a6998e18 {
            margin-right: 8px;
            display: inline-block;
            position: relative;
            bottom: -2px
        }

        [data-ds-dark-theme] .e87bfa92 {
            color: #f8faff;
            background-color: #32333e;
            border-color: #525252
        }

        .f79b51c1 {
            width: calc(50vw - 2.5rem);
            height: calc(100% - 82px);
            box-shadow: 0px 0px 0px .5px var(--dsr-input-border);
            z-index: 11;
            background: #edf2fb;
            border-radius: 20px;
            flex-direction: column;
            margin-top: 56px;
            margin-bottom: 26px;
            margin-right: 20px;
            font-size: 14px;
            line-height: 1.5;
            display: flex;
            position: fixed;
            right: 0;
            overflow: hidden
        }

        @media not all and (min-width: 1280px) {
            .f79b51c1 {
                width: calc(60vw - 2.5rem)
            }
        }

        @media not all and (min-width: 640px) {
            .f79b51c1 {
                width: calc(100vw - 2.5rem)
            }
        }

        .fb4c59c5 {
            background-color: #f9fbff;
            justify-content: space-between;
            align-items: center;
            padding: 15px 12px;
            display: flex
        }

        .fb4c59c5 .e9fbd9e6 {
            color: #262626;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            flex-grow: 1;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            overflow: hidden
        }

        [data-ds-dark-theme] .f79b51c1 {
            background: #40404d
        }

        [data-ds-dark-theme] .fb4c59c5 {
            background-color: #505060
        }

        [data-ds-dark-theme] .fb4c59c5 .e9fbd9e6 {
            color: #f8faff
        }

        .a480e781 {
            color: #a3a3a3;
            margin: auto
        }

        [data-ds-dark-theme] .a480e781 {
            color: #888e9c
        }

        .fba535c8 {
            background-color: #edf2fb;
            justify-content: center;
            align-items: center;
            display: flex;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .c5e235fa {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: calc(100vw - 32px);
            display: flex
        }

        .cfffee1e {
            font-size: 32px;
            font-weight: var(--ds-font-weight-strong);
            color: rgb(var(--ds-rgb-label-1));
            margin-bottom: 21px;
            line-height: 46px
        }

        .a73be3f1 {
            display: flex
        }

        .a73be3f1>:not(:last-child) {
            margin-right: 16px
        }

        .f309f19b {
            white-space: pre-wrap;
            color: rgb(var(--ds-rgb-label-2));
            width: 600px;
            max-width: calc(100vw - 32px);
            font-size: 12px;
            line-height: 18px
        }

        [data-ds-dark-theme] .fba535c8 {
            background-color: #40404d
        }

        .b692b035 {
            flex-shrink: 0;
            width: 50vw
        }

        @media not all and (min-width: 1280px) {
            .b692b035 {
                width: 0
            }
        }

        @media not all and (min-width: 640px) {
            .b692b035 {
                width: 0
            }
        }

        .fd76a94d {
            flex-shrink: 0;
            width: 500px
        }

        .f529c936 {
            width: calc(500px - 2em)
        }

        @media not all and (min-width: 1536px) {

            .fd76a94d,
            .f529c936 {
                width: 440px
            }
        }

        @media not all and (min-width: 1280px) {

            .fd76a94d,
            .f529c936 {
                width: 420px
            }
        }

        @media not all and (min-width: 1024px) {
            .fd76a94d {
                width: 0
            }
        }

        @media not all and (min-width: 640px) {
            .f529c936 {
                width: calc(100vw - 2.5rem)
            }
        }

        .f6569132 {
            background-color: var(--dsr-button-grey-1);
            cursor: pointer;
            width: -moz-fit-content;
            border-radius: 12px;
            align-items: center;
            width: fit-content;
            padding: 8px 14px;
            display: flex
        }

        .f6569132:hover {
            background-color: var(--dsr-button-grey-0)
        }

        .f6569132 .faf995dc {
            color: var(--dsr-text-1);
            margin-right: 10px;
            font-size: 14px;
            line-height: 20px
        }

        .f6569132 .a20bb409 {
            color: var(--dsr-icon-fg-1)
        }

        .f02f0e25 {
            color: #4c4c4c;
            cursor: pointer;
            border-radius: 10px;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            margin-top: auto;
            margin-right: 10px;
            display: flex
        }

        .f02f0e25:hover {
            background-color: #e0e4ed
        }

        .f02f0e25.cfba8f40 {
            cursor: not-allowed;
            color: #bbb
        }

        .efd78c4e {
            color: #acacac;
            font-size: 12px
        }

        .efd78c4e span[role=title] {
            color: #fff;
            font-size: 14px;
            display: block
        }

        [data-ds-dark-theme] .f02f0e25 {
            color: #cdd4df
        }

        [data-ds-dark-theme] .f02f0e25:hover {
            background-color: #424451
        }

        [data-ds-dark-theme] .f02f0e25.cfba8f40 {
            color: #6b6b76
        }

        .c7ff2faa {
            justify-content: center;
            display: flex
        }

        .c929f531 {
            text-align: center;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            max-width: 760px;
            margin-top: 100px;
            display: flex
        }

        .c929f531 .b53c0e66 {
            margin: 0 auto
        }

        .c929f531 .f652d34f {
            color: var(--dsr-text-1);
            margin-top: 12px;
            font-size: 32px;
            font-weight: 500;
            line-height: 45px
        }

        .c929f531 .e1c32e80 {
            color: var(--dsr-text-3);
            margin-top: 12px;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px
        }

        .c929f531 .ef39bc4c {
            color: var(--dsr-text-1);
            margin-top: 12px;
            font-size: 16px;
            line-height: 28px
        }

        .c0511be8 {
            width: -moz-fit-content;
            flex-direction: column;
            justify-content: flex-start;
            width: fit-content;
            max-width: 90%;
            margin: 36px auto 0;
            display: flex
        }

        .c0511be8 .cd6cfbbd {
            margin-bottom: 10px
        }

        @media not all and (min-width: 1280px) {
            .c929f531 {
                width: 60%
            }
        }

        @media not all and (min-width: 1024px) {
            .c929f531 {
                width: 70%
            }
        }

        @media not all and (min-width: 768px) {
            .c929f531 {
                width: 80%;
                margin-top: 60px
            }
        }

        @media not all and (min-width: 640px) {
            .c929f531 {
                width: 100%;
                margin-top: 30px
            }
        }

        .f9edaa3c {
            --dsr-side-bg-rgb: 249, 251, 255;
            --dsr-local-active-bg-rgb: 219, 234, 254;
            --dsr-local-active-bg: rgb(var(--ds-rgb-blue-100))
        }

        [data-ds-dark-theme] .f9edaa3c {
            --dsr-side-bg-rgb: 33, 35, 39;
            --dsr-local-active-bg-rgb: 73, 73, 73;
            --dsr-local-active-bg: rgb(var(--ds-rgb-neutral-650))
        }

        .f9edaa3c {
            height: 38px;
            color: var(--dsr-text-1);
            background-color: var(--dsr-side-bg);
            cursor: pointer;
            --ds-focus-ring-border-radius: 14px;
            border-radius: 12px;
            align-items: center;
            padding: 0 10px;
            font-size: 14px;
            display: flex;
            position: relative
        }

        .f9edaa3c:focus,
        .f9edaa3c.e9c6297f {
            outline: none
        }

        .f9edaa3c:focus .aa7b7ebb,
        .f9edaa3c.e9c6297f .aa7b7ebb {
            opacity: 1
        }

        .f9edaa3c .c08e6e93 {
            white-space: nowrap;
            flex: 1;
            align-items: center;
            min-width: 0;
            line-height: 18px;
            display: flex;
            overflow: hidden
        }

        .f9edaa3c .c08e6e93 .e1c840bf {
            margin-right: 6px
        }

        .f9edaa3c .aa7b7ebb {
            opacity: 0;
            z-index: 1;
            --ds-focus-ring-border-radius: 8px;
            border-radius: 8px;
            outline: none;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            display: flex;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%)
        }

        .f9edaa3c .aa7b7ebb:hover {
            opacity: 1;
            background-color: var(--dsr-side-bg)
        }

        .f9edaa3c .eaaaba55 {
            background: linear-gradient(90deg, rgba(var(--dsr-side-bg-rgb), 0)0%, var(--dsr-side-bg)100%)
        }

        .f9edaa3c.b64fb9ae {
            background-color: var(--dsr-local-active-bg)
        }

        .f9edaa3c.b64fb9ae .eaaaba55 {
            background-image: linear-gradient(to right, rgba(var(--dsr-local-active-bg-rgb), 0), var(--dsr-local-active-bg)50%)
        }

        .f9edaa3c:not(.b64fb9ae):hover {
            background-color: var(--dsr-side-hover-bg)
        }

        .f9edaa3c:not(.b64fb9ae):hover .eaaaba55 {
            background: linear-gradient(90deg, rgba(var(--dsr-side-hover-bg-rgb), 0)0%, var(--dsr-side-hover-bg)60%, var(--dsr-side-hover-bg)100%);
            opacity: 1
        }

        .f9edaa3c .f8773756,
        .f9edaa3c .eaaaba55 {
            content: "";
            pointer-events: none;
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0
        }

        .f9edaa3c .f8773756 {
            background: linear-gradient(90deg, rgba(var(--dsr-side-bg-rgb), 0)0%, var(--dsr-side-bg)50%, var(--dsr-side-bg)100%);
            width: 24px
        }

        .f9edaa3c .eaaaba55 {
            opacity: 0;
            width: 84px
        }

        .f9edaa3c.b64fb9ae .aa7b7ebb,
        .f9edaa3c:hover .aa7b7ebb,
        .f9edaa3c.b64fb9ae .eaaaba55,
        .f9edaa3c:hover .eaaaba55 {
            opacity: 1
        }

        @media (hover: none) {
            .f9edaa3c .eaaaba55 {
                opacity: 1
            }

            .f9edaa3c .aa7b7ebb {
                opacity: .5
            }

            .f9edaa3c .f8773756 {
                width: 52px
            }
        }

        .ds-dropdown-menu {
            --ds-dropdown-menu-font-size: var(--ds-font-size-m);
            --ds-dropdown-menu-option-icon-size: calc(var(--ds-font-size-m) + 4px);
            --ds-dropdown-menu-option-icon-margin: 0 10px 0 0;
            --ds-dropdown-menu-option-icon-color: rgb(var(--ds-rgb-label-2));
            --ds-dropdown-menu-color: rgb(var(--ds-rgb-elevated));
            --ds-dropdown-menu-option-text-color: rgb(var(--ds-rgb-label-1));
            --ds-dropdown-menu-option-height: 28px;
            --ds-dropdown-menu-option-color-hover: rgb(var(--ds-rgb-hover));
            --ds-dropdown-menu-padding: 4px;
            --ds-dropdown-menu-option-padding: 8px 14px;
            --ds-dropdown-menu-option-line-height: var(--ds-line-height-m);
            --ds-dropdown-menu-border-radius: 10px;
            --ds-dropdown-menu-option-border-radius: 8px;
            --ds-dropdown-menu-option-divider-margin: 8px;
            --ds-dropdown-menu-option-label-margin: 0
        }

        .ds-dropdown-menu-option.ds-dropdown-menu-option--error {
            --ds-dropdown-menu-option-text-color: rgb(var(--ds-rgb-error));
            --ds-dropdown-menu-option-icon-color: rgb(var(--ds-rgb-error));
            --ds-dropdown-menu-option-color-hover: var(--ds-dropdown-menu-option-error-color-hover, rgba(var(--ds-rgb-error)/.06))
        }

        .ds-dropdown-menu {
            border-radius: var(--ds-dropdown-menu-border-radius);
            background-color: var(--ds-dropdown-menu-color);
            padding: var(--ds-dropdown-menu-padding);
            color: var(--ds-dropdown-menu-option-text-color);
            box-shadow: 0 8px 24px rgba(0, 0, 0, .12)
        }

        .ds-dropdown-menu-option {
            font-size: var(--ds-dropdown-menu-font-size);
            line-height: var(--ds-dropdown-menu-option-line-height);
            border-radius: var(--ds-dropdown-menu-option-border-radius);
            min-height: var(--ds-dropdown-menu-option-height);
            padding: var(--ds-dropdown-menu-option-padding);
            color: var(--ds-dropdown-menu-option-text-color);
            cursor: pointer;
            box-sizing: border-box;
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out), color var(--ds-transition-duration)var(--ds-ease-in-out);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            align-items: center;
            display: flex;
            overflow: auto
        }

        .ds-dropdown-menu-option:hover,
        .ds-dropdown-menu-option.ds-dropdown-menu-option--pending {
            background-color: var(--ds-dropdown-menu-option-color-hover)
        }

        .ds-dropdown-menu-option .ds-dropdown-menu-option__icon {
            color: var(--ds-dropdown-menu-option-icon-color);
            margin: var(--ds-dropdown-menu-option-icon-margin);
            font-size: var(--ds-dropdown-menu-option-icon-size);
            display: flex
        }

        .ds-dropdown-menu-option .ds-dropdown-menu-option__label {
            margin: var(--ds-dropdown-menu-option-label-margin)
        }

        .ds-dropdown-menu-option-divider {
            border-color: rgb(var(--ds-rgb-separator));
            margin: var(--ds-dropdown-menu-option-divider-margin);
            border-style: solid;
            border-width: 1px 0 0;
            min-height: 0;
            padding: 0;
            overflow: hidden
        }

        .fb0a63fb {
            flex: 1;
            padding: 0 10px;
            overflow: auto
        }

        .fb0a63fb.f27d1011 {
            justify-content: center;
            align-items: center;
            display: flex
        }

        .cdfc1683 {
            z-index: 2;
            background-color: var(--dsr-side-bg);
            color: #555;
            margin: 6px 0 6px -6px;
            padding: 0 10px 0 16px;
            font-size: 13px;
            font-weight: 600;
            line-height: 18px;
            position: -webkit-sticky;
            position: sticky;
            top: 0
        }

        .d4b5352e {
            position: relative
        }

        .d4b5352e:first-child .cdfc1683 {
            margin-top: 0
        }

        .b9cb4a74 {
            width: 100%;
            height: 24px
        }

        .f27d1011 {
            color: rgb(var(--ds-rgb-label-2));
            font-size: 14px;
            line-height: 20px
        }

        .ec92d1d3 {
            box-sizing: border-box;
            cursor: pointer;
            flex-shrink: 0;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 56px;
            padding: 0 10px;
            display: flex
        }

        @media (min-width: 640px) {
            .ec92d1d3 {
                height: 90px;
                padding: 25px 10px 34px 20px
            }
        }

        .e066abb8 {
            align-items: center;
            display: flex
        }

        .e066abb8 svg {
            color: #2c2c36;
            height: 22px
        }

        @media (min-width: 640px) {
            .e066abb8 svg {
                height: 26px
            }
        }

        .a5967822 {
            flex-grow: 0;
            flex-shrink: 0;
            width: 24px;
            height: 24px
        }

        @media (min-width: 640px) {
            .a5967822 {
                display: none
            }
        }

        .a9564e8a {
            color: #8b8b8b;
            display: block
        }

        @media (min-width: 640px) {
            .a9564e8a {
                display: none
            }
        }

        .d1f5e283 {
            display: none
        }

        .d1f5e283.ds-icon-button:hover:before {
            background-color: var(--dsr-side-icon-hover)
        }

        @media (min-width: 640px) {
            .d1f5e283 {
                display: flex
            }
        }

        [data-ds-dark-theme] .a9564e8a {
            color: #cdd4df
        }

        [data-ds-dark-theme] .e066abb8 svg {
            color: #abb2bd
        }

        .fd23db93 {
            background-color: var(--local-button-text);
            width: 1px;
            height: 20px
        }

        .e0d44aa3 {
            align-items: center;
            height: 100%;
            padding: 0 10px;
            display: flex
        }

        .e0d44aa3:hover {
            background-color: var(--local-button-hover)
        }

        .d38c3654 {
            align-items: center;
            display: flex
        }

        .faf1228f {
            margin-right: 8px
        }

        .fdf5dad2 {
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 120px;
            color: var(---dsr-text-1);
            font-size: 14px;
            line-height: 20px;
            display: block;
            overflow: hidden
        }

        .ad5d9e5d {
            align-items: center;
            display: flex
        }

        .ad5d9e5d .fa2c {
            color: var(--dsr-icon-fg-1);
            margin-left: auto
        }

        [data-ds-dark-theme] .a8ac7a80 {
            --local-button: var(--dsr-main);
            --local-button-hover: #4166d5;
            --local-button-text: rgb(var(--ds-rgb-slate-50))
        }

        .a8ac7a80 {
            --local-button: rgb(var(--ds-rgb-blue-100));
            --local-button-text: var(--dsr-main);
            --local-button-hover: #c6dcf8;
            color: var(--local-button-text);
            background-color: var(--local-button);
            cursor: pointer;
            width: -moz-fit-content;
            height: 44px;
            border-radius: 14px;
            flex-shrink: 0;
            align-items: center;
            width: fit-content;
            margin: 0 2px 0 14px;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            display: flex;
            overflow: hidden
        }

        .a8ac7a80 .c7dddcde {
            align-items: center;
            height: 100%;
            padding: 0 10px;
            display: flex
        }

        .a8ac7a80 .c7dddcde:hover {
            background-color: var(--local-button-hover)
        }

        .c42ad70d {
            margin-right: 9px;
            display: flex
        }

        .c42ad70d svg {
            width: 22px;
            height: 22px
        }

        .ede5bc47 {
            cursor: pointer;
            width: 32px;
            height: 32px;
            height: -moz-fit-content;
            border-radius: 50%;
            outline: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: fit-content;
            display: flex;
            overflow: hidden
        }

        .f8ba2d00 {
            color: var(--dsr-text-4)
        }

        .c6ab9234 {
            cursor: pointer;
            box-sizing: border-box;
            border-radius: 12px;
            align-items: center;
            width: 100%;
            padding: 8px;
            display: flex
        }

        .c6ab9234:hover {
            background-color: var(--dsr-side-hover-bg)
        }

        .d65532b2 {
            color: var(--dsr-text-2);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin-left: 8px;
            font-size: 14px
        }

        .fdf01f38 {
            -o-object-fit: cover;
            object-fit: cover;
            border: 1px solid var(--dsr-border-2);
            box-sizing: border-box;
            border-radius: 50%;
            width: 100%;
            height: 100%
        }

        .a10622cf {
            align-items: center;
            display: flex
        }

        .da22f4ce:hover:before {
            background-color: rgba(255, 255, 255, .1)
        }

        .a9879fdf {
            color: #fff;
            cursor: pointer;
            background-color: #666;
            border-radius: 6px;
            margin-left: 12px;
            padding: 4px 8px;
            font-size: 10px;
            line-height: 12px
        }

        .ee85b4b2 {
            font-size: var(--ds-font-size-m);
            height: var(--ds-input-height-m);
            align-items: center;
            gap: 4px;
            display: flex
        }

        .ba933982 {
            height: var(--ds-input-height-m);
            padding: 4px
        }

        .ds-native-select {
            cursor: pointer;
            width: 100%;
            color: rgb(var(--ds-rgb-label-1));
            font-size: var(--font-size);
            line-height: var(--line-height);
            height: var(--height);
            box-sizing: border-box;
            border-radius: var(--border-radius);
            transition: background-color var(--ds-transition-duration)var(--ds-ease-in-out), box-shadow var(--ds-transition-duration)var(--ds-ease-in-out), color var(--ds-transition-duration)var(--ds-ease-in-out);
            align-items: center;
            display: flex;
            position: relative
        }

        .ds-native-select option {
            background: rgb(var(--ds-rgb-bg-base))
        }

        .ds-native-select.ds-native-select--disabled {
            opacity: .45;
            cursor: not-allowed
        }

        .ds-native-select.ds-native-select--disabled .native-selectInner {
            cursor: not-allowed
        }

        .ds-native-select .ds-native-select__select {
            color: inherit;
            cursor: inherit;
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;
            font-size: inherit;
            background-color: var(--ds-native-select-color, transparent);
            border-radius: inherit;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            padding: 0 28px 0 10px
        }

        .ds-native-select .ds-native-select__arrow {
            pointer-events: none;
            color: rgb(var(--ds-rgb-label-2));
            display: flex;
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%)
        }

        .ds-native-select .ds-native-select__arrow svg {
            width: 14px;
            height: 14px
        }

        .ds-native-select.ds-native-select--none:focus-within {
            background-color: rgb(var(--ds-rgb-input-focus));
            box-shadow: inset 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-native-select.ds-native-select--filled.ds-native-select--error:focus-within {
            background-color: rgb(var(--ds-rgb-input-focus))
        }

        .ds-native-select.ds-native-select--bordered.ds-native-select--error:focus-within {
            background-color: rgb(var(--ds-rgb-input-focus))
        }

        .ds-native-select.ds-native-select--filled.ds-native-select--error,
        .ds-native-select.ds-native-select--bordered.ds-native-select--error {
            background-color: rgba(var(--ds-rgb-error)/.06);
            box-shadow: inset 0 0 0 2px rgb(var(--ds-rgb-error))
        }

        .ds-native-select.ds-native-select--filled {
            background-color: rgb(var(--ds-rgb-input))
        }

        .ds-native-select.ds-native-select--bordered {
            box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator))
        }

        .ds-native-select.ds-native-select--l {
            --height: var(--ds-input-height-l);
            --font-size: var(--ds-font-size-l);
            --line-height: var(--ds-line-height-l);
            --border-radius: 10px
        }

        .ds-native-select.ds-native-select--m {
            --height: var(--ds-input-height-m);
            --font-size: var(--ds-font-size-m);
            --line-height: var(--ds-line-height-m);
            --border-radius: 10px
        }

        .ds-native-select.ds-native-select--s {
            --height: var(--ds-input-height-s);
            --font-size: var(--ds-font-size-s);
            --line-height: var(--ds-line-height-s);
            --border-radius: 10px
        }

        .ds-native-select.ds-native-select--xs {
            --height: var(--ds-input-height-xs);
            --font-size: var(--ds-font-size-xs);
            --line-height: var(--ds-line-height-xs);
            --border-radius: 8px
        }

        .ds-segmented {
            background-color: var(--ds-segmented-color, rgba(var(--ds-rgb-segmented)));
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m);
            border-radius: 10px;
            padding: 2px;
            display: flex
        }

        .ds-segmented-button {
            white-space: nowrap;
            cursor: pointer;
            border-radius: 8px;
            flex: 1;
            justify-content: center;
            align-items: center;
            padding: 4px 14px;
            font-weight: 400;
            display: flex;
            position: relative
        }

        .ds-segmented-button.ds-segmented-button--disabled {
            cursor: not-allowed;
            opacity: .45
        }

        .ds-segmented-button.ds-segmented-button--selected {
            font-weight: var(--ds-font-weight-strong);
            background-color: var(--ds-segmented-selected-color, rgb(var(--ds-rgb-segmented-button)));
            box-shadow: 0 0 0 .5px rgba(0, 0, 0, .04), 0 3px 1px rgba(0, 0, 0, .04), 0 3px 8px rgba(0, 0, 0, .12)
        }

        .ds-segmented-button.ds-segmented-button--selected .ds-segmented-separator {
            display: none
        }

        .ds-segmented-button {
            outline: none
        }

        .ds-segmented-button__shadow {
            pointer-events: none;
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            z-index: 1;
            border-radius: 10px;
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px
        }

        .ds-segmented-button:focus-visible .ds-segmented-button__shadow {
            box-shadow: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-segmented-separator {
            width: 1px;
            height: var(--ds-font-size-m);
            background-color: rgba(var(--ds-rgb-segmented-separator));
            flex-grow: 0;
            flex-shrink: 0;
            position: absolute;
            right: 0
        }

        .a1e75851 {
            border: solid 1px var(--dsr-main);
            width: 100%;
            color: var(--dsr-text-1);
            box-sizing: border-box;
            cursor: pointer;
            border-radius: 12px;
            align-items: center;
            margin-bottom: 8px;
            padding: 9px 12px;
            font-size: 14px;
            font-weight: 400;
            display: flex
        }

        .a1e75851:hover {
            background-color: var(--dsr-side-hover-bg)
        }

        .a1e75851 .b9f93e3c {
            margin-left: 8px;
            display: flex
        }

        .b2b9a841 {
            color: var(--dsr-text-2);
            text-align: center;
            flex-direction: column;
            font-size: 14px;
            display: flex
        }

        .ee32982d {
            width: 160px;
            height: 160px;
            margin: 8px 0
        }

        .b91228e4 {
            color: var(--dsr-text-3);
            cursor: pointer;
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            margin-bottom: 22px;
            display: flex
        }

        .b91228e4:hover {
            background-color: rgb(var(--ds-rgb-hover))
        }

        [data-ds-dark-theme] .b91228e4 {
            color: #abb2bd
        }

        .c7f51894 {
            box-sizing: border-box;
            flex-direction: column;
            flex-shrink: 0;
            align-items: center;
            padding: 10px 12px;
            line-height: 20px;
            display: flex
        }

        @supports (padding-top: env(safe-area-inset-top)) {
            .b8812f16 {
                padding-top: env(safe-area-inset-top);
                padding-left: env(safe-area-inset-left);
                padding-right: env(safe-area-inset-right);
                padding-bottom: env(safe-area-inset-bottom)
            }
        }

        .b8812f16 {
            background-color: var(--dsr-side-bg);
            z-index: 1;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 0;
            min-width: 0;
            display: flex
        }

        .b8812f16 .ebaea5d2 {
            align-items: center;
            margin-bottom: 34px;
            display: flex
        }

        .fbcecfa2 {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-size: 32px;
            display: flex
        }

        .cc58ca70 {
            color: rgb(var(--ds-rgb-label-2));
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 0 20px;
            font-size: 14px;
            line-height: 20px;
            display: flex
        }

        .f0d4f23d {
            background-color: var(--dsr-side-bg);
            flex-direction: column;
            align-items: center;
            width: 68px;
            padding: 19px 0;
            display: flex
        }

        .dc04ec1d {
            --local-sider-width: 260px
        }

        .a2f3d50e {
            transition: opacity var(--ds-transition-duration-fast)var(--ds-ease-in-out);
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0
        }

        .dc04ec1d,
        .a2f3d50e {
            width: var(--local-sider-width);
            max-width: var(--local-sider-width)
        }

        .a7f3a288 {
            width: 68px;
            transition: left var(--ds-transition-duration-fast)var(--ds-ease-in-out), opacity var(--ds-transition-duration-fast)var(--ds-ease-in-out);
            position: absolute;
            top: 0;
            bottom: 0;
            left: -24px
        }

        .dc04ec1d {
            z-index: 2;
            transition: left var(--ds-transition-duration-fast)var(--ds-ease-in-out), max-width var(--ds-transition-duration-fast)var(--ds-ease-in-out);
            flex-shrink: 0;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0
        }

        .cbcd962e {
            transition: opacity var(--ds-transition-duration-fast)var(--ds-ease-in-out);
            opacity: 1;
            background-color: rgba(0, 0, 0, .4);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0
        }

        .dc04ec1d.a02af2e6 {
            left: calc(-1*var(--local-sider-width))
        }

        .dc04ec1d.a02af2e6 .cbcd962e {
            opacity: 0;
            pointer-events: none
        }

        @media (min-width: 768px) {
            .dc04ec1d {
                width: var(--local-sider-width);
                max-width: var(--local-sider-width);
                position: relative;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0
            }

            .dc04ec1d.a02af2e6 {
                max-width: 68px;
                left: 0
            }

            .dc04ec1d.a02af2e6 .a7f3a288 {
                left: 0
            }

            .dc04ec1d .cbcd962e {
                display: none
            }
        }

        .d8ed659a {
            cursor: pointer;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #262626;
            box-sizing: border-box;
            max-width: 100%;
            height: 40px;
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: 12px;
            padding: 8px 12px;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            overflow: hidden
        }

        .d8ed659a:hover {
            box-shadow: inset 0 0 0 1px rgb(var(--ds-rgb-separator-strong))
        }

        [data-ds-dark-theme] .d8ed659a {
            color: #fff
        }

        .e307a2b2 {
            cursor: pointer;
            color: var(--dsr-text-0);
            text-overflow: ellipsis;
            white-space: nowrap;
            flex-shrink: 2;
            max-width: 100px;
            font-size: 16px;
            font-weight: 500;
            overflow: hidden
        }

        @media (min-width: 768px) {
            .e307a2b2 {
                max-width: 140px;
                margin-top: 18px
            }
        }

        .be88ba8a {
            box-sizing: border-box;
            background-color: #fff;
            flex-grow: 0;
            flex-shrink: 0;
            justify-content: center;
            height: 56px;
            padding-top: 10px;
            display: flex;
            position: relative
        }

        .b480065b {
            z-index: 10;
            pointer-events: none;
            background: linear-gradient(rgba(255, 255, 255, .8) 0%, rgba(255, 255, 255, 0) 100%);
            width: 100%;
            height: 32px;
            position: absolute;
            top: 100%;
            left: 1px
        }

        .efe408db {
            box-sizing: border-box;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 16px;
            display: flex
        }

        .a24007f4 {
            border: solid 1px var(--dsr-main);
            color: var(--dsr-text-2);
            border-radius: 12px;
            align-items: center;
            margin-left: 14px;
            margin-right: auto;
            padding: 1px 6px;
            font-size: 12px;
            font-weight: 500;
            display: flex
        }

        .d7829b2f {
            cursor: pointer;
            border-radius: 6px;
            padding: 4px
        }

        .d7829b2f.e7d8739b {
            margin-left: -4px
        }

        .d7829b2f.ecf90b28 {
            margin-right: -4px
        }

        .d7829b2f:hover {
            background-color: var(--dsr-icon-hover-1)
        }

        [data-ds-dark-theme] .a24007f4 {
            color: #fff
        }

        @media (min-width: 768px) {
            .efe408db {
                display: none
            }
        }

        .f8d1e4c0 {
            display: none
        }

        @media (min-width: 768px) {
            .f8d1e4c0 {
                width: 0;
                min-width: 0;
                max-width: var(--message-list-max-width);
                flex: 1;
                padding: 0 32px;
                display: flex
            }
        }

        [data-ds-dark-theme] .be88ba8a {
            background-color: var(--dsr-bg)
        }

        [data-ds-dark-theme] .efe408db {
            opacity: .8
        }

        [data-ds-dark-theme] .b480065b {
            background: linear-gradient(rgba(41, 42, 45, .8) 0%, rgba(41, 42, 45, 0) 100%)
        }

        .fe369d61 {
            z-index: 11;
            background: #fff;
            border: 1px solid #dcdcdc;
            border-radius: 12px;
            flex-direction: column;
            height: calc(100% - 82px);
            margin-top: 56px;
            margin-bottom: 26px;
            margin-right: 20px;
            display: flex;
            position: fixed;
            right: 0;
            overflow: hidden
        }

        .fa178bf1 {
            justify-content: space-between;
            align-items: center;
            padding: 20px 32px 12px;
            display: flex
        }

        .fa178bf1 .b272c426 {
            color: #8c8c8c;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px
        }

        .dc433409 {
            height: 100%;
            min-height: 0;
            padding: 0 20px;
            overflow-x: hidden;
            overflow-y: auto
        }

        .dc433409 .fcd13b6e {
            border-radius: 12px;
            margin-bottom: 12px;
            padding: 8px 10px
        }

        .dc433409 .fcd13b6e:hover {
            background-color: #f5f5f5
        }

        @media not all and (min-width: 640px) {
            .b272c426 {
                text-align: center;
                width: 100%
            }

            .dc433409 {
                padding: 0 6px
            }

            .dc433409 .fcd13b6e {
                margin-bottom: 4px
            }
        }

        [data-ds-dark-theme] .fe369d61 {
            background-color: #40404d;
            border: 1px solid #5a5a69
        }

        [data-ds-dark-theme] .fe369d61 .fa178bf1 .b272c426 {
            color: #f8faff
        }

        [data-ds-dark-theme] .fe369d61 .dc433409 .fcd13b6e:hover {
            background-color: #4d4d59
        }

        .dd8acccf {
            pointer-events: none;
            background: linear-gradient(to top, var(--ds-background-1)0%, rgba(var(--ds-background-1-rgb), .5)40%, rgba(var(--ds-background-1-rgb), .15)70%, var(--ds-transparent)100%);
            height: 16px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0
        }

        .b491273a {
            max-width: 768px;
            margin: auto;
            padding: 0 24px
        }

        .ds-alert {
            --ds-alert-font-size: var(--ds-font-size-m);
            --ds-alert-line-height: var(--ds-line-height-m);
            --icon-size: 21px
        }

        .ds-alert.ds-alert--warning {
            --alert-color: rgba(var(--ds-rgb-warning)/.06);
            --alert-text-color: rgb(var(--ds-rgb-warning));
            --alert-box-shadow: 0 0 0 2px rgb(var(--ds-rgb-warning))
        }

        .ds-alert.ds-alert--warning:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-warning), .09)
        }

        .ds-alert.ds-alert--success {
            --alert-color: rgba(var(--ds-rgb-success-rgb)/.06);
            --alert-text-color: rgb(var(--ds-rgb-success));
            --alert-box-shadow: 0 0 0 2px rgb(var(--ds-rgb-success))
        }

        .ds-alert.ds-alert--success:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-success-rgb), .09)
        }

        .ds-alert.ds-alert--error {
            --alert-color: rgba(var(--ds-rgb-error)/.06);
            --alert-text-color: rgb(var(--ds-rgb-error));
            --alert-box-shadow: 0 0 0 2px rgb(var(--ds-rgb-error))
        }

        .ds-alert.ds-alert--error:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-error), .09)
        }

        .ds-alert.ds-alert--info {
            --alert-color: rgba(var(--ds-rgb-info)/.06);
            --alert-text-color: rgb(var(--ds-rgb-info));
            --alert-box-shadow: 0 0 0 2px rgb(var(--ds-rgb-info))
        }

        .ds-alert.ds-alert--info:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-info)/.09)
        }

        body.dark .ds-alert.ds-alert--warning:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-warning)/.2)
        }

        body.dark .ds-alert.ds-alert--success:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-success-rgb)/.2)
        }

        body.dark .ds-alert.ds-alert--error:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-error)/.2)
        }

        body.dark .ds-alert.ds-alert--info:not(.ds-alert--bordered) {
            --alert-color: rgba(var(--ds-rgb-info)/.2)
        }

        .ds-alert {
            font-size: var(--ds-alert-font-size);
            line-height: var(--ds-alert-line-height);
            color: var(--alert-text-color);
            box-sizing: border-box;
            background-color: var(--alert-color);
            border-radius: 12px;
            align-items: center;
            padding: 14px;
            display: flex;
            position: relative;
            overflow: hidden
        }

        .ds-alert .ds-alert__content {
            flex: 1
        }

        .ds-alert .ds-alert__icon {
            width: var(--icon-size);
            height: var(--icon-size);
            font-size: var(--icon-size);
            margin-right: 6px;
            display: flex
        }

        .ds-alert .ds-alert__icon svg {
            width: var(--icon-size);
            height: var(--icon-size)
        }

        .ds-alert .ds-alert__icon--warning {
            color: rgb(var(--ds-rgb-warning))
        }

        .ds-alert .ds-alert__icon--success {
            color: rgb(var(--ds-rgb-success))
        }

        .ds-alert .ds-alert__icon--error {
            color: rgb(var(--ds-rgb-error))
        }

        .ds-alert .ds-alert__icon--info {
            color: rgb(var(--ds-rgb-info))
        }

        .ds-alert.ds-alert--bordered {
            box-shadow: var(--alert-box-shadow)
        }

        .aaff8b8f {
            max-width: var(--message-list-max-width);
            flex-grow: 1;
            width: 100%;
            position: relative
        }

        .cefa5c26 {
            --padding: 14px;
            cursor: text;
            box-sizing: border-box;
            width: 100%;
            font-size: var(--ds-font-size-l);
            line-height: var(--ds-line-height-l);
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            box-shadow: none;
            background-color: transparent;
            background-color: var(--dsr-bg);
            border-radius: 24px;
            flex-direction: column;
            display: flex;
            position: relative
        }

        .cefa5c26.d5e44c7a {
            box-shadow: 0px 0px 0px .5px var(--dsr-input-border);
            padding: 8px 0 0
        }

        .cefa5c26.d5e44c7a .ca114c67 {
            color: var(--dsr-text-2);
            margin: 0 0 4px 18px;
            font-size: 12px;
            line-height: 18px
        }

        .cefa5c26 .dd442025 {
            background-color: var(--dsr-input-bg);
            box-shadow: 0px 0px 0px .5px var(--dsr-input-border);
            border-radius: 24px
        }

        .cefa5c26 .b699646e {
            z-index: 1;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 10px;
            display: flex;
            overflow: hidden
        }

        .cefa5c26 .ec4f5d61 {
            --function-row-offset: 2px;
            width: calc(100% - var(--function-row-offset));
            padding-left: var(--function-row-offset);
            flex-wrap: wrap;
            align-items: center;
            margin-top: 4px;
            display: flex
        }

        .cefa5c26 .bf38813a {
            flex: 1;
            justify-content: flex-end;
            align-items: center;
            display: flex
        }

        .cefa5c26 .fad49dec {
            width: 100%;
            max-height: calc(12*var(--ds-line-height-l));
            margin: 0 4px;
            position: relative
        }

        .cefa5c26 .c92459f0,
        .cefa5c26 .b13855df {
            font-size: inherit;
            line-height: inherit;
            word-break: break-word;
            white-space: pre-wrap;
            border: none;
            width: 100%;
            margin: 0;
            padding: 0;
            font-family: inherit;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto
        }

        .cefa5c26 .c92459f0 {
            resize: none;
            color: rgb(var(--ds-rgb-label-1));
            caret-color: rgb(var(--ds-rgb-label-1));
            background-color: transparent;
            position: absolute
        }

        .cefa5c26 .c92459f0::placeholder {
            color: rgba(13, 13, 13, .3)
        }

        .cefa5c26 .c92459f0::placeholder {
            color: rgba(13, 13, 13, .3)
        }

        .cefa5c26 .c92459f0::placeholder {
            color: rgba(13, 13, 13, .3)
        }

        .cefa5c26 .c92459f0:focus {
            outline: none
        }

        .cefa5c26 .b13855df {
            visibility: hidden;
            pointer-events: none;
            min-height: 56px
        }

        .f6d670 {
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            background: #4d6bfe;
            border: none;
            border-radius: 16px;
            flex-direction: column;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            min-width: 32px;
            height: 32px;
            margin-top: auto;
            display: flex
        }

        .f6d670:hover {
            background-color: #2563eb
        }

        .f6d670 .f286936b {
            justify-content: center;
            align-items: center;
            min-width: 28px;
            height: 28px;
            display: flex
        }

        .f6d670 .f286936b>svg {
            width: calc(var(--ds-font-size-l) + 4px);
            height: calc(var(--ds-font-size-l) + 4px);
            flex-shrink: 0
        }

        .f6d670 .abf3e1f4 {
            min-width: -moz-fit-content;
            min-width: fit-content;
            margin: 0 4px;
            padding: 0 4px
        }

        .f6d670 .dbf3da68 {
            margin: -1px
        }

        .f6d670 .d3faf489 {
            margin: 0 4px;
            font-size: 14px
        }

        .f6d670.bcc55ca1 {
            cursor: not-allowed;
            background-color: rgb(var(--ds-rgb-slate-250));
            color: #fafafa
        }

        @media not all and (min-width: 640px) {
            .aaff8b8f {
                padding-top: 14px
            }

            .ec4f5d61 {
                margin-left: 0
            }
        }

        .ac69d6c1 {
            z-index: 10;
            pointer-events: none;
            opacity: .6;
            font-size: 14px;
            position: absolute;
            bottom: 90%
        }

        .be24146b {
            background: currentColor;
            border-radius: 2px;
            flex-shrink: 0;
            width: 12px;
            height: 12px;
            margin: 1px
        }

        [data-ds-dark-theme] .cefa5c26 {
            border-color: #536e8c
        }

        [data-ds-dark-theme] .cefa5c26 textarea::placeholder {
            color: #999aa5
        }

        [data-ds-dark-theme] .cefa5c26 textarea::placeholder {
            color: #999aa5
        }

        [data-ds-dark-theme] .cefa5c26 textarea::placeholder {
            color: #999aa5
        }

        [data-ds-dark-theme] .dd442025 {
            box-shadow: 0 0 0 .5px rgba(192, 192, 192, .3)
        }

        [data-ds-dark-theme] .f6d670 {
            color: #f8faff;
            background-color: #4d6bfe
        }

        [data-ds-dark-theme] .f6d670:hover {
            background-color: #4f6eca
        }

        [data-ds-dark-theme] .f6d670.bcc55ca1 {
            color: #4b4b5b;
            background-color: rgb(var(--ds-rgb-zinc-500))
        }

        .f0046890 {
            z-index: 1000;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, .7);
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            top: 0;
            left: 0
        }

        .ea5b9eaf {
            color: #262626;
            text-align: center;
            flex-direction: column;
            align-items: center;
            max-width: 485px;
            margin-top: -3%;
            display: flex
        }

        .bd16b44d {
            width: -moz-fit-content;
            white-space: nowrap;
            width: fit-content;
            margin-top: 24px;
            font-size: 24px;
            line-height: 42px
        }

        .a83ada2e {
            color: #8b8b8b;
            white-space: pre-wrap;
            margin-top: 12px;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px
        }

        [data-ds-dark-theme] .f0046890 {
            background-color: rgba(39, 39, 48, .7)
        }

        [data-ds-dark-theme] .ea5b9eaf {
            color: #f8faff
        }

        [data-ds-dark-theme] .a83ada2e {
            color: #bbb
        }

        .e98de67b {
            pointer-events: all;
            color: #262626;
            cursor: pointer;
            background-color: #fff;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            margin-bottom: 20px;
            display: flex;
            position: absolute;
            bottom: 100%;
            right: 12px;
            overflow: hidden;
            box-shadow: inset 0 0 0 1px #ededed
        }

        .e98de67b:hover {
            background-color: #f5f5f5
        }

        [data-ds-dark-theme] .e98de67b {
            color: #f8faff;
            background-color: #32333e;
            box-shadow: inset 0 0 0 1px #525252
        }

        [data-ds-dark-theme] .e98de67b:hover {
            background-color: #44444d
        }

        .fcaa63f8 {
            font-size: var(--ds-font-size-s);
            color: rgb(var(--ds-rgb-label-3));
            margin: 6px 0;
            line-height: 14px
        }

        [data-ds-dark-theme] .fcaa63f8 {
            color: #737373
        }

        .cbcaa82c {
            background-color: var(--dsr-bg);
            z-index: 1;
            flex-direction: column;
            align-items: center;
            margin-top: auto;
            display: flex;
            position: -webkit-sticky;
            position: sticky;
            bottom: 0
        }

        @media not all and (min-width: 640px) {
            .cbcaa82c {
                padding: 0
            }
        }

        .ca72515b {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative
        }

        .ca72515b .ac106a52 {
            z-index: 1;
            width: 100%;
            position: absolute;
            top: 0
        }

        .a2f8e4bb {
            box-sizing: border-box;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 800px;
            height: 100%;
            margin: auto;
            padding: 0 64px;
            display: flex;
            position: relative
        }

        .a85a674a {
            color: #000;
            text-align: center;
            flex-direction: column;
            flex-grow: 1;
            align-items: center;
            line-height: 24px;
            display: flex
        }

        .a85a674a .c7e7df4d {
            align-items: center;
            gap: 14px;
            margin-top: auto;
            font-size: 24px;
            font-weight: 500;
            display: flex
        }

        .a85a674a .a8d0e1d3 {
            color: #404040;
            margin: 8px 0 20px;
            font-size: 14px
        }

        .a85a674a,
        .eb830e32 {
            transform: translateY(-7.5vh)
        }

        @media not all and (min-width: 640px) {
            .a2f8e4bb {
                padding: 0 16px
            }

            .a85a674a {
                box-sizing: border-box;
                text-align: left;
                width: 100%;
                padding: 0 34px
            }

            .a85a674a .c7e7df4d {
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                font-size: 18px;
                line-height: 24px
            }

            .a85a674a .c7e7df4d .da6cda9a {
                position: relative;
                left: -8px
            }

            .a85a674a .a8d0e1d3 {
                width: 100%;
                margin: 14px 0 6px;
                font-size: 14px;
                line-height: 24px
            }
        }

        .d9fb9344 {
            text-align: center;
            width: 100%;
            margin-top: auto;
            position: fixed;
            bottom: 0
        }

        [data-ds-dark-theme] .a85a674a {
            color: #fff
        }

        [data-ds-dark-theme] .a8d0e1d3 {
            color: #f8faff
        }

        :root {
            --message-list-padding-horizontal: 16px;
            --message-list-max-width: 800px
        }

        @media (min-width: 768px) {
            :root {
                --message-list-padding-horizontal: 32px
            }
        }

        .cb86951c {
            flex-direction: column;
            display: flex;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden
        }

        @supports (top: env(safe-area-inset-top)) {
            .cb86951c {
                padding-top: env(safe-area-inset-top);
                padding-left: env(safe-area-inset-left);
                padding-right: env(safe-area-inset-right);
                padding-bottom: env(safe-area-inset-bottom)
            }
        }

        .c3ecdb44 {
            flex: 1;
            align-items: stretch;
            min-height: 0;
            display: flex
        }

        .cddfb2ed {
            flex-shrink: 0
        }

        .f2eea526 {
            flex-direction: row;
            flex-grow: 1;
            min-width: 0;
            display: flex
        }

        .f2eea526 .a5cd95be {
            width: var(--message-list-max-width);
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 0;
            max-width: 100%;
            display: flex
        }

        .b8216bc1 {
            color: rgb(var(--ds-rgb-neutral-600));
            margin: 30px;
            font-size: 12px;
            line-height: 18px
        }

        .f0b28104 {
            justify-content: center;
            align-items: center;
            height: 30vh;
            display: flex
        }

        :root,
        page {
            --ds-rgb-black: 0 0 0;
            --ds-rgb-white: 255 255 255;
            --ds-rgb-slate-50: 248 250 252;
            --ds-rgb-slate-100: 241 245 249;
            --ds-rgb-slate-150: 233 238 244;
            --ds-rgb-slate-200: 226 232 240;
            --ds-rgb-slate-250: 214 222 232;
            --ds-rgb-slate-300: 203 213 225;
            --ds-rgb-slate-350: 175 188 204;
            --ds-rgb-slate-400: 148 163 184;
            --ds-rgb-slate-450: 124 139 161;
            --ds-rgb-slate-500: 100 116 139;
            --ds-rgb-slate-550: 85 100 122;
            --ds-rgb-slate-600: 71 85 105;
            --ds-rgb-slate-650: 61 75 95;
            --ds-rgb-slate-700: 51 65 85;
            --ds-rgb-slate-750: 40 53 72;
            --ds-rgb-slate-800: 30 41 59;
            --ds-rgb-slate-850: 22 32 50;
            --ds-rgb-slate-900: 15 23 42;
            --ds-rgb-slate-950: 2 6 23;
            --ds-rgb-gray-50: 249 250 251;
            --ds-rgb-gray-100: 243 244 246;
            --ds-rgb-gray-150: 236 237 240;
            --ds-rgb-gray-200: 229 231 235;
            --ds-rgb-gray-250: 219 222 227;
            --ds-rgb-gray-300: 209 213 219;
            --ds-rgb-gray-350: 182 188 197;
            --ds-rgb-gray-400: 156 163 175;
            --ds-rgb-gray-450: 131 138 151;
            --ds-rgb-gray-500: 107 114 128;
            --ds-rgb-gray-550: 91 99 113;
            --ds-rgb-gray-600: 75 85 99;
            --ds-rgb-gray-650: 65 75 90;
            --ds-rgb-gray-700: 55 65 81;
            --ds-rgb-gray-750: 43 53 68;
            --ds-rgb-gray-800: 31 41 55;
            --ds-rgb-gray-850: 24 32 47;
            --ds-rgb-gray-900: 17 24 39;
            --ds-rgb-gray-950: 3 7 18;
            --ds-rgb-zinc-50: 250 250 250;
            --ds-rgb-zinc-100: 244 244 245;
            --ds-rgb-zinc-150: 236 236 238;
            --ds-rgb-zinc-200: 228 228 231;
            --ds-rgb-zinc-250: 220 220 223;
            --ds-rgb-zinc-300: 212 212 216;
            --ds-rgb-zinc-350: 186 186 193;
            --ds-rgb-zinc-400: 161 161 170;
            --ds-rgb-zinc-450: 137 137 146;
            --ds-rgb-zinc-500: 113 113 122;
            --ds-rgb-zinc-550: 97 97 106;
            --ds-rgb-zinc-600: 82 82 91;
            --ds-rgb-zinc-650: 72 72 80;
            --ds-rgb-zinc-700: 63 63 70;
            --ds-rgb-zinc-750: 51 51 56;
            --ds-rgb-zinc-800: 39 39 42;
            --ds-rgb-zinc-850: 31 31 34;
            --ds-rgb-zinc-900: 24 24 27;
            --ds-rgb-zinc-950: 9 9 11;
            --ds-rgb-neutral-50: 250 250 250;
            --ds-rgb-neutral-100: 245 245 245;
            --ds-rgb-neutral-150: 237 237 237;
            --ds-rgb-neutral-200: 229 229 229;
            --ds-rgb-neutral-250: 220 220 220;
            --ds-rgb-neutral-300: 212 212 212;
            --ds-rgb-neutral-350: 187 187 187;
            --ds-rgb-neutral-400: 163 163 163;
            --ds-rgb-neutral-450: 139 139 139;
            --ds-rgb-neutral-500: 115 115 115;
            --ds-rgb-neutral-550: 98 98 98;
            --ds-rgb-neutral-600: 82 82 82;
            --ds-rgb-neutral-650: 73 73 73;
            --ds-rgb-neutral-700: 64 64 64;
            --ds-rgb-neutral-750: 51 51 51;
            --ds-rgb-neutral-800: 38 38 38;
            --ds-rgb-neutral-850: 30 30 30;
            --ds-rgb-neutral-900: 23 23 23;
            --ds-rgb-neutral-950: 10 10 10;
            --ds-rgb-stone-50: 250 250 249;
            --ds-rgb-stone-100: 245 245 244;
            --ds-rgb-stone-150: 238 237 236;
            --ds-rgb-stone-200: 231 229 228;
            --ds-rgb-stone-250: 222 220 218;
            --ds-rgb-stone-300: 214 211 209;
            --ds-rgb-stone-350: 191 186 183;
            --ds-rgb-stone-400: 168 162 158;
            --ds-rgb-stone-450: 144 137 133;
            --ds-rgb-stone-500: 120 113 108;
            --ds-rgb-stone-550: 103 98 93;
            --ds-rgb-stone-600: 87 83 78;
            --ds-rgb-stone-650: 77 73 69;
            --ds-rgb-stone-700: 68 64 60;
            --ds-rgb-stone-750: 54 50 48;
            --ds-rgb-stone-800: 41 37 36;
            --ds-rgb-stone-850: 34 31 29;
            --ds-rgb-stone-900: 28 25 23;
            --ds-rgb-stone-950: 12 10 9;
            --ds-rgb-red-50: 254 242 242;
            --ds-rgb-red-100: 254 226 226;
            --ds-rgb-red-150: 254 214 214;
            --ds-rgb-red-200: 254 202 202;
            --ds-rgb-red-250: 253 183 183;
            --ds-rgb-red-300: 252 165 165;
            --ds-rgb-red-350: 250 139 139;
            --ds-rgb-red-400: 248 113 113;
            --ds-rgb-red-450: 243 90 90;
            --ds-rgb-red-500: 239 68 68;
            --ds-rgb-red-550: 229 53 53;
            --ds-rgb-red-600: 220 38 38;
            --ds-rgb-red-650: 202 33 33;
            --ds-rgb-red-700: 185 28 28;
            --ds-rgb-red-750: 169 27 27;
            --ds-rgb-red-800: 153 27 27;
            --ds-rgb-red-850: 140 28 28;
            --ds-rgb-red-900: 127 29 29;
            --ds-rgb-red-950: 69 10 10;
            --ds-rgb-orange-50: 255 247 237;
            --ds-rgb-orange-100: 255 237 213;
            --ds-rgb-orange-150: 254 226 191;
            --ds-rgb-orange-200: 254 215 170;
            --ds-rgb-orange-250: 253 200 143;
            --ds-rgb-orange-300: 253 186 116;
            --ds-rgb-orange-350: 252 166 88;
            --ds-rgb-orange-400: 251 146 60;
            --ds-rgb-orange-450: 250 130 41;
            --ds-rgb-orange-500: 249 115 22;
            --ds-rgb-orange-550: 241 101 17;
            --ds-rgb-orange-600: 234 88 12;
            --ds-rgb-orange-650: 214 76 12;
            --ds-rgb-orange-700: 194 65 12;
            --ds-rgb-orange-750: 174 58 15;
            --ds-rgb-orange-800: 154 52 18;
            --ds-rgb-orange-850: 139 48 18;
            --ds-rgb-orange-900: 124 45 18;
            --ds-rgb-orange-950: 67 20 7;
            --ds-rgb-amber-50: 255 251 235;
            --ds-rgb-amber-100: 254 243 199;
            --ds-rgb-amber-150: 253 236 168;
            --ds-rgb-amber-200: 253 230 138;
            --ds-rgb-amber-250: 252 220 107;
            --ds-rgb-amber-300: 252 211 77;
            --ds-rgb-amber-350: 251 201 56;
            --ds-rgb-amber-400: 251 191 36;
            --ds-rgb-amber-450: 248 174 23;
            --ds-rgb-amber-500: 245 158 11;
            --ds-rgb-amber-550: 231 138 8;
            --ds-rgb-amber-600: 217 119 6;
            --ds-rgb-amber-650: 198 101 7;
            --ds-rgb-amber-700: 180 83 9;
            --ds-rgb-amber-750: 163 73 11;
            --ds-rgb-amber-800: 146 64 14;
            --ds-rgb-amber-850: 133 58 14;
            --ds-rgb-amber-900: 120 53 15;
            --ds-rgb-amber-950: 69 26 3;
            --ds-rgb-yellow-50: 254 252 232;
            --ds-rgb-yellow-100: 254 249 195;
            --ds-rgb-yellow-150: 254 244 166;
            --ds-rgb-yellow-200: 254 240 138;
            --ds-rgb-yellow-250: 253 232 104;
            --ds-rgb-yellow-300: 253 224 71;
            --ds-rgb-yellow-350: 251 214 46;
            --ds-rgb-yellow-400: 250 204 21;
            --ds-rgb-yellow-450: 242 191 14;
            --ds-rgb-yellow-500: 234 179 8;
            --ds-rgb-yellow-550: 218 158 6;
            --ds-rgb-yellow-600: 202 138 4;
            --ds-rgb-yellow-650: 181 118 5;
            --ds-rgb-yellow-700: 161 98 7;
            --ds-rgb-yellow-750: 147 87 10;
            --ds-rgb-yellow-800: 133 77 14;
            --ds-rgb-yellow-850: 123 70 16;
            --ds-rgb-yellow-900: 113 63 18;
            --ds-rgb-yellow-950: 66 32 6;
            --ds-rgb-lime-50: 247 254 231;
            --ds-rgb-lime-100: 236 252 203;
            --ds-rgb-lime-150: 226 250 180;
            --ds-rgb-lime-200: 217 249 157;
            --ds-rgb-lime-250: 203 245 128;
            --ds-rgb-lime-300: 190 242 100;
            --ds-rgb-lime-350: 176 236 76;
            --ds-rgb-lime-400: 163 230 53;
            --ds-rgb-lime-450: 147 217 37;
            --ds-rgb-lime-500: 132 204 22;
            --ds-rgb-lime-550: 116 183 17;
            --ds-rgb-lime-600: 101 163 13;
            --ds-rgb-lime-650: 89 143 14;
            --ds-rgb-lime-700: 77 124 15;
            --ds-rgb-lime-750: 70 111 16;
            --ds-rgb-lime-800: 63 98 18;
            --ds-rgb-lime-850: 58 90 19;
            --ds-rgb-lime-900: 54 83 20;
            --ds-rgb-lime-950: 26 46 5;
            --ds-rgb-green-50: 240 253 244;
            --ds-rgb-green-100: 220 252 231;
            --ds-rgb-green-150: 203 249 219;
            --ds-rgb-green-200: 187 247 208;
            --ds-rgb-green-250: 160 243 190;
            --ds-rgb-green-300: 134 239 172;
            --ds-rgb-green-350: 104 230 150;
            --ds-rgb-green-400: 74 222 128;
            --ds-rgb-green-450: 54 209 111;
            --ds-rgb-green-500: 34 197 94;
            --ds-rgb-green-550: 28 180 84;
            --ds-rgb-green-600: 22 163 74;
            --ds-rgb-green-650: 21 145 67;
            --ds-rgb-green-700: 21 128 61;
            --ds-rgb-green-750: 21 114 56;
            --ds-rgb-green-800: 22 101 52;
            --ds-rgb-green-850: 21 92 48;
            --ds-rgb-green-900: 20 83 45;
            --ds-rgb-green-950: 5 46 22;
            --ds-rgb-emerald-50: 236 253 245;
            --ds-rgb-emerald-100: 209 250 229;
            --ds-rgb-emerald-150: 188 246 218;
            --ds-rgb-emerald-200: 167 243 208;
            --ds-rgb-emerald-250: 138 237 195;
            --ds-rgb-emerald-300: 110 231 183;
            --ds-rgb-emerald-350: 81 221 168;
            --ds-rgb-emerald-400: 52 211 153;
            --ds-rgb-emerald-450: 34 198 141;
            --ds-rgb-emerald-500: 16 185 129;
            --ds-rgb-emerald-550: 10 167 117;
            --ds-rgb-emerald-600: 5 150 105;
            --ds-rgb-emerald-650: 4 135 96;
            --ds-rgb-emerald-700: 4 120 87;
            --ds-rgb-emerald-750: 5 107 78;
            --ds-rgb-emerald-800: 6 95 70;
            --ds-rgb-emerald-850: 6 86 64;
            --ds-rgb-emerald-900: 6 78 59;
            --ds-rgb-emerald-950: 2 44 34;
            --ds-rgb-teal-50: 240 253 250;
            --ds-rgb-teal-100: 204 251 241;
            --ds-rgb-teal-150: 178 248 234;
            --ds-rgb-teal-200: 153 246 228;
            --ds-rgb-teal-250: 123 240 220;
            --ds-rgb-teal-300: 94 234 212;
            --ds-rgb-teal-350: 69 223 201;
            --ds-rgb-teal-400: 45 212 191;
            --ds-rgb-teal-450: 32 198 178;
            --ds-rgb-teal-500: 20 184 166;
            --ds-rgb-teal-550: 16 166 151;
            --ds-rgb-teal-600: 13 148 136;
            --ds-rgb-teal-650: 14 133 123;
            --ds-rgb-teal-700: 15 118 110;
            --ds-rgb-teal-750: 16 106 99;
            --ds-rgb-teal-800: 17 94 89;
            --ds-rgb-teal-850: 18 86 81;
            --ds-rgb-teal-900: 19 78 74;
            --ds-rgb-teal-950: 4 47 46;
            --ds-rgb-cyan-50: 236 254 255;
            --ds-rgb-cyan-100: 207 250 254;
            --ds-rgb-cyan-150: 186 246 253;
            --ds-rgb-cyan-200: 165 243 252;
            --ds-rgb-cyan-250: 134 237 250;
            --ds-rgb-cyan-300: 103 232 249;
            --ds-rgb-cyan-350: 68 221 243;
            --ds-rgb-cyan-400: 34 211 238;
            --ds-rgb-cyan-450: 20 196 225;
            --ds-rgb-cyan-500: 6 182 212;
            --ds-rgb-cyan-550: 7 163 195;
            --ds-rgb-cyan-600: 8 145 178;
            --ds-rgb-cyan-650: 11 130 161;
            --ds-rgb-cyan-700: 14 116 144;
            --ds-rgb-cyan-750: 17 105 130;
            --ds-rgb-cyan-800: 21 94 117;
            --ds-rgb-cyan-850: 21 86 108;
            --ds-rgb-cyan-900: 22 78 99;
            --ds-rgb-cyan-950: 8 51 68;
            --ds-rgb-sky-50: 240 249 255;
            --ds-rgb-sky-100: 224 242 254;
            --ds-rgb-sky-150: 205 236 253;
            --ds-rgb-sky-200: 186 230 253;
            --ds-rgb-sky-250: 155 220 252;
            --ds-rgb-sky-300: 125 211 252;
            --ds-rgb-sky-350: 90 200 250;
            --ds-rgb-sky-400: 56 189 248;
            --ds-rgb-sky-450: 35 177 240;
            --ds-rgb-sky-500: 14 165 233;
            --ds-rgb-sky-550: 8 148 216;
            --ds-rgb-sky-600: 2 132 199;
            --ds-rgb-sky-650: 2 118 180;
            --ds-rgb-sky-700: 3 105 161;
            --ds-rgb-sky-750: 5 97 147;
            --ds-rgb-sky-800: 7 89 133;
            --ds-rgb-sky-850: 9 81 121;
            --ds-rgb-sky-900: 12 74 110;
            --ds-rgb-sky-950: 8 47 73;
            --ds-rgb-blue-50: 239 246 255;
            --ds-rgb-blue-100: 219 234 254;
            --ds-rgb-blue-150: 205 226 254;
            --ds-rgb-blue-200: 191 219 254;
            --ds-rgb-blue-250: 169 208 253;
            --ds-rgb-blue-300: 147 197 253;
            --ds-rgb-blue-350: 121 181 251;
            --ds-rgb-blue-400: 96 165 250;
            --ds-rgb-blue-450: 77 147 248;
            --ds-rgb-blue-500: 59 130 246;
            --ds-rgb-blue-550: 48 114 240;
            --ds-rgb-blue-600: 37 99 235;
            --ds-rgb-blue-650: 33 88 225;
            --ds-rgb-blue-700: 29 78 216;
            --ds-rgb-blue-750: 29 71 195;
            --ds-rgb-blue-800: 30 64 175;
            --ds-rgb-blue-850: 30 61 156;
            --ds-rgb-blue-900: 30 58 138;
            --ds-rgb-blue-950: 23 37 84;
            --ds-rgb-indigo-50: 238 242 255;
            --ds-rgb-indigo-100: 224 231 255;
            --ds-rgb-indigo-150: 211 220 254;
            --ds-rgb-indigo-200: 199 210 254;
            --ds-rgb-indigo-250: 182 195 253;
            --ds-rgb-indigo-300: 165 180 252;
            --ds-rgb-indigo-350: 147 160 250;
            --ds-rgb-indigo-400: 129 140 248;
            --ds-rgb-indigo-450: 114 121 244;
            --ds-rgb-indigo-500: 99 102 241;
            --ds-rgb-indigo-550: 89 86 235;
            --ds-rgb-indigo-600: 79 70 229;
            --ds-rgb-indigo-650: 73 63 215;
            --ds-rgb-indigo-700: 67 56 202;
            --ds-rgb-indigo-750: 61 52 182;
            --ds-rgb-indigo-800: 55 48 163;
            --ds-rgb-indigo-850: 52 47 146;
            --ds-rgb-indigo-900: 49 46 129;
            --ds-rgb-indigo-950: 30 27 75;
            --ds-rgb-violet-50: 245 243 255;
            --ds-rgb-violet-100: 237 233 254;
            --ds-rgb-violet-150: 229 223 254;
            --ds-rgb-violet-200: 221 214 254;
            --ds-rgb-violet-250: 208 197 253;
            --ds-rgb-violet-300: 196 181 253;
            --ds-rgb-violet-350: 181 160 251;
            --ds-rgb-violet-400: 167 139 250;
            --ds-rgb-violet-450: 153 115 248;
            --ds-rgb-violet-500: 139 92 246;
            --ds-rgb-violet-550: 131 75 241;
            --ds-rgb-violet-600: 124 58 237;
            --ds-rgb-violet-650: 116 49 227;
            --ds-rgb-violet-700: 109 40 217;
            --ds-rgb-violet-750: 100 36 199;
            --ds-rgb-violet-800: 91 33 182;
            --ds-rgb-violet-850: 83 31 165;
            --ds-rgb-violet-900: 76 29 149;
            --ds-rgb-violet-950: 46 16 101;
            --ds-rgb-purple-50: 250 245 255;
            --ds-rgb-purple-100: 243 232 255;
            --ds-rgb-purple-150: 238 222 255;
            --ds-rgb-purple-200: 233 213 255;
            --ds-rgb-purple-250: 224 196 254;
            --ds-rgb-purple-300: 216 180 254;
            --ds-rgb-purple-350: 204 156 253;
            --ds-rgb-purple-400: 192 132 252;
            --ds-rgb-purple-450: 180 108 249;
            --ds-rgb-purple-500: 168 85 247;
            --ds-rgb-purple-550: 157 68 240;
            --ds-rgb-purple-600: 147 51 234;
            --ds-rgb-purple-650: 136 42 220;
            --ds-rgb-purple-700: 126 34 206;
            --ds-rgb-purple-750: 116 33 187;
            --ds-rgb-purple-800: 107 33 168;
            --ds-rgb-purple-850: 97 30 151;
            --ds-rgb-purple-900: 88 28 135;
            --ds-rgb-purple-950: 59 7 100;
            --ds-rgb-fuchsia-50: 253 244 255;
            --ds-rgb-fuchsia-100: 250 232 255;
            --ds-rgb-fuchsia-150: 247 220 254;
            --ds-rgb-fuchsia-200: 245 208 254;
            --ds-rgb-fuchsia-250: 242 189 253;
            --ds-rgb-fuchsia-300: 240 171 252;
            --ds-rgb-fuchsia-350: 236 146 250;
            --ds-rgb-fuchsia-400: 232 121 249;
            --ds-rgb-fuchsia-450: 224 95 244;
            --ds-rgb-fuchsia-500: 217 70 239;
            --ds-rgb-fuchsia-550: 204 54 225;
            --ds-rgb-fuchsia-600: 192 38 211;
            --ds-rgb-fuchsia-650: 177 33 193;
            --ds-rgb-fuchsia-700: 162 28 175;
            --ds-rgb-fuchsia-750: 148 26 159;
            --ds-rgb-fuchsia-800: 134 25 143;
            --ds-rgb-fuchsia-850: 123 25 130;
            --ds-rgb-fuchsia-900: 112 26 117;
            --ds-rgb-fuchsia-950: 74 4 78;
            --ds-rgb-pink-50: 253 242 248;
            --ds-rgb-pink-100: 252 231 243;
            --ds-rgb-pink-150: 251 219 237;
            --ds-rgb-pink-200: 251 207 232;
            --ds-rgb-pink-250: 250 187 222;
            --ds-rgb-pink-300: 249 168 212;
            --ds-rgb-pink-350: 246 141 197;
            --ds-rgb-pink-400: 244 114 182;
            --ds-rgb-pink-450: 240 93 167;
            --ds-rgb-pink-500: 236 72 153;
            --ds-rgb-pink-550: 227 55 136;
            --ds-rgb-pink-600: 219 39 119;
            --ds-rgb-pink-650: 204 31 106;
            --ds-rgb-pink-700: 190 24 93;
            --ds-rgb-pink-750: 173 23 85;
            --ds-rgb-pink-800: 157 23 77;
            --ds-rgb-pink-850: 144 23 72;
            --ds-rgb-pink-900: 131 24 67;
            --ds-rgb-pink-950: 80 7 36;
            --ds-rgb-rose-50: 255 241 242;
            --ds-rgb-rose-100: 255 228 230;
            --ds-rgb-rose-150: 254 216 220;
            --ds-rgb-rose-200: 254 205 211;
            --ds-rgb-rose-250: 253 184 193;
            --ds-rgb-rose-300: 253 164 175;
            --ds-rgb-rose-350: 252 138 154;
            --ds-rgb-rose-400: 251 113 133;
            --ds-rgb-rose-450: 247 88 113;
            --ds-rgb-rose-500: 244 63 94;
            --ds-rgb-rose-550: 234 46 83;
            --ds-rgb-rose-600: 225 29 72;
            --ds-rgb-rose-650: 207 23 66;
            --ds-rgb-rose-700: 190 18 60;
            --ds-rgb-rose-750: 174 18 58;
            --ds-rgb-rose-800: 159 18 57;
            --ds-rgb-rose-850: 147 18 56;
            --ds-rgb-rose-900: 136 19 55;
            --ds-rgb-rose-950: 76 5 25
        }

        body,
        page,
        .ds-theme {
            --ds-input-height-l: 42px;
            --ds-input-height-m: 34px;
            --ds-input-height-s: 30px;
            --ds-input-height-xs: 26px;
            --ds-font-weight-strong: 600;
            --ds-font-size-l: 16px;
            --ds-line-height-l: 28px;
            --ds-font-size-m: 14px;
            --ds-line-height-m: 25px;
            --ds-font-size-sp: 13px;
            --ds-line-height-sp: 23px;
            --ds-font-size-s: 12px;
            --ds-line-height-s: 21px;
            --ds-font-size-xsp: 11px;
            --ds-line-height-xsp: 19.5px;
            --ds-font-size-xs: 10px;
            --ds-line-height-xs: 18px;
            --ds-ease-in-out: cubic-bezier(.4, 0, .2, 1);
            --ds-ease-in: cubic-bezier(.4, 0, 1, 1);
            --ds-ease-out: cubic-bezier(0, 0, .2, 1);
            --ds-font-family-code: Menlo, "Roboto Mono", "Courier New", Courier, monospace, "Inter", sans-serif;
            --ds-transition-duration: .2s;
            --ds-transition-duration-fast: .1s;
            --ds-transition-duration-slow: .3s
        }

        body {
            font-size: var(--ds-font-size-m);
            line-height: var(--ds-line-height-m);
            color: rgb(var(--ds-rgb-label-1));
            -webkit-text-size-adjust: none;
            margin: 0
        }

        body,
        page {
            --ds-rgb-info: var(--ds-rgb-blue-500);
            --ds-rgb-primary: var(--ds-rgb-blue-500);
            --ds-rgb-primary-foreground: var(--ds-rgb-white);
            --ds-rgb-label-1: var(--ds-rgb-neutral-700);
            --ds-rgb-label-2: var(--ds-rgb-neutral-450);
            --ds-rgb-label-3: var(--ds-rgb-neutral-400);
            --ds-rgb-error: var(--ds-rgb-red-500);
            --ds-rgb-warning: var(--ds-rgb-amber-500);
            --ds-rgb-success: var(--ds-rgb-green-500);
            --ds-rgba-transparent: 255 255 255/0;
            --ds-rgb-bg-base: var(--ds-rgb-white);
            --ds-rgb-elevated: var(--ds-rgb-white);
            --ds-rgb-track: var(--ds-rgb-neutral-200);
            --ds-rgb-hover: var(--ds-rgb-neutral-100);
            --ds-rgb-header: var(--ds-rgb-neutral-50);
            --ds-rgb-separator: var(--ds-rgb-neutral-100);
            --ds-rgb-separator-strong: var(--ds-rgb-neutral-200);
            --ds-rgb-input: var(--ds-rgb-neutral-100);
            --ds-rgb-input-strong: var(--ds-rgb-neutral-150);
            --ds-rgb-input-focus: var(--ds-rgb-white);
            --ds-rgb-link: var(--ds-rgb-primary);
            --ds-rgb-tag: var(--ds-rgb-neutral-200);
            --ds-rgb-segmented: var(--ds-rgb-neutral-100);
            --ds-rgb-segmented-button: var(--ds-rgb-white);
            --ds-rgb-segmented-separator: var(--ds-rgb-neutral-300);
            --ds-rgb-thumb: var(--ds-rgb-white);
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Open Sans, sans-serif
        }

        body {
            -webkit-tap-highlight-color: transparent
        }

        body.apple,
        body.en_US,
        body.apple .ds-theme,
        body.en_US .ds-theme {
            --ds-font-weight-strong: 500
        }

        body.dark {
            background-color: rgb(var(--ds-rgb-bg-base));
            color: rgb(var(--ds-rgb-label-1));
            --lightningcss-light: ;
            --lightningcss-dark: initial;
            color-scheme: dark
        }

        body.dark,
        body.dark .ds-theme {
            --ds-rgb-info: var(--ds-rgb-blue-500);
            --ds-rgb-primary: var(--ds-rgb-blue-500);
            --ds-rgb-primary-foreground: 255 255 255;
            --ds-rgb-label-1: var(--ds-rgb-neutral-100);
            --ds-rgb-label-2: var(--ds-rgb-neutral-400);
            --ds-rgb-label-3: var(--ds-rgb-neutral-500);
            --ds-rgb-error: var(--ds-rgb-red-500);
            --ds-rgb-warning: var(--ds-rgb-amber-500);
            --ds-rgb-success: var(--ds-rgb-green-500);
            --ds-rgba-transparent: 255 255 255/0;
            --ds-rgb-bg-base: var(--ds-rgb-black);
            --ds-rgb-elevated: var(--ds-rgb-neutral-700);
            --ds-rgb-track: var(--ds-rgb-neutral-500);
            --ds-rgb-hover: var(--ds-rgb-neutral-700);
            --ds-rgb-header: 40 40 40;
            --ds-rgb-separator: var(--ds-rgb-neutral-700);
            --ds-rgb-separator-strong: var(--ds-rgb-neutral-600);
            --ds-rgb-input: var(--ds-rgb-neutral-800);
            --ds-rgb-input-strong: var(--ds-rgb-neutral-700);
            --ds-rgb-input-focus: var(--ds-rgb-neutral-900);
            --ds-rgb-link: var(--ds-rgb-primary);
            --ds-rgb-tag: var(--ds-rgb-neutral-700);
            --ds-rgb-segmented: var(--ds-rgb-neutral-700);
            --ds-rgb-segmented-button: var(--ds-rgb-neutral-600);
            --ds-rgb-segmented-separator: var(--ds-rgb-neutral-600);
            --ds-rgb-thumb: var(--ds-rgb-neutral-200)
        }

        body.dark .ds-elevated,
        body.dark [data-elevated] {
            --ds-rgb-label-1: var(--ds-rgb-neutral-100);
            --ds-rgb-label-2: var(--ds-rgb-neutral-400);
            --ds-rgb-label-3: var(--ds-rgb-neutral-500);
            --ds-rgb-track: var(--ds-rgb-neutral-500);
            --ds-rgb-hover: var(--ds-rgb-neutral-600);
            --ds-rgb-header: 40 40 40;
            --ds-rgb-separator: var(--ds-rgb-neutral-600);
            --ds-rgb-separator-strong: var(--ds-rgb-neutral-500);
            --ds-rgb-input: var(--ds-rgb-neutral-600);
            --ds-rgb-input-strong: var(--ds-rgb-neutral-600);
            --ds-rgb-input-focus: var(--ds-rgb-neutral-700);
            --ds-rgb-tag: var(--ds-rgb-neutral-600);
            --ds-rgb-segmented: var(--ds-rgb-neutral-600);
            --ds-rgb-segmented-button: var(--ds-rgb-neutral-500);
            --ds-rgb-segmented-separator: var(--ds-rgb-neutral-500);
            --ds-rgb-thumb: var(--ds-rgb-neutral-200)
        }

        @media (prefers-color-scheme: dark) {
            page {
                background-color: rgb(var(--ds-rgb-bg-base));
                color: rgb(var(--ds-rgb-label-1));
                --lightningcss-light: ;
                --lightningcss-dark: initial;
                color-scheme: dark
            }

            page,
            page .ds-theme {
                --ds-rgb-info: var(--ds-rgb-blue-500);
                --ds-rgb-primary: var(--ds-rgb-blue-500);
                --ds-rgb-primary-foreground: 255 255 255;
                --ds-rgb-label-1: var(--ds-rgb-neutral-100);
                --ds-rgb-label-2: var(--ds-rgb-neutral-400);
                --ds-rgb-label-3: var(--ds-rgb-neutral-500);
                --ds-rgb-error: var(--ds-rgb-red-500);
                --ds-rgb-warning: var(--ds-rgb-amber-500);
                --ds-rgb-success: var(--ds-rgb-green-500);
                --ds-rgba-transparent: 255 255 255/0;
                --ds-rgb-bg-base: var(--ds-rgb-black);
                --ds-rgb-elevated: var(--ds-rgb-neutral-700);
                --ds-rgb-track: var(--ds-rgb-neutral-500);
                --ds-rgb-hover: var(--ds-rgb-neutral-700);
                --ds-rgb-header: 40 40 40;
                --ds-rgb-separator: var(--ds-rgb-neutral-700);
                --ds-rgb-separator-strong: var(--ds-rgb-neutral-600);
                --ds-rgb-input: var(--ds-rgb-neutral-800);
                --ds-rgb-input-strong: var(--ds-rgb-neutral-700);
                --ds-rgb-input-focus: var(--ds-rgb-neutral-900);
                --ds-rgb-link: var(--ds-rgb-primary);
                --ds-rgb-tag: var(--ds-rgb-neutral-700);
                --ds-rgb-segmented: var(--ds-rgb-neutral-700);
                --ds-rgb-segmented-button: var(--ds-rgb-neutral-600);
                --ds-rgb-segmented-separator: var(--ds-rgb-neutral-600);
                --ds-rgb-thumb: var(--ds-rgb-neutral-200)
            }

            page .ds-elevated {
                --ds-rgb-label-1: var(--ds-rgb-neutral-100);
                --ds-rgb-label-2: var(--ds-rgb-neutral-400);
                --ds-rgb-label-3: var(--ds-rgb-neutral-500);
                --ds-rgb-track: var(--ds-rgb-neutral-500);
                --ds-rgb-hover: var(--ds-rgb-neutral-600);
                --ds-rgb-header: 40 40 40;
                --ds-rgb-separator: var(--ds-rgb-neutral-600);
                --ds-rgb-separator-strong: var(--ds-rgb-neutral-500);
                --ds-rgb-input: var(--ds-rgb-neutral-600);
                --ds-rgb-input-strong: var(--ds-rgb-neutral-600);
                --ds-rgb-input-focus: var(--ds-rgb-neutral-700);
                --ds-rgb-tag: var(--ds-rgb-neutral-600);
                --ds-rgb-segmented: var(--ds-rgb-neutral-600);
                --ds-rgb-segmented-button: var(--ds-rgb-neutral-500);
                --ds-rgb-segmented-separator: var(--ds-rgb-neutral-500);
                --ds-rgb-thumb: var(--ds-rgb-neutral-200)
            }
        }

        body {
            --dsr-main: #4d6bfe;
            --dsr-main-2: rgba(77, 107, 254, .4);
            --dsr-main-3: rgba(77, 107, 254, .2);
            --dsr-bg: rgb(var(--ds-rgb-white));
            --dsr-text-0: rgb(var(--ds-rgb-black));
            --dsr-text-1: rgb(var(--ds-rgb-neutral-800));
            --dsr-text-2: rgb(var(--ds-rgb-neutral-600));
            --dsr-text-3: rgb(var(--ds-rgb-neutral-400));
            --dsr-text-4: rgb(var(--ds-rgb-zinc-350));
            --dsr-border-1: rgb(var(--ds-rgb-neutral-350));
            --dsr-border-2: rgb(var(--ds-rgb-neutral-200));
            --dsr-input-border: #dce0e9;
            --dsr-input-bg: rgb(var(--ds-rgb-gray-100));
            --dsr-button-main-bg: var(--dsr-main);
            --dsr-button-main-bg-hover: #4166d5;
            --dsr-button-second-bg: var(--dsr-main-3);
            --dsr-button-grey-0: rgb(var(--ds-rgb-neutral-150));
            --dsr-button-grey-1: rgb(var(--ds-rgb-neutral-100));
            --dsr-button-grey-2: rgb(var(--ds-rgb-neutral-50));
            --dsr-delete-button-bg: rgb(var(--ds-rgb-red-500)/.85);
            --dsr-delete-button-bg-hover: rgb(var(--ds-rgb-red-550));
            --dsr-tooltip-fg: #eff6ff;
            --dsr-tooltip-bg: rgb(var(--ds-rgb-neutral-850));
            --dsr-side-bg: #f9fbff;
            --dsr-side-hover-bg-rgb: 239, 246, 255;
            --dsr-side-hover-bg: rgb(var(--ds-rgb-blue-50));
            --dsr-icon-fg-1: rgb(var(--ds-rgb-neutral-650));
            --dsr-icon-hover-0: rgb(var(--ds-rgb-neutral-150));
            --dsr-icon-hover-1: rgb(var(--ds-rgb-neutral-100));
            --dsr-side-icon-hover: rgb(var(--ds-rgb-slate-100));
            --dsr-error-fg: rgb(var(--ds-rgb-red-550));
            --dsr-risk-text: #e4773d;
            --dsr-risk-border: rgba(228, 119, 61, .1);
            --dsr-risk-fill: rgba(228, 119, 61, .05)
        }

        body[data-ds-dark-theme] {
            --dsr-bg: #292a2d;
            --dsr-text-0: rgb(var(--ds-rgb-white));
            --dsr-text-1: rgb(var(--ds-rgb-zinc-200));
            --dsr-text-2: rgb(var(--ds-rgb-zinc-350));
            --dsr-text-3: rgb(var(--ds-rgb-neutral-300));
            --dsr-text-4: rgb(var(--ds-rgb-zinc-400));
            --dsr-border-1: rgb(var(--ds-rgb-neutral-450));
            --dsr-border-2: rgb(var(--ds-rgb-neutral-600));
            --dsr-input-border: #5a5a69;
            --dsr-input-bg: #404045;
            --dsr-button-main-bg: #509fff;
            --dsr-button-main-bg-hover: #4166d5;
            --dsr-button-second-bg: var(--dsr-main-2);
            --dsr-button-grey-0: rgb(var(--ds-rgb-neutral-600));
            --dsr-button-grey-1: rgb(var(--ds-rgb-neutral-650));
            --dsr-button-grey-2: rgb(var(--ds-rgb-neutral-700));
            --dsr-delete-button-bg: rgb(var(--ds-rgb-red-500)/.85);
            --dsr-delete-button-bg-hover: rgb(var(--ds-rgb-red-550)/.45);
            --dsr-tooltip-fg: rgb(var(--ds-rgb-zinc-650));
            --dsr-tooltip-bg: #000;
            --dsr-side-bg: #212327;
            --dsr-side-hover-bg-rgb: 51, 51, 51;
            --dsr-side-hover-bg: rgb(var(--ds-rgb-neutral-750));
            --dsr-icon-fg-1: rgb(var(--ds-rgb-neutral-350));
            --dsr-icon-hover-0: rgb(var(--ds-rgb-neutral-500));
            --dsr-icon-hover-1: rgb(var(--ds-rgb-neutral-700));
            --dsr-side-icon-hover: rgb(var(--ds-rgb-zinc-750));
            --dsr-error-fg: rgb(var(--ds-rgb-red-450));
            --dsr-risk-text: #e4773d;
            --dsr-risk-border: #4c4740;
            --dsr-risk-fill: #31302e
        }

        .ds-markdown {
            --ds-md-zoom: 1.143;
            --ds-md-font-size: calc(var(--ds-md-zoom)*var(--ds-font-size-m));
            --ds-md-line-height: calc(var(--ds-md-zoom)*var(--ds-line-height-m));
            font-size: var(--ds-md-font-size);
            min-height: var(--ds-md-font-size);
            line-height: var(--ds-md-line-height)
        }

        .ds-markdown img {
            max-width: 100%
        }

        .ds-markdown h1,
        .ds-markdown h2,
        .ds-markdown h3,
        .ds-markdown h4,
        .ds-markdown h5,
        .ds-markdown h6 {
            font-weight: var(--ds-font-weight-strong);
            font-size: var(--ds-md-font-size);
            line-height: var(--ds-md-line-height);
            margin: calc(var(--ds-md-zoom)*16px)0 calc(var(--ds-md-zoom)*12px)0
        }

        .ds-markdown h1 {
            font-size: calc(var(--ds-md-zoom)*24px);
            line-height: 1.5
        }

        .ds-markdown h2 {
            font-size: calc(var(--ds-md-zoom)*20px);
            line-height: 1.5
        }

        .ds-markdown h3 {
            font-size: calc(var(--ds-md-zoom)*16px);
            line-height: 1.5
        }

        .ds-markdown h1 .header-anchor,
        .ds-markdown h2 .header-anchor,
        .ds-markdown h3 .header-anchor,
        .ds-markdown h4 .header-anchor,
        .ds-markdown h5 .header-anchor,
        .ds-markdown h6 .header-anchor {
            opacity: 0;
            margin-left: 4px
        }

        .ds-markdown h1:hover .header-anchor,
        .ds-markdown h2:hover .header-anchor,
        .ds-markdown h3:hover .header-anchor,
        .ds-markdown h4:hover .header-anchor,
        .ds-markdown h5:hover .header-anchor,
        .ds-markdown h6:hover .header-anchor {
            opacity: 1
        }

        .ds-markdown p {
            margin: calc(var(--ds-md-zoom)*12px)0;
            font-size: var(--ds-md-font-size);
            line-height: var(--ds-md-line-height)
        }

        .ds-markdown a:not(.ds-a) {
            color: rgb(var(--ds-rgb-link));
            transition: box-shadow var(--ds-transition-duration)var(--ds-ease-in-out);
            border-radius: calc(var(--ds-md-zoom)*6px);
            border-left: 3px solid rgba(var(--ds-rgba-transparent));
            border-right: 3px solid rgba(var(--ds-rgba-transparent));
            border-top: 2px solid rgba(var(--ds-rgba-transparent));
            border-bottom: 2px solid rgba(var(--ds-rgba-transparent));
            margin-left: -3px;
            margin-right: -3px;
            text-decoration: none;
            position: relative
        }

        .ds-markdown a:not(.ds-a):focus {
            outline: none
        }

        .ds-markdown a:not(.ds-a):focus-visible {
            box-shadow: 0 0 0 2px rgb(var(--ds-rgb-primary))
        }

        .ds-markdown li>ul,
        .ds-markdown li>ol {
            margin-top: 4px
        }

        .ds-markdown ul,
        .ds-markdown ol {
            margin: calc(var(--ds-md-zoom)*12px)0;
            padding-left: calc(var(--ds-md-zoom)*24px)
        }

        .ds-markdown li:not(:first-child) {
            margin-top: 4px
        }

        .ds-markdown li::marker {
            line-height: var(--ds-md-line-height);
            color: rgb(var(--ds-rgb-label-2))
        }

        .ds-markdown hr {
            height: 1px;
            margin: calc(var(--ds-md-zoom)*12px)0;
            background: rgb(var(--ds-rgb-label-3));
            border: none;
            display: block
        }

        .ds-markdown blockquote {
            border-left: 2px solid rgb(var(--ds-rgb-label-3));
            padding-left: calc(var(--ds-md-zoom)*16px);
            margin: 0
        }

        .ds-markdown table {
            border-collapse: collapse
        }

        .ds-markdown th {
            color: rgb(var(--ds-rgb-label-1));
            padding: calc(var(--ds-md-zoom)*6px)calc(var(--ds-md-zoom)*12px);
            border-bottom: 1px solid rgb(var(--ds-rgb-label-3));
            border-top: 1px solid rgb(var(--ds-rgb-label-3));
            font-weight: 600
        }

        .ds-markdown th:not(:-webkit-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown th:not(:-moz-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown th:not(:is(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown th:-webkit-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown th:-moz-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown th:is(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown th:first-child {
            padding-left: 0
        }

        .ds-markdown td {
            padding: calc(var(--ds-md-zoom)*6px)calc(var(--ds-md-zoom)*12px);
            border-bottom: 1px solid rgb(var(--ds-rgb-label-3))
        }

        .ds-markdown td:first-child {
            padding-left: 0
        }

        .ds-markdown pre {
            margin: calc(var(--ds-md-zoom)*12px)0;
            font-family: var(--ds-font-family-code);
            overflow: auto
        }

        .ds-markdown code {
            font-size: .875em;
            font-weight: var(--ds-font-weight-strong);
            font-family: var(--ds-font-family-code);
            background-color: var(--ds-md-inline-code-color, #ececec);
            border-radius: 4px;
            padding: .15rem .3rem
        }

        .ds-markdown code:before {
            margin-left: 4px
        }

        .ds-markdown code:after {
            margin-right: 4px
        }

        .ds-markdown-math {
            text-align: center;
            display: block;
            overflow-x: auto;
            overflow-y: hidden
        }

        .ds-markdown>* .ds-markdown-math {
            margin: calc(var(--ds-md-zoom)*12px)0
        }

        .ds-markdown>* .ds-markdown-math:first-child {
            margin-top: 0
        }

        .ds-markdown>* .ds-markdown-math:last-child {
            margin-bottom: 0
        }

        .ds-markdown-code-copy-button {
            background-color: rgba(var(--ds-rgba-transparent));
            color: inherit;
            cursor: pointer;
            border: none;
            margin: 0;
            padding: 0
        }

        .ds-markdown li>p {
            margin: 4px 0
        }

        .ds-markdown li>:first-child {
            margin-top: 0
        }

        .ds-markdown li>:last-child {
            margin-bottom: 0
        }

        .ds-markdown p:last-child {
            margin-bottom: 0 !important
        }

        .ds-markdown>:first-child {
            margin-top: 0 !important
        }

        .ds-markdown>:last-child {
            margin-bottom: 0 !important
        }

        .ds-markdown.ds-markdown--page h1 {
            font-size: calc(var(--ds-md-zoom)*24px);
            margin-top: calc(var(--ds-md-zoom)*32px);
            line-height: calc(var(--ds-md-zoom)*32px);
            margin-bottom: calc(var(--ds-md-zoom)*20px)
        }

        .ds-markdown.ds-markdown--page h2 {
            font-size: calc(var(--ds-md-zoom)*20px);
            margin-top: calc(var(--ds-md-zoom)*26px);
            line-height: calc(var(--ds-md-zoom)*26px);
            margin-bottom: calc(var(--ds-md-zoom)*16px)
        }

        .ds-markdown.ds-markdown--page h3 {
            font-size: calc(var(--ds-md-zoom)*18px);
            margin-top: calc(var(--ds-md-zoom)*22px);
            line-height: calc(var(--ds-md-zoom)*22px);
            margin-bottom: calc(var(--ds-md-zoom)*14px)
        }

        .ds-markdown.ds-markdown--page h4 {
            font-size: calc(var(--ds-md-zoom)*16px);
            margin-top: calc(var(--ds-md-zoom)*20px);
            line-height: calc(var(--ds-md-zoom)*20px);
            margin-bottom: calc(var(--ds-md-zoom)*12px)
        }

        .ds-markdown.ds-markdown--page>p,
        .ds-markdown.ds-markdown--page>pre,
        .ds-markdown.ds-markdown--page>.md-code-block {
            margin: calc(var(--ds-md-zoom)*16px)0 calc(var(--ds-md-zoom)*23px)0
        }

        .ds-markdown.ds-markdown--page hr {
            margin: calc(var(--ds-md-zoom)*18px)0
        }

        .ds-markdown.ds-markdown--page th {
            color: rgb(var(--ds-rgb-label-1));
            padding: calc(var(--ds-md-zoom)*8px)calc(var(--ds-md-zoom)*10px);
            border-bottom: 1px solid rgb(var(--ds-rgb-separator));
            border-top: 1px solid rgb(var(--ds-rgb-separator))
        }

        .ds-markdown.ds-markdown--page th:not(:-webkit-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown.ds-markdown--page th:not(:-moz-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown.ds-markdown--page th:not(:is(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi))) {
            text-align: left
        }

        .ds-markdown.ds-markdown--page th:-webkit-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown.ds-markdown--page th:-moz-any(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown.ds-markdown--page th:is(:lang(ae), :lang(ar), :lang(arc), :lang(bcc), :lang(bqi), :lang(ckb), :lang(dv), :lang(fa), :lang(glk), :lang(he), :lang(ku), :lang(mzn), :lang(nqo), :lang(pnb), :lang(ps), :lang(sd), :lang(ug), :lang(ur), :lang(yi)) {
            text-align: right
        }

        .ds-markdown.ds-markdown--page td {
            padding: calc(var(--ds-md-zoom)*8px)calc(var(--ds-md-zoom)*10px);
            border-bottom: 1px solid rgb(var(--ds-rgb-separator))
        }

        .ds-markdown.ds-markdown--page td:first-child,
        .ds-markdown.ds-markdown--page th:first-child {
            padding-left: 0
        }

        .ds-markdown.ds-markdown--page td:last-child,
        .ds-markdown.ds-markdown--page th:last-child {
            padding-right: 0
        }

        .ds-markdown-html {
            font-size: .875em;
            font-family: var(--ds-font-family-code)
        }

        .ds-markdown-cite {
            vertical-align: middle;
            font-variant: tabular-nums;
            box-sizing: border-box;
            color: #404040;
            cursor: pointer;
            background: #e5e5e5;
            border-radius: 9px;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
            height: 18px;
            margin-left: 4px;
            padding: 0 6px;
            font-size: 12px;
            font-weight: 400;
            display: inline-flex;
            position: relative;
            top: -2px
        }

        [data-ds-dark-theme] .ds-markdown-cite {
            color: #f8faff;
            background: #52525b
        }

        .cjk_fallback {
            font-family: serif !important
        }

        code[class*=language-],
        pre[class*=language-] {
            color: #f8f8f2;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            -moz-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
            background: 0 0;
            font-family: Roboto Mono, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
            line-height: 1.5
        }

        pre[class*=language-] {
            border-radius: .3em;
            margin: .5em 0;
            padding: 1em;
            overflow: auto
        }

        :not(pre)>code[class*=language-],
        pre[class*=language-] {
            background: #2e3440
        }

        :not(pre)>code[class*=language-] {
            white-space: normal;
            border-radius: .3em;
            padding: .1em
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: #636f88
        }

        .token.punctuation {
            color: #81a1c1
        }

        .namespace {
            opacity: .7
        }

        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: #81a1c1
        }

        .token.number {
            color: #b48ead
        }

        .token.boolean {
            color: #81a1c1
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: #a3be8c
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string,
        .token.variable {
            color: #81a1c1
        }

        .token.atrule,
        .token.attr-value,
        .token.function,
        .token.class-name {
            color: #88c0d0
        }

        .token.keyword {
            color: #81a1c1
        }

        .token.regex,
        .token.important {
            color: #ebcb8b
        }

        .token.important,
        .token.bold {
            font-weight: var(--ds-font-weight-strong)
        }

        .token.italic {
            font-style: italic
        }

        .token.entity {
            cursor: help
        }

        .md-code-block {
            --ds-md-code-block-font-size: calc(var(--ds-md-zoom)*var(--ds-font-size-xsp));
            border-radius: calc(var(--ds-md-zoom)*10px);
            font-size: var(--ds-md-code-block-font-size);
            line-height: calc(var(--ds-md-code-block-font-size)*1.6);
            color: #fff;
            background: #181d28
        }

        .md-code-block:not(:last-child) {
            margin-bottom: calc(var(--ds-md-zoom)*10px)
        }

        .md-code-block-banner-wrap {
            background-color: #fff;
            position: -webkit-sticky;
            position: sticky;
            top: 0
        }

        .md-code-block-banner {
            padding: calc(var(--ds-md-zoom)*8px)calc(var(--ds-md-zoom)*12px);
            color: #fff;
            font-size: var(--ds-md-code-block-font-size);
            line-height: var(--ds-md-code-block-font-size);
            border-top-left-radius: calc(var(--ds-md-zoom)*10px);
            border-top-right-radius: calc(var(--ds-md-zoom)*10px);
            background: #50505a;
            justify-content: space-between;
            display: flex
        }

        .md-code-block-footer {
            padding: calc(var(--ds-md-zoom)*8px)calc(var(--ds-md-zoom)*12px);
            color: #fff;
            font-size: var(--ds-md-code-block-font-size);
            line-height: var(--ds-md-code-block-font-size);
            background: #50505a;
            justify-content: flex-end;
            display: flex
        }

        .md-code-block-action {
            align-items: center;
            display: flex
        }

        .md-code-block>pre {
            padding: calc(var(--ds-md-zoom)*8px)calc(var(--ds-md-zoom)*12px);
            white-space: pre-wrap;
            word-break: break-all;
            margin: 0 !important
        }

        [data-ds-dark-theme] .md-code-block-banner-wrap {
            background-color: #292a2d
        }

        .ds-auth-form-wrapper {
            width: 300px;
            padding-top: 48px
        }

        .ds-auth-form-loading-wrapper {
            color: rgb(var(--ds-rgb-primary));
            justify-content: center;
            align-items: center;
            padding: 28px 0;
            font-size: 28px;
            display: flex
        }

        @media not all and (min-width: 768px) {
            .ds-auth-form-wrapper {
                max-width: 100%
            }
        }

        .ds-verify-code-form-item {
            display: flex
        }

        .ds-verify-code-form-item>:not(:last-child) {
            margin-right: 12px
        }

        .ds-verify-code-form-item .ds-verify-code-form-item__verify-code-input {
            flex: 1
        }

        .ds-verify-code-form-item .ds-verify-code-form-item__verify-code-button {
            flex: 0 0
        }

        .ds-audit-reason-form-item__checkbox-group {
            display: flex
        }

        .ds-audit-reason-form-item__checkbox-group>:not(:last-child) {
            margin-right: 16px
        }

        .ds-audit-reason-form-item__checkbox-group>* {
            margin-bottom: 8px
        }

        .ds-audit-reason-form-item__checkbox-group {
            flex-wrap: wrap;
            margin-bottom: -8px
        }

        .grecaptcha-badge {
            visibility: hidden
        }

        .shumei_captcha_wrapper .shumei_captcha_img_refresh_btn {
            display: none !important
        }

        body {
            word-break: break-word;
            color: purple;
            --ds-toast-custom-font-size: 16px;
            margin: 0
        }

        body[data-ds-dark-theme] {
            background-color: var(--dsr-bg)
        }

        body[data-ds-dark-theme].dark .ds-tooltip {
            --tooltip-color: #000
        }

        [data-ds-dark-theme] {
            --ds-toast-custom-box-shadow: 0px 4px 10.2px 0px rgba(0, 0, 0, .25);
            --ds-toast-custom-color: #3a3a46;
            --ds-toast-custom-text-color: #f8faff;
            --ds-toast-custom-close-text-color: #f8faff;
            --ds-toast-custom-close-hover-color: #474756;
            --ds-md-inline-code-color: #424242
        }
    </style>
    <style>
        body {
            max-width: 752px;
            margin: 0 auto;
        }

        h2 {
            text-align: center;
            margin: 24px;
        }
        
        div.eb23581b.dfa60d66 {
            display: none;
        }
        
        div.f9bf7997 {
            padding: 0;
        }
        
        .md-code-block-banner-wrap {
            position: relative;
        }
    </style>
</head>

<body>
    <h2>${title}</h2>
    <div>${content}</div>
    <script>
        document.DOMContentLoaded = () => {
            // Automatically print the content and close the window after printing
            window.print();
            window.onafterprint = () => window.close();
        };
    </script>
</body>

</html>
  `);
    printWindow.document.close();
}