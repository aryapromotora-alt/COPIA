# ARYA PROMOTORA - Clone do Site

Cópia fiel do site [aryapromotora.com.br](https://aryapromotora.com.br) construída com React 19, Tailwind CSS 4 e TypeScript.

## 🎯 Características

- **Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **Navegação Suave**: Scroll automático entre seções
- **Simulador de Crédito**: Formulário interativo com integração WhatsApp
- **Depoimentos**: Seção com clientes satisfeitos
- **Botão WhatsApp Flutuante**: Contato direto com especialistas
- **Performance Otimizada**: Construído com Vite para build rápido

## 📋 Seções do Site

1. **Header/Navbar** - Navegação responsiva com logo ARYA
2. **Hero Section** - Título principal com call-to-action
3. **Empresa** - Informações sobre a ARYA PROMOTORA
4. **Serviços** - 6 soluções financeiras em cards
5. **Depoimentos** - 3 clientes com avaliações
6. **Simulador** - Formulário de simulação de empréstimo
7. **Footer** - Contato, endereço e redes sociais

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Testar build localmente
pnpm preview
```

## 🌐 Deploy no Render.com

### Passo 1: Fazer Push para GitHub

```bash
git init
git add .
git commit -m "Initial commit: ARYA PROMOTORA clone"
git branch -M main
git remote add origin https://github.com/seu-usuario/arya-promotora-clone.git
git push -u origin main
```

### Passo 2: Conectar ao Render

1. Acesse [render.com](https://render.com)
2. Clique em "New +" e selecione "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: arya-promotora-clone
   - **Environment**: Node
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
5. Clique em "Create Web Service"

### Passo 3: Configurar Variáveis de Ambiente

No painel do Render, adicione as variáveis necessárias em "Environment":

```
NODE_ENV=production
```

## 📁 Estrutura do Projeto

```
arya-promotora-clone/
├── client/
│   ├── public/          # Arquivos estáticos
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas (Home, NotFound)
│   │   ├── App.tsx      # Componente raiz
│   │   ├── index.css    # Estilos globais
│   │   └── main.tsx     # Entrada React
│   └── index.html       # HTML principal
├── server/              # Servidor Express (produção)
├── package.json         # Dependências
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Cores

Edite `client/src/index.css` para alterar as cores:

```css
:root {
  --primary: #FFC107;           /* Amarelo/Ouro */
  --background: #1a2332;        /* Dark Navy */
  --foreground: #FFFFFF;        /* Branco */
  /* ... outras cores */
}
```

### Conteúdo

Edite `client/src/pages/Home.tsx` para alterar:
- Textos e descrições
- Números de telefone e emails
- Links de redes sociais
- Informações de contato

### Imagens

As imagens estão armazenadas em `/manus-storage/`. Para usar suas próprias imagens:

1. Substitua as URLs em `Home.tsx`
2. Mantenha os mesmos nomes de variáveis

## 📞 Contato

- **Telefone**: (11) 2783-2053
- **Email**: eduardomurtada@gmail.com
- **Endereço**: Rua Quixabeira, 237 - São Paulo, SP - CEP: 03574-080
- **WhatsApp**: [Link direto](https://wa.me/5511976924871)

## 📄 Licença

Este projeto é uma cópia fiel do site original para fins de demonstração e aprendizado.

## 🔗 Links Úteis

- [Site Original](https://aryapromotora.com.br)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Render Docs](https://render.com/docs)

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
