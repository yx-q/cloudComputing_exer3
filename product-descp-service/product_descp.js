module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond){
        if(msg.productId){
            for(let i = 0; i < mockData.length; i++){
                if(mockData[i].product_id == msg.productId){
                    var res = mockData[i].product_url;
                    respond(null, { result: res });
                    break;
                }
            }
        }else{
            respond(null, { result: -1 });
        }
    }
    
    function productName(msg, respond){
        if(msg.productId){
            for(let i = 0; i < mockData.length; i++){
                if(mockData[i].product_id == msg.productId){
                    var res = mockData[i].product_name;
                    respond(null, { result: res });
                    break;
                }
            }
        }else{
            respond(null, { result: -1 });
        }
    }

}
