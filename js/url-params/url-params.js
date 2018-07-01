const urlParams = ( strParam => {
  // get url parameters
  const arrURLParams = window.location.search.replace( '?', '' ).split( '&' );
  // obj placeholder for params
  const objParams = {};
  // convert parameters into an object
  arrURLParams.map( ( val ) => {
    var arrPair = val.split( '=' );
    objParams[ arrPair[ 0 ] ] = decodeURI( arrPair[ 1 ] );
  } );
  console.log( 'url parameters: ', objParams );
  return {
    get: strParam => objParams[ strParam ]
  }
} )();

/**
 * How to Use
 * example url - https://www.google.com/?x=lorem&y=ipsum&z=Hello%20World
 */
console.log( urlParams.get( 'x' ) ); // lorem
console.log( urlParams.get( 'y' ) ); // ipsum
console.log( urlParams.get( 'z' ) ); // Hello World