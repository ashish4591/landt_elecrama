/*
 * Magic Carousel v1.0
 *
 * Copyright 2014 LambertGroup
 * 
 */
(function(d) {
    function E(a, b, c) {
        c = b.elementsHorizontalSpacing / (b.contentHolderUnitOrigWidth + 2 * b.border) * c.aspectOrig;
        var d = a * (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width);
        b = 2 * b.elementsVerticalSpacing / (b.origWidth / b.width);
        var f = 0;
        for (i = 1; i <= a; i++) f += i;
        return c * (d - b * f)
    }

    function J(a, b) {
        b.responsive && (newCss = "", -1 != a.css("font-size").lastIndexOf("px") ? (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != a.css("font-size").lastIndexOf("em") && (fontSize = a.css("font-size").substr(0, a.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != a.css("line-height").lastIndexOf("px") ? (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != a.css("line-height").lastIndexOf("em") && (lineHeight = a.css("line-height").substr(0, a.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), a.wrapInner('<div class="newFS" style="' + newCss + '" />'))
    }

    function H(a, b) {
        nowx = (new Date).getTime();
        a.mouseOverBanner || a.effectIsRunning || !b.showCircleTimer || a.isPrettyPhoto || (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, (a.timeElapsed + nowx - a.arcInitialTime) / 1E3 * 2 / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
    }

    function A(a, b, c, w, f, p, l, y, g) {
        b.showCircleTimer && d(".mycanvas", p).css({
            display: "none"
        });
        var h, k, n, q;
        d(w[c.current_img_no]).removeClass("bottomNavButtonON");
        c.current_img_no = F(c.current_img_no, a, l);
        c.curIcon = "empty.gif";
        d(f[c.current_img_no]).attr("data-link") ? c.curIcon = "link.png" : d(f[c.current_img_no]).attr("data-large-image") ? c.curIcon = "image.png" : d(f[c.current_img_no]).attr("data-video-youtube") || d(f[c.current_img_no]).attr("data-video-vimeo") || d(f[c.current_img_no]).attr("data-video-selfhosted") ? c.curIcon = "video.png" : d(f[c.current_img_no]).attr("data-audio") && (c.curIcon = "audio.png");
        display_val = "block";
        "empty.gif" == c.curIcon && (display_val = "none");
        y.css({
            background: "url(" + b.absUrl + "resources/skins/" + b.skin + "/" + c.curIcon + ")",
            display: display_val
        });
        d(w[c.current_img_no]).addClass("bottomNavButtonON");
        c.currentZ_index = 100;
        c.currentImg = d("#contentHolderUnit_" + c.current_img_no, p);
        h = parseInt(b.contentHolderUnitOrigWidth / (b.origWidth / b.width), 10);
        k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10);
        n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2, 10);
        q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width), 10);
        C(c.currentImg, n, q, h, k, 1, !1, a, c, b, g, f, l, y, w, p);
        t = c.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++) c.currentZ_index--, t = F(t, -1, l), c.currentImg = d("#contentHolderUnit_" + t, p), c.currentImg.css("z-index", c.currentZ_index), m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (last_aux_img_no = F(t, -1, l), last_currentImg = d("#contentHolderUnit_" + last_aux_img_no, p), k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), h = parseInt(k * c.aspectOrig, 10), n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 - E(m + 1, b, c), 10), q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), C(last_currentImg, n, q, h, k, 0, !1, a, c, b, f, l, w, p)) : (k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), parseInt(k * c.aspectOrig, 10), G(c.currentImg, m + 1, b, c), n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 - E(m + 1, b, c), 10), q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), c.currentImg.css({
            left: n + "px",
            top: q + "px",
            opacity: 0
        }))), c.currentImg.css("display", "block"), k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), h = parseInt(k * c.aspectOrig, 10), n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 - E(m, b, c), 10), q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), C(c.currentImg, n, q, h, k, 1, !1, a, c, b, f, l, w, p);
        var t = c.current_img_no;
        for (m = 1; m <= Math.floor(b.numberOfVisibleItems / 2); m++) c.currentZ_index--, t = F(t, 1, l), c.currentImg = d("#contentHolderUnit_" + t, p), c.currentImg.css("z-index", c.currentZ_index), m == Math.floor(b.numberOfVisibleItems / 2) && (1 === a ? (G(c.currentImg, m + 1, b, c), c.currentImg.css({
            left: parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 + ((b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width) + E(m + 1, b, c) - c.currentImg.width()), 10) + "px",
            top: parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10) + "px",
            opacity: 0
        })) : (last_aux_img_no = F(t, 1, l), last_currentImg = d("#contentHolderUnit_" + last_aux_img_no, p), k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), h = parseInt(k * c.aspectOrig, 10), n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 + ((b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width) + E(m + 1, b, c) - h), 10), q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + (m + 1) * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), C(last_currentImg, n, q, h, k, 0, !1, a, c, b, f, l, w, p))), c.currentImg.css("display", "block"), k = parseInt(b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - 2 * m * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), h = parseInt(k * c.aspectOrig, 10), n = parseInt((b.width - (b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width)) / 2 + ((b.contentHolderUnitOrigWidth + 2 * b.border) / (b.origWidth / b.width) + E(m, b, c) - (h + 2 * b.border)), 10) + 1, q = parseInt(b.height - (b.contentHolderUnitOrigHeight + 2 * b.border) / (b.origWidth / b.width) - b.verticalAdjustment / (b.origWidth / b.width) + m * b.elementsVerticalSpacing / (b.origWidth / b.width), 10), m == Math.floor(b.numberOfVisibleItems / 2) ? C(c.currentImg, n, q, h, k, 1, !0, a, c, b, g, f, l, y, w, p) : C(c.currentImg, n, q, h, k, 1, !1, a, c, b, g, f, l, y, w, p)
    }

    function G(a, b, c, d) {
        b = parseInt(c.contentHolderUnitOrigHeight / (c.origWidth / c.width) - c.elementsVerticalSpacing / (c.origWidth / c.width) * b * 2, 10);
        d = parseInt(b * d.aspectOrig, 10);
        a.css({
            height: b + "px",
            width: d + "px"
        });
        c.resizeImages && (imgInside = a.find("img:first"), imgInside.is("img") && imgInside.css({
            height: b + "px",
            width: d + "px"
        }))
    }

    function C(a, b, c, w, f, p, l, y, g, h, k, n, q, t, v, s) {
        g.slideIsRunning = !0;
        k.html(d(n[g.current_img_no]).attr("data-title"));
        h.responsive && J(k, h);
        0 === p ? a.css("z-index", g.currentZ_index - 1) : a.css("z-index", g.currentZ_index);
        a.css("display", "block");
        a.animate({
            left: b + "px",
            top: c + "px",
            width: w + "px",
            height: f + "px",
            opacity: p
        }, 1E3 * h.animationTime, h.easing, function() {
            if (l) {
                g.slideIsRunning = !1;
                g.arcInitialTime = (new Date).getTime();
                g.timeElapsed = 0;
                h.showCircleTimer && (clearInterval(g.intervalID), g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height), g.ctx.beginPath(), g.ctx.globalAlpha = h.behindCircleAlpha / 100, g.ctx.arc(h.circleRadius + 2 * h.circleLineWidth, h.circleRadius + 2 * h.circleLineWidth, h.circleRadius, 0, 2 * Math.PI, !1), g.ctx.lineWidth = h.circleLineWidth + 2, g.ctx.strokeStyle = h.behindCircleColor, g.ctx.stroke(), g.ctx.beginPath(), g.ctx.globalAlpha = h.circleAlpha / 100, g.ctx.arc(h.circleRadius + 2 * h.circleLineWidth, h.circleRadius + 2 * h.circleLineWidth, h.circleRadius, 0, 0, !1), g.ctx.lineWidth = h.circleLineWidth, g.ctx.strokeStyle = h.circleColor, g.ctx.stroke(), g.intervalID = setInterval(function() {
                    H(g, h)
                }, 125), cLeftPos = d("#contentHolderUnit_" + g.current_img_no, s).css("left"), cTopPos = d("#contentHolderUnit_" + g.current_img_no, s).css("top"), d(".mycanvas", s).css({
                    display: "block",
                    left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(h.circleLeftPositionCorrection / (h.origWidth / h.width), 10) + "px",
                    top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(h.circleTopPositionCorrection / (h.origWidth / h.width), 10) + "px"
                }));
                if (0 < h.autoPlay && 1 < q && !g.mouseOverBanner && !g.fastForwardRunning || g.current_img_no != g.img_no_where_to_stop && g.fastForwardRunning) clearTimeout(g.timeoutID), g.timeoutID = setTimeout(function() {
                    A(y, h, g, v, n, s, q, t, k)
                }, 1E3 * h.autoPlay);
                g.current_img_no == g.img_no_where_to_stop && g.fastForwardRunning && (g.fastForwardRunning = !1, h.animationTime = g.animationTimeOrig, h.autoPlay = g.autoPlayOrig)
            }
        });
        h.resizeImages && (imgInside = a.find("img:first"), imgInside.is("img") && imgInside.animate({
            width: w + "px",
            height: f + "px"
        }, 1E3 * h.animationTime, h.easing, function() {}))
    }

    function F(a, b, c) {
        return a + b >= c ? 0 : 0 > a + b ? c - 1 : a + b
    }

    function K(a, b, c, d, f, p, l, y, g) {
        -1 === c.current_img_no - a ? A(1, b, c, d, f, p, l, y, g) : 1 === c.current_img_no - a ? A(-1, b, c, d, f, p, l, y, g) : (c.fastForwardRunning = !0, b.animationTime = 0.4, b.autoPlay = 0.1, c.img_no_where_to_stop = a, c.current_img_no < a ? a - c.current_img_no < l - a + c.current_img_no ? A(1, b, c, d, f, p, l, y, g) : A(-1, b, c, d, f, p, l, y, g) : c.current_img_no > a && (c.current_img_no - a < l - c.current_img_no + a ? A(-1, b, c, d, f, p, l, y, g) : A(1, b, c, d, f, p, l, y, g)))
    }

    function N(a, b, c, w, f, p, l, y, g, h, k, n, q, t, v, s, r) {
        r = d("body").css("overflow");
        d("body").css("overflow", "hidden");
        t.css("display", "none");
        b.enableTouchScreen ? (responsiveWidth = f.parent().parent().parent().width(), responsiveHeight = f.parent().parent().parent().height()) : (responsiveWidth = f.parent().parent().width(), responsiveHeight = f.parent().parent().height());
        b.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
        b.width100Proc && (b.width = responsiveWidth);
        b.height100Proc && (b.height = responsiveHeight);
        if (b.origWidth != responsiveWidth || b.width100Proc) b.origWidth > responsiveWidth || b.width100Proc ? b.width = responsiveWidth : b.width100Proc || (b.width = b.origWidth), b.height100Proc || (b.height = b.width / a.bannerRatio), b.width = parseInt(b.width, 10), b.height = parseInt(b.height, 10), b.enableTouchScreen && b.responsive && (b.width -= 1), l.width(b.width), l.height(b.height), s.width(b.width), s.height(b.height), b.enableTouchScreen && (l.parent().width(b.width + 1), l.parent().height(b.height)), p.css("margin-top", parseInt((b.height - y.height()) / 2 + b.nextPrevMarginTop / (b.origWidth / b.width), 10) + "px"), g.css("left", parseInt((l.width() - g.width()) / 2, 10) + "px"), h.css("left", parseInt(g.css("left").substring(0, g.css("left").length - 2), 10) - h.width() + "px"), k.css("left", parseInt(g.css("left").substring(0, g.css("left").length - 2), 10) + g.width() + parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + "px"), t.css({
            left: parseInt((b.width - t.width()) / 2, 10) + "px",
            top: parseInt(b.height - b.contentHolderUnitOrigHeight / (b.origWidth / b.width), 10) + parseInt((b.contentHolderUnitOrigHeight / (b.origWidth / b.width) - t.height()) / 2 - parseInt(b.verticalAdjustment / (b.origWidth / b.width), 10) - b.border, 10) + "px",
            "margin-top": b.playMovieMarginTop / (b.origWidth / b.width)
        }), v.css("top", parseInt(b.elementOrigTop / (b.origWidth / b.width), 10)), clearTimeout(a.timeoutID), clearInterval(a.intervalID), a.timeoutID = setTimeout(function() {
            A(1, b, a, q, w, l, c, t, v)
        }, 0.1);
        d("body").css("overflow", r)
    }

    function L(a, b, c) {
        a.effectIsRunning || D || (a.isPrettyPhoto = !1, void 0 != d(c[a.current_img_no]).attr("data-link") && "" != d(c[a.current_img_no]).attr("data-link") ? (b = b.target, void 0 != d(c[a.current_img_no]).attr("data-target") && "" != d(c[a.current_img_no]).attr("data-target") && (b = d(c[a.current_img_no]).attr("data-target")), "_blank" == b ? window.open(d(c[a.current_img_no]).attr("data-link")) : window.location = d(c[a.current_img_no]).attr("data-link")) : void 0 != d(c[a.current_img_no]).attr("data-large-image") && "" != d(c[a.current_img_no]).attr("data-large-image") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-large-image"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-youtube") && "" != d(c[a.current_img_no]).attr("data-video-youtube") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open("http://www.youtube.com/watch?v=" + d(c[a.current_img_no]).attr("data-video-youtube"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-vimeo") && "" != d(c[a.current_img_no]).attr("data-video-vimeo") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open("http://www.vimeo.com/" + d(c[a.current_img_no]).attr("data-video-vimeo"), d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-video-selfhosted") && "" != d(c[a.current_img_no]).attr("data-video-selfhosted") ? (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-video-selfhosted") + ".mp4", d(c[a.current_img_no]).attr("data-title"))) : void 0 != d(c[a.current_img_no]).attr("data-audio") && "" != d(c[a.current_img_no]).attr("data-audio") && (a.isPrettyPhoto = !0, d.prettyPhoto.open(d(c[a.current_img_no]).attr("data-audio") + ".mp3", d(c[a.current_img_no]).attr("data-title"))));
        a.isPrettyPhoto && clearTimeout(a.timeoutID)
    }

    function M() {
        var a = -1;
        "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
        return parseInt(a, 10)
    }
    var D = !1;
    d.magic_carousel = {
        version: "1.0"
    };
    d.fn.magic_carousel = function(a) {
        a = d.extend({}, d.fn.magic_carousel.defaults, a);
        return this.each(function() {
            var b = d(this);
            a.imageWidth -= 2 * a.border;
            a.imageHeight -= 2 * a.border;
            responsiveWidth = b.parent().width();
            responsiveHeight = b.parent().height();
            a.responsiveRelativeToBrowser && (responsiveWidth = d(window).width(), responsiveHeight = d(window).height());
            a.origWidth = a.width;
            a.width100Proc && (a.width = responsiveWidth);
            a.origHeight = a.height;
            a.height100Proc && (a.height = responsiveHeight);
            a.responsive && (a.origWidth != responsiveWidth || a.width100Proc) && (a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight)));
            a.width = parseInt(a.width, 10);
            a.height = parseInt(a.height, 10);
            a.enableTouchScreen && a.responsive && (a.width -= 1);
            var c = d("<div></div>").addClass("magic_carousel").addClass(a.skin),
                w = d('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <div class="contentHolder"></div> <div class="elementTitle"></div>\t<div class="iconOver"></div> <canvas class="mycanvas"></canvas>');
            b.wrap(c);
            b.after(w);
            var f = b.parent(".magic_carousel"),
                w = d(".bannerControls", f),
                p = d(".contentHolder", f),
                c = d('<div class="bottomNavLeft"></div>'),
                l = d('<div class="bottomNav"></div>'),
                y = d('<div class="bottomNavRight"></div>');
            b.after(c);
            b.after(l);
            b.after(y);
            a.showAllControllers || w.css("display", "none");
            var g = d(".leftNav", f),
                h = d(".rightNav", f);
            g.css("display", "none");
            h.css("display", "none");
            a.showNavArrows && a.showOnInitNavArrows && (g.css("display", "block"), h.css("display", "block"));
            var k = d(".bottomNav", f),
                n = d(".bottomNavLeft", f),
                q = d(".bottomNavRight", f),
                t;
            k.css("display", "block");
            n.css("display", "block");
            q.css("display", "block");
            k.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            n.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            q.css({
                bottom: a.bottomNavMarginBottom + "px",
                top: "auto"
            });
            a.showBottomNav || (k.css("display", "none"), n.css("display", "none"), q.css("display", "none"));
            a.showOnInitBottomNav || (k.css("left", "-5000px"), n.css("left", "-5000px"), q.css("left", "-5000px"));
            var v = d(".elementTitle", f);
            v.css("color", a.titleColor);
            a.showElementTitle || v.css("display", "none");
            a.elementOrigTop = parseInt(v.css("top").substr(0, v.css("top").lastIndexOf("px")), 10);
            v.css("top", parseInt(a.elementOrigTop / (a.origWidth / a.width), 10));
            var c = M(),
                s = d(".iconOver", f),
                r = 0,
                e = {
                    current_img_no: 0,
                    currentImg: 0,
                    currentZ_index: 101,
                    slideIsRunning: !1,
                    mouseOverBanner: !1,
                    fastForwardRunning: !1,
                    isPrettyPhoto: !1,
                    img_no_where_to_stop: 0,
                    aspectOrig: 0,
                    animationTimeOrig: a.animationTime,
                    autoPlayOrig: a.autoPlay,
                    curIcon: "empty.gif",
                    timeoutID: "",
                    intervalID: "",
                    arcInitialTime: (new Date).getTime(),
                    timeElapsed: 0,
                    windowWidth: 0,
                    canvas: "",
                    ctx: "",
                    bannerRatio: a.origWidth / a.origHeight
                };
            e.canvas = d(".mycanvas", f)[0];
            e.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
            e.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; - 1 != c && 9 > c && (a.showCircleTimer = !1);
            a.showCircleTimer && (e.ctx = e.canvas.getContext("2d"));
            f.width(a.width);
            f.height(a.height);
            p.width(a.width);
            p.height(a.height);
            w.css("margin-top", parseInt((a.height - g.height()) / 2, 10) + a.nextPrevMarginTop / (a.origWidth / a.width) + "px");
            var u = b.find("ul:first").children();
            a.numberOfVisibleItems > b.find("ul:first li").length && (a.numberOfVisibleItems = b.find("ul:first li").length);
            a.numberOfVisibleItems % 2 || a.numberOfVisibleItems--;
            var x, B, C = 0,
                F = 0;
            u.each(function() {
                e.currentImg = d(this);
                e.currentImg.is("li") || (e.currentImg = e.currentImg.find("li:first"));
                e.currentImg.is("li") && (r++, x = d('<div class="contentHolderUnit" rel="' + (r - 1) + '" id="contentHolderUnit_' + (r - 1) + '">' + e.currentImg.html() + "</div>"), p.append(x), x.css({
                    display: "none",
                    width: a.imageWidth + "px",
                    height: a.imageHeight + "px"
                }), 0 === a.contentHolderUnitOrigWidth && (a.contentHolderUnitOrigWidth = x.width(), a.contentHolderUnitOrigHeight = x.height(), e.aspectOrig = a.contentHolderUnitOrigWidth / a.contentHolderUnitOrigHeight), G(x, 0, a, e), x.css({
                    left: parseInt((a.width - (x.width() + 2 * a.border)) / 2, 10) + "px",
                    top: parseInt(a.height - (a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width) - a.verticalAdjustment / (a.origWidth / a.width), 10) + "px",
                    "border-color": a.borderColorOFF,
                    "border-width": a.border
                }), 1 == r ? x.css({
                    left: parseInt((a.width - (x.width() + 2 * a.border)) / 2, 10) + "px",
                    top: parseInt(a.height - (a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width) - a.verticalAdjustment / (a.origWidth / a.width), 10) + "px",
                    "z-index": e.currentZ_index,
                    display: "block"
                }) : r <= Math.ceil(a.numberOfVisibleItems / 2) && (e.currentZ_index--, G(x, r - 1, a, e), x.css({
                    left: parseInt((a.width - (a.contentHolderUnitOrigWidth + 2 * a.border) / (a.origWidth / a.width)) / 2 + ((a.contentHolderUnitOrigWidth + 2 * a.border) / (a.origWidth / a.width) + E(r - 1, a, e) - (x.width() + 2 * a.border)), 10) + 1 + "px",
                    top: parseInt(a.height - (a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width), 10) - a.verticalAdjustment / (a.origWidth / a.width) + (r - 1) * a.elementsVerticalSpacing / (a.origWidth / a.width) + "px",
                    "z-index": e.currentZ_index,
                    display: "block"
                })), B = d('<div class="bottomNavButtonOFF" rel="' + (r - 1) + '"></div>'), k.append(B), C += parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + B.width(), F = parseInt((k.height() - parseInt(B.css("height").substring(0, B.css("height").length - 2))) / 2, 10), B.css("margin-top", F + "px"))
            });
            e.curIcon = "empty.gif";
            d(u[e.current_img_no]).attr("data-link") ? e.curIcon = "link.png" : d(u[e.current_img_no]).attr("data-large-image") ? e.curIcon = "image.png" : d(u[e.current_img_no]).attr("data-video-youtube") || d(u[e.current_img_no]).attr("data-video-vimeo") || d(u[e.current_img_no]).attr("data-video-selfhosted") ? e.curIcon = "video.png" : d(u[e.current_img_no]).attr("data-audio") && (e.curIcon = "audio.png");
            display_val = "block";
            "empty.gif" == e.curIcon && (display_val = "none");
            s.css({
                background: "url(" + a.absUrl + "resources/skins/" + a.skin + "/" + e.curIcon + ")",
                left: parseInt((a.width - s.width()) / 2, 10) + "px",
                top: parseInt(a.height - (a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width), 10) + parseInt(((a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width) - s.height()) / 2, 10) - parseInt(a.verticalAdjustment / (a.origWidth / a.width), 10) + "px",
                "margin-top": a.playMovieMarginTop / (a.origWidth / a.width),
                display: display_val
            });
            a.showCircleTimer && (cLeftPos = d("#contentHolderUnit_" + e.current_img_no, f).css("left"), cTopPos = d("#contentHolderUnit_" + e.current_img_no, f).css("top"), d(".mycanvas", f).css({
                left: parseInt(cLeftPos.substr(0, cLeftPos.lastIndexOf("px")), 10) + parseInt(a.circleLeftPositionCorrection / (a.origWidth / a.width), 10) + "px",
                top: parseInt(cTopPos.substr(0, cTopPos.lastIndexOf("px")), 10) + parseInt(a.circleTopPositionCorrection / (a.origWidth / a.width), 10) + "px"
            }));
            e.currentZ_index = 100;
            for (m = 1; m <= Math.floor(a.numberOfVisibleItems / 2); m++) e.currentZ_index--, G(d("#contentHolderUnit_" + (r - m), f), m, a, e), d("#contentHolderUnit_" + (r - m), f).css({
                left: parseInt((a.width - (a.contentHolderUnitOrigWidth + 2 * a.border) / (a.origWidth / a.width)) / 2 - E(m, a, e), 10) + "px",
                top: parseInt(a.height - (a.contentHolderUnitOrigHeight + 2 * a.border) / (a.origWidth / a.width) - a.verticalAdjustment / (a.origWidth / a.width) + m * a.elementsVerticalSpacing / (a.origWidth / a.width), 10) + "px",
                "z-index": e.currentZ_index,
                display: "block"
            });
            v.html(d(u[0]).attr("data-title"));
            a.responsive && J(v, a);
            k.width(C);
            a.showOnInitBottomNav && (k.css("left", parseInt((f.width() - C) / 2, 10) + "px"), n.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - n.width() + "px"), q.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + "px"));
            e.current_img_no = 0;
            e.currentImg = d(u[e.current_img_no]);
            f.mouseenter(function() {
                e.isPrettyPhoto || (e.mouseOverBanner = !0, clearTimeout(e.timeoutID), nowx = (new Date).getTime(), e.timeElapsed += nowx - e.arcInitialTime, a.autoHideNavArrows && a.showNavArrows && (g.css("display", "block"), h.css("display", "block")), a.autoHideBottomNav && a.showBottomNav && (k.css({
                    display: "block",
                    left: parseInt((f.width() - C) / 2, 10) + "px"
                }), n.css({
                    display: "block",
                    left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - n.width() + "px"
                }), q.css({
                    display: "block",
                    left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(B.css("padding-left").substring(0, B.css("padding-left").length - 2), 10) + "px"
                })))
            });
            f.mouseleave(function() {
                if (!e.isPrettyPhoto && (e.mouseOverBanner = !1, nowx = (new Date).getTime(), a.autoHideNavArrows && a.showNavArrows && (g.css("display", "none"), h.css("display", "none")), a.autoHideBottomNav && a.showBottomNav && (k.css("display", "none"), n.css("display", "none"), q.css("display", "none")), 0 < a.autoPlay && 1 < r && !e.fastForwardRunning && !e.isPrettyPhoto)) {
                    clearTimeout(e.timeoutID);
                    e.arcInitialTime = (new Date).getTime();
                    var b = parseInt(1E3 * a.autoPlay - (e.timeElapsed + nowx - e.arcInitialTime), 10);
                    e.timeoutID = setTimeout(function() {
                        A(1, a, e, z, u, f, r, s, v)
                    }, b)
                }
            });
            d.magic_carousel.continueAutoplay = function(a) {
                e.isPrettyPhoto = !1;
                f.mouseleave()
            };
            x = d(".contentHolderUnit", f);
            x.mouseover(function() {
                d(this).attr("rel") == e.current_img_no && s.css("display", "block");
                d(this).css({
                    "border-color": a.borderColorON,
                    "border-style": "none"
                })
            });
            x.mouseout(function() {
                d(this).attr("rel") == e.current_img_no && s.css("display", "none");
                d(this).css({
                    "border-color": a.borderColorOFF
                })
            });
            x.click(function() {
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = d(this).attr("rel");
                    b != e.current_img_no ? (d(z[e.current_img_no]).removeClass("bottomNavButtonON"), K(parseInt(b, 10), a, e, z, u, f, r, s, v)) : L(e, a, u)
                }
            });
            s.mouseover(function() {
                s.css("display", "block")
            });
            s.click(function() {
                L(e, a, u)
            });
            g.mousedown(function() {
                D = !0;
                e.slideIsRunning || e.fastForwardRunning || (e.isPrettyPhoto = !1, clearTimeout(e.timeoutID), A(-1, a, e, z, u, f, r, s, v))
            });
            g.mouseup(function() {
                D = !1
            });
            h.mousedown(function() {
                D = !0;
                e.slideIsRunning || e.fastForwardRunning || (e.isPrettyPhoto = !1, clearTimeout(e.timeoutID), A(1, a, e, z, u, f, r, s, v))
            });
            h.mouseup(function() {
                D = !1
            });
            var z = d(".bottomNavButtonOFF", f);
            z.mousedown(function() {
                D = !0;
                if (!e.slideIsRunning && !e.fastForwardRunning) {
                    var b = d(this).attr("rel");
                    b != e.current_img_no && (e.isPrettyPhoto = !1, d(z[e.current_img_no]).removeClass("bottomNavButtonON"), a.showPreviewThumbs && t.remove(), K(parseInt(b, 10), a, e, z, u, f, r, s, v))
                }
            });
            z.mouseup(function() {
                D = !1
            });
            z.mouseenter(function() {
                var b = d(this),
                    c = b.attr("rel");
                a.showPreviewThumbs && (t = d('<div class="bottomOverThumb"></div>'), b.append(t), c = d(u[c]).attr("data-bottom-thumb"), t.html('<img src="' + c + '">'));
                b.addClass("bottomNavButtonON")
            });
            z.mouseleave(function() {
                var b = d(this),
                    c = b.attr("rel");
                a.showPreviewThumbs && t.remove();
                e.current_img_no != c && b.removeClass("bottomNavButtonON")
            });
            a.enableTouchScreen && (c = Math.floor(1E5 * Math.random()), f.wrap('<div id="carouselParent_' + c + '" style="position:relative;" />'), d("#carouselParent_" + c).width(a.width + 1), d("#carouselParent_" + c).height(a.height), f.css({
                cursor: "url(" + a.absUrl + "resources/resources/skins/hand.cur),url(" + a.absUrl + "resources/resources/skins/hand.cur),move",
                left: "0px",
                position: "absolute"
            }), rightVal = parseInt(h.css("right").substring(0, h.css("right").length - 2), 10), f.mousedown(function() {
                rightVal = parseInt(h.css("right").substring(0, h.css("right").length - 2), 10);
                0 > rightVal && !D && (h.css({
                    visibility: "hidden",
                    right: "0"
                }), g.css("visibility", "hidden"))
            }), f.mouseup(function() {
                D = !1;
                0 > rightVal && (h.css({
                    right: rightVal + "px",
                    visibility: "visible"
                }), g.css("visibility", "visible"))
            }), f.draggable({
                axis: "x",
                containment: "parent",
                distance: 10,
                start: function(a, b) {
                    origLeft = d(this).css("left")
                },
                stop: function(b, c) {
                    e.effectIsRunning || (finalLeft = d(this).css("left"), direction = 1, origLeft < finalLeft && (direction = -1), A(direction, a, e, z, u, f, r, s, v));
                    0 > rightVal && (h.css({
                        right: rightVal + "px",
                        visibility: "visible"
                    }), g.css("visibility", "visible"));
                    d(this).css("left", "0px")
                }
            }));
            var I = !1;
            d(window).resize(function() {
                var c = String(navigator.userAgent).toLowerCase();
                if (!e.isPrettyPhoto || "undefined" == String(d(u[e.current_img_no]).attr("data-video-selfhosted")) || -1 != c.indexOf("android") || -1 != c.indexOf("ipad") || -1 != c.indexOf("iphone") || -1 != c.indexOf("ipod") || -1 != c.indexOf("webos")) {
                    var h = M();
                    doResizeNow = !0; - 1 != h && 9 == h && 0 == e.windowWidth && (doResizeNow = !1);
                    e.windowWidth == d(window).width() ? (doResizeNow = !1, a.windowCurOrientation == window.orientation || -1 == c.indexOf("android") && -1 == c.indexOf("ipad") && -1 == c.indexOf("iphone") && -1 == c.indexOf("ipod") && -1 == c.indexOf("webos") || (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : e.windowWidth = d(window).width();
                    a.responsive && doResizeNow ? (!1 !== I && clearTimeout(I), e.isPrettyPhoto && d.prettyPhoto.close(), I = setTimeout(function() {
                        N(e, a, r, u, b, w, f, g, k, n, q, B, z, s, v, p, x)
                    }, 300)) : doResizeNow && e.isPrettyPhoto && d.prettyPhoto.close()
                }
            });
            d(z[e.current_img_no]).addClass("bottomNavButtonON");
            c = f.find("img:first");
            c[0].complete ? (d(".myloader", f).css("display", "none"), 0 < a.autoPlay && 1 < r && (a.showCircleTimer && (e.arcInitialTime = (new Date).getTime(), e.timeElapsed = 0, e.intervalID = setInterval(function() {
                H(e, a)
            }, 125)), e.timeoutID = setTimeout(function() {
                A(1, a, e, z, u, f, r, s, v)
            }, 1E3 * a.autoPlay))) : c.load(function() {
                d(".myloader", f).css("display", "none");
                0 < a.autoPlay && 1 < r && (a.showCircleTimer && (e.arcInitialTime = (new Date).getTime(), e.timeElapsed = 0, e.intervalID = setInterval(function() {
                    H(e, a)
                }, 125)), e.timeoutID = setTimeout(function() {
                    A(1, a, e, z, u, f, r, s, v)
                }, 1E3 * a.autoPlay))
            })
        })
    };
    d.fn.magic_carousel.defaults = {
        skin: "white",
        width: 960,
        height: 384,
        width100Proc: !1,
        height100Proc: !1,
        autoPlay: 4,
        numberOfVisibleItems: 3,
        elementsHorizontalSpacing: 120,
        elementsVerticalSpacing: 20,
        verticalAdjustment: 0,
        animationTime: 0.1,
        easing: "easeOutQuad",
        resizeImages: !0,
        target: "_blank",
        showElementTitle: !0,
        showAllControllers: !0,
        showNavArrows: !0,
        showOnInitNavArrows: !0,
        autoHideNavArrows: !0,
        showBottomNav: !0,
        showOnInitBottomNav: !0,
        autoHideBottomNav: !0,
        showPreviewThumbs: !0,
        nextPrevMarginTop: 0,
        playMovieMarginTop: 0,
        enableTouchScreen: !0,
        absUrl: "",
        titleColor: "#000000",
        imageWidth: 452,
        imageHeight: 302,
        border: 0,
        borderColorOFF: "transparent",
        borderColorON: "#FF0000",
        showCircleTimer: !0,
        showCircleTimerIE8IE7: !1,
        circleRadius: 10,
        circleLineWidth: 4,
        circleColor: "#FF0000",
        circleAlpha: 100,
        behindCircleColor: "#000000",
        behindCircleAlpha: 50,
        circleLeftPositionCorrection: 3,
        circleTopPositionCorrection: 3,
        responsive: !1,
        responsiveRelativeToBrowser: !0,
        bottomNavMarginBottom: 0,
        origWidth: 0,
        origHeight: 0,
        contentHolderUnitOrigWidth: 0,
        contentHolderUnitOrigHeight: 0,
        elementOrigTop: 0,
        origthumbsHolder_MarginTop: 0,
        windowOrientationScreenSize0: 0,
        windowOrientationScreenSize90: 0,
        windowOrientationScreenSize_90: 0,
        windowCurOrientation: 0
    }
})(jQuery);