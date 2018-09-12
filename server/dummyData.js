import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `What I love about Lupe Tortilla is that the beef is absolutely
      delicious. The first time I went here I couldn't believe how great the food tasted.
      The price is a little bit more for fajitas but well worth it!`;

    const content2 = `The fajitas here are absolutely delicious! Definitely a favorite
      of mine even though the plates don't come out sizzling. Everything is seasoned
      perfectly and the price is unbeatable. You HAVE to check them out!`;

    const post1 = new Post({ name: 'Admin', title: 'Lupe Tortilla', slug: 'lupe-tortilla', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ name: 'Admin', title: 'La Hacienda', slug: 'la-hacienda', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
