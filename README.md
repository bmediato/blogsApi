## Bem-Vindo(a) ao repositório do projeto BlogsApi!


Neste projeto foi criada uma API e um banco de dados para a produção de conteúdo para um blog.
<br/>
Tecnologias utilizadas:
- JavaScript;
- nodeJs;
- Express;
- MySQL;
- Sequelize.

<details>
<summary><strong>🐋 Instalação do projeto Rodando no Docker</strong></summary><br />

1. Primeiro abra o terminal e crie um diretório com o comando <strong>mkdir</strong>:
``` 
 mkdir projetos
```

2. Entre no diretório que acabou de criar e clone o projeto:
``` 
 cd projetos
 git clone git@github.com:bmediato/blogsApi.git
```

3. Entre no diretório do projeto e rode o serviço `node` com o comando:
``` 
 cd blogsApi
 docker-compose up -d
```

4. Use os comandos para acessar o terminal e instalar as dependências:
``` 
 docker exec -it blogs_api bash
 npm install
```
</details>

<details>
<summary><strong>🛠 Instalação do projeto localmente </strong></summary><br />

1. Primeiro abra o terminal e crie um diretório com o comando <strong>mkdir</strong>:
``` 
 mkdir projetos
```

2. Entre no diretório que acabou de criar e clone o projeto:
``` 
 cd projetos
 git clone git@github.com:bmediato/blogsApi.git
```

3. Entre no diretório do projeto e instale as depenências necessárias: 
``` 
 cd blogsApi
 npm install
```

</details>


# BlogsAPI

A BlogsAPI é uma API desenvolvida para a produção de conteúdo de um blog. Ela permite a criação, edição e exclusão de posts, gerenciamento de autores e categorias, e é integrada a um banco de dados para armazenar todas as informações do blog.

## Funcionalidades Principais

- Criação de posts: A API permite que os autores criem novos posts para o blog, com informações como título, conteúdo e categoria.
- Edição de posts: Os autores podem editar os posts existentes, modificando o título, o conteúdo ou a categoria.
- Exclusão de posts: Os autores têm a opção de excluir posts que não são mais necessários.
- Gerenciamento de autores: A API inclui recursos para gerenciar autores, permitindo a criação de novos autores e a atualização de suas informações.
- Gerenciamento de categorias: Os posts podem ser categorizados, e a API permite a criação, edição e exclusão de categorias.

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Express
- MySQL
- Docker
- Sequelize (ORM para banco de dados)

## Configuração do Ambiente de Desenvolvimento

1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Navegue até o diretório do projeto: `cd seu-repositorio`
3. Instale as dependências: `npm install`
4. Configure o banco de dados MySQL:
   - Crie um banco de dados no MySQL.
   - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente relacionadas ao banco de dados.
5. Execute as migrações do banco de dados: `npx sequelize db:migrate`
6. Inicie a API: `npm start`

Certifique-se de fornecer instruções detalhadas sobre como configurar e executar o projeto em um ambiente de desenvolvimento.

## Executando com Docker

1. Certifique-se de ter o Docker instalado e em execução no seu sistema.
2. Clone este repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
3. Navegue até o diretório do projeto: `cd seu-repositorio`
4. Execute o Docker Compose para construir e iniciar a aplicação e o banco de dados: `docker-compose up`

Certifique-se de adaptar os comandos para o seu projeto e ambiente específicos.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie um branch com sua nova funcionalidade ou correção de bug: `git checkout -b minha-funcionalidade`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Faça push para o branch: `git push origin minha-funcionalidade`.
5. Envie um pull request.

## Licença

[Inclua a licença do projeto, por exemplo, MIT]

## Contato

Se tiver alguma dúvida ou sugestão sobre o projeto, entre em contato com <a href = "mailto:beatriz.mediatto2@gmail.com">beatriz.mediatto2@gmail.com</a>


