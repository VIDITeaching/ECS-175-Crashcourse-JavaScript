'use strict'


class Fruit
{

    constructor( color, name, sweet, ready_to_eat = false )
    {

        this.color = color
        this.name = name
        this.sweet = sweet
        this.ready_to_eat = ready_to_eat

    }

    tastesGood( )
    {

        return this.sweet

    }

    calculateEdibility( )
    {
        if ( !this.sweet || !this.ready_to_eat )
            return 0

        if ( this.sweet ? !this.ready_to_eat : this.ready_to_eat )
            return 50

        return Infinity

    }

}

class Apple extends Fruit
{

    constructor( )
    {

        let color = '#8bc22d'

        super( color, "Apple", true, true )

    }

    tastesGood( )
    {

        return true

    }

    peel( )
    {
        console.log( "Peeling the apple" )

        let peel = "~~~~~~~~~~~ ~~~ ~~~~"

        return peel
    }
}

class Coconut extends Fruit
{

    constructor( )
    {

        let color = '#9c5713'

        super( color, "Coconut", false, false )

    }

    crack( )
    {

        console.log( "Cracking the coconut" )

        this.ready_to_eat = true

        let halves = [ "(O", "O)" ]

        return halves

    }
}
