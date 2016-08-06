/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "logo": {
        "strokepath": [
            {
                "path": "M39.64,24.29l-2.38-2-7.57-6L25.85,18a0.58,0.58,0,0,0-.06,1l3,2.25h0L32,23.88a0.58,0.58,0,0,1-.16,1L21.65,29.49l2.58,3,12.3-4.77,2.82-1.28a1.2,1.2,0,0,0,.29-2.2",
                "duration": 600
            },
            {
                "path": "M26.18,6.54L12.62,32.47",
                "duration": 600
            },
            {
                "path": "M24,5.29L10.48,31.23C9,34,13.28,36.55,14.75,33.72L28.31,7.79C29.79,5,25.52,2.46,24,5.29h0Z",
                "duration": 600
            },
            {
                "path": "M2.89,12.7l1.94,1.87L11,20.31l3.26-1.69a0.61,0.61,0,0,0,.08-0.93l-2.45-2.14h0L9.29,13a0.61,0.61,0,0,1,.16-1l8.63-4.5L16,4.64,5.59,9.33l-2.4,1.26a1.24,1.24,0,0,0-.3,2.12",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 38,
            "height": 31
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#undefined').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint'); 
 });
