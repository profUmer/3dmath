var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-planes",
  "level": "1",
  "url": "ch-planes.html",
  "type": "Chapter",
  "number": "1",
  "title": "Planes",
  "body": " Planes   When I say \"Planes\", I mean an infinitely thin and flat sheet that stretches on and on forever. I know what you are thinking - how can they possibly be useful for 3D graphics which is definitely not rendered on an infinitely large screen? Well, it turns out that planes can be combined together to make lines and points and also reflect, rotate, and move objects too. Now that's useful!     "
},
{
  "id": "ch-quaternions",
  "level": "1",
  "url": "ch-quaternions.html",
  "type": "Chapter",
  "number": "2",
  "title": "Quaternions",
  "body": " Quaternions   Quaternions get a bad rap. It takes just one person to yell \"four dimensional imaginary numbers!\", and students run for their lives. Don't fall for the scare tactics - quaternions are just helpful creatures that love to rotate things. They are made by the intersection of two planes passing through the origin, giving the axis of rotation. You already know my favourite quaternion, the number 1.    "
},
{
  "id": "ch-vectors",
  "level": "1",
  "url": "ch-vectors.html",
  "type": "Chapter",
  "number": "3",
  "title": "Vectors",
  "body": " Vectors   Vectors are the bedrock of 3D graphics, but it is easy to mix up positions (x, y, z) and directions (also x, y, z). We'll use 4D vectors to help clear up this mix-up. Don't freak out, they are super easy to use. The extra number (called w), will be a one for positions or a zero for directions. Don't go down the rabbit hole of imagining the 4th dimension, there are only dragons there. Just think of them for now as a flag - 1 for points, and 0 for directions.    "
},
{
  "id": "ch-matrices",
  "level": "1",
  "url": "ch-matrices.html",
  "type": "Chapter",
  "number": "4",
  "title": "Matrices",
  "body": " Matrices   Ok, I admit it - I love quaternions. But all they can do is rotate things. What about moving positions around, making objects bigger or smaller, and even strange things like the perpective projection. Matrices fit the bill nicely here.    "
},
{
  "id": "ch-dualquats",
  "level": "1",
  "url": "ch-dualquats.html",
  "type": "Chapter",
  "number": "5",
  "title": "Dual Quaternions",
  "body": " Dual Quaternions   I find it annoying fiddling around with 16 numbers in a big 4x4 matrix. Isn't there an easier way to rotate and translate things? Yes! Welcome to dual quaternions. Remember how quaternions are just lines that go through the origin. Well what if the line went through something other than the origin? That's all a dual quaternion is, so no need to panic. They are created by two intersecting planes (creating that line I was talking about), and are made up of 8 numbers.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
