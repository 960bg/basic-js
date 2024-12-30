const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// class DepthCalculator {


//   calculateDepth( arr ) {
//     // //console.debug( 'arr' );
//     // //console.debug( arr );

//     if ( !Array.isArray( arr ) ) {
//       // //console.debug( '!Array.isArray( arr )' );
//       // //console.debug( arr );
//       return 0;
//     }
//     if ( arr.length === 0 && Array.isArray( arr ) ) {
//       // //console.debug( 'arr.length === 0 && Array.isArray( arr )' );
//       // //console.debug( arr );
//       return 1;
//     }

//     const saveObj = {};

//     depthCalc( arr );

//     // //console.debug( 'globDeep', globDeep );
//     // //console.debug( 'maxMas', maxMas );

//     const saveObjProp = Object.getOwnPropertyNames( saveObj );
//     const deepMax = [];
//     // //console.log( 'Object.getOwnPropertyNames(saveObj)' );
//     // //console.log( saveObjProp );
//     for ( let i = 0; i < saveObjProp.length; i++ ) {
//       deepMax.push( saveObjProp[i].length );

//     }

//     const res = Math.max( ...deepMax );
//     // //console.debug( '============res' );
//     // //console.debug( res );


//     return res;

//     function depthCalc( mas, deep = 1, nth = '0', saveDeep = [] ) {
//       // let localDeep = 1;
//       // let deep = 1;
//       // const saveDeep = [];
//       saveObj[`${ nth }`] = 1;
//       for ( let i = 0; i < mas.length; i++ ) {
//         const el = mas[i];
//         if ( Array.isArray( el ) ) {

//           if ( mas === arr ) {
//             nth = '0';
//           }

//           if ( saveDeep.length === 0 ) {
//             deep = 1;
//           }

//           if ( saveObj.hasOwnProperty( `${ nth }` ) ) {
//             saveObj[`${ nth }`] += 1;
//           } else {
//             saveObj[`${ nth }`] = 1;
//           }
//           deep += depthCalc( el, deep, `${ nth }${ i }`, saveDeep );

//           saveDeep.push( deep );
//         }
//       }

//       return 1;
//       // return localDeep;
//     }

//   }
// }

class DepthCalculator {
  constructor() {
    this.saveObj = {};

  }

  res() {
    const saveObjProp = Object.getOwnPropertyNames( this.saveObj );
    const deepMax = [];
    for ( let i = 0; i < saveObjProp.length; i++ ) {
      deepMax.push( saveObjProp[i].length );
    }

    //console.debug( 'this.saveObj' );
    //console.debug( this.saveObj );
    const deep = Math.max( ...deepMax );
    // //console.debug( 'Длина' );
    // //console.debug( deep );
    return deep;
  }

  calculateDepth( mas, nth = '_', firstNth = true ) {
    // //console.debug( 'this.saveObj' );
    // //console.debug( this.saveObj );

    // //console.debug( 'this.firstNth' );
    // //console.debug( firstNth );

    // //console.debug( 'mas' );
    // //console.debug( mas );


    if ( !Array.isArray( mas ) && firstNth ) {
      // //console.debug( '!Array.isArray( arr )' );
      // //console.debug( arr );
      return 0;
    }
    if ( mas.length === 0 && Array.isArray( mas ) && firstNth ) {
      // //console.debug( 'arr.length === 0 && Array.isArray( arr )' );
      // //console.debug( arr );
      return 1;
    }


    // //console.debug( 'globDeep', globDeep );
    // //console.debug( 'maxMas', maxMas );


    // return res;


    // let localDeep = 1;
    // let deep = 1;
    // const saveDeep = [];
    if ( firstNth ) {
      this.origArray = mas;
      firstNth = false;
      this.saveObj = {};
    }

    this.saveObj[`${ nth }`] = 1;

    for ( let i = 0; i < mas.length; i++ ) {
      const el = mas[i];
      if ( Array.isArray( el ) ) {

        if ( mas === this.origArray ) {
          nth = '_';
        }

        if ( this.saveObj.hasOwnProperty( `${ nth }` ) ) {
          this.saveObj[`${ nth }`] += 1;
        } else {
          this.saveObj[`${ nth }`] = 1;
        }

        this.calculateDepth( el, `${ nth }${ i }`, false );

      }
    }

    const r = this.res();


    return r;

  }
}

module.exports = {
  DepthCalculator
};
