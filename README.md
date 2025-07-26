# 🎲 AluGames

Uma plataforma web moderna para gerenciamento de aluguel de jogos de tabuleiro (boardgames) com interface elegante e funcionalidades intuitivas.

## 📋 Sobre o Projeto

O **AluGames** é uma aplicação web que simula um sistema de aluguel de jogos de tabuleiro. Com design futurista e interações fluidas, permite aos usuários visualizar o catálogo disponível e gerenciar o status de aluguel dos jogos de forma prática e visual.

## ✨ Funcionalidades

- 🎮 **Catálogo de jogos**: Visualização de boardgames disponíveis
- 🔄 **Sistema de aluguel**: Alternância entre "Alugar" e "Devolver"
- 👁️ **Feedback visual**: Jogos alugados ficam com overlay escuro
- ✅ **Confirmações**: Diálogos de confirmação para todas as ações
- 📊 **Contador automático**: Rastreamento de jogos alugados no console
- 🎨 **Animações**: Transições suaves e efeitos visuais modernos

## 🖥️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica com elementos acessíveis
- **CSS3**: Estilização avançada com:
  - Gradientes complexos para background
  - Flexbox para layouts responsivos
  - Box-shadow e efeitos de blur
  - Design responsivo com media queries
  - Variáveis CSS para cores consistentes
- **JavaScript**: Lógica interativa com:
  - Manipulação dinâmica de classes CSS
  - Sistema de confirmação de ações
  - Contador de jogos alugados
  - Gerenciamento de estado visual

## 🎨 Design

A interface apresenta um design futurista e moderno:
- **Tema escuro** com gradiente dinâmico de fundo
- **Paleta de cores**:
  - Azul principal: `#505EFF` e `#1875E8`
  - Verde neon: `#00F4BF`
  - Tons escuros: `#01080E`
- **Tipografia** personalizada:
  - Chakra Petch para títulos (peso 700)
  - Inter para textos (pesos 600 e 700)
- **Elementos visuais**: Linhas divisórias, hachuras decorativas e logo

## 🚀 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone [url-do-repositorio]
   cd alugames
   ```

2. **Estrutura necessária**:
   Certifique-se de que tenha as pastas:
   ```
   css/
   js/
   img/
   ```

3. **Abra a aplicação**:
   - Abra o arquivo `index.html` em qualquer navegador moderno

4. **Interaja com os jogos**:
   - Clique em "Alugar" para alugar um jogo
   - Clique em "Devolver" para devolver um jogo alugado
   - Confirme suas ações nos diálogos que aparecem
   - Veja o contador de jogos alugados no console do navegador

## 📁 Estrutura do Projeto

```
alugames/
├── index.html              # Página principal
├── css/
│   ├── main.css           # Estilos principais
│   └── _reset.css         # Reset CSS customizado
├── js/
│   └── app.js             # Lógica JavaScript
├── img/
│   ├── logo.svg           # Logo da aplicação
│   ├── fade_bar.svg       # Barra decorativa
│   ├── hachuras.svg       # Elemento visual
│   ├── monopoly.png       # Capa do jogo Monopoly
│   ├── ticket_to_ride.png # Capa do jogo Ticket to Ride
│   └── takenoko.png       # Capa do jogo Takenoko
└── README.md              # Documentação
```

## 🎮 Jogos Disponíveis

O catálogo atual inclui:

1. **Monopoly** - O clássico jogo de propriedades
2. **Ticket to Ride** - Aventura ferroviária estratégica  
3. **Takenoko** - Jogo sobre pandas e bambu (inicialmente alugado)

## 🔧 Funcionalidades Técnicas

### Sistema de Estados
- **Disponível**: Jogo pronto para aluguel
- **Alugado**: Jogo com overlay visual e botão "Devolver"

### Gerenciamento Visual
```javascript
// Alteração de estado visual
imagem.classList.toggle('dashboard__item__img--rented');
botao.classList.toggle('dashboard__item__button--return');
```

### Contador Automático
```javascript
function contarJogosAlugados() {
    return document.querySelectorAll('.dashboard__item__img--rented').length;
}
```

### Confirmações UX
- Diálogos de confirmação para alugar
- Diálogos de confirmação para devolver
- Mensagens de sucesso após ações

## 🌟 Características Especiais

- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Performance Otimizada**: CSS e JavaScript eficientes
- **Acessibilidade**: Elementos semânticos e navegação intuitiva
- **Experiência Visual**: Gradientes, sombras e efeitos modernos
- **Feedback Imediato**: Confirmações e alertas informativos

## 📱 Responsividade

O projeto inclui breakpoints para diferentes dispositivos:
- **Desktop**: Layout otimizado para telas grandes (1440px+)
- **Mobile**: Adaptação automática para dispositivos móveis
- **Padding dinâmico**: Ajusta-se automaticamente ao tamanho da tela

## 🛠️ Customização

Para adicionar novos jogos:

1. **HTML**: Adicione novo `<li>` com estrutura similar
2. **JavaScript**: Inclua novo ID no sistema
3. **Imagens**: Adicione capa do jogo na pasta `img/`

Exemplo:
```html
<li class="dashboard__items__item" id="game-4">
    <div class="dashboard__item__img">
        <img src="img/novo-jogo.png" alt="Capa do novo jogo">
    </div>
    <p class="dashboard__item__name">Nome do Jogo</p>
    <a onclick="alterarStatus('game-4')" href="#" class="dashboard__item__button">Alugar</a>
</li>
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovoJogo`)
3. Commit suas mudanças (`git commit -m 'Add: Novo jogo adicionado'`)
4. Push para a branch (`git push origin feature/NovoJogo`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Matheus Kawai

---

**Divirta-se gerenciando seu catálogo de jogos! 🎯**
