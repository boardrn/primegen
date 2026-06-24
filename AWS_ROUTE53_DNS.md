# AWS Route 53 DNS for GitHub Pages

Assuming the domain is:

```txt
primegen.ca
```

## In GitHub first

Go to:

`Repository → Settings → Pages → Custom domain`

Set:

```txt
primegen.ca
```

Save it before pointing DNS.

## In AWS Route 53 Hosted Zone

Create these records for the apex/root domain:

```txt
Type: A
Name: primegen.ca
Value:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
TTL: 300
```

Optional IPv6 records:

```txt
Type: AAAA
Name: primegen.ca
Value:
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
TTL: 300
```

Create this record for www:

```txt
Type: CNAME
Name: www.primegen.ca
Value: YOUR_GITHUB_USERNAME.github.io
TTL: 300
```

Replace `YOUR_GITHUB_USERNAME` with the account or organization that owns the repo.

## Final GitHub step

After DNS verifies, go back to:

`Repository → Settings → Pages`

Enable:

```txt
Enforce HTTPS
```
