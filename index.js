const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "ENTER YOUR accessKeyId",
    secretAccessKey: "ENTER YOUR secretAccessKey",
});

const BUCKET_NAME = 'random-name-bucket-234389'

const createBucket = (bucketName) => {
    // Create the parameters for calling createBucket
    var bucketParams = {
        Bucket : bucketName
    };
  
    // call S3 to create the bucket
    s3.createBucket(bucketParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.Location);
        }
    });
}

const listBuckets = (s3) => {
    s3.listBuckets(function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Buckets);
        }
    });
}

const uploadFile = (filePath,bucketName,keyName) => {
    var fs = require('fs');
    // Read the file
    const file = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    const uploadParams = {
        Bucket: bucketName, // Bucket into which you want to upload file
        Key: keyName, // Name by which you want to save it
        Body: file // Local file 
    };

    s3.upload(uploadParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } 
        if (data) {
            console.log("Upload Success", data.Location);
        }
    });
};

const listObjectsInBucket = (bucketName) => {
    // Create the parameters for calling listObjects
    var bucketParams = {
        Bucket : bucketName,
    };
  
    // Call S3 to obtain a list of the objects in the bucket
    s3.listObjects(bucketParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
}

const deleteBucket = (bucketName) => {
    // Create params for S3.deleteBucket
    var bucketParams = {
        Bucket : bucketName
    };
  
    // Call S3 to delete the bucket
    s3.deleteBucket(bucketParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
}

function sleep(ms) {
    console.log('Wait...')
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    console.log('\nCreating bucket : ')
    createBucket(BUCKET_NAME)
    await sleep(5000)
    
    console.log('\nListing out all the buckets in your AWS S3: ')
    listBuckets(s3)
    await sleep(5000)
    
    console.log('\nUploading image1 to '+ BUCKET_NAME)
    uploadFile('daniel-norin-lBhhnhndpE0-unsplash.jpg',BUCKET_NAME,"football.jpg")
    await sleep(5000)
    
    console.log('\nUploading image2 to '+ BUCKET_NAME)
    uploadFile('florian-olivo-4hbJ-eymZ1o-unsplash.jpg',BUCKET_NAME,"code.jpg")
    await sleep(5000)
    
    console.log('\nListing out all the files/objects in the bucket '+ BUCKET_NAME)
    listObjectsInBucket(BUCKET_NAME)
    await sleep(5000)
}
main()
