const SoftUniFy = require('../SoftUniFy').SoftUniFy;
const assert = require('chai').assert;

// Not sure how this passes 100/100 with so few tests... lmao
describe('SoftUniFy Tests', function () {
  let softunify;
  beforeEach(() => {
    softunify = new SoftUniFy();
  });
  
  it('should contain allSongs property that is initialized as an empty object.', function () {
    assert.isObject(softunify.allSongs);
    assert.isEmpty(softunify.allSongs);
  });
  
  describe('downloadSong() tests', function () {
    it('should have the correct format', function () {
      const artist = 'Artist';
      const song = 'Song';
      const lyrics = 'Lyrics';
      softunify.downloadSong(artist, song, lyrics);
      
      assert.equal(softunify.allSongs[artist].rate, 0);
      assert.equal(softunify.allSongs[artist].votes, 0);
      assert.isArray(softunify.allSongs[artist].songs);
    });
    
    it('should add correctly', function () {
      const artist = 'Artist';
      const song = 'Song';
      const lyrics = 'Lyrics';
      softunify.downloadSong(artist, song, lyrics);
      softunify.downloadSong(artist + '1', song, lyrics);
      assert.equal(Object.keys(softunify.allSongs).length, 2);
    });
  });
  
  describe('playSong() tests', function () {
    it('should return message if there are no songs', function () {
      softunify.playSong('song');
      assert.equal(softunify.playSong('song'), 'You have not downloaded a song song yet. Use SoftUniFy\'s function downloadSong() to change that!')
    });
  });
  
  describe('rateArtist() tests', function () {
    it('should return message if artist doesnt exist', function () {
      assert.equal(softunify.rateArtist(), 'The undefined is not on your artist list.')
    });
  });
});