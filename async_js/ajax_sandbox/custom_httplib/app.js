const http = new EasyHTTP();

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//   function(err, posts) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function(err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Create Data
const data = { title: 'Custom Post', body: 'This is a custom post' };

// http.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   data,
//   function (err, post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Update Post
// http.put(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Delete Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',
  function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
});