
//@desc getonedroughtdata
//@route  GET/api/droughtstatus/:lat/:lon
//@access public 


const getSingleLocationData = (req, res) => {
    const lat = req.params.lat;
    const lon = req.params.lon;
    if (isNaN(Number(lat)) || isNaN(Number(lon))) {
        res.status(400);
        throw new Error("The input should be a number")
    }

    res.status(200).json({message:`get data for ${lat} and ${lon}`});
};

module.exports = {getSingleLocationData};


