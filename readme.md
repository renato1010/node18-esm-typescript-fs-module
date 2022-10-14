## JS Meetup Guatemala, Oct 2022

### Introduccion

En esta sesión daremos una breve explicación de cómo escribir código node(versión 18) con Typescript.

Escribiremos código node(versión 18) usando módulos EcmaScript(ESM) en lugar del habitual CommonJS,  
todo con Typescript; por lo que podemos llamarlo Node.js moderno.

Esta oportunidad revisaremos el módulo 'fs' para crear algunos ejemplos de lectura/escritura de archivos locales,  
asi como también veremos un ejemplo de streams.

### Inciar el projecto

desde consola

```bash
npm init -y
```

Instalar las dependencias basicas:

```bash
npm install -D typescript ts-node @types/node
```

Con esto ya podemos inicial un proyecto node-typescript

Para definir las configuraciones relacionadas con Typescript, utilizaremos el paquete [tsconfig/bases](https://github.com/tsconfig/bases)  
que se definen como: Recomendaciones centralizadas para construir las bases de un configuracion TSConfig  
y utilizaremos la option **Node 18 + ESM + Strictes**
La forma de utilizar esta dependecia es muy sencillo:

1 creas el archivo `tsconfig.json` en el folder root y agregas

```bash
"extends": "@tsconfig/node18-strictest-esm/tsconfig.json"
```

2 luego puedes extender las opciones a gusto  
3 Yo utilizare `ts-node` para ejecutar el codigo y quiero que la transpilacion de TS sea por medio
de [swc](https://swc.rs/)  
por lo que agregare estas opciones:

```json
  "ts-node": {
    "esm": true,
    "swc": true
  }
```

esencialmente significa que queremos ejecutar directamente codigo de typescript y que se emplean  
EcmaScript modules, y la traspilacion debera estar a cargo de "swc" que es considerablemente mas rapido

Bien! ahora para ejecutar los scripts ejecutamos por ejemplo desde consola:

```bash
npx ts-node src/fs-module-sync.ts
```

### Detalles importantes

1 Para que Node.js sepa que utilizaremos ESM debemos agregar la option "type" al `package.json`

![type:module](https://losormorpino-public-media.s3.us-east-2.amazonaws.com/ja106hf.png)

2 Cuando usas los **ES modules** no tienes mas la utilidad node de **\_\_dirname**  
Asi que para crear la ruta a un archivo se debemos hacer algo como esto
👀 [src/fs-module-sync.ts](src/fs-module-sync.ts)

```ts
const filePath = new URL("./subfolder/test.txt", import.meta.url);
```

y este "filePath" que tiene type = URL los puedes pasar como parametro

```ts
const fileContent = readFileSync(filePath, { encoding: "utf-8" });
```

3 Otro detalle importante para tomar en cuenta es la forma de importar modulos de forma
relativa,  
un ejemplo de esto lo puedes 👀 [`src/streams-gzip.ts`](src/streams-gzip.ts):

```ts
import { getFilenameFromFilePath } from "./lib/utils.js";
```

_Es mandatorio importar modules con su respectiva extension_
