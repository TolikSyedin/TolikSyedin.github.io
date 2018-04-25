//Solve using javascript

// We have 3 trains moving on different railways from one station to another with the same speed, every train has assigned different number of people. They need to circulate from side to side on their own railway and in case 2 trains or more arrive to a cross at the same time, the one with the higher number of people should pass first. The problem consist in making the trains circulate on their railways avoiding collisions and falling the priority rules. 

// Note - The space between stations are the same. 
//        The starting point of every train should be passed in a init function. 


// let's suppose that we have a init object with required information in it
const trains = {
    a: {
        name: 'a',
        stations:  ['1-a', '2-a', '3-ac', '4-a', '5-ab', '6-a', '7-a'],
        direction: 'forward',
        passengers: 56
    },
    b: {
        name: 'b',
        stations:  ['1-b', '2-b', '3-bc', '4-ba', '5-b', '6-b'],
        direction: 'forward',
        passengers: 37
    },
    c: {
        name: 'c',
        stations:  ['1-c','2-c','3-ca', '4-cb','5-c','6-c'],
        direction: 'reverse',
        passengers: 13
    }
}

// function can take the initValues object and start implementing the railway station logic

function railwayController (trainConfig) {
    //initial state manager
    const currentState = {
        a: {
            name: 'a',
            currentStation: '',
            moveToNextStation: '',
            stations: [],
            currentIndex: null,
            direction: '',
            passengers: null
        },
        b: {
            name: 'b',
            currentStation: '',
            moveToNextStation: '',
            stations: [],
            currentIndex: null,
            direction: '',
            passengers: null
        },
        c: {
            name: 'c',
            currentStation: '',
            moveToNextStation: '',
            stations: [],
            currentIndex: null,
            direction: '',
            passengers: null            
        }
    }
    //func to pick up a random station
    let random = (min, max) =>  Math.floor(Math.random() * (max - min)) + min;
    // set current and next stations in currentState manager 
    let setStations = ({
        name,
        passengers,
        dispatchPoint,
        stations,
        direction,
    }) => {
        let isLastStation = dispatchPoint !== stations.length - 1
        currentState[name].passengers = passengers
        if(direction === 'forward'){
            currentState[name].stations =  isLastStation ? stations : stations.reverse()
            currentState[name].currentStation = isLastStation ? stations[dispatchPoint] : currentState[name].stations[0]
            currentState[name].moveToNextStation = isLastStation ? stations[dispatchPoint + 1] : currentState[name].stations[1]
            currentState[name].direction = isLastStation ? direction : 'reverse' 
            currentState[name].currentIndex =isLastStation ? dispatchPoint++ : 0
        } else if (direction === 'reverse'){
            currentState[name].stations =  isLastStation ? stations.reverse() : stations
            currentState[name].currentStation = isLastStation ? currentState[name].stations[dispatchPoint] : currentState[name].stations[0]
            currentState[name].moveToNextStation = isLastStation ? currentState[name].stations[dispatchPoint + 1] : currentState[name].stations[1]
            currentState[name].direction = isLastStation ? direction : 'forward'
            currentState[name].currentIndex = isLastStation ? dispatchPoint++ : 0
        }
    }
    //func to choose which train has priority to pass the cross first 
    let trafficManager = (a, b) => a.passengers > b.passengers ? a : b
    // initialize dispatching points on every train
    let initStartPoints = () => {
        trainConfig.a.dispatchPoint = random(0,trainConfig.a.stations.length)
        trainConfig.b.dispatchPoint = random(0,trainConfig.b.stations.length)
        trainConfig.c.dispatchPoint = random(0,trainConfig.c.stations.length)
        setStations(trainConfig.a)
        setStations(trainConfig.b)
        setStations(trainConfig.c)
    }

    initStartPoints()

    let moveToNextStation = (train) => {
        const {
            currentStation,
            stations,
            currentIndex,
            direction
        } = train
        if(stations.length - 1 === currentIndex && direction === 'forward') {
            return {
                ...train,
                direction: 'reverse',
                currentStation: stations[0],
                moveToNextStation: stations[1],
                currentIndex: 0
            }
        } else if (stations.length - 1 === currentIndex && direction === 'reverse'){         
            return {
                ...train,
                direction: 'forward',
                moveToNextStation: stations[1],
                currentStation: currentStation,
                currentIndex: 0
            }        
        } else {
            return {
                ...train,
                direction: direction,
                moveToNextStation: typeof stations[currentIndex + 2] !== 'undefined' ? stations[currentIndex + 2] : stations.reverse()[0],
                currentStation: typeof stations[currentIndex + 2] !== 'undefined' ? stations[currentIndex + 1] : stations[0],
                currentIndex: currentIndex+1
            }
        }

    }

    let railway = () => {
        if(currentState.a.nextStation === '5-ab' && currentState.b.nextStation === '4-ba') {
            currentState[trafficManager(currentState.a, currentState.b).name] = moveToNextStation(trafficManager(currentState.a, currentState.b))
            currentState.c = moveToNextStation(currentState.c)
            console.log(' train',trafficManager(currentState.a, currentState.b).name, ' is gonna pass first')
        } else if(currentState.a.nextStation === '3-ac' && currentState.c.nextStation === '3-ca') {
            currentState[trafficManager(currentState.a, currentState.c).name] = moveToNextStation(trafficManager(currentState.a, currentState.c))
            currentState.b = moveToNextStation(currentState.b)            
            console.log(' train',trafficManager(currentState.a, currentState.c).name, ' is gonna pass first')
        } else if(currentState.b.nextStation === '3-bc' && currentState.c.nextStation === '4-cb') {
            currentState[trafficManager(currentState.b, currentState.c).name] = moveToNextStation(trafficManager(currentState.b, currentState.c))
            currentState.a = moveToNextStation(currentState.a)      
            console.log(' train',trafficManager(currentState.b, currentState.c).name, ' is gonna pass first')
        } else {
            currentState.a = moveToNextStation(currentState.a)
            currentState.b = moveToNextStation(currentState.b)
            currentState.c = moveToNextStation(currentState.c)
        }
        console.log(currentState)
        
    }

    let interval = setInterval(railway, 3000)

}

railwayController(trains)