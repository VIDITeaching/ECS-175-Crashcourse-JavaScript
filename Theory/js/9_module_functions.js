'use strict'

/**
 * Converts a given number to binary
 * @param {Number} dec The number to be converted in decimal
 * @returns {String} The converted number in binary
 */
dec2bin( dec )
{
    return ( dec >>> 0 )
        .toString( 2 )
}

deg2rad ( deg ) 
{
    return deg * (Math.PI / 180)
}

export {
    dec2bin,
    hex2rgb
}