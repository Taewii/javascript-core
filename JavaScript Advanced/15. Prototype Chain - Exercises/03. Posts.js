function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = +likes;
      this.dislikes = +dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let output = super.toString() + '\n';
      output += `Rating: ${this.likes - this.dislikes}`;
      if (this.comments.length > 0) {
        output += '\nComments:\n';
        this.comments.forEach(comment => output += ` * ${comment}\n`);
      }

      return output.trim();
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      let output = super.toString() + '\n';
      output += 'Views: ' + this.views;
      return output;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost
  };
}

let posts = solve();
let post = new posts.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new posts.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());