'use strict'

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