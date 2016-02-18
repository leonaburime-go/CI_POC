var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var request = require('request');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var PORT = 3001;

function getMsgPromise(resolve, reject){

  request('http://localhost:' + PORT, function(error, response, body){
  	debugger
	    //	    console.log(error);
	    //console.log(response);
	    //console.log(body);

		if(!error && response.statusCode == 200){
	    console.log(body);
	    resolve(body)
		}
		else{
			reject(body);
		}

  })

}
/*
it('should always fail', function(){

	return expect(1).to.equal(2);

})
*/

it('should always pass', function(){                                                                                                                                                                      
                                                                                                                                                                                                      
        return expect(1).to.equal(1);                                                                                                                                                                                                                                                                                                                                                                             
}) 

it('should return phrase "Are you connecting" asynchronously', function() {
  
  var result = new Promise(getMsgPromise);

  return expect(result).to.eventually.equal('Are you connecting');
});



