// First create 4 holes, starting from quadrant 3, 1, 4, then 2
// Step and repeat by X and Y to get a 10 x 10 grid
// Step and repeat by X and Y to get a 100 x 100 grid
// Finally step and repeat by rows and columns

include("simple.js");
// defaults
const unit_length = 10; // the length of a single unit - 10 x 10


// coordinates
const zcX = -120;
const zcY = 10;

const g93X = 0;
const g93Y = 45;

const shiftX = zcX + g93X;
const shiftY = zcY + g93Y;

/** multiple different g93s
var shiftX = [];
var shiftY = [];

shiftX.push(zcX + g93X1);
shiftY.push(zcY + g93Y1);

shiftX.push(zcX + g93X2);
shiftY.push(zcY + g93Y2);
*/

// spacing distance
const drillDia = 0.3;
const dist_1 = 4.5; // first 4 holes
const dist_2 = 0.9; // spacing to create a 10 x 10 unit
const dist_3 = 9.5; // spacing to create a 100 x 100 unit
const gpRowDist = 0; // spacing of each grid pattern
const gpColDist = 0; // spacing of each grid pattern

// row/column
const row = 3;
const column = 10;
const gpRow = 1;
const gpCol = 1;

// main
function createGridPattern(x, y){
    for(gpR = 0; gpR < gpRow; gpR++){
        for(gpC = 0; gpC < gpCol; gpC++){
            for(r = 0; r < row; r++){
                for(c = 0; c < column; c++){
                    // 100 x 100
                    for(i = 0; i < unit_length/2; i++){
                        for(j = 0; j < unit_length/2; j++){
                            addCircle(0 + dist_2 * j + c * dist_3 + x + gpC * gpColDist, 0 + dist_2 * i + r * dist_3 + y + gpR * gpRowDist, drillDia/2);
                            addCircle(dist_1 + dist_2 * j + c * dist_3 + x + gpC * gpColDist, dist_1 + dist_2 * i + r * dist_3 + y + gpR * gpRowDist, drillDia/2);
                            addCircle(dist_1 + dist_2 * j + c * dist_3 + x + gpC * gpColDist, 0 + dist_2 * i + r * dist_3 + y + gpR * gpRowDist, drillDia/2);
                            addCircle(0 + dist_2 * j + c * dist_3 + x + gpC * gpColDist, dist_1 + dist_2 * i + r * dist_3 + y + gpR * gpRowDist, drillDia/2);   
                        }
                    }  
                }
            }   
        }
    }
}

createGridPattern(shiftX, shiftY);

/** multiple different g93s
for(p = 0; p < shiftX.length; p++){
    createGridPattern(shiftX[p], shiftY[p]);   
}
*/