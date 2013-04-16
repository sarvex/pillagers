// extra folders to look for source files
// you can use #depend statements to include any source files in these folders.
exports.libs = [];

// the main source file which depends on the rest of your source files.
exports.main = 'src/main';

var v = require("chem").Vec2d;
exports.spritesheet = {
  defaults: {
    delay: 0.05,
    loop: false,
    // possible values: a Vec2d instance, or one of:
    // ["center", "topleft", "topright", "bottomleft", "bottomright",
    //  "top", "right", "bottom", "left"]
    anchor: "center"
  },
  animations: {
    boom: {
      // frames can be a list of filenames or a string to match the beginning
      // of files with. if you leave it out entirely, it defaults to the
      // animation name.
      frames: "explosion"
    },
    ship_still: {
      frames: ["ship/01.png"],
    },
    ship_accel: {
      frames: [
        "ship/01.png",
        "ship/02.png",
        "ship/03.png",
        "ship/04.png",
      ],
    },
    ship_decel: {
      frames: [
        "ship/04.png",
        "ship/03.png",
        "ship/02.png",
        "ship/01.png",
      ],
    },
    bullet: {}
  }
};