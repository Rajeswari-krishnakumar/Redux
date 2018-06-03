/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookLink_item$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Book_book$ref: FragmentReference;
export type Book_book = {|
  +id: ?string,
  +title: ?string,
  +price: ?number,
  +$fragmentRefs: BookLink_item$ref,
  +$refType: Book_book$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Book_book",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BookLink_item",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '2b23c11040457a92d34b9e236c5271ac';
module.exports = node;
