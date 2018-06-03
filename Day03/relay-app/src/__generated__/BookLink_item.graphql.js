/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookLink_item$ref: FragmentReference;
export type BookLink_item = {|
  +inStock: ?boolean,
  +$refType: BookLink_item$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookLink_item",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "inStock",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '423af005485308fcc121d166368a812e';
module.exports = node;
