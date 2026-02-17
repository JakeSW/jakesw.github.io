// ============================================================
// Bike Preset Database
// ============================================================
// To add geometry data, replace null values with actual numbers.
// stack (mm), reach (mm), sta = seat tube angle (°), hta = head tube angle (°)
// Example:  "54": { stack: 537, reach: 389, sta: 73.5, hta: 73.0 }

const BIKE_DATABASE = {
  "Canyon": {
    "Aeroad CF SLX": {
      year: 2026,
      sizes: {
        "2XS": { stack: 498, reach: 372, sta: 73.5, hta: 70.0 },
        "XS":  { stack: 520, reach: 378, sta: 73.5, hta: 71.2 },
        "S":   { stack: 539, reach: 390, sta: 73.5, hta: 72.8 },
        "M":   { stack: 560, reach: 393, sta: 73.5, hta: 73.25 },
        "L":   { stack: 580, reach: 401, sta: 73.5, hta: 73.3 },
        "XL":  { stack: 606, reach: 419, sta: 73.5, hta: 73.5 },
        "2XL": { stack: 624, reach: 429, sta: 73.5, hta: 73.8 },
      }
    },
    "Ultimate CF SLX": {
      year: 2026,
      sizes: {
        "2XS": { stack: 498, reach: 372, sta: 73.5, hta: 70.0 },
        "XS":  { stack: 520, reach: 378, sta: 73.5, hta: 71.2 },
        "S":   { stack: 539, reach: 390, sta: 73.5, hta: 72.8 },
        "M":   { stack: 560, reach: 393, sta: 73.5, hta: 73.3 },
        "L":   { stack: 580, reach: 401, sta: 73.5, hta: 73.3 },
        "XL":  { stack: 606, reach: 419, sta: 73.5, hta: 73.5 },
        "2XL": { stack: 624, reach: 429, sta: 73.5, hta: 73.8 },
      }
    },
    "Endurace CF": {
      year: 2026,
      sizes: {
        "2XS": { stack: 529, reach: 354, sta: 73.5, hta: 71.5 },
        "XS":  { stack: 548, reach: 370, sta: 73.5, hta: 71.0 },
        "S":   { stack: 568, reach: 375, sta: 73.5, hta: 72.0 },
        "M":   { stack: 590, reach: 378, sta: 73.5, hta: 73.0 },
        "L":   { stack: 611, reach: 387, sta: 73.5, hta: 73.0 },
        "XL":  { stack: 637, reach: 405, sta: 73.5, hta: 73.3 },
        "2XL": { stack: 656, reach: 414, sta: 73.5, hta: 73.3 },
      }
    }
  },
  "Cervélo": {
    "S5": {
      year: 2026,
      sizes: {
        "48": { stack: 496, reach: 367, sta: 73.0, hta: 71.0 },
        "51": { stack: 519, reach: 376, sta: 73.0, hta: 72.0 },
        "54": { stack: 542, reach: 384, sta: 73.0, hta: 73.0 },
        "56": { stack: 565, reach: 392, sta: 73.0, hta: 73.5 },
        "58": { stack: 588, reach: 401, sta: 73.0, hta: 73.5 },
        "61": { stack: 608, reach: 409, sta: 73.0, hta: 73.5 },
      }
    },
    "Soloist": {
      year: 2026,
      sizes: {
        "48": { stack: 491, reach: 363, sta: 73.0, hta: 71.0 },
        "51": { stack: 515, reach: 374, sta: 73.0, hta: 72.0 },
        "54": { stack: 540, reach: 383, sta: 73.0, hta: 73.0 },
        "56": { stack: 565, reach: 392, sta: 73.0, hta: 73.0 },
        "58": { stack: 590, reach: 401, sta: 73.0, hta: 73.0 },
        "61": { stack: 615, reach: 410, sta: 73.0, hta: 73.0 },
      }
    },
    "R5": {
      year: 2026,
      sizes: {
        "48": { stack: 496.1, reach: 368.7, sta: 74.5, hta: 71.0 },
        "51": { stack: 520.2, reach: 376.5, sta: 74.0, hta: 72.0 },
        "54": { stack: 544.6, reach: 383.3, sta: 73.5, hta: 73.0 },
        "56": { stack: 567.5, reach: 391.1, sta: 73.0, hta: 73.0 },
        "58": { stack: 590.7, reach: 400.3, sta: 73.0, hta: 73.0 },
        "61": { stack: 610.7, reach: 408.3, sta: 73.0, hta: 73.0 },
      }
    },
    "Aspero 5": {
      year: 2026,
      sizes: {
        "48": { stack: 500, reach: 369, sta: 74.1, hta: 70.6 },
        "51": { stack: 525, reach: 377, sta: 73.6, hta: 71.1 },
        "54": { stack: 550, reach: 386, sta: 73.1, hta: 71.6 },
        "56": { stack: 575, reach: 395, sta: 72.6, hta: 71.6 },
        "58": { stack: 600, reach: 404, sta: 72.6, hta: 71.6 },
        "61": { stack: 625, reach: 413, sta: 72.6, hta: 71.6 },
      }
    }
  },
  "Trek": {
    "Madone": {
      year: 2026,
      sizes: {
        "XS":  { stack: 507, reach: 370, sta: 73.8, hta: 71.6 },
        "S":   { stack: 530, reach: 378, sta: 73.8, hta: 72.2 },
        "M":   { stack: 546, reach: 384, sta: 73.6, hta: 72.9 },
        "M/L": { stack: 562, reach: 389, sta: 73.4, hta: 73.5 },
        "L":   { stack: 582, reach: 394, sta: 73.4, hta: 73.8 },
        "XL":  { stack: 610, reach: 402, sta: 73.4, hta: 73.9 },
      }
    },
    "Domane": {
      year: 2026,
      sizes: {
        "47": { stack: 527, reach: 364, sta: 74.6, hta: 71.0 },
        "50": { stack: 546, reach: 368, sta: 74.6, hta: 71.1 },
        "52": { stack: 561, reach: 371, sta: 74.2, hta: 71.3 },
        "54": { stack: 575, reach: 374, sta: 73.7, hta: 71.3 },
        "56": { stack: 591, reach: 377, sta: 73.3, hta: 71.9 },
        "58": { stack: 611, reach: 380, sta: 73.0, hta: 72.0 },
        "60": { stack: 632, reach: 383, sta: 72.8, hta: 72.1 },
        "62": { stack: 656, reach: 386, sta: 72.5, hta: 72.1 },
      }
    }
  },
  "Colnago": {
    "V5Rs": {
      year: 2026,
      sizes: {
        "420": { stack: 509, reach: 371, sta: 75.5, hta: 70.6 },
        "455": { stack: 523, reach: 377, sta: 75.3, hta: 71.5 },
        "485": { stack: 539, reach: 384, sta: 74.8, hta: 72.3 },
        "510": { stack: 557, reach: 390, sta: 74.5, hta: 72.5 },
        "530": { stack: 575, reach: 397, sta: 73.8, hta: 73.0 },
        "550": { stack: 593, reach: 404, sta: 73.5, hta: 73.0 },
        "570": { stack: 612, reach: 411, sta: 73.3, hta: 73.5 },
      }
    },
    "Y1Rs": {
      year: 2026,
      sizes: {
        "XS": { stack: 495, reach: 368, sta: 75.0, hta: 70.8 },
        "S":  { stack: 520, reach: 377, sta: 74.5, hta: 71.9 },
        "M":  { stack: 540, reach: 386, sta: 74.0, hta: 73.0 },
        "L":  { stack: 565, reach: 395, sta: 73.7, hta: 73.5 },
        "XL": { stack: 590, reach: 404, sta: 73.0, hta: 73.5 },
      }
    },
    "V3": {
      year: 2026,
      sizes: {
        "42s": { stack: 514, reach: 368, sta: 75.5, hta: 70.6 },
        "45s": { stack: 520, reach: 375, sta: 75.0, hta: 71.0 },
        "48s": { stack: 525, reach: 380, sta: 74.5, hta: 71.5 },
        "50s": { stack: 542, reach: 382, sta: 74.0, hta: 71.6 },
        "52s": { stack: 560, reach: 384, sta: 73.57, hta: 71.9 },
        "54s": { stack: 578, reach: 390, sta: 73.1, hta: 72.5 },
        "56s": { stack: 586, reach: 400, sta: 73.0, hta: 72.9 },
        "58s": { stack: 604, reach: 408, sta: 73.0, hta: 73.1 },
      }
    }
  },
  "Giant": {
    "Propel Advanced SL": {
      year: 2026,
      sizes: {
        "XS": { stack: 517, reach: 376, sta: 74.5, hta: 71.0 },
        "S":  { stack: 528, reach: 383, sta: 74.0, hta: 72.3 },
        "M":  { stack: 545, reach: 388, sta: 73.5, hta: 73.0 },
        "ML": { stack: 562, reach: 393, sta: 73.0, hta: 73.0 },
        "L":  { stack: 581, reach: 402, sta: 73.0, hta: 73.0 },
        "XL": { stack: 596, reach: 412, sta: 72.5, hta: 73.0 },
      }
    },
    "TCR Advanced SL": {
      year: 2026,
      sizes: {
        "XS": { stack: 517, reach: 376, sta: 74.5, hta: 71.0 },
        "S":  { stack: 528, reach: 383, sta: 74.0, hta: 72.3 },
        "M":  { stack: 545, reach: 388, sta: 73.5, hta: 73.5 },
        "ML": { stack: 562, reach: 393, sta: 73.0, hta: 73.0 },
        "L":  { stack: 581, reach: 402, sta: 73.0, hta: 73.0 },
        "XL": { stack: 596, reach: 412, sta: 72.5, hta: 72.5 },
      }
    },
    "Defy Advanced": {
      year: 2026,
      sizes: {
        "XS": { stack: 527, reach: 369, sta: 74.5, hta: 70.5 },
        "S":  { stack: 541, reach: 375, sta: 74.0, hta: 71.8 },
        "M":  { stack: 558, reach: 380, sta: 73.5, hta: 72.5 },
        "ML": { stack: 577, reach: 384, sta: 73.0, hta: 72.5 },
        "L":  { stack: 596, reach: 393, sta: 73.0, hta: 72.5 },
        "XL": { stack: 615, reach: 402, sta: 73.0, hta: 72.5 },
      }
    }
  },
  "Specialized": {
    "Tarmac SL8": {
      year: 2026,
      sizes: {
        "44": { stack: 501, reach: 366, sta: 75.5, hta: 70.5 },
        "49": { stack: 514, reach: 375, sta: 75.5, hta: 71.75 },
        "52": { stack: 527, reach: 380, sta: 74.0, hta: 72.5 },
        "54": { stack: 544, reach: 384, sta: 74.0, hta: 73.0 },
        "56": { stack: 565, reach: 395, sta: 73.5, hta: 73.5 },
        "58": { stack: 591, reach: 402, sta: 73.5, hta: 73.5 },
        "61": { stack: 612, reach: 408, sta: 73.0, hta: 74.0 },
      }
    },
    "Venge": {
      year: 2019,
      sizes: {
        "49": { stack: 504, reach: 378, sta: 75.5, hta: 71.75 },
        "52": { stack: 517, reach: 383, sta: 74.0, hta: 72.5 },
        "54": { stack: 534, reach: 387, sta: 74.0, hta: 73.0 },
        "56": { stack: 555, reach: 398, sta: 73.5, hta: 73.5 },
        "58": { stack: 581, reach: 405, sta: 73.5, hta: 73.5 },
        "61": { stack: 602, reach: 411, sta: 73.0, hta: 74.0 },
      }
    },
    "Roubaix": {
      year: 2026,
      sizes: {
        "44": { stack: 543, reach: 353, sta: 75.0, hta: 69.3 },
        "49": { stack: 549, reach: 363, sta: 74.0, hta: 70.8 },
        "52": { stack: 566, reach: 370, sta: 74.0, hta: 71.5 },
        "54": { stack: 585, reach: 381, sta: 74.0, hta: 72.3 },
        "56": { stack: 605, reach: 389, sta: 73.5, hta: 73.0 },
        "58": { stack: 630, reach: 397, sta: 73.5, hta: 73.0 },
        "61": { stack: 665, reach: 403, sta: 73.5, hta: 73.5 },
      }
    },
    "Allez Sprint": {
      year: 2026,
      sizes: {
        "49": { stack: 508, reach: 378, sta: 75.5, hta: 71.75 },
        "52": { stack: 520, reach: 383, sta: 74.0, hta: 72.5 },
        "54": { stack: 537, reach: 387, sta: 74.0, hta: 73.0 },
        "56": { stack: 558, reach: 398, sta: 73.5, hta: 73.5 },
        "58": { stack: 584, reach: 405, sta: 73.5, hta: 73.5 },
        "61": { stack: 605, reach: 411, sta: 73.0, hta: 74.0 },
      }
    }
  },
  "Pinarello": {
    "Dogma F": {
      year: 2026,
      sizes: {
        "43": { stack: 502, reach: 351.5, sta: 74.4, hta: 69.5 },
        "46.5": { stack: 517.3, reach: 365.4, sta: 74.4, hta: 70.5 },
        "50": { stack: 525.2, reach: 372.2, sta: 74.0, hta: 71.4 },
        "51.5": { stack: 532.1, reach: 378.2, sta: 73.7, hta: 72.0 },
        "53": { stack: 542.4, reach: 383.3, sta: 73.7, hta: 72.5 },
        "54": { stack: 551, reach: 385.3, sta: 73.4, hta: 72.8 },
        "55": { stack: 561.5, reach: 389.2, sta: 73.4, hta: 72.8 },
        "56": { stack: 570.1, reach: 390.8, sta: 73.0, hta: 73.2 },
        "57.5": { stack: 584.8, reach: 396.7, sta: 73.0, hta: 73.7 },
        "59.5": { stack: 613.2, reach: 393.4, sta: 72.4, hta: 73.4 },
        "62": { stack: 651.6, reach: 410, sta: 72.0, hta: 73.4 },
      }
    },
    "F Series": {
      year: 2026,
      sizes: {
        "43":   { stack: 502.5, reach: 351.3, sta: 74.4, hta: 69.5 },
        "46.5": { stack: 517.7, reach: 365.2, sta: 74.4, hta: 70.5 },
        "50":   { stack: 525.5, reach: 372.1, sta: 74.0, hta: 71.4 },
        "51.5": { stack: 532.3, reach: 378.1, sta: 73.7, hta: 72.0 },
        "53":   { stack: 542.6, reach: 385.6, sta: 73.7, hta: 72.5 },
        "54.5": { stack: 557.9, reach: 388.3, sta: 73.4, hta: 72.8 },
        "56":   { stack: 570.3, reach: 390.8, sta: 73.0, hta: 73.2 },
        "57.5": { stack: 599.3, reach: 395.4, sta: 73.0, hta: 73.7 },
        "59.5": { stack: 633.5, reach: 400.3, sta: 72.4, hta: 73.4 },
      }
    },
    "Dogma X": {
      year: 2026,
      sizes: {
        "43":   { stack: 524.2, reach: 349.3, sta: 74.4, hta: 70.0 },
        "46.5": { stack: 535.5, reach: 358.1, sta: 74.4, hta: 70.0 },
        "50":   { stack: 542.1, reach: 365.4, sta: 74.0, hta: 70.5 },
        "51.5": { stack: 548.6, reach: 371.7, sta: 73.7, hta: 71.0 },
        "53":   { stack: 559, reach: 379.4, sta: 73.7, hta: 71.5 },
        "54":   { stack: 568.4, reach: 381.2, sta: 73.4, hta: 72.0 },
        "55":   { stack: 578.9, reach: 383, sta: 73.4, hta: 72.0 },
        "56":   { stack: 588.4, reach: 384.6, sta: 73.0, hta: 72.5 },
        "57.5": { stack: 601.7, reach: 390.8, sta: 73.0, hta: 72.8 },
        "59.5": { stack: 632, reach: 395.3, sta: 72.4, hta: 73.0 },
        "62":   { stack: 670.3, reach: 403.8, sta: 72.0, hta: 73.0 },
      }
    }
  },
  "Bianchi": {
    "Oltre RC": {
      year: 2026,
      sizes: {
        "47": { stack: 470, reach: 385, sta: 74.5, hta: 70.5 },
        "50": { stack: 478, reach: 392, sta: 74.5, hta: 71.5 },
        "53": { stack: 504, reach: 393, sta: 74.0, hta: 72.0 },
        "55": { stack: 520, reach: 397, sta: 73.5, hta: 72.5 },
        "57": { stack: 536, reach: 402, sta: 73.5, hta: 73.0 },
        "59": { stack: 555, reach: 406, sta: 73.0, hta: 73.0 },
      }
    },
    "Specialissima": {
      year: 2026,
      sizes: {
        "47": { stack: 486, reach: 379, sta: 74.5, hta: 70.5 },
        "50": { stack: 494, reach: 381, sta: 74.5, hta: 71.5 },
        "53": { stack: 520, reach: 386, sta: 74.0, hta: 72.0 },
        "55": { stack: 536, reach: 391, sta: 73.5, hta: 72.5 },
        "57": { stack: 552, reach: 397, sta: 73.5, hta: 73.0 },
        "59": { stack: 571, reach: 400, sta: 73.0, hta: 73.0 },
      }
    },
    "Infinito": {
      year: 2026,
      sizes: {
        "47": { stack: 521, reach: 371, sta: 74.5, hta: 70.5 },
        "50": { stack: 539, reach: 375, sta: 74.5, hta: 71.5 },
        "53": { stack: 553, reach: 377, sta: 74.0, hta: 71.0 },
        "55": { stack: 569, reach: 381, sta: 73.5, hta: 72.0 },
        "57": { stack: 585, reach: 386, sta: 73.5, hta: 72.5 },
        "59": { stack: 600, reach: 391, sta: 73.0, hta: 72.5 },
        "61": { stack: 614, reach: 392, sta: 72.5, hta: 72.5 },
      }
    }
  },
  "Scott": {
    "Foil RC": {
      year: 2026,
      sizes: {
        "XXS": { stack: 505, reach: 380, sta: 74.5, hta: 70.5 },
        "XS":  { stack: 511, reach: 388, sta: 74.5, hta: 71.0 },
        "S":   { stack: 527, reach: 389, sta: 74.0, hta: 72.0 },
        "M":   { stack: 548, reach: 389, sta: 73.6, hta: 72.5 },
        "L":   { stack: 568, reach: 394.5, sta: 73.3, hta: 73.0 },
        "XL":  { stack: 589, reach: 400, sta: 73.0, hta: 73.3 },
        "XXL": { stack: 606, reach: 409, sta: 72.5, hta: 73.3 },
      }
    },
    "Addict RC": {
      year: 2026,
      sizes: {
        "XXS": { stack: 522, reach: 372, sta: 75.0, hta: 71.3 },
        "XS":  { stack: 534, reach: 378, sta: 75.0, hta: 71.8 },
        "S":   { stack: 557, reach: 382, sta: 74.5, hta: 72.0 },
        "M":   { stack: 578, reach: 386, sta: 74.0, hta: 72.2 },
        "L":   { stack: 599, reach: 389, sta: 73.5, hta: 72.5 },
        "XL":  { stack: 619, reach: 394, sta: 73.1, hta: 73.0 },
        "XXL": { stack: 638, reach: 402, sta: 73.0, hta: 73.0 },
      }
    }
  },
  "BMC": {
    "Teammachine": {
      year: 2026,
      sizes: {
        "47": { stack: 506, reach: 367, sta: 74.0, hta: 71.5 },
        "51": { stack: 530, reach: 377, sta: 74.0, hta: 71.5 },
        "54": { stack: 550, reach: 386, sta: 73.5, hta: 72.3 },
        "56": { stack: 565, reach: 392, sta: 73.5, hta: 72.3 },
        "58": { stack: 584, reach: 401, sta: 73.0, hta: 72.3 },
        "61": { stack: 608, reach: 409, sta: 73.0, hta: 72.3 },
      }
    },
    "Roadmachine": {
      year: 2026,
      sizes: {
        "47": { stack: 525, reach: 370, sta: 74.2, hta: 71.4 },
        "51": { stack: 550, reach: 379, sta: 74.2, hta: 71.4 },
        "54": { stack: 570, reach: 383, sta: 74.2, hta: 72.2 },
        "56": { stack: 595, reach: 388, sta: 74.2, hta: 72.2 },
        "58": { stack: 620, reach: 393, sta: 74.2, hta: 72.2 },
        "61": { stack: 645, reach: 398, sta: 74.2, hta: 72.2 },
      }
    }
  },
  "Factor": {
    "Ostro VAM": {
      year: 2026,
      sizes: {
        "45": { stack: 502, reach: 360, sta: 75.5, hta: 71.1 },
        "49": { stack: 503, reach: 370, sta: 74.5, hta: 71.1 },
        "52": { stack: 523, reach: 376, sta: 74.0, hta: 72.5 },
        "54": { stack: 542, reach: 384, sta: 74.0, hta: 72.5 },
        "56": { stack: 565, reach: 392, sta: 73.5, hta: 73.3 },
        "58": { stack: 587, reach: 401, sta: 73.5, hta: 73.3 },
        "61": { stack: 611, reach: 409, sta: 73.5, hta: 73.3 },
      }
    },
    "ONE": {
      year: 2026,
      sizes: {
        "47": { stack: 503, reach: 390, sta: 76.5, hta: 72.5 },
        "52": { stack: 523, reach: 396, sta: 76.0, hta: 73.3 },
        "54": { stack: 542, reach: 404, sta: 76.0, hta: 73.3 },
        "56": { stack: 565, reach: 412, sta: 76.0, hta: 73.3 },
        "58": { stack: 587, reach: 421, sta: 75.5, hta: 73.3 },
      }
    },
    "Monza": {
      year: 2026,
      sizes: {
        "45": { stack: 502, reach: 360, sta: 75.5, hta: 71.1 },
        "49": { stack: 514, reach: 367, sta: 74.5, hta: 71.7 },
        "52": { stack: 535, reach: 373, sta: 74.0, hta: 72.5 },
        "54": { stack: 552, reach: 381, sta: 74.0, hta: 72.5 },
        "56": { stack: 574, reach: 389, sta: 73.5, hta: 73.3 },
        "58": { stack: 597, reach: 401, sta: 73.5, hta: 73.3 },
        "61": { stack: 611, reach: 410, sta: 73.5, hta: 73.3 },
      }
    }
  },
  "Cannondale": {
    "SuperSix EVO": {
      year: 2025,
      sizes: {
        "48": { stack: 520, reach: 374, sta: 74.3, hta: 71.2 },
        "51": { stack: 535, reach: 378, sta: 74.3, hta: 71.2 },
        "54": { stack: 555, reach: 384, sta: 73.7, hta: 71.2 },
        "56": { stack: 575, reach: 389, sta: 73.3, hta: 73.0 },
        "58": { stack: 595, reach: 395, sta: 72.9, hta: 73.0 },
        "61": { stack: 625, reach: 403, sta: 72.3, hta: 73.0 },
      }
    },
    "SystemSix": {
      year: 2020,
      sizes: {
        "47": { stack: 500, reach: 375, sta: 75.1, hta: 71.2 },
        "51": { stack: 520, reach: 381, sta: 74.7, hta: 71.2 },
        "54": { stack: 540, reach: 386, sta: 74.3, hta: 73.0 },
        "56": { stack: 560, reach: 392, sta: 73.9, hta: 73.0 },
        "58": { stack: 580, reach: 398, sta: 73.5, hta: 73.0 },
        "60": { stack: 600, reach: 403, sta: 73.1, hta: 72.9 },
        "62": { stack: 620, reach: 409, sta: 72.7, hta: 72.9 },
      }
    },
    "Synapse": {
      year: 2025,
      sizes: {
        "44": { stack: 510, reach: 366, sta: 73.0, hta: 69.8 },
        "48": { stack: 530, reach: 371, sta: 73.0, hta: 70.9 },
        "51": { stack: 550, reach: 376, sta: 73.0, hta: 71.3 },
        "54": { stack: 570, reach: 381, sta: 73.0, hta: 71.3 },
        "56": { stack: 590, reach: 387, sta: 73.0, hta: 71.3 },
        "58": { stack: 610, reach: 393, sta: 73.0, hta: 71.3 },
        "61": { stack: 640, reach: 402, sta: 73.0, hta: 71.3 },
      }
    }
  },
  "Ridley": {
    "Noah Fast 3.0": {
      year: 2026,
      sizes: {
        "XS": { stack: 532, reach: 392, sta: 76.0, hta: 72.0 },
        "S":  { stack: 549, reach: 403, sta: 75.5, hta: 73.0 },
        "M":  { stack: 570, reach: 412, sta: 75.0, hta: 73.5 },
        "L":  { stack: 594, reach: 420, sta: 74.5, hta: 73.5 },
      }
    },
    "Noah Fast Disc": {
      year: 2023,
      sizes: {
        "XXS": { stack: 493, reach: 375, sta: 74.5, hta: 71.5 },
        "XS":  { stack: 516, reach: 378, sta: 74.0, hta: 72.0 },
        "S":   { stack: 541, reach: 385, sta: 73.5, hta: 73.0 },
        "M":   { stack: 565, reach: 393, sta: 73.0, hta: 73.5 },
        "L":   { stack: 591, reach: 401, sta: 72.5, hta: 73.5 },
        "XL":  { stack: 616, reach: 409, sta: 72.5, hta: 74.0 },
      }
    },
    "Helium": {
      year: 2024,
      sizes: {
        "XXS": { stack: 507, reach: 379, sta: 75.0, hta: 71.8 },
        "XS":  { stack: 527, reach: 374, sta: 74.0, hta: 72.0 },
        "S":   { stack: 542, reach: 384, sta: 73.5, hta: 73.0 },
        "M":   { stack: 573, reach: 390, sta: 73.0, hta: 73.5 },
        "L":   { stack: 599, reach: 396, sta: 72.5, hta: 73.5 },
        "XL":  { stack: 624, reach: 403, sta: 72.5, hta: 74.0 },
      }
    },
    "Falcn RS": {
      year: 2026,
      sizes: {
        "XXS": { stack: 492, reach: 374, sta: 74.5, hta: 71.5 },
        "XS":  { stack: 513, reach: 378, sta: 74.0, hta: 72.0 },
        "S":   { stack: 530, reach: 388, sta: 73.5, hta: 73.0 },
        "M":   { stack: 551, reach: 397, sta: 73.0, hta: 73.5 },
        "L":   { stack: 573, reach: 404, sta: 72.5, hta: 73.5 },
        "XL":  { stack: 599, reach: 411, sta: 72.5, hta: 74.0 },
      }
    }
  },
  "Wilier": {
    "Filante": {
      year: 2026,
      sizes: {
        "XS":  { stack: 505, reach: 373.5, sta: 75.2, hta: 70.6 },
        "S":   { stack: 523, reach: 380, sta: 74.5, hta: 71.5 },
        "M":   { stack: 541, reach: 386.5, sta: 74.0, hta: 72.0 },
        "L":   { stack: 559, reach: 393, sta: 73.5, hta: 72.5 },
        "XL":  { stack: 577, reach: 400, sta: 73.0, hta: 73.0 },
        "XXL": { stack: 595, reach: 408, sta: 73.0, hta: 73.5 },
      }
    },
    "Zero": {
      year: 2026,
      sizes: {
        "XS":  { stack: 503, reach: 376, sta: 75.2, hta: 70.5 },
        "S":   { stack: 519, reach: 381, sta: 74.6, hta: 71.7 },
        "M":   { stack: 536, reach: 386, sta: 74.0, hta: 72.15 },
        "L":   { stack: 554, reach: 391, sta: 73.5, hta: 72.65 },
        "XL":  { stack: 572, reach: 397, sta: 73.0, hta: 72.8 },
        "XXL": { stack: 591, reach: 402, sta: 72.6, hta: 73.1 },
      }
    }
  },
  "Merida": {
    "Reacto": {
      year: 2026,
      sizes: {
        "XXS": { stack: 517, reach: 377, sta: 74.5, hta: 70.5 },
        "XS":  { stack: 529, reach: 384, sta: 74.0, hta: 72.0 },
        "S":   { stack: 542, reach: 390, sta: 74.0, hta: 72.5 },
        "M":   { stack: 557, reach: 395, sta: 73.5, hta: 73.5 },
        "L":   { stack: 571, reach: 400, sta: 73.0, hta: 73.5 },
        "XL":  { stack: 593, reach: 409, sta: 73.0, hta: 74.0 },
      }
    },
    "Scultura": {
      year: 2026,
      sizes: {
        "3XS": { stack: 512, reach: 373, sta: 75.5, hta: 70.5 },
        "XXS": { stack: 517, reach: 377, sta: 74.5, hta: 70.5 },
        "XS":  { stack: 529, reach: 383, sta: 74.0, hta: 72.0 },
        "S":   { stack: 542, reach: 390, sta: 74.0, hta: 72.5 },
        "M":   { stack: 557, reach: 395, sta: 73.5, hta: 73.5 },
        "L":   { stack: 571, reach: 400, sta: 73.0, hta: 73.5 },
        "XL":  { stack: 593, reach: 409, sta: 73.0, hta: 74.0 },
      }
    }
  },
  "Van Rysel": {
    "RCR": {
      year: 2026,
      sizes: {
        "XS": { stack: 504, reach: 382.5, sta: 74.0, hta: 72.0 },
        "S":  { stack: 520, reach: 385.7, sta: 74.0, hta: 73.0 },
        "M":  { stack: 535, reach: 392, sta: 73.5, hta: 73.0 },
        "L":  { stack: 561, reach: 399, sta: 73.5, hta: 73.0 },
        "XL": { stack: 585, reach: 408.4, sta: 73.5, hta: 73.0 },
      }
    },
    "NCR": {
      year: 2026,
      sizes: {
        "XXS": { stack: 509.4, reach: 363.9, sta: 74.0, hta: 71.0 },
        "XS":  { stack: 514.8, reach: 382.4, sta: 74.0, hta: 72.0 },
        "S":   { stack: 529, reach: 386.2, sta: 73.5, hta: 73.0 },
        "M":   { stack: 548.3, reach: 392.6, sta: 73.5, hta: 73.0 },
        "L":   { stack: 572.2, reach: 396.5, sta: 73.5, hta: 73.0 },
        "XL":  { stack: 596.1, reach: 402.8, sta: 73.0, hta: 73.0 },
      }
    },
    "EDR": {
      year: 2026,
      sizes: {
        "XS": { stack: 524, reach: 375, sta: 75.1, hta: 70.0 },
        "S":  { stack: 540, reach: 380, sta: 74.6, hta: 71.0 },
        "M":  { stack: 568, reach: 380, sta: 73.5, hta: 72.0 },
        "L":  { stack: 601, reach: 386, sta: 73.5, hta: 73.0 },
        "XL": { stack: 630, reach: 388, sta: 72.9, hta: 73.0 },
      }
    }
  },
  "Orbea": {
    "Orca Aero": {
      year: 2026,
      sizes: {
        "47": { stack: 496, reach: 370, sta: 74.5, hta: 71.0 },
        "49": { stack: 505, reach: 376, sta: 74.0, hta: 71.5 },
        "51": { stack: 523, reach: 380, sta: 73.7, hta: 72.2 },
        "53": { stack: 542, reach: 385, sta: 73.5, hta: 72.8 },
        "55": { stack: 562, reach: 391, sta: 73.5, hta: 73.0 },
        "57": { stack: 580, reach: 398, sta: 73.2, hta: 73.2 },
        "60": { stack: 606, reach: 404, sta: 73.2, hta: 73.2 },
      }
    },
    "Orca": {
      year: 2026,
      sizes: {
        "47": { stack: 506, reach: 370, sta: 74.5, hta: 71.0 },
        "49": { stack: 515, reach: 375, sta: 74.0, hta: 71.5 },
        "51": { stack: 533, reach: 380, sta: 73.7, hta: 72.2 },
        "53": { stack: 552, reach: 385, sta: 73.5, hta: 72.8 },
        "55": { stack: 572, reach: 391, sta: 73.5, hta: 73.0 },
        "57": { stack: 590, reach: 398, sta: 73.2, hta: 73.2 },
        "60": { stack: 616, reach: 404, sta: 73.2, hta: 73.2 },
      }
    },
    "Avant": {
      year: 2026,
      sizes: {
        "47": { stack: 525, reach: 370, sta: 74.5, hta: 70.5 },
        "49": { stack: 545, reach: 375, sta: 74.0, hta: 71.0 },
        "51": { stack: 565, reach: 380, sta: 73.75, hta: 71.5 },
        "53": { stack: 585, reach: 385, sta: 73.75, hta: 71.8 },
        "55": { stack: 605, reach: 391, sta: 73.75, hta: 72.0 },
        "57": { stack: 625, reach: 398, sta: 73.2, hta: 72.2 },
        "60": { stack: 645, reach: 404, sta: 73.2, hta: 72.5 },
      }
    }
  },
  "Lapierre": {
    "Xelius": {
      year: 2026,
      sizes: {
        "XS":  { stack: 501, reach: 376, sta: 74.0, hta: 72.0 },
        "S":   { stack: 516, reach: 383, sta: 74.0, hta: 72.0 },
        "M":   { stack: 538, reach: 393, sta: 74.0, hta: 73.0 },
        "L":   { stack: 557, reach: 403, sta: 73.5, hta: 73.0 },
        "XL":  { stack: 580, reach: 415, sta: 73.5, hta: 74.0 },
        "XXL": { stack: 599, reach: 428, sta: 73.5, hta: 74.0 },
      }
    },
    "Aircode": {
      year: 2026,
      sizes: {
        "XS": { stack: 501, reach: 376, sta: 74.0, hta: 72.0 },
        "S":  { stack: 516, reach: 383, sta: 74.0, hta: 72.0 },
        "M":  { stack: 538, reach: 393, sta: 74.0, hta: 73.0 },
        "L":  { stack: 557, reach: 403, sta: 73.5, hta: 73.0 },
        "XL": { stack: 580, reach: 415, sta: 73.5, hta: 74.0 },
      }
    },
    "Pulsium": {
      year: 2026,
      sizes: {
        "XS":  { stack: 527, reach: 375, sta: 74.5, hta: 71.0 },
        "S":   { stack: 541, reach: 379, sta: 74.5, hta: 71.0 },
        "M":   { stack: 562, reach: 384, sta: 74.0, hta: 71.5 },
        "L":   { stack: 579, reach: 389, sta: 73.5, hta: 72.0 },
        "XL":  { stack: 599, reach: 394, sta: 73.0, hta: 72.0 },
        "XXL": { stack: 618, reach: 400, sta: 72.5, hta: 72.5 },
      }
    }
  },
  "Quick Pro": {
    "ER:One": {
      year: 2026,
      sizes: {
        "XS":  { stack: 505, reach: 380, sta: 75.0, hta: 70.0 },
        "S":   { stack: 521, reach: 381, sta: 74.5, hta: 71.0 },
        "M":   { stack: 538, reach: 386, sta: 74.0, hta: 72.0 },
        "L":   { stack: 556, reach: 393, sta: 73.5, hta: 73.0 },
        "XL":  { stack: 572, reach: 406, sta: 73.5, hta: 73.0 },
        "XXL": { stack: 593, reach: 415, sta: 73.0, hta: 73.5 },
      }
    },
    "AR:One": {
      year: 2026,
      sizes: {
        "XS": { stack: 503.9, reach: 375.4, sta: 75.0, hta: 70.0 },
        "S":  { stack: 516.7, reach: 382.2, sta: 74.5, hta: 71.0 },
        "M":  { stack: 534.6, reach: 386.7, sta: 74.0, hta: 72.0 },
        "L":  { stack: 552, reach: 391.4, sta: 73.5, hta: 73.0 },
        "XL": { stack: 566.6, reach: 402, sta: 73.5, hta: 73.0 },
      }
    },
    "GR:One": {
      year: 2026,
      sizes: {
        "XS": { stack: 524, reach: 370, sta: 74.2, hta: 70.5 },
        "S":  { stack: 543, reach: 379, sta: 74.0, hta: 71.0 },
        "M":  { stack: 561, reach: 388, sta: 73.6, hta: 71.0 },
        "L":  { stack: 580, reach: 398, sta: 73.3, hta: 71.0 },
        "XL": { stack: 599, reach: 405, sta: 73.8, hta: 71.0 },
      }
    }
  },
  "Winspace": {
    "T1550": {
      year: 2026,
      sizes: {
        "XS": { stack: 504.72, reach: 363, sta: 75.1, hta: 70.7 },
        "S":  { stack: 521.76, reach: 372, sta: 74.3, hta: 71.5 },
        "M":  { stack: 534.88, reach: 381, sta: 74.0, hta: 72.0 },
        "L":  { stack: 560.42, reach: 388, sta: 73.5, hta: 72.5 },
        "XL": { stack: 585.7, reach: 397, sta: 73.0, hta: 72.9 },
      }
    },
    "T1600": {
      year: 2026,
      sizes: {
        "XS": { stack: 498, reach: 365, sta: 74.8, hta: 70.7 },
        "S":  { stack: 510, reach: 372, sta: 74.3, hta: 71.5 },
        "M":  { stack: 524, reach: 382, sta: 74.0, hta: 72.0 },
        "L":  { stack: 544, reach: 392, sta: 73.8, hta: 72.5 },
        "XL": { stack: 565, reach: 407, sta: 73.4, hta: 72.9 },
      }
    },
    "C5 Aero": {
      year: 2026,
      sizes: {
        "XS": { stack: 512, reach: 365, sta: 75.35, hta: 70.6 },
        "S":  { stack: 528, reach: 372, sta: 74.9, hta: 71.3 },
        "M":  { stack: 542, reach: 382, sta: 74.0, hta: 72.1 },
        "L":  { stack: 557, reach: 387, sta: 73.5, hta: 72.3 },
        "XL": { stack: 571, reach: 397, sta: 72.3, hta: 72.3 },
      }
    },
    "C5": {
      year: 2026,
      sizes: {
        "XS": { stack: 512, reach: 365, sta: 75.35, hta: 70.6 },
        "S":  { stack: 528, reach: 372, sta: 74.9, hta: 71.3 },
        "M":  { stack: 542, reach: 382, sta: 74.0, hta: 72.1 },
        "L":  { stack: 557, reach: 387, sta: 73.5, hta: 72.3 },
        "XL": { stack: 571, reach: 397, sta: 73.1, hta: 72.3 },
      }
    },
    "G3": {
      year: 2026,
      sizes: {
        "XS": { stack: 539, reach: 363, sta: 73.5, hta: 69.5 },
        "S":  { stack: 551, reach: 370, sta: 73.5, hta: 70.0 },
        "M":  { stack: 568, reach: 377, sta: 73.5, hta: 70.5 },
        "L":  { stack: 582, reach: 388, sta: 73.5, hta: 70.5 },
        "XL": { stack: 601, reach: 399, sta: 73.5, hta: 70.5 },
      }
    },
    "SLC5": {
      year: 2026,
      sizes: {
        "XS": { stack: 508, reach: 366, sta: 74.9, hta: 70.7 },
        "S":  { stack: 520, reach: 372, sta: 74.4, hta: 71.3 },
        "M":  { stack: 535, reach: 382, sta: 74.0, hta: 72.0 },
        "L":  { stack: 555, reach: 389, sta: 73.5, hta: 72.3 },
        "XL": { stack: 575, reach: 399, sta: 73.0, hta: 72.6 },
      }
    },
  },
  "Time": {
    "Alpe d'Huez": {
      year: 2026,
      sizes: {
        "XS": { stack: 514, reach: 372, sta: 74.7, hta: 71.0 },
        "S":  { stack: 538, reach: 377, sta: 74.0, hta: 72.5 },
        "M":  { stack: 562, reach: 383, sta: 73.0, hta: 73.0 },
        "L":  { stack: 582, reach: 392, sta: 73.0, hta: 73.0 },
        "XL": { stack: 601, reach: 397, sta: 73.0, hta: 73.5 },
      }
    },
    "SCYLON": {
      year: 2026,
      sizes: {
        "XXS": { stack: 515, reach: 372, sta: 73.0, hta: 71.5 },
        "XS":  { stack: 532, reach: 377, sta: 73.0, hta: 71.5 },
        "S":   { stack: 549, reach: 382, sta: 73.0, hta: 71.5 },
        "M":   { stack: 567, reach: 389, sta: 73.0, hta: 72.0 },
        "L":   { stack: 584, reach: 392, sta: 73.0, hta: 73.0 },
        "XL":  { stack: 601, reach: 397, sta: 73.0, hta: 73.0 },
      }
    },
    "ADHX 45": {
      year: 2026,
      sizes: {
        "XS": { stack: 532, reach: 364, sta: 73.5, hta: 70.3 },
        "S":  { stack: 543, reach: 371, sta: 72.8, hta: 71.3 },
        "M":  { stack: 564, reach: 381, sta: 72.8, hta: 72.3 },
        "L":  { stack: 583, reach: 390, sta: 72.8, hta: 72.3 },
        "XL": { stack: 603, reach: 395, sta: 72.8, hta: 72.8 },
      }
    },
  },
  "Look": {
    "795 Blade RS": {
      year: 2026,
      sizes: {
        "XXS": { stack: 486.2, reach: 361.3, sta: 75.0, hta: 70.7 },
        "XS":  { stack: 501.2, reach: 371.3, sta: 74.5, hta: 71.8 },
        "S":   { stack: 525.2, reach: 381.3, sta: 74.5, hta: 71.8 },
        "M":   { stack: 549.2, reach: 391.2, sta: 74.5, hta: 73.0 },
        "L":   { stack: 573.2, reach: 401.2, sta: 74.5, hta: 73.0 },
        "XL":  { stack: 597.2, reach: 411.2, sta: 74.5, hta: 73.0 },
      }
    },
    "785 Huez RS": {
      year: 2026,
      sizes: {
        "XS": { stack: 510, reach: 365, sta: 74.0, hta: 71.8 },
        "S":  { stack: 534, reach: 375, sta: 74.0, hta: 71.8 },
        "M":  { stack: 558, reach: 385, sta: 73.0, hta: 73.0 },
        "L":  { stack: 582, reach: 395, sta: 73.0, hta: 73.0 },
        "XL": { stack: 606, reach: 405, sta: 73.0, hta: 73.0 },
      }
    },
    "765 Optimum": {
      year: 2026,
      sizes: {
        "XS": { stack: 534, reach: 359, sta: 74.0, hta: 70.8 },
        "S":  { stack: 558, reach: 369, sta: 74.0, hta: 70.8 },
        "M":  { stack: 582, reach: 379, sta: 74.0, hta: 70.8 },
        "L":  { stack: 606, reach: 389, sta: 74.0, hta: 70.8 },
        "XL": { stack: 630, reach: 399, sta: 74.0, hta: 70.8 },
      }
    },
  }
};
