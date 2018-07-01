const Cookie = ( function () {
  /**
   * get cookie value
   * @param   {String} strName - cookie name
   * @returns {String}         - cookie value
   */
  const get = function ( strName ) {
    // seperate cookies into array
    const arrCookies = decodeURIComponent( document.cookie ).split( "; " );
    // initiate cookie value return
    let strCookieValue;
    // remove whitespace
    strName = strName.trim();

    // cycle through cookies
    arrCookies.forEach( function ( strCookie ) {
      // find cookie and return value
      if ( strCookie.indexOf( strName + "=" ) === 0 ) {
        strCookieValue = strCookie.split( '=' )[ 1 ];
      }
    } );

    // if cookie value is undefined
    if ( !strCookieValue ) console.error( "Cookie '" + strName + "' does not exist" );
    // return cookie value
    return strCookieValue;

  };
  /**
   * Set cookies
   * @param {String} strName        - cookie name
   * @param {String} strValue       - cookie value
   * @param {Number} [intExpInDays] - days until cookie expires
   * @param {String} [strPath]      - path where cookie is accessible
   */
  const set = function ( strName, strValue, intExpInDays, strPath ) {
    let strExpires = "";
    /* if strPath is undefined
     * default to domain root */
    strPath = strPath || "/";

    // if intExpInDays is defined
    if ( intExpInDays ) {
      const objExpireDate = new Date();
      // set time to expiration date
      objExpireDate.setTime( objExpireDate.getTime() + ( intExpInDays * 24 * 60 * 60 * 1000 ) );
      // format to cookie param
      strExpires = "expires=" + objExpireDate.toUTCString() + ";";
    }
    // set cookie
    document.cookie = strName.trim() + "=" + strValue.trim() + ";" + strExpires + "path=" + strPath;
  };

  /**
   * remove cookie
   * @param {String} strName - cookie name
   */
  const remove = function ( strName ) {
    // if cookie exists - set expiration to day before
    if ( get( strName ) !== undefined ) set( strName, '_', -1 );
  };

  return {
    get: get,
    set: set,
    delete: remove,
  };
} )();