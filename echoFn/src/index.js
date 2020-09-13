// test echo with upload

exports.handler = async (event) => {
  
    const response = {
        statusCode: 200,
        body:JSON.stringify(event)
    };
    
    
    console.log(JSON.stringify(event))
    
    return response;
};
