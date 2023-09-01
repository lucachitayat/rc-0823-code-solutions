/* exported toObject */

function toObject(keyValuePair) {
  const propertyPair = {};
  propertyPair[keyValuePair[0]] = keyValuePair[1];
  return propertyPair;
}
