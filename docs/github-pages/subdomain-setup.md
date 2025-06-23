# Configuração de Subdomínio para GitHub Pages

## Subdomínio Configurado

**URL**: `kwanza-agent.tiagopinto.io`

## Configuração DNS Necessária

Para que o subdomínio funcione, você precisa configurar o DNS do domínio `tiagopinto.io`:

### Registro CNAME

```
Tipo: CNAME
Nome: kwanza-agent
Valor: tiagonpsilva.github.io
TTL: 300 (ou padrão)
```

### Onde Configurar

Acesse o painel de controle do seu provedor DNS (onde você registrou `tiagopinto.io`) e adicione:

- **Cloudflare**: DNS > Records > Add record
- **GoDaddy**: DNS Management > Records > Add
- **Namecheap**: Domain Dashboard > Advanced DNS

## Verificação

Após configurar o DNS, você pode verificar com:

```bash
# Verificar se o CNAME está propagado
nslookup kwanza-agent.tiagopinto.io

# Ou usar dig
dig kwanza-agent.tiagopinto.io CNAME
```

## URLs Finais

Após propagação DNS (5-60 minutos):

- **Frontend**: https://kwanza-agent.tiagopinto.io/
- **Storybook**: https://kwanza-agent.tiagopinto.io/storybook/
- **Navigation**: https://kwanza-agent.tiagopinto.io/nav.html

## Configuração GitHub Pages

1. Vá para [Repository Settings > Pages](https://github.com/tiagonpsilva/kwanza-agent/settings/pages)
2. Em "Custom domain", adicione: `kwanza-agent.tiagopinto.io`
3. Marque "Enforce HTTPS" (após SSL ser gerado)
4. Clique "Save"

## Status

- ✅ Arquivo CNAME criado
- ✅ Workflow atualizado para usar CNAME
- ✅ Vite configurado para domínio root
- ⏳ Aguardando configuração DNS
- ⏳ Aguardando propagação DNS
- ⏳ Aguardando certificado SSL do GitHub

## Próximos Passos

1. **Você**: Configurar DNS CNAME
2. **GitHub**: Gerar certificado SSL automaticamente
3. **Resultado**: Site acessível em https://kwanza-agent.tiagopinto.io