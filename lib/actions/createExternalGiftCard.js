/**
 * Auto-generated action file for "enfore Promotions API" API.
 *
 * Generated at: 2019-11-14T12:59:13.552Z
 * Mass generator version: 1.0.0
 *
 * flowground :- Telekom iPaaS / enfore-promotions-api-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'createExternalGiftCard'
 * Endpoint Path: '/org/{org-id}/sales-vouchers/gift-cards'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "org-id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "org_id": "org-id",
    "id": "id",
    "name": "name",
    "number": "number",
    "external_number": "external_number",
    "status": "status",
    "value": "value",
    "unit": "unit",
    "current_balance": "current_balance",
    "initial_balance": "initial_balance",
    "issued_date_and_time": "issued_date_and_time",
    "expiration_date_and_time": "expiration_date_and_time",
    "last_used_date_and_time": "last_used_date_and_time",
    "tax": "tax",
    "source_product": "source_product",
    "sold_via_invoice": "sold_via_invoice",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'createExternalGiftCard',
        pathName: '/org/{org-id}/sales-vouchers/gift-cards',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}