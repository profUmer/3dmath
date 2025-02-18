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
  "id": "sec-plane-basics",
  "level": "1",
  "url": "sec-plane-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Plane basics",
  "body": " Plane basics  It might be useful to start with something that is not a plane, as shown below.   The curvature of space-time around a massive object is not a plane.    "
},
{
  "id": "figure-not-a-plane",
  "level": "2",
  "url": "sec-plane-basics.html#figure-not-a-plane",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The curvature of space-time around a massive object is not a plane.   "
},
{
  "id": "sec-plane-code-start",
  "level": "1",
  "url": "sec-plane-code-start.html",
  "type": "Section",
  "number": "1.2",
  "title": "Starting a Plane class",
  "body": " Starting a Plane class   A bare-bones Plane class   struct Plane { \/\/\/ Standard Euclidean definition ax + by + cz - d = 0 float x, y, z, d; };    "
},
{
  "id": "listing-plane-code-start",
  "level": "2",
  "url": "sec-plane-code-start.html#listing-plane-code-start",
  "type": "Listing",
  "number": "1.2.1",
  "title": "",
  "body": " A bare-bones Plane class   struct Plane { \/\/\/ Standard Euclidean definition ax + by + cz - d = 0 float x, y, z, d; };   "
},
{
  "id": "sec-quaternion-code-start",
  "level": "1",
  "url": "sec-quaternion-code-start.html",
  "type": "Section",
  "number": "2.1",
  "title": "Starting a Quaternion class",
  "body": " Starting a Quaternion class   A bare-bones Quaternion class   struct Quaternion { float w; Vec3 ijk; \/\/\/ These are the ijk components of the Quaternion };    "
},
{
  "id": "listing-quaternion-code-start",
  "level": "2",
  "url": "sec-quaternion-code-start.html#listing-quaternion-code-start",
  "type": "Listing",
  "number": "2.1.1",
  "title": "",
  "body": " A bare-bones Quaternion class   struct Quaternion { float w; Vec3 ijk; \/\/\/ These are the ijk components of the Quaternion };   "
},
{
  "id": "sec-vector-code-start",
  "level": "1",
  "url": "sec-vector-code-start.html",
  "type": "Section",
  "number": "3.1",
  "title": "Starting a 4D Vector class",
  "body": " Starting a 4D Vector class   A bare-bones 4D vector class   struct Vec4 { float x, y, z, w; };    "
},
{
  "id": "listing-vector-code-start",
  "level": "2",
  "url": "sec-vector-code-start.html#listing-vector-code-start",
  "type": "Listing",
  "number": "3.1.1",
  "title": "",
  "body": " A bare-bones 4D vector class   struct Vec4 { float x, y, z, w; };   "
},
{
  "id": "sec-matrix-code-start",
  "level": "1",
  "url": "sec-matrix-code-start.html",
  "type": "Section",
  "number": "4.1",
  "title": "Starting a 4D matrix class",
  "body": " Starting a 4D matrix class   A bare-bones 4x4 matrix class   class Matrix4 { \/\/\/ Let's just make sure that all is clear about how this matrix is layed out. \/\/\/ How a matrix is really layed out is pretty much abitrary but we need to agree \/\/\/ and the world has agreed (except for Microsoft) on the right-hand rule. \/\/\/ First, the 4x4 matrix is really just an array of 16 numbers. \/\/\/ We need to think of the array as a matrix in the following way \/\/\/ 4x4 matrix - COLUMN MAJOR - The OpenGL, science, physics, mathematics and engineering way. \/\/\/ 0 4 8 12 [0][0] [1][0] [2][0] [3][0] \/\/\/ 1 5 9 13 (or) [0][1] [1][1] [2][1] [3][1] \/\/\/ 2 6 10 14 [0][2] [1][2] [2][2] [3][2] \/\/\/ 3 7 11 15 [0][3] [1][3] [2][3] [3][3] private: float m[16]; };    "
},
{
  "id": "listing-matrix-code-start",
  "level": "2",
  "url": "sec-matrix-code-start.html#listing-matrix-code-start",
  "type": "Listing",
  "number": "4.1.1",
  "title": "",
  "body": " A bare-bones 4x4 matrix class   class Matrix4 { \/\/\/ Let's just make sure that all is clear about how this matrix is layed out. \/\/\/ How a matrix is really layed out is pretty much abitrary but we need to agree \/\/\/ and the world has agreed (except for Microsoft) on the right-hand rule. \/\/\/ First, the 4x4 matrix is really just an array of 16 numbers. \/\/\/ We need to think of the array as a matrix in the following way \/\/\/ 4x4 matrix - COLUMN MAJOR - The OpenGL, science, physics, mathematics and engineering way. \/\/\/ 0 4 8 12 [0][0] [1][0] [2][0] [3][0] \/\/\/ 1 5 9 13 (or) [0][1] [1][1] [2][1] [3][1] \/\/\/ 2 6 10 14 [0][2] [1][2] [2][2] [3][2] \/\/\/ 3 7 11 15 [0][3] [1][3] [2][3] [3][3] private: float m[16]; };   "
},
{
  "id": "sec-dualquat-code-start",
  "level": "1",
  "url": "sec-dualquat-code-start.html",
  "type": "Section",
  "number": "5.1",
  "title": "Starting a Dual Quaternion class",
  "body": " Starting a Dual Quaternion class   A bare-bones Dual Quaternion class   struct DualQuat { float real; float e23; \/\/\/ This is like -i for a regular quaternion. Squares to -1 float e31; \/\/\/ -j float e12; \/\/\/ -k float e01; \/\/\/ Every term with a zero in it squares to zero. It's how translations are handled. float e02; float e03; float e0123; };    "
},
{
  "id": "listing-dualquat-code-start",
  "level": "2",
  "url": "sec-dualquat-code-start.html#listing-dualquat-code-start",
  "type": "Listing",
  "number": "5.1.1",
  "title": "",
  "body": " A bare-bones Dual Quaternion class   struct DualQuat { float real; float e23; \/\/\/ This is like -i for a regular quaternion. Squares to -1 float e31; \/\/\/ -j float e12; \/\/\/ -k float e01; \/\/\/ Every term with a zero in it squares to zero. It's how translations are handled. float e02; float e03; float e0123; };   "
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
