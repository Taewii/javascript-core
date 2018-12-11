function solution(command) {
  switch (command) {
    case 'upvote':
      this.upvotes++;
      break;
    case 'downvote':
      this.downvotes++;
      break;
    case 'score':
      const totalVotes = this.upvotes + this.downvotes;
      const balance = this.upvotes - this.downvotes;
      let inflation = 0;
      let rating = 'new';

      if (totalVotes > 50) {
        inflation = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
      }

      if (totalVotes >= 10) {
        if ((this.upvotes / totalVotes) > 0.66) {
          rating = 'hot';
        } else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
          rating = 'controversial';
        } else if (balance < 0) {
          rating = 'unpopular';
        }
      }

      return [this.upvotes + inflation, this.downvotes + inflation, balance, rating];
  }
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);
solution.call(post, 'downvote');
score = solution.call(post, 'score');
console.log(score);