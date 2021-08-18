const fs = require('fs');
const freetype = require('..');

const face = freetype.NewMemoryFace(fs.readFileSync(__dirname + '/OpenSans-Bold.ttf'));

const charCodes = 'T'.split('').map(c => c.charCodeAt(0));

console.log(freetype.GlyphFormat);

// Give it some size
face.setPixelSizes(0, 12);
// Rotate 90CCW
face.setTransform(
  [ 0, -1 << 16, 1 << 16, 0 ],
  undefined
);

charCodes.forEach((ch) => {
    const glyph = face.decomposeGlyph(ch, (x, y) => {console.log(x)}, (x, y) => {console.log(x)}, () => {}, () => {}, {
      render: false,
      noBitmap: true,
      //loadTarget: freetype.RenderMode.NORMAL
    });
  
    console.log(glyph);
  });