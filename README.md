<h1 align = 'center'> Nodejs-S3</h1>

<div align="center">

[![](https://img.shields.io/badge/Made_with-Nodejs-green?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)

</div>

### About

This repo contains functions to create s3 bucket, upload files,list buckets,list objects,delete bucket using node js <br><br>
You can read blog version of it here
<br>

<h2>Gyaanibuddy:</h2>
- <a href="https://www.gyaanibuddy.com/">
  Part1 - Setting up AWS S3 
</a><br>
- <a href="https://www.gyaanibuddy.com/">
 Part2 - Node js implementation
</a>
<br>

<h2>Medium:</h2>
- <a href="https://medium.com/@rugved-bongale/using-node-js-s3-to-create-delete-list-buckets-and-upload-list-objects-part-1-b9943825c666">
  Part1 - Setting up AWS S3 
</a><br>
- <a href="https://medium.com/@rugved-bongale/using-node-js-s3-to-create-delete-list-buckets-and-upload-list-objects-part-2-fb1b76da36dc">
 Part2 - Node js implementation
</a>
<br>

------------------------------------------
### Installation

Clone the repository and install node modules
```
git clone https://github.com/RugvedB/Nodejs-s3
cd Nodejs-s3
npm i
```
Add AWS S3 accessKeyId and secretAccessKey
```
const s3 = new AWS.S3({
    accessKeyId: "ENTER YOUR accessKeyId",
    secretAccessKey: "ENTER YOUR secretAccessKey",
});
```

Run 
```
node index.js
```


------------------------------------------
<h3 align="center"><b>Developed with :heart: by <a href="https://github.com/rugvedb">Rugved</a></h1>
