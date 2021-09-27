# trust

Utility library to add Rust idioms into 

### installing

```
npm install @ollopa/trust
```

```
yarn add @ollopa/trust
```

Add `"experimentalDecorators": true,` to your `tsconfig.json` file.


## Docs

The purpose of this library is to give Typescript ergonomic Rust idioms. 

Please open a RFC issue if an API can be improved in any way.

### match

Very open for suggestions on a better API for this.

WIP. Needs `range`, `default`, etc.

```typescript
const token: { type: 'semi' | 'identifier' | 'unknown', value: string } = getToken()

const result = match(token.type,
  // match arms
  ['semi', handleSemi(token)],
  ['identifier', handleIdentifier(token)],
  ['unknown', handleUnknown(token)],
)


```

`match` returns an `Option` because of limitations with typing. For example...

```typescript
match('some string',
  ['yeet', 'yoot']
)
```

...will never match to anything and therefore will return an `Option.None`.

### Var

Utility type to create a sum type.

```typescript
type ASTNode = 
  Var<'int' | 'string' | 'infix', { token: string }> // the `token` data is common across all nodes
  & ( // Enum variants
    Var<'int', { value: number }> | 
    Var<'string', { value: string }> |
    Var<'infix', { operator: '+' | '-', left: ASTNode, right: ASTNode }> 
  )
```