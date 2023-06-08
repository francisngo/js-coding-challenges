type shippingStatuses = 'shipped' | 'in-transit' | 'out-for-delivery' | 'delivered' | 'failed-delivery' | 'exception' | 'return-to-sender'

interface shipmentDataTypes {
    shipmentId: string,
    trackingId?: string,
    shipmentDate: string,
    status: shippingStatuses,
    recipient: string,
    totalWeight: number,
    destination: string,
}

const shipmentData: shipmentDataTypes[] = [
    {
        shipmentId: 't7i3MPG3KgPtwfFr',
        shipmentDate: '2023-02-14 18:51:09',
        status: 'in-transit',
        recipient: 'John Smith',
        totalWeight: 10.5,
        destination: 'San Francisco, CA',
    },
    {
        shipmentId: 'JUhkF0rdomS7Qb2m',
        trackingId: 'USPS653105826US',
        shipmentDate: '2023-01-21 00:11:11',
        status: 'delivered',
        recipient: 'Jane Smith',
        totalWeight: 5.5,
        destination: 'Los Angeles, CA',
    },
    {
        shipmentId: 'BUEEDEM1YUgiplE5',
        trackingId: 'USPS653105826US',
        shipmentDate: '2023-02-03 15:37:41',
        status: 'delivered',
        recipient: 'Jane Smith',
        totalWeight: 12.5,
        destination: 'Los Angeles, CA',
    },
    {
        shipmentId: 'MfAgKUmTddHJ9SuA',
        trackingId: 'USPS364008257US',
        shipmentDate: '2023-02-05 12:17:32',
        status: 'shipped',
        recipient: 'Joe Smith',
        totalWeight: 22.5,
        destination: 'Seattle, CA',
    }
]

// build a map of data by shipment id
function shipmentByShipmentId (shipments: shipmentDataTypes[]): Record<string, shipmentDataTypes> {
    return shipments.reduce(
        (
            acc: Record<string, shipmentDataTypes>,
            shipment: shipmentDataTypes
        ) => {
        const key = shipment.shipmentId;
        return {
            ...acc,
            [key]: shipment
        }
    }, {})
}

// build a map of data by tracking id
// if there is no tracking number do not add it to record
// if there are the same tracking number return the latest one
function shipmentByTrackingId (shipments: shipmentDataTypes[]): Record<string, shipmentDataTypes> {
    return shipments.reduce(
        (
            acc: Record<string, shipmentDataTypes>,
            shipment: shipmentDataTypes
        ) => {
            if (shipment.trackingId) {
                const existingShipment = acc[shipment.trackingId];
                if(!existingShipment || shipment.shipmentDate > existingShipment.shipmentDate) {
                    acc[shipment.trackingId] = shipment;
                }
            }
            return acc;
        }, {})
}

// create a function that takes in the shipment data and status and returns an array of shipments that match the given status
function shipmentByStatus(shipments: shipmentDataTypes[], status: shippingStatuses): shipmentDataTypes[] {
    return shipments.filter((shipment: shipmentDataTypes) => shipment.status === status);
}

// create a function that takes in the shipment data and calculates the total weight of all shipments
function calculateTotalWeight(shipments: shipmentDataTypes[]): number {
    return shipments.reduce((total, shipment) => {
        return total + shipment.totalWeight;
    }, 0);
}

// create a function that takes in shipment data and groups the shipments by destinations
// should return an object where each key represents a destination, and the value is an array of shipments for that destination
function groupByDestination(shipments: shipmentDataTypes[]): Record<string, shipmentDataTypes[]> {
    return shipments.reduce(
     (
        acc: Record<string, shipmentDataTypes[]>,
        shipment: shipmentDataTypes
     ) => {
        acc[shipment.destination] = acc[shipment.destination] || [] ;
        acc[shipment.destination].push(shipment);
        return acc;
     }
    , {})
}

// create a function that takes in shipment data and counts the number of shipments for each status. 
// should return an object where each key is a status and the value is the count of shipments with that status
function countByStatus(shipments: shipmentDataTypes[]): Record<string, number> {
    return shipments.reduce(
        (
            acc: Record<string, number>,
            shipment: shipmentDataTypes
        ) => {
            const existingShipment = acc[shipment.status];
            if (existingShipment) {
                acc[shipment.status] += 1
            } else {
                acc[shipment.status] = 1;
            }
            return acc;
        }
    , {})
}

console.log('shippingByShipmentId: ', shipmentByShipmentId(shipmentData));
console.log('shippingByTrackingId: ', shipmentByTrackingId(shipmentData));
console.log('shipmentByStatus:', shipmentByStatus(shipmentData, 'delivered'));
console.log('calculateTotalWeight: ', calculateTotalWeight(shipmentData));
console.log('groupByDestination: ', groupByDestination(shipmentData));
console.log('countByStatus: ', countByStatus(shipmentData));





