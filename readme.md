# Hello world javascript action

This action prints "yo bob" or "yo" + the name of a homie to greet to the log.

## Inputs

### `homie-to-greet`

**Required** The name of the person to greet. Default `"bob"`.

## Outputs

### `time`

The time homie was greeted.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'coetry'
