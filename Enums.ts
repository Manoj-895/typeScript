enum AirplaneSeat {
    first = 22,   // default starts with 0
    middle ,  // takes the next number if above is a number
    third    
}


const yourSeat = AirplaneSeat.middle 

// using const generates less amount of code
const enum AirplaneSeat2 {
    first = 'first',
    middle = 'middle', 
    third = 'third'
}

const yourSeat2 = AirplaneSeat2.middle


export{}

