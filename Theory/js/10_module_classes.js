'use strict'

import { dec2bin } from './9_module_functions.js'

class Calculator
{

    // defaults used if no arguments given
    constructor( decimal = true )
    {
        this.decimal = decimal
    }

    /**
     * Subtracts two operands
     * @param {Number} a operand a
     * @param {Number} b operand b
     * @returns a minus b
     */
    add( a, b )
    {
        return decimal ? a + b : dec2bin(a) + dec2bin(b)
    }

    /**
     * Subtracts two operands
     * @param {Number} a operand a
     * @param {Number} b operand b
     * @returns a minus b
     */
    subtract( a, b )
    {
        return decimal ? a - b : dec2bin(a) - dec2bin(b)
    }

}

export default Calculator
