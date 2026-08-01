# Desapego da Mudança

Mini e-commerce mobile first para divulgar móveis e itens à venda, sem checkout.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## O que editar

### 1. Número do WhatsApp

Em `components/Storefront.tsx`, troque:

```ts
const WHATSAPP_NUMBER = "5579999999999";
```

Use DDI + DDD + número, somente dígitos.

### 2. Produtos

Edite `data/products.ts`.

Cada produto suporta:
- nome
- preço
- categoria
- descrição
- dimensões opcionais
- múltiplas fotos

### 3. Fotos

Nesta versão de exemplo usei imagens externas para demonstrar a interface. Para usar fotos reais, coloque-as em `public/products/...` e use caminhos como:

```ts
images: [
  "/products/sofa/01.jpg",
  "/products/sofa/02.jpg"
]
```

## Funcionalidades

- mobile first
- grade responsiva
- filtros por categoria
- foto principal + miniaturas
- clique para ampliar
- descrição e dimensões
- botão Comprar com modal
- CTA para WhatsApp com mensagem automática
- botão flutuante de WhatsApp no mobile
- compartilhamento nativo do item
