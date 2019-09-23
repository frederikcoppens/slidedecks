
  /**
   * Draws a rounded rectangle using the current state of the canvas.
   * If you omit the last three params, it will draw a rectangle
   * outline with a 5 pixel border radius
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} x The top left x coordinate
   * @param {Number} y The top left y coordinate
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   * @param {Number} [radius = 5] The corner radius; It can also be an object
   *                 to specify different radii for corners
   * @param {Number} [radius.tl = 0] Top left
   * @param {Number} [radius.tr = 0] Top right
   * @param {Number} [radius.br = 0] Bottom right
   * @param {Number} [radius.bl = 0] Bottom left
   * @param {Boolean} [fill = false] Whether to fill the rectangle.
   * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
   */
  function roundRect(ctx, x, y, width, height, text1, text2 , radius, fill, stroke, textcolor) {
    ctx.save();	// save the context so we don't mess up others
    if (typeof stroke == 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
    ctx.font = "20px Arial";
    ctx.textAlign="center";
    ctx.fillStyle = textcolor;
    if (text1) {
      var movetomiddle = 0
      if (text2 === ""){
        movetomiddle = 10
      }
      ctx.fillText(text1, x+width/2, y+height/2-5+movetomiddle);
    }
    if (text2) {
      ctx.fillText(text2, x+width/2, y+height/2+20);
    }
    ctx.restore();	// restore context to what it was on entry
  }

  function drawHead (ctx, x0, y0, x1, y1, x2, y2, style, color, width) {
    if (typeof(x0) == 'string') {
      x0 = parseInt(x0);
    }
    if (typeof(y0) == 'string') {
      y0 = parseInt(y0);
    }
    if (typeof(x1) == 'string') {
      x1 = parseInt(x1);
    }
    if (typeof(y1) == 'string') {
      y1 = parseInt(y1);
    }
    if (typeof(x2) == 'string') {
      x2 = parseInt(x2);
    }
    if (typeof(y2) == 'string') {
      y2 = parseInt(y2);
    }

    var radius = 3,
        twoPI = 2 * Math.PI;

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);

    switch (style) {
      case 0:
        var backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
        ctx.arcTo(x1, y1, x0, y0, .55 * backdist);
        ctx.fill();
        break;
      case 1:
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x0, y0);
        ctx.fill();
        break;
      case 2:
        ctx.stroke();
        break;
      case 3:
        var cpx = (x0 + x1 + x2) / 3;
        var cpy = (y0 + y1 + y2) / 3;
        ctx.quadraticCurveTo(cpx, cpy, x0, y0);
        ctx.fill();
        break;
      case 4:
        var cp1x, cp1y, cp2x, cp2y, backdist;
        var shiftamt = 5;
        if (x2 == x0) {
          backdist = y2 - y0;
          cp1x = (x1 + x0) / 2;
          cp2x = (x1 + x0) / 2;
          cp1y = y1 + backdist / shiftamt;
          cp2y = y1 - backdist / shiftamt;
        } else {
          backdist = Math.sqrt(((x2 - x0) * (x2 - x0)) + ((y2 - y0) * (y2 - y0)));
          var xback = (x0 + x2) / 2;
          var yback = (y0 + y2) / 2;
          var xmid = (xback + x1) / 2;
          var ymid = (yback + y1) / 2;
          var m = (y2 - y0) / (x2 - x0);
          var dx = (backdist / (2 * Math.sqrt(m * m + 1))) / shiftamt;
          var dy = m * dx;
          cp1x = xmid - dx;
          cp1y = ymid - dy;
          cp2x = xmid + dx;
          cp2y = ymid + dy;
        }
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x0, y0);
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  // draw arrow
  function drawArrow(ctx, x1, y1, x2, y2, style, which, angle, d, color, width) {
    if (typeof(x1) == 'string') {
      x1 = parseInt(x1);
    }
    if (typeof(y1) == 'string') {
      y1 = parseInt(y1);
    }
    if (typeof(x2) == 'string') {
      x2 = parseInt(x2);
    }
    if (typeof(y2) == 'string') {
      y2 = parseInt(y2);
    }
    style = typeof(style) != 'undefined' ? style : 3;
    which = typeof(which) != 'undefined' ? which : 1;
    angle = typeof(angle) != 'undefined' ? angle : Math.PI / 9;
    d = typeof(d) != 'undefined' ? d : 10;
    color = typeof(color) != 'undefined' ? color : '#000';
    width = typeof(width) != 'undefined' ? width : 1;
    var toDrawHead = typeof(style) != 'function' ? drawHead : style;
    var dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    var ratio = (dist - d / 3) / dist;
    var tox, toy, fromx, fromy;
    if (which & 1) {
      tox = Math.round(x1 + (x2 - x1) * ratio);
      toy = Math.round(y1 + (y2 - y1) * ratio);
    } else {
      tox = x2;
      toy = y2;
    }

    if (which & 2) {
      fromx = x1 + (x2 - x1) * (1 - ratio);
      fromy = y1 + (y2 - y1) * (1 - ratio);
    } else {
      fromx = x1;
      fromy = y1;
    }

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.stroke();

    var lineangle = Math.atan2(y2 - y1, x2 - x1);
    var h = Math.abs(d / Math.cos(angle));
    if (which & 1) {
      var angle1 = lineangle + Math.PI + angle;
      var topx = x2 + Math.cos(angle1) * h;
      var topy = y2 + Math.sin(angle1) * h;
      var angle2 = lineangle + Math.PI - angle;
      var botx = x2 + Math.cos(angle2) * h;
      var boty = y2 + Math.sin(angle2) * h;
      toDrawHead(ctx, topx, topy, x2, y2, botx, boty, style, color, width);
    }

    if (which & 2) {
      var angle1 = lineangle + angle;
      var topx = x1 + Math.cos(angle1) * h;
      var topy = y1 + Math.sin(angle1) * h;
      var angle2 = lineangle - angle;
      var botx = x1 + Math.cos(angle2) * h;
      var boty = y1 + Math.sin(angle2) * h;
      toDrawHead(ctx, topx, topy, x1, y1, botx, boty, style, color, width);
    }
  }

  // draw arced arrow
  function drawArcedArrow(ctx, x, y, r, startangle, endangle, anticlockwise, style, which, angle, d, color, width) {
    style = typeof(style) != 'undefined' ? style : 3;
    which = typeof(which) != 'undefined' ? which : 1;
    angle = typeof(angle) != 'undefined' ? angle : Math.PI / 8;
    d = typeof (d) != 'undefined' ? d : 10;
    color = typeof(color) != 'undefined' ? color : '#000';
    width = typeof(width) != 'undefined' ? width : 1;

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r, startangle, endangle, anticlockwise);
    ctx.stroke();
    var sx, sy, lineangle, destx, desty;
    ctx.strokeStyle = 'rgba(0,0,0,0)';
    if (which & 1) {
      sx = Math.cos(startangle) * r + x;
      sy = Math.sin(startangle) * r + y;
      lineangle = Math.atan2(x - sx, sy - y);
      if (anticlockwise) {
        destx = sx + 10 * Math.cos(lineangle);
        desty = sy + 10 * Math.sin(lineangle);
      } else {
        destx = sx - 10 * Math.cos(lineangle);
        desty = sy - 10 * Math.sin(lineangle);
      }
      drawArrow(ctx, sx, sy, destx, desty, style, 2, angle, d, color, width);
    }

    if (which & 2) {
      sx = Math.cos(endangle) * r + x;
      sy = Math.sin(endangle) * r + y;
      lineangle = Math.atan2(x - sx, sy - y);
      if (anticlockwise) {
        destx = sx - 10 * Math.cos(lineangle);
        desty = sy - 10 * Math.sin(lineangle);
      } else {
        destx = sx + 10 * Math.cos(lineangle);
        desty = sy + 10 * Math.sin(lineangle);
      }
      drawArrow(ctx, sx, sy, destx, desty, style, 2, angle, d, color, width);
    }
    ctx.restore();
  }

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  c.parent('infra')
  
  var elixir_blue = "#005472"
  var elixir_orange = "#f47d20"
  var elixir_grey = "#4d4848"

  ctx.fillStyle = elixir_blue;
  drawArrow(ctx, 400, 155, 400, 195, 1, 2, Math.PI / 9, 20, elixir_grey, 3);
  roundRect(ctx,300,80,200,70, "DSW","DMPonline",10, true, false, "white");

  ctx.fillStyle = elixir_orange;
  roundRect(ctx,300,200,200,70, "Data Management","FAIRDOM",10, true, false, "white");
  // horizontal
  drawArrow(ctx, 510, 235, 590, 235, 1, 2, Math.PI / 9, 20, elixir_grey, 3);

  ctx.strokeStyle = elixir_grey;
  roundRect(ctx,600,80,200,70, "Result","",10, false, true, elixir_grey);
  drawArrow(ctx, 700, 155, 700, 195, 1, 2, Math.PI / 9, 20, elixir_grey, 3);
  drawArrow(ctx, 510, 190, 590, 140, 1, 2, Math.PI / 9, 20, elixir_grey, 3);

  ctx.fillStyle = elixir_grey;
  roundRect(ctx,600,200,200,70, "Data Analysis","Galaxy - Containers",10, true, false, "white");

  ctx.fillStyle = elixir_blue;
  drawArrow(ctx, 700, 275, 700, 315, 1, 2, Math.PI / 9, 20, elixir_grey, 3);
  roundRect(ctx,600,320,200,70, "Short term","'analysis' storage",10, true, false, "white");

  ctx.fillStyle = elixir_grey;
  drawArrow(ctx, 700, 395, 700, 435, 1, 2, Math.PI / 9, 20, elixir_grey, 3);
  roundRect(ctx,420,440,380,70, "Long term storage","",10, true, false, "white");
  drawArrow(ctx, 450, 275, 450, 435, 1, 1, Math.PI / 9, 20, elixir_grey, 3);

  ctx.fillStyle = elixir_orange;
  roundRect(ctx,180,440,200,70, "Public Repositories","",10, true, false, "white");
  drawArrow(ctx, 320, 275, 320, 435, 1, 1, Math.PI / 9, 20, elixir_grey, 3);
  drawArrow(ctx, 350, 275, 350, 435, 1, 2, Math.PI / 9, 20, elixir_grey, 3);

  roundRect(ctx,100,165,100,70, "Raw data","",10, false, true, elixir_grey);
  roundRect(ctx,100,245,100,70, "Metadata","",10, false, true, elixir_grey);
  drawArrow(ctx, 210, 225, 290, 225, 1, 1, Math.PI / 9, 20, elixir_grey, 3);
  drawArrow(ctx, 210, 255, 290, 255, 1, 1, Math.PI / 9, 20, elixir_grey, 3);

  var image = new Image();
  image.onload = function() {ctx.drawImage(image, 820, 210, 60, 43);}; // draw when image has loaded
  image.src = 'images/ELIXIR_logo_white_background.png';

  var image = new Image();
  image.onload = function() {ctx.drawImage(image, 370, 290, 60, 43);}; // draw when image has loaded
  image.src = 'images/ELIXIR_logo_white_background.png';

  var imageT = new Image();
  imageT.onload = function() {ctx.drawImage(imageT, 45, 175, 45, 54);}; // draw when image has loaded
  imageT.src = 'images/ELIXIR_icons/training.png';

  var imageT = new Image();
  imageT.onload = function() {ctx.drawImage(imageT, 45, 255, 45, 54);}; // draw when image has loaded
  imageT.src = 'images/ELIXIR_icons/training.png';

  var imageT = new Image();
  imageT.onload = function() {ctx.drawImage(imageT, 820, 85, 45, 54);}; // draw when image has loaded
  imageT.src = 'images/ELIXIR_icons/training.png';

  var imageF = new Image();
  imageF.onload = function() {ctx.drawImage(imageF, 280, 550, 239, 47);}; // draw when image has loaded
  imageF.src = 'images/fair.png';

  ctx.font = "40px Arial";
  ctx.textAlign="center";
  ctx.fillStyle = elixir_grey;
  ctx.fillText("EOSC", 400, 640);

  drawArrow(ctx, 320, 515, 320, 545, 1, 1, Math.PI / 9, 20, elixir_grey, 3);
  drawArrow(ctx, 480, 515, 480, 545, 1, 1, Math.PI / 9, 20, elixir_grey, 3);
