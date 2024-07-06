# Introdução a Tipagem e TypeScript

- TypeScript: linguagem pela Microsoft, extensão do JavaScript, código aberto.
- Tipagem estática opcional: tipos podem ser adicionados, mas não são obrigatórios.
- Usado para desenvolvimento web (front-end e back-end).

## Tipagem Estática e Dinâmica

- Tipagem: como as linguagens lidam com tipos de dados.

### Tipagem Dinâmica

- **Definição:** Tipo de variável determinado em tempo de execução, pode mudar.
- **Exemplo:** JavaScript, Python, Ruby. (Ex.: variável pode ser número e depois string).

### Tipagem Estática

- **Definição:** Tipo de variável determinado em tempo de compilação, não pode mudar.
- **Exemplo:** TypeScript, C, C++, Java. (Ex.: variável com tipo fixo, não pode mudar).

### Vantagens e Desvantagens

**Tipagem Estática:**
- **Vantagens:** Segurança, evita erros em compilação, código mais robusto.
- **Desvantagens:** Restritiva, requer declarações explícitas de tipos, mais código.

**Tipagem Dinâmica:**
- **Vantagens:** Flexível, permite mudanças de tipos, simplifica escrita inicial.
- **Desvantagens:** Erros inesperados em execução, depuração e manutenção desafiadoras.

## TypeScript e suas vantagens

### Verificação de Tipos Estáticos
- Define tipos estáticos para variáveis, funções e objetos.
- Compilador detecta erros em tempo de compilação.

### Melhor Suporte a IDEs
- Suporte robusto para autocompletar, navegação de código, renomeação e refatoração.

### Maior Escalabilidade
- Tipos estáticos e interfaces tornam o código mais escalável e de fácil manutenção.

### Intellisense
- Recursos de autocompletar, acesso rápido à documentação e métodos disponíveis.

### Facilidade na Refatoração
- Detecta automaticamente alterações necessárias durante a refatoração.

### Suporte a Novos Recursos do ECMAScript
- Acompanha atualizações do ECMAScript, suporte a novos recursos antes dos navegadores.

### Compatibilidade com Ecossistema JavaScript
- Superconjunto do JavaScript, compatível com bibliotecas e frameworks existentes.

### Documentação e Legibilidade
- Tipagem estática e interfaces melhoram a documentação e compreensão do código.


## Iniciando um Projeto TypeScript

### Inicialização do Projeto

1. Inicialização do Projeto

    a) Inicialização do Projeto NPM:
    ```bash
    npm init -y
    ```

    b) Instalação do TypeScript como dependência:
    ```bash
    npm install -D typescript
    ```

    c) Criação do "tsconfig.json":
    ```bash
    npx tsc --init
    ```

2. Configuração padrão recomendada do tsconfig.json

    ```json
    {
      "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "typeRoots": ["node_modules/@types"],
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "exactOptionalPropertyTypes": true,
        "skipLibCheck": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules"]
    }
    ```

    Após isso deve ser criada a pasta src e o arquivo "index.ts"

3. Compilando e Executando o Código TypeScript

    a) Compilando o código:
    ```bash
    npx tsc
    ```

    b) Executando o código:
    ```bash
    node ./caminho/para/arquivo.js
    ```

4. Biblioteca ts-node-dev

    Instalando biblioteca:
    a) 
    ```bash
    npm install -D ts-node-dev
    ```
    b) 
    ```json
    "dev": "tsnd --clear --respawn --rs src/index.ts"
    ```
