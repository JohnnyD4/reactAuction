import { action, computed, observable } from 'mobx';

const dummyData = [
	{
		prodId: 1,
		prodName: '40" Flat Screen TV',
		startBid: 140.00,
		highBid: 220.50,
		description: 'Brand new 40 inch flat screen tv. Still in the box'
	},
	{
		prodId: 2,
		prodName: 'Microwave',
		startBid: 10.00,
		highBid: 34.50,
		description: 'Brand new microwave, unopened and ready to use'
	},
	{
		prodId: 3,
		prodName: 'Autographed Football',
		startBid: 300.00,
		highBid: 320.50,
		description: 'Football Signed by Dan Marino'
	},
	{
		prodId: 4,
		prodName: 'Autographed Jersey',
		startBid: 420.00,
		highBid: 650.25,
		description: 'Dan Marino jersey'
	},
	{
		prodId: 5,
		prodName: 'Dummy 5',
		startBid: 140.00,
		highBid: 220.50,
		description: 'Brand new 40 inch flat screen tv. Still in the box'
	},
	{
		prodId: 6,
		prodName: 'Dummy 6',
		startBid: 10.00,
		highBid: 34.50,
		description: 'Brand new microwave, unopened and ready to use'
	},
	{
		prodId: 7,
		prodName: 'Dummy 7',
		startBid: 300.00,
		highBid: 320.50,
		description: 'Football Signed by Dan Marino'
	},
	{
		prodId: 8,
		prodName: 'Dummy 8',
		startBid: 420.00,
		highBid: 650.25,
		description: 'Dan Marino jersey'
	}
]

class bidsStore {
	@observable prodId = null;
	@observable prodName = null;
	@observable startBid = null;
	@observable highBid = null;
	@observable description = null;
	@observable bids = null;
	@observable error = null;

	

	@action getBid(prodId) {
		// console.log(prodId);
		for (let i = 0; i < dummyData.length; i += 1) {
			if (dummyData[i].prodId == prodId) {
				this.prodId = Number(prodId);
				this.prodName = dummyData[i].prodName;
				this.startBid = Number(dummyData[i].startBid).toFixed(2);
				this.highBid = Number(dummyData[i].highBid).toFixed(2);
				this.description = dummyData[i].description;
				
			}
		}
	}

	@action getAllBids() {

			this.bids = dummyData;
		
	}

	@action postBid(newBid) {
		if (newBid > this.highBid) {
			this.highBid = newBid.toFixed(2);
			// alert('Congratulations you are now the highest bidder!');
		} else {
			console.log('error');
		}
		
	}
}

export default new bidsStore();