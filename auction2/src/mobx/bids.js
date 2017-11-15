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
	}
]

class bidsStore {
	@observable prodId = null;
	@observable prodName = null;
	@observable startBid = null;
	@observable highBid = null;
	@observable description = null;
	@observable bids = null;

	

	@action getBid(prodId) {
		// console.log(prodId);
		for (let i = 0; i < dummyData.length; i += 1) {
			if (dummyData[i].prodId == prodId) {
				this.prodId = prodId;
				this.prodName = dummyData[i].prodName;
				this.startBid = dummyData[i].startBid;
				this.highBid = dummyData[i].highBid;
				this.description = dummyData[i].description;
				
			}
		}
	}

	@action getAllBids(df) {

			this.bids = dummyData;
		
	}
}

export default new bidsStore();