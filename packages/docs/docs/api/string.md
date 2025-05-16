# 字符串工具

## toCamelCase

将字符串转换为驼峰命名。

### 类型定义

```ts
function toCamelCase(str: string): string
```

### 示例

```ts
import { toCamelCase } from 'universal-tools'

toCamelCase('hello-world') // 'helloWorld'
toCamelCase('hello_world') // 'helloWorld'
toCamelCase('HelloWorld') // 'helloWorld'
```

## toKebabCase

将字符串转换为短横线命名。

### 类型定义

```ts
function toKebabCase(str: string): string
```

### 示例

```ts
import { toKebabCase } from 'universal-tools'

toKebabCase('helloWorld') // 'hello-world'
toKebabCase('hello_world') // 'hello-world'
toKebabCase('HelloWorld') // 'hello-world'
```

## capitalize

将字符串首字母大写。

### 类型定义

```ts
function capitalize(str: string): string
```

### 示例

```ts
import { capitalize } from 'universal-tools'

capitalize('hello') // 'Hello'
capitalize('world') // 'World'
``` 
