# Patricia Leonardo Beauty & Academy

Site demonstrativo desenvolvido com React, TypeScript e Vite. Esta versão não utiliza banco de dados: os botões de contato abrem o WhatsApp.

## Como executar no VS Code

1. Extraia o ZIP em uma pasta.
2. Abra a pasta `patricia-beauty` no VS Code.
3. Abra **Terminal → Novo Terminal**.
4. Execute:

   ```bash
   npm install
   npm run dev
   ```

5. Abra o endereço local que o Vite mostrar no terminal (normalmente `http://localhost:5173`).

## Imagens e identidade visual

As fotografias enviadas foram incluídas em `public/images/` e usadas nas áreas de apresentação, procedimentos e galeria. O layout adapta imagens, tipografia, espaçamentos, menu e botões para celular, tablet e computador.

A seção Academy destaca especificamente o **Curso de Design de Sobrancelhas**, além de apresentar a atuação da Patricia como profissional e educadora.

## Antes de apresentar/publicar

### 1. Configurar o WhatsApp
Abra `src/config.ts` e substitua `5511999999999` pelo número correto, com código do país e DDD, somente números. Exemplo: `5513988887777`.

### 2. Revisar o conteúdo
O site usa o texto institucional disponível no site atual e textos demonstrativos para alguns procedimentos/cursos. Confirme com Patricia os serviços exatos, cursos oferecidos, localização, horários e links oficiais antes de publicar.

### 3. Revisar as fotografias
As imagens do material enviado já estão incluídas localmente em `public/images/`, então não dependem de links externos. Caso Patricia queira trocar alguma foto, coloque a nova imagem nessa pasta e atualize o caminho correspondente em `src/App.tsx`.

### 4. Criar repositório e publicar
Depois de aprovado, o projeto pode ser enviado ao GitHub e publicado em um serviço como Vercel. Não publique como versão final antes de confirmar contatos, informações comerciais e autorização para uso das fotografias.

## Estrutura
- `src/App.tsx`: seções e conteúdo da página.
- `src/index.css`: identidade visual e responsividade.
- `src/config.ts`: dados fáceis de configurar, como WhatsApp.
- `public/images/`: local para as imagens definitivas.

## Observação
O formulário de contato não armazena dados: ele monta uma mensagem e encaminha para o WhatsApp. O site ainda não tem agendamento automático, painel administrativo ou banco de dados.
