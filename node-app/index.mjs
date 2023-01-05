import fs from 'fs';

fs.appendFile('my-file.txt', 'File created in Node', (err) => {
    if (err) {
        throw err
    }
    console.log('File successfully saved');
});

setTimeout(() => {
    console.log('Finish');
}, 30000);
