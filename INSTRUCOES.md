# Landing Page "Dr. Gabriel Maia"

Uma landing page médica premium desenvolvida em Next.js com design moderno e responsivo.

## 🎨 Identidade Visual Médica Premium

### Paleta de Cores
- **Verde Médico (#04442A)**: Cor principal, transmite confiança e saúde
- **Dourado (#B49E4A)**: Cor de destaque, representa excelência e resultados
- **Verde Claro (#f0fdf4, #dcfce7)**: Fundos suaves e elementos secundários
- **Branco (#FFFFFF)**: Base limpa e profissional

### Tipografia
- **Montserrat**: Fonte principal (sans-serif moderna)
- **Peso 400 (Regular)**: Títulos principais ("DR. GABRIEL MAIA")
- **Peso 200 (Extra Light)**: Subtítulos e textos descritivos
- Carregamento otimizado: apenas os pesos 200 e 400

## 🖼️ Como Substituir Imagens

### Imagem Principal (Hero)
Substitua `/public/placeholder-hero.svg` por sua foto profissional:
- **Formato recomendado**: JPG ou PNG
- **Dimensões**: 400x400px (quadrada)
- **Estilo**: Bordas arredondadas (não circular), como na referência
- **Qualidade**: Alta resolução para retina displays

### Imagens dos Cards
Substitua as imagens dos cursos/produtos:
1. `/public/placeholder-course1.svg` → Imagem do primeiro produto
2. `/public/placeholder-course2.svg` → Imagem do segundo produto
3. `/public/placeholder-course3.svg` → Imagem do terceiro produto
4. `/public/placeholder-course4.svg` → Imagem do quarto produto

**Especificações das imagens dos cards:**
- **Formato**: JPG ou PNG
- **Dimensões**: 600x300px (proporção 2:1)
- **Qualidade**: Alta resolução
- **Responsividade**: O card mantém automaticamente a proporção 2:1 em todas as telas
- **IMPORTANTE**: Os títulos e subtítulos devem estar INCLUSOS na própria arte da imagem, pois não há texto sobreposto no código

## ✏️ Como Personalizar Textos

### Arquivo Principal: `src/app/page.tsx`

#### 1. Título Principal (Hero)
```jsx
<span className="text-amber-500">DR. GABRIEL</span><br />
<span className="text-green-700">MAIA</span>
```
Altere "DR. GABRIEL" e "MAIA" para seu nome/marca.

#### 2. Subtítulo
```jsx
Medicina de Resultado que transforma vidas e gera resultados excepcionais
```

#### 3. Cards dos Serviços Médicos
Para cada card, altere:
- **Imagem**: Substitua as imagens placeholder pelas suas artes personalizadas (600x300px)
- **NOTA**: A imagem ocupa TODO o espaço do card - títulos, descrições e CTAs devem estar inclusos na própria arte
- **Links**: Configure links clicáveis adicionando tags `<a>` ao redor de cada card se necessário

#### 4. Footer
- Nome da empresa/marca
- Redes sociais (adicione URLs reais)
- Ano de copyright

### Arquivo de Metadados: `src/app/layout.tsx`

Altere os metadados SEO:
```jsx
export const metadata: Metadata = {
  title: "Dr. Gabriel Maia - Medicina de Resultado",
  description: "Medicina integrativa e personalizada para longevidade saudável...",
  // ... outros campos
};
```

## 🎯 Por Que Esta Identidade Visual Funciona

### 1. **Verde Médico como Base**
- Transmite confiança e segurança na área da saúde
- Cria associação direta com bem-estar e natureza
- Profissional e calmante para pacientes

### 2. **Dourado como Destaque**
- Representa excelência e resultados superiores
- Chama atenção para serviços principais
- Cria sensação de "tratamento premium"

### 3. **Tipografia Montserrat**
- Moderna e limpa, sem distrair do conteúdo
- Boa legibilidade em todos os dispositivos
- Múltiplos pesos para hierarquia visual clara

### 4. **Layout e Espaçamentos**
- Muito espaço em branco (respiração visual)
- Cards grandes que valorizam cada produto
- Animações sutis que não distraem

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 📱 Recursos Incluídos

- ✅ **Totalmente Responsivo** (Mobile-first)
- ✅ **Animações Suaves** (Hover effects)
- ✅ **SEO Otimizado** (Meta tags, OpenGraph)
- ✅ **Performance Otimizada** (Next.js Image, fonts)
- ✅ **Acessibilidade** (ARIA labels, contraste)
- ✅ **Background Pattern** Personalizado
- ✅ **Social Media Ready** (Cards otimizados)

## 🎨 Personalizações Avançadas

### Alterar Padrão de Fundo
No arquivo `src/app/page.tsx`, linha ~18:
```jsx
backgroundImage: `url("data:image/svg+xml,...")`
```
Substitua "G" pela inicial do seu nome/marca.

### Modificar Animações
Ajuste as classes Tailwind CSS:
- `hover:-translate-y-2`: Movimento vertical no hover
- `transition-all duration-500`: Velocidade das transições
- `group-hover:scale-105`: Escala das imagens no hover

### Cores Personalizadas
As cores principais estão definidas com style inline para usar exatamente:
- `#04442A` → Verde principal (títulos, bordas, ícones)
- `#B49E4A` → Dourado de destaque (nomes, CTAs)
- `#f0fdf4` → Fundos suaves
- Bordas e elementos hover usam as cores específicas definidas

## 📞 Próximos Passos

1. **Substitua todas as imagens** pelos seus assets reais
2. **Personalize todos os textos** com seu conteúdo
3. **Adicione links reais** nos botões de CTA
4. **Configure analytics** (Google Analytics, Facebook Pixel)
5. **Teste em diferentes dispositivos** antes do deploy
6. **Configure domínio personalizado** para lançamento

---

**Desenvolvido para gerar confiança e transmitir excelência médica** 🌱✨