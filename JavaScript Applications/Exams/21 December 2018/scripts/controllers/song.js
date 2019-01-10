const song = (() => {
  const validateSong = (title, artist, imageURL) => {
    if (!title || !artist || !imageURL) {
      notification.error('All fields are required.');
      return false;
    }

    if (title.length < 6) {
      notification.error('The title should be at least 6 characters long.');
      return false;
    }

    if (artist.length < 3) {
      notification.error('The artist should be at least 3 characters long.');
      return false;
    }

    if (!imageURL.startsWith('http://') && !imageURL.startsWith('https://')) {
      notification.error('The image should start with "http://" or "https://"');
      return false;
    }

    return true;
  };

  const all = (ctx) => {
    const userId = ctx.id;
    Promise.all([songModel.getAll(userId), songModel.mine(userId)])
      .then(([others, mine]) => {
        ctx.otherSongs = others.map(song => {
          song.isAuthor = song._acl.creator === userId;
          return song;
        });
        ctx.mySongs = mine.map(song => {
          song.isAuthor = song._acl.creator === userId;
          return song;
        });
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          song: '/templates/song/song.hbs',
          section: '/templates/song/all-songs.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      })
      .catch(notification.handleError);
  };

  const getCreate = (ctx) => {
    ctx.loadPartials({
      header: '/templates/common/header.hbs',
      footer: '/templates/common/footer.hbs',
      section: '/templates/song/create.hbs'
    }).then(function () {
      ctx.partials = this.partials;
      ctx.partial('/templates/common/main.hbs');
    });
  };

  const postCreate = (ctx) => {
    const title = ctx.params.title;
    const artist = ctx.params.artist;
    const imageURL = ctx.params.imageURL;

    if (validateSong(title, artist, imageURL)) {
      const data = {
        title,
        artist,
        imageURL,
        likes: 0,
        listened: 0
      };
      songModel.create(data)
        .done(() => {
          notification.info('Song created successfully.');
          ctx.redirect('#/all');
        })
        .fail(notification.handleError);
    }
  };

  const mine = (ctx) => {
    songModel.mine(ctx.id)
      .done(data => {
        ctx.songs = data;
        ctx.loadPartials({
          header: '/templates/common/header.hbs',
          footer: '/templates/common/footer.hbs',
          song: '/templates/song/my-song.hbs',
          section: '/templates/song/my-songs.hbs'
        }).then(function () {
          ctx.partials = this.partials;
          ctx.partial('/templates/common/main.hbs');
        });
      });
  };

  const like = (ctx) => {
    const id = ctx.params.id;
    songModel.get(id)
      .done(song => {
        song.likes = +song.likes + 1;
        songModel.edit(id, song)
          .done(() => {
            notification.info('Liked!');
            ctx.redirect('#/all');
          })
          .fail(notification.handleError);
      })
      .fail(notification.handleError);
  };

  const listen = (ctx) => {
    const id = ctx.params.id;
    songModel.get(id)
      .done(song => {
        song.listened = +song.listened + 1;
        songModel.edit(id, song)
          .done(() => {
            notification.info(`You just listened ${song.title}`);
            ctx.redirect('#/all');
          })
          .fail(notification.handleError);
      })
      .fail(notification.handleError);
  };

  const remove = (ctx) => {
    const id = ctx.params.id;
    songModel.remove(id)
      .done(() => {
        notification.info('Song removed successfully!');
        ctx.redirect('#/all');
      })
      .fail(notification.handleError);
  };

  return {
    all,
    getCreate,
    postCreate,
    mine,
    like,
    listen,
    remove,
  };
})();