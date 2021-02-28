const name = 'Zach';
const prefix = ['the greatest', 'the mostest', 'the biggest', 'the hugest', 'the el chungo grandeist', 'the kingeyest', 'the queenyest'];
const adjective = ['most adorable', 'most attractive', 'most beautiful', 'most cute', 'most elegent', 'most gorgeous'];
const adjective2 = ['likeable', 'witty', 'sensible', 'trustworthy', 'sympathetic', 'generous', 'considerate'];
const descriptor = ['human', 'person', 'bastard', 'individual', 'fellow', 'chicken', 'dude', 'sod', 'chap(ette)'];

const randomPrefix = prefix => {
    return prefix[Math.floor(Math.random() *prefix.length)];
};

const randomAdjective = adjective => {
    return adjective[Math.floor(Math.random() *adjective.length)];
};

const randomAdjective2 = adjective2 => {
    return adjective2[Math.floor(Math.random() *adjective2.length)];
};

const randomDescriptor = descriptor => {
    return descriptor[Math.floor(Math.random() *descriptor.length)];
};





console.log(randomPrefix(prefix));
console.log(randomAdjective(adjective));
console.log(randomAdjective2(adjective2));
console.log(randomDescriptor(descriptor));

console.log(`Hello ${name}, you are ${prefix[2]}, ${adjective[4]} and ${adjective2[0]} ${descriptor[6]} of all time :)`)