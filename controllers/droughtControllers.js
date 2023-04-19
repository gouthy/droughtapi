
//@desc getonedroughtdata
//@route  GET/api/droughtstatus/:lat/:lon
//@access public 

const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv").config();

const AWS = require('aws-sdk');



const getSingleLocationData = asyncHandler(async (req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon;
    const s3 = new AWS.S3({
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.PASS_KEY,
        endpoint: process.env.end_point,
        s3ForcePathStyle: true,
        signatureVersion: 'v4'
      });
      
      const s3Params = {
          Bucket: 'temmdata',
          Key: 'droughtdata.tiff'
        };
      
      const s3Data = await s3.getObject(s3Params).promise();

      const geotiffData = await geoblaze.identify(s3Data.Body,[lat,lon]);
      
    if (isNaN(Number(lat)) || isNaN(Number(lon))) {
        res.status(400);
        throw new Error("The input should be a number")
    }

    res.status(200).json({message:geotiffData});
});

module.exports = {getSingleLocationData};


