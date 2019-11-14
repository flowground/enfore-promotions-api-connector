# ![LOGO](logo.png) enfore Promotions API **flow**ground Connector

## Description

A generated **flow**ground connector for the enfore Promotions API API (version 0.0.4).

Generated from: /<br/>
Generated at: 2019-11-14T12:59:13+00:00

## API Description

enfore API for managing promotions and related objects<br/>
<br/>
Sales vouchers represent a liability of the business against whoever owns the voucher.<br/>
<br/>
The enfore platform supports three types of sales vouchers:<br/>
**gift cards**, **product vouchers**, and **category vouchers**.<br/>

## Authorization

This API does not require authorization.

## Actions

### Iterate over gift cards.
> Returns gift cards, sorted in ascending order by `issued_date_and_time`.<br/>
> For gift cards without such a value, the timestamp of their import into the system is used instead.<br/>

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>
* `number` - _optional_ - When specified, only gift cards with the specified number are returned.<br/>
* `external_number` - _optional_ - When specified, only gift cards with the specified external number are returned.<br/>

### Create a new external gift card

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Update the activation status of an external gift card

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `gift-card-id` - _required_ - ID of the gift card<br/>

### Load a gift card.

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `gift-card-id` - _required_ - ID of the gift card<br/>

### Get a list of registered consumers for gift card changes.
> Retrieve all currently active event subscriptions.<br/>

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Register an event consumer with the API.

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Delete a subscription for gift card updates

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `subscription-id` - _required_ - ID of the subscription to delete<br/>

### Iterate over the redemptions of a gift card.
> Returns redemptions of the gift card sorted ascending order by `transaction_date_and_time`.<br/>

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `gift-card-id` - _required_ - ID of the gift card<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>

### Record a new external redemption for a gift card

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `gift-card-id` - _required_ - ID of the gift card<br/>

### Load a gift card redemption.

*Tags:* `Sales Vouchers: Gift Cards`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `gift-card-id` - _required_ - ID of the gift card<br/>
* `gift-card-redemption-id` - _required_ - ID of the gift card redemption<br/>

### Iterate over product vouchers.
> Returns product vouchers, sorted in ascending order by `issued_date_and_time`.<br/>
> For product vouchers without such a value, the timestamp of their import into the system is used instead.<br/>

*Tags:* `Sales Vouchers: Product Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>
* `number` - _optional_ - When specified, only product vouchers with the specified number are returned.<br/>
* `external_number` - _optional_ - When specified, only product vouchers with the specified external number are returned.<br/>

### Load a product voucher.

*Tags:* `Sales Vouchers: Product Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `product-voucher-id` - _required_ - ID of the product voucher<br/>

### Get a list of registered consumers for product vouchers events.
> Retrieve all currently active event subscriptions.<br/>

*Tags:* `Sales Vouchers: Product Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Register an event consumer with the API.

*Tags:* `Sales Vouchers: Product Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Delete a subscription for product voucher updates

*Tags:* `Sales Vouchers: Product Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `subscription-id` - _required_ - ID of the subscription to delete<br/>

### Iterate over category vouchers.
> Returns category vouchers, sorted in ascending order by `issued_date_and_time`.<br/>
> For category vouchers without such a value, the timestamp of their import into the system is used instead.<br/>

*Tags:* `Sales Vouchers: Category Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `from` - _required_ - Defines the time starting from which objects are to be returned.<br/>
Objects with exactly this date are also returned - this means that the start of a left-closed interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `to` - _required_ - Defines the time up to which objects are to be returned.<br/>
Objects with exactly this date are not returned - this means that the end of a right-open interval is defined.<br/>
Timestamp in UTC. The date-time notation as defined by RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt), section 5.6, with the "Z" as time-offset. For example, 2017-07-21T17:32:28.123Z<br/>
* `limit` - _optional_ - Max number of objects to be returned per page.<br/>
Note that both the `items` as well as the `problems` arrays of the query response count towards this number to allow a simple,<br/>
consistent paging over all items (and problems) of a given timeframe.<br/>
If not given, defaults to `200`.<br/>
* `offset` - _optional_ - Offset of items and problems of where to start the next page.<br/>
Similar to limit and offset in SQL, one would obtain the second page with `limit=10&offset=10`.<br/>
Note that this paging with limit and offset is within a time interval that is specified with `from` and `to`.<br/>
If not given, defaults to `0`.<br/>
* `number` - _optional_ - When specified, only category vouchers with the specified number are returned.<br/>
* `external_number` - _optional_ - When specified, only category vouchers with the specified external number are returned.<br/>

### Load a category voucher.

*Tags:* `Sales Vouchers: Category Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `category-voucher-id` - _required_ - ID of the category voucher<br/>

### Get a list of registered consumers for category voucher events.
> Retrieve all currently active event subscriptions.<br/>

*Tags:* `Sales Vouchers: Category Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Register an event consumer with the API.

*Tags:* `Sales Vouchers: Category Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>

### Delete a subscription for category voucher updates

*Tags:* `Sales Vouchers: Category Vouchers`

#### Input Parameters
* `org-id` - _required_ - ID of the organization whose data is being accessed.<br/>
* `subscription-id` - _required_ - ID of the subscription to delete<br/>

## License

**flow**ground :- Telekom iPaaS / enfore-promotions-api-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
