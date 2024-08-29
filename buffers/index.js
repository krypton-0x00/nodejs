const buffer = require("buffer").Buffer;
const buf = Buffer.from([
  0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64,
]);
console.log(buf);
console.log(buf.toString("utf-8"));

//string to buffer
console.log(Buffer.from("hello world", "utf8"));
//buffers are quite similar to arrays. They use bracket indexing and assignment just like arrays, and they have a length property as well as a concat and a slice method that works in basically the same way as arrays. However unlike javascript arrays, javascript buffers have a fixed length.

//There are lot of ways to create a buffer but the simplest is probably just using the alloc method. If you know you’re going to fill up the buffer immediately then you can use allocUnsafe which is more efficient but doesn’t clear out random unused bytes from the buffer.
//Or you can use the from method, where you’ll most commonly be passing in an array of numbers, a string, or another buffer. If you pass a string, you’ll want to also pass an encoding (or use the default ‘utf8’).

//number
// create an empty buffer with length of 4 bytes.
const numBuf = Buffer.alloc(4);
console.log(numBuf);

// write the unsigned 32-bit, big-endian number 123 into the buffer starting
// at index 0 of the buffer.
numBuf.writeUInt32BE(123, 0);

// read the number starting at index 0
console.log(numBuf.readUInt32BE(0));
// outputs: 123

const Buffer = require("buffer").Buffer;

// create an empty buffer with length of 11 bytes.
const buf = Buffer.alloc(11);

// create two buffers, one that contains 'hello ', the other 'world'.
const word1 = Buffer.from("hello ", "utf8");
const word2 = Buffer.from("world", "utf8");

// copy the word buffers into `buf` at index 0 and 6 respectively.
word1.copy(buf, 0);
word2.copy(buf, 6);

console.log(buf.toString("utf8"));
// outputs 'hello world'
