const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: '',

  getLength() {
    // console.debug( `getLength()` );

    if ( this.value.length === 0 ) return 0;
    return this.value.split( '~~' ).length;
  },

  addLink( value = '' ) {
    // console.debug( `addLink( ${ value }  )` );
    // console.debug( 'value', value );

    if ( this.value.length !== 0 ) {
      this.value += `~~( ${ String( value ).toString() } )`;
    } else {
      this.value = `( ${ String( value ).toString() } )`;
    }
    return this;
  },

  removeLink( position ) {
    // console.debug( `removeLink( ${ position }  )` );

    let valArr = this.value.split( '~~' );

    if ( typeof position !== 'number' || Number.isNaN( position ) ) {
      this.value = '';
      throw new Error( 'You can\'t remove incorrect link!' );
      try {
        this.value = '';
        throw new Error( 'You can\'t remove incorrect link!' );
      } catch ( e ) {
        // console.error( `${ e.message }` );
        this.value = '';
        return;
      }
    }

    if ( position <= 0 || position > valArr.length ) {
      this.value = '';
      throw new Error( 'You can\'t remove incorrect link!' );

      try {
        this.value = '';
        throw new Error( 'You can\'t remove incorrect link!' );
      } catch ( e ) {
        // console.error( `${ e.message }` );
        this.value = '';
        return;
      }
    }

    if ( position !== Math.round( position ) ) {
      // console.log( 'position', position );
      // console.log( 'Math.round( position )', Math.round( position ) );

      this.value = '';
      throw new Error( 'You can\'t remove incorrect link!' );

      try {
        this.value = '';
        throw new Error( 'You can\'t remove incorrect link!' );

      }
      catch ( e ) {
        this.value = '';
        // console.error( `${ e.message }` );
        return;
      }
    }

    valArr.splice( position - 1, 1 );
    this.value = valArr.join( '~~' );
    // console.log( this.value );
    return this;
  },

  reverseChain() {
    // console.debug( `reverseChain(   )` );

    this.value = this.value.split( '~~' ).reverse().join( '~~' );
    return this;
  },

  finishChain() {
    // console.debug( `finishChain( )` );

    let value = this.value;
    this.value = '';
    return value;
  }
};

module.exports = {
  chainMaker
};
