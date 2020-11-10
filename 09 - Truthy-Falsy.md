## TRUTHY
Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano. 
Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

O JavaScript usa coerção de tipo em contextos booleanos.

Exemplos de valores truthy em JavaScript (que se traduzirão em true, e então executar o bloco if):
```javascript
  if (true)
  if ({})
  if ([])
  if (42)
  if ("string")
  if (new Date())
  if (-42)
  if (3.14)
````

## FALSY
Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.
Exemplos de valores falsy em JavaScript (que se traduzirá em false e assim ignorar o bloco if):
```javascript
  if (false)
  if (null)
  if (undefined)
  if (0)
  if (NaN)
  if ('')
```
