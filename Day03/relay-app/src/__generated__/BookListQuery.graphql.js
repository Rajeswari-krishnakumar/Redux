/**
 * @flow
 * @relayHash db914adb9b9fb0e3b27aef93bfd13206
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Book_book$ref = any;
export type BookListQueryVariables = {|
  price?: ?number,
|};
export type BookListQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Book_book$ref,
  |}>,
  +costlierBooks: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Book_book$ref,
  |}>,
|};
*/


/*
query BookListQuery(
  $price: Float
) {
  books {
    ...Book_book
    id
  }
  costlierBooks(price: $price) {
    ...Book_book
    id
  }
}

fragment Book_book on Book {
  id
  title
  price
  ...BookLink_item
}

fragment BookLink_item on Book {
  inStock
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "price",
    "type": "Float",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "Book_book",
    "args": null
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "price",
    "variableName": "price",
    "type": "Float"
  }
],
v3 = [
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
    "kind": "ScalarField",
    "alias": null,
    "name": "inStock",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookListQuery",
  "id": null,
  "text": "query BookListQuery(\n  $price: Float\n) {\n  books {\n    ...Book_book\n    id\n  }\n  costlierBooks(price: $price) {\n    ...Book_book\n    id\n  }\n}\n\nfragment Book_book on Book {\n  id\n  title\n  price\n  ...BookLink_item\n}\n\nfragment BookLink_item on Book {\n  inStock\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "books",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": true,
        "selections": v1
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "costlierBooks",
        "storageKey": null,
        "args": v2,
        "concreteType": "Book",
        "plural": true,
        "selections": v1
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "books",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": true,
        "selections": v3
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "costlierBooks",
        "storageKey": null,
        "args": v2,
        "concreteType": "Book",
        "plural": true,
        "selections": v3
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1f06924ea91eebafbd3a8c5fd1af6135';
module.exports = node;
