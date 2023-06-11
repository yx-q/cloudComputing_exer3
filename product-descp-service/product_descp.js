module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond){

        for(let i in mockData){
            if(mockData[i].product_id == msg.product_id){
                var res = "Product url is " + mockData[i].product_url;
                respond(null, { result: res });
            }else{
                respond(null, { result: 'No such product' });
            }
        }
    }
    
    function productName(msg, respond){

        for(let i in mockData){
            if(mockData[i].product_id == msg.product_id){
                var res = "Product name is " + mockData[i].product_name;
                respond(null, { result: res });
            }else{
                respond(null, { result: 'No such product' });
            }
        }
    }

}