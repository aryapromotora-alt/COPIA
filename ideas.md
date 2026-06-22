# Design Strategy - Arya Promotora Clone

## Reference Site Analysis
**Ground-truth spec:** Fidelidade máxima ao site original aryapromotora.com.br

### Visual Identity
- **Color Scheme:** Dark navy background (#1a2332 aprox), accent amarelo/ouro (#FFC107 aprox), texto branco
- **Typography:** Inter font family (300, 400, 500, 600, 700, 800)
- **Layout:** Hero com imagem à direita, conteúdo à esquerda; seções stacked verticalmente
- **Key Elements:**
  - Logo ARYA com fundo transparente (PNG)
  - Hero image: casal feliz em ambiente natural
  - Ícones de serviços (6 cards)
  - Depoimentos de clientes
  - Simulador de empréstimo com formulário
  - Footer com contato e redes sociais
  - Botão WhatsApp flutuante (verde)

### Design Philosophy
**Tema:** Professional Financial Services com toque moderno
- Confiança através de design limpo e profissional
- Acessibilidade e clareza na hierarquia de informações
- Call-to-action forte (botões amarelos)
- Integração WhatsApp como canal principal de contato

### Color Palette
| Cor | Valor | Uso |
|-----|-------|-----|
| Dark Navy | #1a2332 | Background principal |
| Branco | #FFFFFF | Texto principal |
| Amarelo/Ouro | #FFC107 | Botões CTA, destaques |
| Verde WhatsApp | #25D366 | Botão flutuante |
| Cinza Claro | #f5f5f5 | Backgrounds secundários |

### Typography System
- **Display:** Inter 700-800 (títulos principais)
- **Heading:** Inter 600-700 (subtítulos)
- **Body:** Inter 400-500 (conteúdo)
- **Small:** Inter 300-400 (labels, rodapé)

### Signature Elements
1. **Botão amarelo com hover effect** - CTA principal
2. **Imagens com border-radius suave** - Hero e depoimentos
3. **Cards de serviços com ícones** - Grid 2x3 ou responsivo
4. **Formulário limpo com select dropdown** - Simulador
5. **Ícone WhatsApp flutuante** - Contato direto

### Layout Paradigm
- **Hero Section:** Flex com imagem à direita (desktop), stacked (mobile)
- **Serviços:** Grid responsivo (1 col mobile, 2 col tablet, 3 col desktop)
- **Depoimentos:** Carousel ou grid simples
- **Simulador:** Full-width form com imagem de fundo
- **Footer:** Multi-coluna com contato, endereço, redes sociais

### Interaction Philosophy
- Smooth scroll entre seções (anchor links)
- Hover effects em botões e cards
- Form validation no simulador
- WhatsApp link com número pré-preenchido
- Responsive design mobile-first

### Animation Guidelines
- Transições suaves (200-300ms) em hover
- Fade-in ao scroll (opcional, subtle)
- Button scale effect ao clicar
- Nenhuma animação pesada - foco em performance

### Brand Essence
**Positioning:** Correspondente bancária que oferece soluções financeiras acessíveis com aprovação simplificada para aposentados, pensionistas e servidores públicos.

**Personality:** Confiável, Acessível, Profissional

**Brand Voice:**
- Headlines: Diretas, focadas em benefício ("SOLUÇÕES FINANCEIRAS COMPLETAS")
- CTAs: Ação clara ("SIMULE AGORA", "FALE COM O ESPECIALISTA")
- Microcopy: Explicativo e reassegurador ("Busca uma solução financeira com taxas competitivas?")

### Logo & Branding
- **Logo:** ARYA PROMOTORA com ícone (verde/amarelo)
- **Favicon:** Logo reduzido
- **Wordmark:** "ARYA PROMOTORA" em Inter bold

---

## Implementation Checklist
- [ ] Extrair todas as imagens do site original
- [ ] Replicar estrutura HTML/CSS com Tailwind
- [ ] Implementar navegação com scroll suave
- [ ] Criar componentes de cards de serviços
- [ ] Implementar formulário do simulador
- [ ] Integração WhatsApp (links)
- [ ] Footer com informações de contato
- [ ] Responsividade mobile/tablet/desktop
- [ ] Testes de performance
- [ ] Preparar para deploy no Render
