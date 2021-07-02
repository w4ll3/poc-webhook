# celo-verifier
This project is intended to verify credentials issued by an attestation service.

It exposes one end-point `/api/validate` which requires the following body:
```json
{
    "credential": "stringified credential"
}
```

There is an interface to verify a credential that can be found at `http://localhost:${PORT}`,
by default `PORT=6547`

# Running
```bash
yarn
yarn run dev
```