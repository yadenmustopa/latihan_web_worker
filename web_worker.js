"use strict";
function showLog( total ){
    for ( let i = 0 ; i < total ; i++ ){
       console.log(i);
    }

  
}

addEventListener("message", ( event ) => {
    let total = event.data;
    showLog( total );
    postMessage("done");
})