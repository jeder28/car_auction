const auctionList = [{
  id: 1,
  car: '2018 Honda CRV',
  openingPrice: 1,
  bids: [],
}]

function createBid({ userId, price, auctionId }) {
  console.log('What is auctionId', auctionId);
  const auction = auctionList.find(auction => auction.id === auctionId);
  if (!auction) {
    throw Error('No Auction found.');
  }
  console.log('Did we find an auction', auction);
  const bids = auction.bids;
  console.log('Bids', bids);
  if (bids.length === 0) {
    if (price >= auction.openingPrice) {
      bids.push({ userId, price, auctionId });
      return { userId, price, auctionId, success: true };
    } else {
      throw Error('Price is not higher or equal to the opening price.');
    }
  }

  const highestBid = bids.reduce((curr, next) => {
    if (curr.price < next.price) {
      return next;
    } else {
      return curr;
    }
  }, bids[0])

  if (highestBid.price < price) {
    if (highestBid.userId !== userId) {
      bids.push({ userId, price, auctionId });
      return { userId, price, auctionId, success: true };
    } else {
      throw Error('User has already has the highest bid');
    }
  } else {
    throw Error('Price is not higher than the current bid');
  }
}

module.exports = createBid;