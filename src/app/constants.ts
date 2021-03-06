export const QUERY_KEYS = {
  ORDER: 'order',
}

export const STATUSES = [
  'Placed',
  'Preparing',
  'Prepared',
  'On the Way',
  'Delivered',
]

export const ORDER = {
  "_created": "2021-07-22T20:08:02.000000Z",
  "_id": "60f87ea2a52dad8a3fa4860",
  "_updated": "2021-07-22T20:08:02.000000Z",
  "account": "60bfc6dc4887c9851d5a0246",
  "brandId": "60bfc6dc4887c9851d5a0245",
  "by": "Deliverect",
  "capacityUsages": [],
  "channel": 1,
  "channelLink": "60bfc70416db475a226e33d8",
  "channelOrderDisplayId": "TEST1626898082",
  "channelOrderId": "TEST1626898082",
  "channelOrderRawId": "60f87ea2f0a2c5c61331dbea",
  "courier": {
    "deliveryBy": "restaurant"
  },
  "customer": {
    "companyName": "",
    "email": "",
    "name": "",
    "phoneNumber": ""
  },
  "decimalDigits": 2,
  "deliveryAddress": {
    "city": "Helsinki",
    "extraAddressInfo": "",
    "postalCode": "00100",
    "street": "Huuvatie",
    "streetNumber": "1"
  },
  "deliveryCost": 0,
  "deliveryIsAsap": true,
  "deliveryTime": "2021-07-22T20:38:02.000000Z",
  "discountTotal": 0,
  "historyDriverUpdates": [],
  "items": [
    {
      "isInternal": true,
      "name": "Hawaii Burger",
      "plu": "CAT1-0001",
      "price": 0,
      "productType": 1,
      "quantity": 1,
      "sortOrder": 0,
      "subItems": []
    },
    {
      "isInternal": true,
      "name": "Sushi Set Large",
      "plu": "CAT2-0001",
      "price": 0,
      "productType": 1,
      "quantity": 1,
      "sortOrder": 0,
      "subItems": []
    }
  ],
  "location": "60bfc703fb00bf782b363185",
  "note": "",
  "numberOfCustomers": 1,
  "orderIsAlreadyPaid": true,
  "orderType": 2,
  "packaging": {
    "includeCutlery": true
  },
  "payment": {
    "amount": 3500,
    "due": 0,
    "type": 0
  },
  "pickupTime": "2021-07-22T20:28:02.000000Z",
  "pos": 10000,
  "posId": "",
  "posLocationId": "",
  "posReceiptId": "",
  "rating": [],
  "recent": true,
  "resolvedBy": "",
  "serviceCharge": 0,
  "status": 1,
  "statusHistory": [
    {
      "response": "",
      "source": 2,
      "status": 4,
      "timeStamp": "2021-07-22T20:08:02.000000Z"
    },
    {
      "response": "",
      "source": 5,
      "status": 1,
      "timeStamp": "2021-07-22T20:00:02.000000Z"
    }
  ],
  "taxes": [],
  "tip": 0
}
