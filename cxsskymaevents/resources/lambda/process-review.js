const request = require('request');
const fs = require('fs');

const traceHeaders = ['x-request-id', 'x-b3-traceid', 'x-b3-spanid', 'x-b3-parentspanid', 'x-b3-sampled', 'x-b3-Flags', 'x-ot-span-context'];
const PARAM_CODE = "code";

var serviceurl;
var serviceuid;
var servicepw ;

//
// If service connection params are provided as env variables:
//
// serviceurl = `${process.env.SERVICE_URL}`;
// serviceuid = `${process.env.SERVICE_UID}`;
// servicepw = `${process.env.SERVICE_PW}`;

var gatewayurl = `${process.env.GATEWAY_URL}`;
var basesite = `${process.env.BASE_SITE}`;
var userid;

console.log(`********** gatewayurl:\n${gatewayurl}`);
console.log(`********** basesite:\n${basesite}`);

module.exports = { main: function (event, context) {
        console.log('********** Event Data:');
        console.log(event.data);

//
// If service connection params are provided in a secret:
//
        serviceurl = `${fs.readFileSync('/ecc-odata-review-service/SERVICE_URL')}`;
        serviceuid = `${fs.readFileSync('/ecc-odata-review-service/SERVICE_UID')}`;
        servicepw = `${fs.readFileSync('/ecc-odata-review-service/SERVICE_PW')}`;

        var reviewcode = event.data.reviewcode;

        if (serviceurl === undefined) {
            console.log('Environment variable SERVICE_URL is not defined');
        }

        var traceCtxHeaders = extractTraceHeaders(event.extensions.request.headers);

        getReviewDetails(reviewcode, traceCtxHeaders);



    }};

function getReviewDetails(reviewcode, traceCtxHeaders) {
    console.log("********** getReviewDetails()");

    var url = `${serviceurl}/CustomerReviews('${reviewcode}')`;

    console.log(`********** url: ${url}`);
    console.log(`********** uid: ${serviceuid}`);
    console.log(`********** pw : ${servicepw}`);

    request.get({
        headers: traceCtxHeaders, url: url, json: true,
        auth: {
            user: serviceuid,
            pass: servicepw,
            'sendImmediately': false
        }
    }, function (error, response, body) {

        if (error === null) {
            console.log(`********** Response.statusCode:\n${response.statusCode}`);
            if (response.statusCode == '200') {
                console.log('********** Response body:');
                console.log(body);
                console.log(`********** User reference:\n${body.d.user.__deferred.uri}`);
                var userUri = body.d.user.__deferred.uri;
                getReviewUser(userUri, traceCtxHeaders);

            } else {
                console.log('Call to ODATA webservice failed with status code ' + response.statusCode);
                console.log('********** Response body:');
                console.log(response.body);
            }
        } else {
            console.log('********** Error:');
            console.log(error);
        }
    });

}

function getReviewUser(userUri, traceCtxHeaders) {
    console.log("********** getReviewUser()");
    var url = userUri;
    request.get({
        headers: traceCtxHeaders, url: url, json: true,
        auth: {
            user: serviceuid,
            pass: servicepw,
            'sendImmediately': false
        }
    }, function (error, response, body) {

        if (error === null) {
            console.log(`********** Response.statusCode:\n${response.statusCode}`);
            if (response.statusCode == '200') {
                console.log('********** Response body:');
                console.log(body);

                userid = body.d.uid;
                console.log(`********** UID:\n${userid}`);
                getUserDetails(userid,traceCtxHeaders);
            } else {
                console.log('Call to ODATA webservice failed with status code ' + response.statusCode);
                console.log('********** Response body:');
                console.log(response.body);
            }
        } else {
            console.log('********** Error:');
            console.log(error);
        }
    });

}

function getUserDetails(userid, traceCtxHeaders){
    console.log("********** getUserDetails()");
    console.log(`********** userid:\n${userid}`);
    console.log(`********** gatewayurl:\n${gatewayurl}`);
    console.log(`********** basesite:\n${basesite}`);
    var url = `${gatewayurl}/${basesite}/users/${userid}?fields=FULL`;
    request.get({headers:traceCtxHeaders, url: url, json: true}, function(error, response, body) {
        if(error === null) {
            console.log(response.statusCode);
            if(response.statusCode == '200'){
                console.log(`****** User uid: ${userid} Name: ${body.firstName} ${body.lastName}` );
                console.log(body);
            }else{
                console.log('Call to EC webservice failed with status code ' + response.statusCode);
                console.log(response.body);
            }
        } else {
            console.log(error);
        }
    });
}


function extractTraceHeaders(headers) {
    console.log("********** extractTraceHeaders()");
    console.log(headers);
    var map = {};
    for (var i in traceHeaders) {
        h = traceHeaders[i];
        headerVal = headers[h];
        console.log('header' + h + "-" + headerVal);
        if (headerVal !== undefined) {
            console.log('if not undefined header' + h + "-" + headerVal);
            map[h] = headerVal;
        }
    }
    return map;

}